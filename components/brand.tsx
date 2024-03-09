// import React from 'react'

// export default function Brand() {
//   return (
//     <div >
//       <span className='text-[#fa5d00]'>Code with Mesfin</span>
//     </div>
//   )
// }
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from './icon'
import { useTheme } from '@/context/themeContext';

export default function Brand() {
    const { isDarkMode } = useTheme();
    return (
        <Link href="/"
            className='flex items-center space-x-2 text-white'
        >
            <span className={`${isDarkMode?'text-gray-100':'text-[#fa5d00]'}`}>
                <Icon path='code' h='8' w='8' radius='2'  /></span>
            <span className={`text-xl ${isDarkMode?'text-gray-100':'text-gray-700'} leading-6`}>
                Code with <span className='font-semibold text-[#fa5d00]'>Mesfin</span>
            </span>

        </Link>
    )
}
