/* eslint-disable @next/next/no-img-element */
import { useTheme } from '@/context/themeContext';
import helps from '@/utils/helps';
import Link from 'next/link';
import React, { useState } from 'react'

export default function HelpCarousel() {
    const { isDarkMode } = useTheme();
    const [item, setItem] = useState<any>({...helps[0],index:0})




    return (
        <div className='pt-10'>
            <div className={`${isDarkMode?'bg-gray-800':'bg-white'} mx-auto w-full md:max-w-[90%] rounded-xl`}>
                <div className="md:flex items-center md:space-x-10">
                    <div className='w-full md:w-1/2'>
                        <img src={item.img} alt=""
                        className='h-full w-full min-h-[350px] max-h-[400px] object-cover rounded-t-xl md:rounded-none md:rounded-l-xl'
                        />
                    </div>
                    <div className='w-full md:w-1/2 p-5 md:p-10'>
                        <p className={`help-em ${isDarkMode?'text-gray-200':'text-[#1d1e1c]'}`}>
                            <span className='italic text-[#FA5D00] text-2xl md:text-4xl font-extrabold'>{'\"'} </span>
                            {item.text}
                            <span className='italic text-[#FA5D00] text-2xl md:text-4xl font-extrabold'>{'\"'} </span>
                        </p>
                        <div className="pt-4">
                        <Link href={item.href}
                        target='_blank'
                        className='text-[#FA5D00] text-lg'
                        >{item.link} </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 pt-6 md:pt-16 flex justify-center items-center space-x-4">
                {
                    helps.map((x: any, i: number) => <div key={i}>
                        <div
                            onClick={() => setItem({...x,index:i})}
                            className={`${item.index==i?'bg-[#FA5D00]':isDarkMode?'bg-gray-700' :'bg-white'} cursor-pointer h-8 w-8 border border-[#FA5D00] rounded-full`}></div>
                    </div>)
                }
            </div>
        </div>
    )
}
