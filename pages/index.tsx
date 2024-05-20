/* eslint-disable @next/next/no-img-element */

import EmailComponent from '@/components/emailComponent';
import HelpCarousel from '@/components/helpCarousel';
import PrimaryLinkButton from '@/components/primaryLinkButton';
import ServiceCarousel from '@/components/serviceCarousel';
import { useTheme } from '@/context/themeContext';
import mesfinHelps from '@/utils/mesfinServices';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Index() {
  const { isDarkMode } = useTheme();
  const [dismissableIndex, setDismissableIndex] = useState(0)
  return (
    <div>
      <Head>
        <title>Code with Mesfin</title>
        <meta
          name="description"
          content="Mesfin, a Software Engineer, delights in crafting innovative mobile and web systems loved by users. With expertise in AI, Web3.0, Agile, and frontend/backend development, Mesfin offers mentorship and a friendly approach."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`border-b border-[#fa5d00] pt-20 md:pt-32 pb-20 ${isDarkMode ? 'bg-gray-800' : 'bg-[#fff8f1]'}`}>
        <div className='max-w-[90%] mx-auto'>
          <div className="md:flex md:justify-between md:space-x-10 items-end">
            <div className="hero-img w-full md:3/5">
              <div>
                <div className="flex space-x-2">
                  <svg className={`size-6 mt-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                    width="8" height="6" viewBox="0 0 16 16"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                  </svg>
                  <p className={`${isDarkMode ? 'text-gray-200' : ''} py-6`}>
                    <em className='quote'> Everyone in this country should learn how to program because
                      it teaches you how to think.</em> <br /> <span className='font-bold text-md'>– Steve Jobs</span>
                  </p>
                </div>
                <h1
                  className={`${isDarkMode ? 'text-white' : 'text-[#1d1e1c]'} title pb-4 text-3xl md:text-7xl`}>
                  Dive into Code, <span
                    className='text-[#fa5d00] font-bold mesfin'>{"Mesfin's "}</span> Guidance
                </h1>
                <p className={`py-6 ${isDarkMode ? 'text-gray-200' : 'text-[18px]'}`}>
                  You have been invited to an exciting voyage through the realm of coding.
                  With {"Mesfin's"} mentorship, {"you'll"} explore the depths of
                  programming languages and frameworks, gaining hands-on experience
                  and insight along the way.
                </p>

              </div>
              <div className="py-3 pt-6">
                <EmailComponent/>
              </div>
            </div>
            <div className="w-full h-full md:2/5 flex justify-end">
              <Image
                data-aos="fade-up"
                data-aos-duration="500"
                src="/images/mesfine.png" alt='logo' width={400} height={400}
                className='rounded object-contain h-full w-full'
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} py-8`}>
        <div className='mx-auto max-w-[90%]'>
          <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} text-md`}>
            Mesfin, a Software Engineer, delights in crafting innovative mobile
            and web systems loved by users. With expertise in AI, Web3.0, Agile,
            and frontend/backend development, Mesfin offers mentorship and a
            friendly approach. <Link href={"/me"} className='text-[#fa5d00]'>Read more about Mesfin</Link>.
          </p>
        </div>
      </section>
      <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#FEF8F2]'}`}>
        <div className='mx-auto max-w-[90%] py-6'>
          <div className='py-4 mx-auto w-[90%] md:max-w-4xl'>
            <h1 className={`${isDarkMode ? 'text-white' : ''} text-center text-3xl md:text-6xl font-bold`}>
              How<span className='text-[#fa5d00]'> Mesfin</span> helps
            </h1>
            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-lg md:text-3xl text-center py-3`}>
              Book a 30 minutue quick meeting on {"Mesfin's"} Calender, discuss your topic(s) and decide your next action plans.
            </p>
          </div>
          <div className='mx-auto max-w-[95%] md:py-6'>
            <div className="md:flex items-center md:space-x-10">
              <div className="w-full md:w-1/2">
                <h2 className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-3xl md:text-3xl py-3`}>
                 Set up your first meeting
                </h2>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-lg md:text-xl py-3`}>
                  Ready to meet with Mesfin? Click the button below to access his
                  Calendly and choose a time that works best for you.<br />
                Once {"you've"} selected a date and time, {"you'll"} be all set for your meeting.
                </p>
                <div className="pt-3">
                  <PrimaryLinkButton
                  href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
                  title="Book a meeting"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-10 md:mt-1">
                <img src="/images/calendly.png"
                  alt=""
                  className='w-full h-full md:shadow rounded'
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <div className='mx-auto max-w-[90%] py-6'>
          <div className='py-4'>
            <h1 className={`${isDarkMode ? 'text-white' : ''} text-center text-3xl md:text-6xl font-bold`}>
              Join Code with <span className='text-[#fa5d00]'> Mesfin</span>
            </h1>
            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-lg md:text-xl text-center py-3`}>
              Expert guidance can help ensure your business
              decisions are well-informed and smooth.
            </p>
          </div>
          <div className='mx-auto max-w-[90%] py-6'>
            <div className="md:flex items-center md:space-x-10">
              <div className="w-full md:w-1/2">

                {
                  mesfinHelps.map((x: any, i: number) => <div key={i}>
                    <div className={`py-2 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'} cursor-pointer`}
                      onClick={() => setDismissableIndex(i)}
                    >
                      <div className="flex justify-between items-center space-x-10">
                        <h1 className={`accordio-h1 py-1  ${dismissableIndex == i ? 'text-[#fa5d00]' : isDarkMode ? 'text-gray-100' : 'text-[#1D1E1C]'}`}>
                          {x.title}
                        </h1>
                        <button
                          className={isDarkMode ? 'text-white' : 'text-gray-600'}
                        >
                          {
                            dismissableIndex == i ?
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                              </svg>

                              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                          }
                        </button>
                      </div>
                      {dismissableIndex == i && <div className=''>
                        {/* <Border /> */}
                        <p className={`py-1 accordio-p pb-4  ${isDarkMode ? 'text-gray-200' : 'text-[#6D6E6D]'}`}>
                          {x.desc} <Link href={"/learn-more"}
                            className='text-[#fa5d00]'
                          >Learn more  </Link>

                        </p>
                      </div>}
                    </div>
                  </div>)
                }
              </div>
              <div className="w-full md:w-1/2">
                {/* <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/harvest/7009/time_tracking_10.webp"
                  alt=""
                  className='w-full h-full shadow'
                /> */}
                 <img src="/images/setup1.png"
                  alt=""
                  className='w-full h-full shadow rounded'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`border-b border-[#FA5D00] ${isDarkMode ? 'bg-gray-800' : 'bg-[#FEF8F2]'} py-8`}>
        <div className='mx-auto max-w-[90%]'>
          <p className={`text-center eyebrow`}>SERVICES</p>
          <h1 className={`mb-[64px] ${isDarkMode ? 'text-white' : 'text-[#1D1E1C]'} h2 text-center`}>Get unlimited help from industry experts
          </h1>
          <div className="py-3">
            <ServiceCarousel />
          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-[#FEF8F2]'} py-8`}>
        <div className='mx-auto max-w-[90%] pt-10'>
          <p className={`text-center eyebrow`}>5+ years of experience</p>
          <h1 className={`${isDarkMode ? 'text-white' : 'text-[#1D1E1C]'} h2 py-3 text-center`}>
            Industry experience since 2018
          </h1>
          <h3 className={`h3 py-2 text-center ${isDarkMode ? 'text-gray-300' : 'text-[rgba(29, 30, 28, .8)]'}`}>
            I am here to help Student, Companies, or any Individuals seeking Tech advice
          </h3>
          <div className="py-3">
            <HelpCarousel />
          </div>
        </div>
      </section>


      <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-8`}>
        <div className='mx-auto max-w-[90%]'>
          <div className="py-10">
            <div className="md:flex md:space-x-10 justify-between items-center">
              <div className="w-full md:w-3/5">
                <h1 className={`${isDarkMode ? 'text-white' : 'text-[#1D1E1C]'} h2 py-3`}>
                  Connect with Me today
                </h1>
                <h3 className={`text-lg md:text-2xl py-2 ${isDarkMode ? 'text-gray-300' : 'text-[rgba(29, 30, 28, .8)]'}`}>
                  I am doing my best to help the world connect to opportunity and positively impact business.
                </h3>
                <div className="mt-5 md:mt-10 md:flex items-center md:space-x-10">
                  <PrimaryLinkButton
                    href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
                    title='Discuss with Mesfin'
                  />
                  <div className='mt-6 md:mt-0'>
                    <p className={`${isDarkMode ? 'text-white' : ''} quote text-lg md:text-xl font-semibold`}>
                      Winners {"don't"} do different things. They do things differently!
                    </p>
                    <p className={`${isDarkMode ? 'text-white' : ''} text-left md:text-right  font-semibold text-lg mt-2`}>- Shiv Khera</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 py-6 md:py-1">
                <img src="/images/option.png"
                  alt=""
                  className='h-full rounded w-full max-w-[380px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
