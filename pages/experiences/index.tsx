import Icon from '@/components/icon';
import { useTheme } from '@/context/themeContext';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Experiences() {

    const { isDarkMode } = useTheme();
    const experiences = [
        {
            href: "http://techethio.com",
            location: "Addis Ababa, Ethiopia (Hybrid)",
            title: "Software Engineering Lead",
            company: "TechEthio IT Solution Plc",
            startDate: "November, 2022",
            endDate: "active",
            description: [
                `Managed a team and developed an advanced Enterprise Resource Planning (ERP) project for Kenema
      Pharmacies Enterprise. Utilized Next.js, Node.js, GraphQL, TypeScript, Redis, PostgreSQL, and
      Firebase, resulting in optimizing operations and improving efficiency across 45 branches.`,
                `Created ShareGebeya, a comprehensive marketplace platform available on iOS, Android, and web,
      facilitating share listing, selling, and buying activities in Ethiopia.`,
                `Developed and deployed EtyopAI, an AI system utilizing ChatGPT models, to provide OpenAI Services
      in Africa.`,
            ],
        },
        {
            href: "https://resultier.com",
            location: "Twin Falls, Idaho, USA (Remote)",
            title: "React Engineer",
            company: "Resultier Inc",
            startDate: "March, 2022",
            endDate: "September, 2022",
            description: [
                `Developed a Test Driven Learning Experience system using Next.js, React.js, GraphQL, TypeScript,
      PostgreSQL, Git, Jest, CI/CD, and AWS, resulting in a 70% increase in user engagement.`,
            ],
        },
        {
            href: "http://tech1factory.com",
            location: "Atlanta, Georgia, USA (Remote)",
            title: "Senior Software Developer",
            company: "Tech 1 Factory LLC",
            startDate: "November, 2020",
            endDate: "March, 2022",
            description: [
                `Developed internal web-based applications utilizing React, AWS Serverless, DynamoDB, and Angular,
      resulting in a 65% increase in team productivity.`,
                `Created a comprehensive system for a car washing company, including iOS/Android apps for clients and
      drivers, as well as a web-based dispatching system`,
                `I developed and implemented a new system that not only improved system speed by 40% but also
      integrated Salesforce, Facebook Ads, Google Ads, Google My Business, and Google Analytics. This
      integration resulted in the creation of a standalone CRM system for Money Avenue, facilitating better
      customer development and enhancing overall business operations.`,
                `In 3 months, improved eight React and Next js apps performance by 35%, reducing page loading time
      by 43%.`,
            ],
        },

        {
            href: "https://yesuitsolution.com",
            location: "Addis Ababa, Ethiopia (Onsite)",
            title: "Full Stack Developer",
            company: "Yesu IT Solution PLC",
            startDate: "September 2020",
            endDate: "November 2020",
            description: [
                `I developed a robust web-based Learning Management System (LMS) using Vue.js, Loopback,
      MongoDB, and integrated it with Moodle CMS. Implemented successfully, it's employed by 13
      prestigious private universities in Ethiopia, driving a 15% increase in active student numbers.
      Continuous collaboration with clients expanded its usage, showcasing our commitment to innovation and
      impactful solutions.`,
            ],
        },

        {
            href: "https://globedocket.com",
            location: "Addis Ababa, Ethiopia (Onsite)",
            title: "Full Stack Developer",
            company: "CodeBlue Computers PLC",
            startDate: "August 2020 ",
            endDate: "December 2020",
            description: [
                `I significantly customized CS-CART and developed ShemsuSouq, a B2C eCommerce web application,
      along with iOS and Android mobile apps using React Native. Despite the challenges of the Covid-19
      pandemic, ShemsuSouq successfully transformed buying and selling activities in Addis Ababa, reducing
      inefficiencies by 10%.`,
            ],
        },

        {
            href: "https://poshakconsultancy.com",
            location: "Bahir Dar, Ethiopia (Onsite)",
            title: "Software Engineer",
            company: "Poshak Consultancy PLC",
            startDate: "December 2019",
            endDate: "September 2020",
            description: [
                `As a Scrum Master, I excelled in driving efficient and collaborative team dynamics, delivering successful
      projects through agile methodologies.`,
                `Developed a Micro Service-based Enterprise Resource Planning (ERP) project catering to the specific
      needs of the Apparel industry in Ethiopia. Leveraging Vue.js, Node.js, Firebase, and advanced
      technologies such as Dynamic Programming, Linear Programming, Redis, MySQL, MongoDB, CI/CD,
      Firebase, Twilio, and AWS, the ERP system revolutionized operations. Additionally, created a
      user-friendly mobile app using Flutter and Dart, enabling seamless access to the ERP system for
      customers. The project resulted in a remarkable 10% improvement in employee performance, a 5%
      revenue growth, and an 8% reduction in costs.`,
            ],
        },

        {
            href: "https://bankpaytechnologies.com",
            location: "London, United Kingdom (Remote)",
            title: "Software Engineer",
            company: "BankPay Technologies LTD",
            startDate: "April, 2019",
            endDate: "October, 2019",
            description: [
                `Created an interactive and winning internal Human Resource Management System (HRMS) for Bankpay
      Technologies. Leveraged Vue.js, TypeScript, Go, PostgreSQL, and Firebase to deliver a robust solution.`,
                `Created a Flutter and Dart mobile app called EazyPay for seamless customer onboarding`,
            ],
        },

        {
            href: "https://ahadootec.com",
            location: "Addis Ababa, Ethiopia (Onsite)",
            title: "Software Developer",
            company: "AhadooTec ICT Solution PLC",
            startDate: "April, 2019",
            endDate: "October, 2019",
            description: [
                `Developed a comprehensive Building Management System for Addis Ababa City Administration,
      utilizing Vue.js, Vuetify, Loopback, and MongoDB.`,
                `Created highly efficient auto-complete field plugins widely implemented by AhadooTec Vue developers,
      ensuring seamless user experiences and boosting team efficiency by 2%.`,
            ],
        },
    ];

    return (
        <div>
            <Head>
                <title>{"Mesfin's"}Experience</title>
                <meta
                    name="description"
                    content="Mesfin brings a diverse range of technical expertise to the table, having experience in both on-site and remote work environments. He has held various roles throughout his career, including software engineer, machine learning practitioner, data analyst, and developer across frontend, backend, mobile app, and Web3.0 domains."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-[#fff8f1]'} pt-32 pb-16`}>
                <div className='mx-auto max-w-[90%] '>
                    <div className="md:flex md:spaxe-x-10  md:justify-between">

                        <div className='hidden md:inline h-full w-full md:w-[35%] flex justify-center'>
                            <div className='rounded-xl'>
                                <Image
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    src="/images/mesfin.png" alt='logo' width={200} height={200}
                                    className='rounded-full object-contain h-full shadow-xl'
                                />
                            </div>
                            <div className="py-3">
                                <h1 className={`text-3xl py-2 md:text-4xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bio</h1>
                                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                                    Passionate full-stack developer with over five years of industry
                                    expertise, specializing in remote-based roles across multiple global
                                    locations. Skilled in FinTech, transportation, ecommerce, schools,
                                    AI, and human resources. Mastered Web3 and eager to contribute to
                                    Web3 and blockchain projects. Committed to continuous learning,
                                    problem-solving, and delivering optimal outcomes. Successfully
                                    improved project efficiency by 20% through innovative solutions.
                                    Ready to make a significant impact as a valuable asset to any team.
                                </p>
                                <h1 className={`mt-5 mb-2 font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl md:text-2xl`}>
                                    Companies I worked for
                                </h1>
                                {
                                    experiences.map((x: any, i: number) => <div key={i} className='py-2'>
                                        <Link href={x.href} target='_blank' className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                            {i + 1}.<span className='pl-2 pr-3'>{x.company} </span>
                                            <span className='text-[#fa5d00]'><Icon path='open' w='4' h='4' /></span>
                                        </Link>
                                    </div>)
                                }
                            </div>
                        </div>


                        <div className='w-full md:w-[65%] h-full md:ml-10'>

                            <div className="">
                                <h1 className={`mb-10 font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-3xl md:text-4xl`}>
                                    Experience
                                </h1>
                                <div className="">
                                    {
                                        experiences.map((x: any, i: number) => <div key={i}
                                            className={`p-5 my-5 shadow-sm rounded h-full border ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'bg-white border-[#edf2f7]'}`}
                                        >
                                            <h1 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{x.title} </h1>
                                            <div className="flex justify-between items-center py-1">
                                                <div>
                                                    <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                                                        <Link
                                                            href="http://techethio.com"
                                                            rel="noopener noreferrer"
                                                            target="_blank"
                                                            className="font-bold text-sm py-1"
                                                        >
                                                            {x.company}
                                                        </Link>
                                                    </p>
                                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{x.location} </p>
                                                </div>
                                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {x.startDate} - <span>{x.endDate == "active" ? 'Currently working here' : x.endDate} </span>
                                                </p>
                                            </div>
                                            <div className="pt-3">
                                                <p className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Description</p>
                                                {
                                                    x.description && x.description.map((y: any, j: number) => <div key={j}
                                                        className={`flex py-1 ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                                    >
                                                        <div className="pt-2 text-[#fa5d00]">
                                                            <Icon path='show' radius='3' h='4' w='4' />
                                                        </div>
                                                        <span className="pl-2 text-sm">
                                                            {y}
                                                        </span>
                                                    </div>)
                                                }
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
