import TypeWriiter from '@/components/typeWriter';
import { useTheme } from '@/context/themeContext';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Me() {
    const { isDarkMode } = useTheme();
    const roles = [
        "Machine Learning Practitioner",
        "Data Scienctist",
        "a Software Engineer",
        "a Frontend Developer",
        "a Backend Developer",
        "Web3 Developer",
        "a Scrum Master",
        "a Team Leader",
        "a Blockchain Developer",
        "a Mobile App Developer",
    ]

    const socials = [
        {
            title: "Address",
            value: "Addis Ababa, Ethiopia",
            href: "https://en.wikipedia.org/wiki/Addis_Ababa",
        },
        {
            title: "Linkedin",
            value: "mesfin-tsegaye",
            href: "https://www.linkedin.com/in/mesfin-tsegaye",
        },
        {
            title: "Github",
            value: "@codewithmesfin",
            href: "https://github.com/sciemesfin",
        },
        {
            title: "Email",
            value: "sciemesfin55@gmail.com",
            href: "mailto:sciemesfin55@gmail.com",
        },
        {
            title: "Phone Number",
            value: "+251 91 152 2902",
            href: "tel:+251911522902",
        },
        {
            title: "Medium",
            value: "@codewithmesfin",
            href: "https://bizenforce.medium.com",
        },
    ];

    return (
        <div>
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} pt-32 pb-16`}>
                <div className='mx-auto max-w-[90%] '>
                    <div className="md:flex md:spaxe-x-10 md:items-center md:justify-evenly">

                        <div className='h-full w-full md:w-[30%] flex justify-center'>
                            <Image
                                data-aos="fade-up"
                                data-aos-duration="500"
                                src="/images/mesfin.png" alt='logo' width={400} height={400}
                                className='rounded object-cover w-full h-full md:shadow-xl'
                            />
                        </div>


                        <div className='w-full md:w-[50%] h-full mt-10 md:mt-1'>
                            <h1 className={`leading-10 font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl md:text-6xl`}>
                                Hi, my name is <br className='hidden md:block' />
                                <span className={isDarkMode?'text-blue-300':'text-blue-600'}>Mesfin Tsegaye</span>
                            </h1>
                            <h2 className='mt-5 flex text-xl md:text-3xl space-x-2 font-bold text-[#f2740d]'>
                                <span className={isDarkMode ? 'text-white' : 'text-gray-500'}> I am </span>
                                <TypeWriiter roles={roles} />
                            </h2>
                            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-500'} pt-6 py-2`}>
                                Passionate full-stack developer with over five years of industry
                                expertise, specializing in remote-based roles across multiple global
                                locations. Skilled in FinTech, transportation, ecommerce, schools,
                                AI, and human resources. Mastered Web3 and eager to contribute to
                                Web3 and blockchain projects. Committed to continuous learning,
                                problem-solving, and delivering optimal outcomes. Successfully
                                improved project efficiency by 20% through innovative solutions.
                                Ready to make a significant impact as a valuable asset to any team.
                            </p>
                            <div className="mt-2">
                                <h1 className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-lg md:text-3xl pt-4 pb-1`}>Get in touch</h1>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
                                {
                                    socials.map((x: any, i: number) => <div key={i}>
                                        <div className="flex items-center space-x-2">
                                            <p className={`font-bold ${isDarkMode?'text-white':'text-gray-600'}`}>{x.title}: </p> 
                                            <Link href={x.href} target='_blank' className='text-green-600'>{x.value} </Link>
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
