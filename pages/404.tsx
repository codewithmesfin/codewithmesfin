import Icon from '@/components/icon';
import { useTheme } from '@/context/themeContext';
import Image from 'next/image'
import React from 'react'

export default function PageNotFound() {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#fff8f1]'} h-screen pt-32 pb-16`}>
        <div className='p-16 w-full md:w-[70%] mx-auto text-center'>
          <div className='flex justify-center'>
            <span className={`${isDarkMode ? 'text-gray-100' : 'text-[#fa5d00]'}`}>
              <Icon path='code' h='8' w='8' radius='2' /></span>
          </div>
          <h1 className='text-4xl py-10 md:text-8xl text-[#fa5d00]'>Coming Soon !</h1>
          <p className={`${isDarkMode?'text-gray-200':'text-gray-600'} text-lg md:text-3xl`}>
            This page is currently under construction. Thank you for your patience as our skilled engineers work diligently to enhance your experience.

          </p>
        </div>
      </section>
    </div>
  )
}
