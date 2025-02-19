import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AppAuthProvider } from './contexts/AuthContext'
import { AppRoutes } from './routes'
// import viteLogo from "/vite.svg";

function App() {
  return (
    <BrowserRouter>
      <AppAuthProvider>
        <AppRoutes />
        <ToastContainer />
      </AppAuthProvider>
    </BrowserRouter>
  )
}

export default App
