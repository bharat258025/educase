import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

// Login Page - User enters email and password to sign in
// Credentials are checked against data saved in localStorage during signup

function Login() {
  const navigate = useNavigate()

  // State for email and password fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // State for error messages
  const [errors, setErrors] = useState({})

  // General login error (wrong email/password)
  const [loginError, setLoginError] = useState('')

  // Validate input fields
  const validate = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle login button click
  const handleLogin = () => {
    // Clear previous login error
    setLoginError('')

    // Validate inputs first
    if (!validate()) return

    // Retrieve the registered user from localStorage
    // Interview Tip: JSON.parse converts the JSON string back to an object
    const savedUser = JSON.parse(localStorage.getItem('educaseUser'))

    // Check if user exists and credentials match
    if (!savedUser) {
      setLoginError('No account found. Please sign up first.')
      return
    }

    if (savedUser.email !== email || savedUser.password !== password) {
      setLoginError('Incorrect email or password.')
      return
    }

    // Credentials match — mark user as authenticated
    localStorage.setItem('isAuthenticated', 'true')

    // Navigate to Account Settings page
    navigate('/account')
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white min-h-screen flex flex-col px-6 pt-8 pb-10">

        {/* Page title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Signin to your<br />Educase account
        </h1>
        <p className="text-sm text-gray-500 mb-6 mt-1 leading-relaxed">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        {/* Email input */}
        <InputField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setErrors({ ...errors, email: '' })
            setLoginError('')
          }}
          placeholder="Enter email address"
          error={errors.email}
        />

        {/* Password input */}
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setErrors({ ...errors, password: '' })
            setLoginError('')
          }}
          placeholder="Enter password"
          error={errors.password}
        />

        {/* Show login error if credentials don't match */}
        {loginError && (
          <p className="text-red-500 text-xs mb-3 -mt-2">{loginError}</p>
        )}

        {/* Login button */}
        <Button
          text="Login"
          onClick={handleLogin}
          variant="primary"
          // Disable button if fields are empty (grey look like design)
          disabled={!email || !password}
        />

        {/* Link to signup */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <span
            className="text-purple-600 font-medium cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login
