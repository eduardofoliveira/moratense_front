import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AppAuthProvider } from './contexts/AuthContext'
import { GlobalContextProvider } from './contexts/GlobalContext'
import { AppRoutes } from './routes'
// import viteLogo from "/vite.svg";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <AppAuthProvider>
          <AppRoutes />
          <ToastContainer />
        </AppAuthProvider>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
