import React from 'react'

// Reusable InputField component
// Props:
//   - label: the floating label text (e.g., "Full Name*")
//   - type: input type ("text", "email", "password")
//   - value: controlled value from parent state
//   - onChange: function to update parent state
//   - placeholder: placeholder text inside input
//   - error: error message string (shown in red below input)

// Interview Tip: Reusable components reduce code duplication
// The 'error' prop controls whether to show a red error message

function InputField({ label, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div className="mb-4">
      {/* Floating label above input */}
      <div className="relative border border-gray-300 rounded px-3 pt-3 pb-2 bg-white">
        <label className="absolute top-1 left-3 text-xs text-purple-600 font-medium">
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full text-sm text-gray-800 outline-none bg-transparent mt-1 placeholder-gray-400"
        />
      </div>

      {/* Show error message only if 'error' prop has a value */}
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>
      )}
    </div>
  )
}

export default InputField
