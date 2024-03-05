import Image from 'next/image'
import React from 'react'

export default function PageNotFound() {
  return (
   <div>
     <section className='bg-blue-600 h-screen pt-32 pb-16'>
    <div className='p-10 w-full md:w-[70%] mx-auto text-center'>
        <div className='flex justify-center'>
        <Image src="/logo.png" alt=""
        className='rounded-full'
        width={200} height={200}
        />
        </div>
        <h1 className='text-4xl py-6 md:text-8xl text-white'>Coming Soon !</h1>
        <p className='text-gray-200 text-lg md:text-3xl'>
            This page is currently under construction. Thank you for your patience as our skilled engineers work diligently to enhance your experience.

        </p>
    </div>
    </section>
   </div>
  )
}
