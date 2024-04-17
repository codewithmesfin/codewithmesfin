import { useTheme } from '@/context/themeContext';
import Link from 'next/link'
import React from 'react'

export default function PublicFooter() {
  const { isDarkMode } = useTheme();
  const links = [

  { title: "About me", href: "/me" },
  { title: "Experiences", href: "/experiences" },
  { title: "Certifications", href: "/certifications" },
  { title: "Articles", href: "https://codewithmesfin.medium.com", target: true },
  ]

  return (


    <div className={`${isDarkMode ? 'bg-gray-600 border-gray-700' : 'bg-white'} border-t `}>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className={`text-sm sm:text-center ${isDarkMode?'text-gray-200':'text-gray-500'}`}>© 2023
         <Link href="/" className="hover:underline pl-2">- Code with Mesfin™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-00 sm:mt-0">
        {
            links.map((x:any,i:number)=><li key={i}>
              <Link href={x.href}
                target={x.target ? '_blank' : "_self"}
              className={`hover:underline me-4 md:me-6 ${isDarkMode?'text-gray-200':'text-gray-500'}`}
              >
              {x.title}
              </Link>
            </li>)
          }
        </ul>
      </div>
    </div>

  )
}
