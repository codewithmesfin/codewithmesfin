/* eslint-disable @next/next/no-img-element */

import Icon from '@/components/icon';
import { useTheme } from '@/context/themeContext';
import menus from '@/utils/menuItems';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LeftSidebar() {
  const mainNavs = menus

  const { isDarkMode, toggleDarkMode } = useTheme();


  return (
    <section className={`z-50 border-r  hidden md:flex ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} flex-col flex-none overflow-auto w-[300px]  group lg:max-w-sm transition-all duration-300 ease-in-out`}>
      <div className="header p-4 flex flex-row justify-between items-center flex-none">
        <div
          className="w-16 h-16 relative flex items-center flex-shrink-0"
        >
          <Link href="/"
            className='flex items-center space-x-2'
          >
            <Image src="/logo.png" alt='logo' width={50} height={50}
              className='rounded-full'
            />
            <span className={`text-3xl font-bold leading-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} >2lifi</span>

          </Link>
        </div>

        <button onClick={toggleDarkMode}
          className={`flex justify-center items-center rounded-full ${isDarkMode ? 'text-white hover:bg-gray-700 bg-gray-800' : 'hover:bg-gray-400 bg-gray-200'}  w-8 h-8`}
        >
          {isDarkMode ? <Icon path='light' h='6' w='6' /> : <Icon path='dark' h='5' w='5' />}
        </button>
      </div>

      <div className="search-box p-4 flex-none">
        <form onSubmit={() => { }}>
          <div className="relative">
            <label>
              <input
                className={`rounded-full py-2 pr-6 pl-10 w-full border ${isDarkMode ? 'border-gray-800' : "border-gray-200"} ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} ${isDarkMode ? 'focus:bg-gray-900' : "focus:bg-white"} focus:outline-none ${isDarkMode ? 'text-gray-200' : "text-gray-600"} focus:shadow-md transition duration-300 ease-in`}
                type="text"
                defaultValue=""
                placeholder="Search on 2lifi"
              />
              <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="#bbb"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </span>
            </label>
          </div>
        </form>
      </div>

      <div className={`active-users ${isDarkMode ? 'bg-gray-900' : "bg-white"} flex justify-between flex-row p-2 overflow-auto w-0 min-w-full`}>
        <ul className="flex flex-col py-4 space-y-1 px-2 w-full">
          {
            mainNavs.map((z: any, k: number) => <div key={k} className='w-full'>
              <p className='text-sm font-light tracking-wide text-gray-500 py-2 mt-3'>{z.title} </p>
              {z.children.map((x: any, i: number) =>
               (
                <li key={i} className='w-full'>
                  <Link
                    href={x.icon === 'openai' ? x.href : `/${x.href}`}
                    target={x.icon === 'openai' ? '_blank' : '_self'}
                    className="relative py-3 hover:text-blue-600 w-full flex justify-between flex-row items-center border-l-4 border-transparent"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="ml-2">
                        <Icon path={x.icon} />
                      </span>
                      <span className="pl-4 text-sm tracking-wide truncate">
                        {x.title}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </div>)
          }


        </ul>
      </div>

    </section>
  )
}