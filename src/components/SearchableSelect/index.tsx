import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Option } from './types'

interface SearchableSelectProps {
  options: Option[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  itemsPerPage?: number
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
)

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.296a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 011.06-1.06L9 12.19l6.97-6.97a.75.75 0 011.06 0z"
      clipRule="evenodd"
    />
  </svg>
)

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select options...',
  itemsPerPage: itemsPerPageProp = 6,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const selectRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const itemsPerPage = itemsPerPageProp

  const filteredOptions = useMemo(() => {
    if (!searchTerm) {
      return options
    }
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [options, searchTerm])

  const totalPages = useMemo(() => {
    return Math.ceil(filteredOptions.length / itemsPerPage)
  }, [filteredOptions.length, itemsPerPage])

  const currentOptions = useMemo(() => {
    const start = currentPage * itemsPerPage
    const end = start + itemsPerPage
    return filteredOptions.slice(start, end)
  }, [filteredOptions, currentPage, itemsPerPage])

  const selectedOptionDisplayLabel = useMemo(() => {
    if (!value || value.length === 0) {
      return placeholder
    }
    if (value.length === 1) {
      const selectedOpt = options.find((opt) => opt.value === value[0])
      return selectedOpt ? selectedOpt.label : placeholder
    }
    return `${value.length} items selected`
  }, [value, options, placeholder])

  const handleSelectOption = useCallback(
    (optionValue: string) => {
      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue]
      onChange(newValue)
    },
    [value, onChange],
  )

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value)
      setCurrentPage(0)
    },
    [],
  )

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
  }, [totalPages])

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }, [])

  const handleSelectAllVisible = useCallback(() => {
    const allFilteredValues = filteredOptions.map((opt) => opt.value)
    const newSelectedValues = Array.from(
      new Set([...value, ...allFilteredValues]),
    )
    onChange(newSelectedValues)
  }, [filteredOptions, onChange, value])

  const handleDeselectAll = useCallback(() => {
    onChange([])
  }, [onChange])

  const allFilteredSelected = useMemo(() => {
    if (filteredOptions.length === 0) return false // No options to be selected
    return filteredOptions.every((opt) => value.includes(opt.value))
  }, [filteredOptions, value])

  const noOptionsSelected = useMemo(() => {
    return value.length === 0
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 100) // Focus after a short delay
      return () => clearTimeout(timer)
    }
    // Reset current page when dropdown is closed, but not search term
    setCurrentPage(0)
  }, [isOpen])

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        onClick={toggleOpen}
        className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={`block truncate ${value && value.length > 0 ? 'text-gray-900' : 'text-gray-500'}`}
        >
          {selectedOptionDisplayLabel}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-2">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {filteredOptions.length > 0 && (
            <div className="flex justify-between px-2 pb-1 pt-1 border-b border-gray-200">
              <button
                type="button"
                onClick={handleSelectAllVisible}
                disabled={allFilteredSelected}
                className="px-2 py-1 text-xs text-blue-600 rounded-md hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              >
                Select All Visible
              </button>
              <button
                type="button"
                onClick={handleDeselectAll}
                disabled={noOptionsSelected}
                className="px-2 py-1 text-xs text-red-600 rounded-md hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              >
                Deselect All
              </button>
            </div>
          )}

          {filteredOptions.length === 0 && searchTerm && (
            <p className="px-4 py-2 text-sm text-gray-500">No results found.</p>
          )}

          {filteredOptions.length > 0 && (
            <ul
              className="py-1 overflow-auto text-base max-h-52 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" // Reduced max-h slightly for buttons
              // role="listbox"
              aria-multiselectable="true"
            >
              {currentOptions.map((option) => {
                const isSelected = value.includes(option.value)
                return (
                  // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                  <li
                    key={option.value}
                    onClick={() => handleSelectOption(option.value)}
                    className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer ${
                      isSelected
                        ? 'bg-blue-500 text-white font-semibold'
                        : 'text-gray-900 hover:bg-blue-500 hover:text-white'
                    }`}
                    // role="option"
                    aria-selected={isSelected}
                  >
                    <span>{option.label}</span>
                    {isSelected && <CheckIcon className="w-5 h-5 text-white" />}
                  </li>
                )
              })}
            </ul>
          )}
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-2 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                type="button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchableSelect
