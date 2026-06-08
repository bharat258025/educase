import React from 'react'

// Reusable Button component
// Props:
//   - text: button label text
//   - onClick: click handler function
//   - variant: "primary" (purple filled) or "secondary" (light gray)
//   - disabled: boolean to disable the button

// Interview Tip: Having a variant prop lets you reuse the same
// component with different visual styles — a common pattern

function Button({ text, onClick, variant = 'primary', disabled = false }) {
  // Define styles for each variant
  const baseStyle = 'w-full py-3 rounded font-semibold text-sm transition-opacity'

  const variantStyle =
    variant === 'primary'
      ? 'bg-purple-600 text-white hover:bg-purple-700'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'

  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${disabledStyle}`}
    >
      {text}
    </button>
  )
}

export default Button
