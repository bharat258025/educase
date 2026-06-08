import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Account Settings Page - Shows logged-in user's profile information
// Data is fetched from localStorage where it was saved during signup

function Account() {
  const navigate = useNavigate()

  // State to hold user data fetched from localStorage
  const [user, setUser] = useState(null)

  // useEffect runs once when the component mounts (loads for the first time)
  // Interview Tip: Empty dependency array [] means "run only on first render"
  useEffect(() => {
    // Get saved user data from localStorage and parse it to an object
    const savedUser = JSON.parse(localStorage.getItem('educaseUser'))
    if (savedUser) {
      setUser(savedUser)
    }
  }, []) // Empty array = run only once on mount

  // Handle logout
  const handleLogout = () => {
    // Remove authentication flag from localStorage
    localStorage.removeItem('isAuthenticated')
    // Redirect to Welcome page
    navigate('/')
  }

  // Show loading text while user data is being fetched
  // (very brief, just good practice)
  if (!user) {
    return (
      <div className="min-h-screen flex justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white min-h-screen flex items-center justify-center">
          <p className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white min-h-screen flex flex-col">

        {/* Top white section with heading */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">Account Settings</h1>
        </div>

        {/* Profile section with light background */}
        <div className="bg-gray-50 px-6 py-4 border-b border-dashed border-gray-300">

          {/* Profile row: avatar + name + email */}
          <div className="flex items-center gap-4 mb-4">

            {/* Avatar with camera icon overlay */}
            <div className="relative">
              {/* Profile picture placeholder using first letter of name */}
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden border-2 border-gray-200">
                {/* Show user's initial as avatar since we don't have a real photo */}
                <span className="text-2xl font-bold text-purple-600">
                  {user.fullName.charAt(0).toUpperCase()}
                </span>
              </div>

              {/* Camera icon badge - purely decorative to match design */}
              <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3 h-3"
                >
                  <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4z" />
                  <path d="M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
                </svg>
              </div>
            </div>

            {/* Name and email text */}
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                {user.fullName}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Description paragraph matching the design */}
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Extra user info section */}
        <div className="px-6 py-4 flex-1">
          {user.company && (
            <div className="mb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Company</p>
              <p className="text-sm text-gray-700">{user.company}</p>
            </div>
          )}

          <div className="mb-3">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Phone</p>
            <p className="text-sm text-gray-700">{user.phone}</p>
          </div>

          <div className="mb-3">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Agency</p>
            <p className="text-sm text-gray-700 capitalize">{user.isAgency === 'yes' ? 'Yes' : 'No'}</p>
          </div>
        </div>

        {/* Logout button at bottom */}
        <div className="px-6 pb-8">
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition-colors border border-red-200"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  )
}

export default Account
