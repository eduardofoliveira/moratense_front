import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { AuthContext } from '../contexts/AuthContext'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'
import { Ranking } from '../pages/Ranking'
import { Consumo } from '../pages/Consumo'

export const AppRoutes = () => {
  const { isLogged } = useContext(AuthContext)

  if (!isLogged) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/consumo" element={<Consumo />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
