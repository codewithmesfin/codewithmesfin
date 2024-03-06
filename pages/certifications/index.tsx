/* eslint-disable @next/next/no-img-element */
import { useTheme } from '@/context/themeContext';
import Head from 'next/head';
import React from 'react'


export default function Certifications() {
    const { isDarkMode } = useTheme();
    const certifications = [
        {
            title: "AI Programming with Python",
            school: "Udacity and AWS",
            image: '/images/certs/aws-ml.png',
            link: "confirm.udacity.com/e/ea65689a-6c23-11ee-896b-476fbdc2b05b",
        },
        {
            title: "Solidity for Senior Engineers",
            school: "Calyptus",
            image: '/images/certs/calyptus.png',
            link: "https://app.crowdclass.com/claim/3ivBqUYDMZfyzOk2/Zyc65y3oBhBqgz2rE1Q2jKXKE8FjnHwNzaqs4Lm9",
        },
        {
            title: "Ethereum Developer Bootcamp",
            school: "Alchemy",
            image: '/images/certs/alchemy.png',
            link: "https://polygonscan.com/tx/0x1a296b795bb60f896a83ff7a72b4adde14bc546aa2e2a006e514bf3ad0604805",
        },
        {
            title: "AWS Machine Learning Foundations 2022",
            school: "Udacity",
            image: "/images/certs/udacity.png",
        },
        {
            title: "Mobile Application Developer Mastery Award",
            school: "IBM",
            image: "/images/certs/ibm.png",
        },
        {
            title: "Google Digital Marketing",
            school: "Google",
            image: "/images/certs/google.png",
        },
        {
            title: "Top 25% Laravel Developer",
            school: "TestDome",
            image: "/images/certs/php.png",
        },
        {
            title: "Certificate of Award",
            school: "Addis Ababa University",
            image: '/images/certs/award.jpeg',
        },
        {
            title: "Certificate of Appriciation",
            school: "Addis Ababa University",
            image: '/images/certs/cs2.jpeg',
        },
    ];

    return (
        <div>
             <Head>
        <title>Mesfin - Certifications</title>
        <meta
          name="description"
          content="Mesfin holds a Bachelor of Science degree from Addis Ababa University. He has further enriched his skillset through various prominent institutions, including Udacity, Calyptus, Alchemy University, Google, IBM, and TESTDOME."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} pt-24 pb-16`}>
                <div className='mx-auto max-w-[90%] '>
                    <h1 className={`${isDarkMode ? 'text-white' : "text-gray-800"} text-4xl my-8 text-center md:text-7xl font-extrabold py-2`}>
                        Certicates & Awards
                    </h1>
                    <div className="py-5 pt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            certifications.map((x: any, i: number) => <div key={i} className="h-full w-full rounded">
                                <img src={x.image} alt=""
                                    className='h-full w-full max-h-[300px] object-fit md:max-h-[548px] shadow-sm rounded'
                                />
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
