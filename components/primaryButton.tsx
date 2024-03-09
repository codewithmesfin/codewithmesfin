
import React from 'react'

export default function PrimaryButton({ title, isDarkMode }: any) {
  return (
    <button
      className={`${isDarkMode ? 'bg-white text-gray-800' : 'text-white bg-[#fa5d00] border border-[#fa5d00]'} rounded-xl px-6 md:px-7 py-3`}>
      {title}
    </button>
  )
}
