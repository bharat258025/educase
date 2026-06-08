import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import all pages
import Welcome from './pages/Welcome'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Account from './pages/Account'

// Import ProtectedRoute component
import ProtectedRoute from './components/ProtectedRoute'

// App.jsx sets up all the routes for the application
// BrowserRouter enables URL-based navigation
// Routes contains all Route definitions
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes - anyone can access */}
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route - only logged in users can access */}
        {/* ProtectedRoute checks localStorage before rendering Account */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
