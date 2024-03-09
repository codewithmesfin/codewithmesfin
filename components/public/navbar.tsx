/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {

  Bars3Icon,

  XMarkIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '@/components/icon'
import { useTheme } from '@/context/themeContext'
import PrimaryLinkButton from '../primaryLinkButton'
import Brand from '../brand'



const links = [
  { title: "Home", href: "/" },
  { title: "About me", href: "/me" },
  { title: "Experiences", href: "/experiences" },
  { title: "Certifications", href: "/certifications" },
  { title: "Articles", href: "https://codewithmesfin.medium.com", target: true },
]



export default function PublicNavbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useRouter()
  const isActiveTab = (arg: string) => {
    if (arg == "/") return pathname == arg;
    else return pathname.includes(arg)
  }


  // #967ad6
  return (
    <header className={`${isDarkMode ? 'bg-gray-800' : "bg-[#fff8f1]"} fixed w-full z-10`}>
      <nav className="mx-auto  flex max-w-[90%] items-center justify-between py-3" aria-label="Global">
        <div className="w-full flex justify-between items-center md:space-x-4">
          <div>
            <div className="flex justify-start items-center md:space-x-8 lg:space-x-20">
              <div className="flex items-center space-x-2">
                <Brand />
              </div>
              <div className='hidden md:flex space-x-10'>
                {
                  links.map((item, i) => <Link key={i}
                    href={item.href} target={item.target ? '_blank' : "_self"}
                    className={`${isDarkMode ? isActiveTab(item.href) ? "text-white font-semibold" : "text-gray-200" : isActiveTab(item.href) ? "text-gray-900 font-semibold" : "text-gray-900"} text-sm font-normal leading-6`}>
                    {item.title}
                  </Link>)
                }
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-10'>
            <div className='hidden md:flex'>
              <Link href={"/resume.pdf"}
                target='_blank'
                className={`text-sm font-normal leading-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                Resume
              </Link>
            </div>
            <div className="hidden md:block">
              <PrimaryLinkButton href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
                title="Reach me"
              />
            </div>
            <button onClick={toggleDarkMode}
              className={`mx-3 flex justify-center items-center rounded-full ${isDarkMode ? 'text-white hover:bg-gray-700 bg-gray-800' : 'hover:bg-gray-400 text-gray-900 bg-gray-200'}  w-8 h-8`}
            >
              {isDarkMode ? <Icon path='light' h='6' w='6' /> : <Icon path='dark' h='6' w='6' radius='1' />}
            </button>
            <button
              className={`${isDarkMode ? 'text-white' : 'text-gray-800'} flex md:hidden rounded-md mr-5`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="inset-0 z-10" />
        <Dialog.Panel className={`${isDarkMode ? 'bg-gray-800' : 'bg-white sm:ring-gray-900/10'} fixed  inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1`}>
          <div className="flex items-center justify-between">
            <div onClick={() => setMobileMenuOpen(false)}>
              <Brand />
            </div>

            <button
              type="button"
              className={`-m-2.5 rounded-md p-2.5 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">

                {
                  links.map((item, i) => <Link onClick={() => setMobileMenuOpen(false)} key={i}
                    href={item.href}
                    target={item.target ? '_blank' : "_self"}
                    className={`${isDarkMode ? 'text-gray-200 hover:bg-gray-100' : 'text-gray-900 hover:bg-gray-50'} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`}
                  >
                    {item.title}
                  </Link>)
                }
                <Link onClick={() => setMobileMenuOpen(false)}
                  href={"/resume.pdf"}
                  target='_blank'
                  className={`${isDarkMode ? 'text-gray-200 hover:bg-gray-100' : 'text-gray-900 hover:bg-gray-50'} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`}
                >
                  Resume
                </Link>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
