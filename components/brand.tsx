import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from './icon'
import { useTheme } from '@/context/themeContext';

export default function Brand() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (
        <Link href="/"
            className='flex items-center space-x-2 text-white'
        >
            {/* <Image src="/logo.png" alt='logo' width={40} height={40}
                className='rounded-full'
            /> */}
            <span className={`${isDarkMode?'text-gray-100':'text-gray-700'}`}>
                <Icon path='code' h='8' w='8' radius='2'  /></span>
            <span className={`text-xl ${isDarkMode?'text-gray-100':'text-gray-900'} font-semibold leading-6`}>
                Code with <span className='text-green-600'>Mesfin</span>
            </span>

        </Link>
    )
}
