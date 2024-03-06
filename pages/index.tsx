/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton';
import { useTheme } from '@/context/themeContext';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function App() {
  const { isDarkMode } = useTheme();

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
      <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} pt-32 pb-16`}>
        <div className='mx-auto max-w-[85%] '>
          <div className="md:flex md:spaxe-x-10 md:justify-evenly">

            <div className='md:hidden mb-10 h-full w-full md:w-[30%] flex justify-center'>
              <Image
                data-aos="fade-up"
                data-aos-duration="500"
                src="/images/mesfine.png" alt='logo' width={400} height={400}
                className='rounded object-cover h-full md:shadow-xl'
              />
            </div>


            <div className='w-full md:w-[50%] h-full'>
              <h1 className={`font-normal ${isDarkMode ? 'text-white' : 'text-gray-900'} text-3xl md:text-4xl`}>
                Dive into Code,<span className='text-green-600 px-2'>{"Mesfin's"}</span>Guidance
              </h1>
              <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-500'} pt-6 py-2`}>
                You have been invited to an exciting voyage through the realm of coding.
                With {"Mesfin's "} mentorship, {" you'll"} explore the depths of programming languages and frameworks, gaining
                hands-on experience and insight along the way.
              </p>
              <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-500'} py-2`}>
                Whether you are a beginner or looking to enhance your coding skills,
                our interactive lessons, hands-on projects, and personalized support
                from Mesfin himself will propel you into the fascinating realm of coding.
              </p>
              <div className="mt-4 flex items-center space-x-3 md:space-x-10">

                <Link href={"/me"} className='px-6 shadow py-2 text-sm rounded bg-[#a278fe] hover:bg-[#7446d9] text-[#f4f7fd]'>
                  Get to know more
                </Link>
                <button className='px-6 shadow py-2 text-sm rounded bg-[#475365] hover:bg-[#5d6a7d] text-[#f4f7fd]'>
                  Send feedback
                </button>
              </div>
            </div>

            <div className='hidden md:inline h-full w-full md:w-[30%] flex justify-center'>
              <Image
                data-aos="fade-up"
                data-aos-duration="500"
                src="/images/mesfine.png" alt='logo' width={400} height={400}
                className='rounded object-cover h-full shadow-xl'
              />
            </div>

          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} py-6`}>
        <div className='mx-auto max-w-[90%]'>
          <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-500'} text-md`}>
            Mesfin, a Software Engineer, delights in crafting innovative mobile
            and web systems loved by users. With expertise in AI, Web3.0, Agile,
            and frontend/backend development, Mesfin offers mentorship and a
            friendly approach. <Link href={"/about"} className='text-green-600'>Read more about Mesfin</Link>.
          </p>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <div className='mx-auto max-w-[90%] py-16'>
          <div className="md:flex md:items-center justify-between md:space-x-10">
            <div data-aos="fade-up"
              data-aos-duration="600" className='w-full md:w-3/5'>
              <h1 className={`text-2xl md:text-4xl font-normal ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Build a Successful Product
              </h1>
              <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-500'} pt-4 py-2`}>
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>Are you building a new system, customizing an existing one,
                  or upgrading to the latest version?</span> <br />
                <span className='font-semibold'>{"Don't"} wait to reach out for professional advice and assistance,
                  no matter the challenge. </span> Expert guidance can help ensure your business
                decisions are well-informed and smooth. <span className="font-semibold text-green-600">{"Code with Mesfin"}</span> exists to support
                your success in the technology world.
              </p>
              <GetStartedButton />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className='w-full md:w-2/5 rounded'>
              <img src="https://i.pinimg.com/originals/75/95/2d/75952ddbecd4743baf83236395b20541.gif" 
              alt="" className='rounded object-contain' />
            </div>
          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
        <div className='mx-auto max-w-[90%] py-16'>
          <div className="md:flex md:items-center md:space-x-10 ">
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-2/6 '>
              <img src="https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4906.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=ais"
                alt=""
                className='rounded'
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500" className='w-full md:w-4/6 py-10 md:py-1'>
              <h1 className={`text-2xl md:text-4xl font-normal ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                <span className='font-extrabold'>ERPNext</span> Guidance & Support
              </h1>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} pt-4 py-2`}>
                <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>
                  Is your business looking to
                  automate tasks and streamline operations?</span> <br />
                ERPNext, a free and open-source ERP software, could be a perfect solution!
                It offers a wide range of features to manage various aspects of your business,
                from accounting and inventory to CRM and project management. <br />
                <span className='font-semibold'>
                  Thanks to the dedication of a global community of developers,
                  ERPNext is free to download and use. <br />
                </span>
                If you need help getting started with ERPNext,
                <span className='font-semibold text-green-600'>
                  {" Code with Mesfin "}</span>
                offers services for configuration, installation, deployment, customization, and ongoing maintenance.
              </p>
              <GetStartedButton />
            </div>

          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <div className='mx-auto max-w-[90%] py-16'>
          <div className="md:flex md:items-center md:space-x-10">
            <div data-aos="fade-up"
              data-aos-duration="600" className='w-full md:w-3/5 order-last md:order-none'>
              <h1 className={`text-2xl md:text-4xl font-normal ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Does <span className="font-extrabold">Agile</span> work for every project?
              </h1>
              <h2 className={`pt-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} `}>
                What is the difference between
                <span className={`px-1 italic font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {'delivering a product successfully and delivering a successful product?'}
                </span>
                And which one is your choice?
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} pt-4 py-2`}>
                <span className="text-green-600">Code with Mesfin</span> will help you
                setting up and running the right team and show you building a
                successful product. Mesfin has an expertise in setting up a
                successful Remote, and on-site team on agile basis. It is common to see
                many startups or even companies build a product that nobody wants. <br />
                <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-900'} `}>{"Don't"} wait to
                  reach-out mesfin for mentorship!</span>
              </p>
              <GetStartedButton />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className='w-full md:w-2/5 rounded'>
              <img src="https://img.freepik.com/free-vector/statistics-concept-illustration_114360-172.jpg?t=st=1709661315~exp=1709664915~hmac=f5b369f94ca04e47dfc0e25dbef1d9de785c1503d60f075e6843b7e0f4a7fa4e&w=1800" 
              alt="" className='rounded' />
            </div>
          </div>
        </div>
      </section>

      <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
        <div className='mx-auto max-w-[85%] py-16'>
          <div data-aos="fade-up"

            data-aos-duration="500" className="md:flex md:items-center md:space-x-10">
            <div className='w-full md:w-3/5'>
              <h1 className={`text-2xl md:text-4xl font-normal ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                <span className='text-4xl md:text-8xl text-blue-600 font-extrabold'>18</span> Hours Availablity
              </h1>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} pt-4 py-2`}>
                Mesfin brings extensive experience working across various locations and time zones.
                He is highly engaged in continuous learning, actively applying his knowledge
                through practice, research, and coding. Mesfin also offers valuable
                mentorship and consulting services. Feel free to reach out to
                connect with Mesfin. If you love technology,
                <span className='text-green-600 px-1'>Code with Mesfin</span>
                is your reliable mentor.
              </p>
              <GetStartedButton />
            </div>
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-2/5 py-10 md:py-1'>
              <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?size=626&ext=jpg&ga=GA1.2.617832925.1708503188&semt=ais" alt=""
                className='rounded'
              />
            </div>
          </div>
        </div>
      </section>


      <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <div className='mx-auto max-w-[85%] py-16'>
          <div className="md:flex md:items-center md:space-x-10">
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-2/6'>
              <img src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=sph"
                alt="" className='rounded' />
            </div>
            <div data-aos="fade-up"

              data-aos-duration="500" className='w-full md:w-4/6 py-10 md:py-1'>
              <h1 className={`text-2xl md:text-4xl font-normal ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Training
              </h1>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} pt-4 py-2`}>
                Mesfin is a passionate learner, mentor, and team player with extensive
                experience in web and mobile app development, AI products, data analytics,
                Agile methodologies (Scrum or Kanban), Web3.0, and Blockchain. He thrives
                on creating user-friendly, aesthetically pleasing, and cost-effective
                solutions that meet current trends. <br />
                Looking for tech training or mentorship for yourself or your company?
                <span className="text-green-600 px-1">Code with Mesfin</span> can help! Mesfin emphasizes the importance of expert
                advice, thorough research, and validation before starting any product
                development project. {"Don't"} hesitate to reachout me whenever you need my help.
              </p>
              <GetStartedButton />
            </div>

          </div>
        </div>
      </section>


      <section className={isDarkMode ? 'bg-gray-800' : 'bg-blue-100'}>
        <div className='mx-auto max-w-[85%] py-16'>
          <div className="md:flex md:items-center md:space-x-10">
            <div data-aos="fade-up"
              data-aos-duration="500" className='w-full md:w-3/5'>
              <h1 className={`text-2xl md:text-4xl font-normal ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Consultancy
              </h1>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} pt-4 py-2`}>
                <span className="font-semibold">
                  In {"today's"} rapidly evolving tech landscape, staying competitive
                  often requires embracing transformative technologies.
                </span> <br />
                As an experienced tech consultant with a background in startups and
                larger companies, {"I've"} seen firsthand how technology can revolutionize
                business operations. <br />
                My experience combined with personalized advice and mentorship
                has demonstrably benefited past employers. <br />
                <span className="font-semibold">
                  If you believe technology can directly or indirectly impact your business,
                  <span className='px-1 text-green-600'>Code with Mesfin</span> can offer
                  valuable consulting services to help you navigate the ever-changing
                  tech landscape.
                </span>
              </p>
              <GetStartedButton />
            </div>
            <div data-aos="fade-up"
              data-aos-duration="500"
               className='w-full md:w-2/5 py-10 md:py-1 rounded'>
              <img src="https://img.freepik.com/free-photo/side-view-businesswoman-showing-analytical-charts-her-male-coworker_1098-20620.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=sph"
               alt="" className='rounded' />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}