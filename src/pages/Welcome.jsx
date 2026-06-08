import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

// Welcome Page - First page user sees when they open the app
// Matches the design: title at bottom, two buttons stacked vertically

function Welcome() {
  // useNavigate hook lets us programmatically navigate to another route
  const navigate = useNavigate()

  return (
    // Outer wrapper: full screen, centered, gray background (desktop look)
    <div className="min-h-screen flex justify-center bg-gray-100">

      {/* Inner container: mobile-width card, white background */}
      <div className="w-full max-w-sm bg-white min-h-screen flex flex-col justify-end pb-10 px-6">

        {/* Welcome text block - positioned near bottom like the design */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to PopX
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>

        {/* Buttons stacked vertically */}
        <div className="flex flex-col gap-3">
          {/* Primary button - goes to Signup page */}
          <Button
            text="Create Account"
            onClick={() => navigate('/signup')}
            variant="primary"
          />

          {/* Secondary button - goes to Login page */}
          <Button
            text="Already Registered? Login"
            onClick={() => navigate('/login')}
            variant="secondary"
          />
        </div>

      </div>
    </div>
  )
}

export default Welcome
