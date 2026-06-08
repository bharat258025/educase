import React from 'react'
import { Navigate } from 'react-router-dom'

// ProtectedRoute is a wrapper component
// It checks if the user is authenticated before showing the page
// If not authenticated, it redirects to the Login page

// Interview Tip: This is called a "Guard Component" pattern in React
// The 'children' prop contains whatever is wrapped inside <ProtectedRoute>...</ProtectedRoute>

function ProtectedRoute({ children }) {
  // Check localStorage for authentication status
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  // If user is NOT logged in, redirect them to /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // If user IS logged in, show the protected page (children)
  return children
}

export default ProtectedRoute
