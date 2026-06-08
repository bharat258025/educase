import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

// Signup Page - User fills in their details to create an account
// On success, data is saved to localStorage and user is redirected to Login

function Signup() {
  const navigate = useNavigate()

  // Form state - one useState object holds all field values
  // Interview Tip: You can use one object for related form data instead of
  // separate useState for each field
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes', // radio button default
  })

  // Errors state - stores validation error messages per field
  const [errors, setErrors] = useState({})

  // Generic change handler for text inputs
  // 'name' is the key in formData object (matches the field name)
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    // Clear that field's error when user starts typing
    setErrors({ ...errors, [field]: '' })
  }

  // Validate form before submission
  // Returns true if valid, false if any errors found
  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Simple regex to check email format: something@something.something
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)

    // If newErrors is empty object, form is valid
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = () => {
    // Run validation first
    if (!validate()) return

    // Save user data to localStorage as a JSON string
    // Interview Tip: localStorage only stores strings, so we use JSON.stringify
    localStorage.setItem('popxUser', JSON.stringify(formData))

    // Navigate to login after successful signup
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white min-h-screen flex flex-col px-6 pt-8 pb-10">

        {/* Page title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Create your<br />PopX account
        </h1>

        {/* Spacer */}
        <div className="mt-6 flex-1">
          {/* Form fields using reusable InputField component */}
          <InputField
            label="Full Name*"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Marry Doe"
            error={errors.fullName}
          />

          <InputField
            label="Phone number*"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+91 99999 99999"
            error={errors.phone}
          />

          <InputField
            label="Email address*"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="example@gmail.com"
            error={errors.email}
          />

          <InputField
            label="Password *"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="Min. 6 characters"
            error={errors.password}
          />

          <InputField
            label="Company name"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Your company"
          />

          {/* Radio buttons - Agency selection */}
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-2">
              Are you an Agency?<span className="text-purple-600">*</span>
            </p>
            <div className="flex gap-6">
              {/* Yes radio */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={(e) => handleChange('isAgency', e.target.value)}
                  className="accent-purple-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>

              {/* No radio */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={(e) => handleChange('isAgency', e.target.value)}
                  className="accent-purple-600 w-4 h-4"
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Submit button at the bottom */}
        <Button
          text="Create Account"
          onClick={handleSubmit}
          variant="primary"
        />

      </div>
    </div>
  )
}

export default Signup
