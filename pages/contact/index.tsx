import { useTheme } from '@/context/themeContext';
import Link from 'next/link';
import React from 'react'

export default function Contact() {
    const { isDarkMode } = useTheme();
    const tips = [
        {
            img: "https://usingtechnologybetter.com/wp-content/uploads/2020/08/Illustration-0.png",
            title: "Tech Advice and Consultancy",
            desc: `Our are open minded personnels to share with you our tech experience, skills, and suggestions. We can help you keeping your business success, avoid obstacles, and innovate new features.`
        },
        {
            img: "https://unida.ac.id/teknologi/assets/images/post/e0467db2ddbc7edc4e29c10616e046a0.jpg",
            title: "Mobile Applications Development",
            desc: `Is your business ready for a mobile app? Let us develop one for you and see the amazing opportunities it can unlock for your business. Our mobile apps are beautifully designed and simple to use, so you can focus on what's important - your customers."`
        },
        {
            img: "https://alpinesolves.com/wp-content/uploads/2021/09/we-are-your-talent.png",
            title: "Website and web bases apps Development",
            desc: `In today's business world, having a website is essential. A beautifully and user friendly designed websites and web based systems that responds to users need will unlock opportunities, increase revenue and customer satisfactions.`
        },
        {
            img: "https://www.labnol.org/static/e523a04ed5cd2a334656e02a7cf4a51d/75494/chrome-extensions.png",
            title: "Chrome extensions Development",
            desc: `Modern browsers like Google Chrome and Microsoft Edge make it easy to access websites, search the Web, even use other Web apps. But sometimes the browser may not have exactly what you want out-of-the-box. In these cases, a browser extension can help you customize your browsing experience`
        },
        {
            img: "https://storage.googleapis.com/gweb-cloudblog-publish/original_images/Google_Blog_api-management-03_1.jpg",
            title: "API Development and Integrations",
            desc: `API integrations enable companies to automate tasks, integrating their programs and databases with current industry applications . They ensure a smooth and continuous communication between various applications and allow workers to get the benefits of multiple cloud-based apps while enhancing product innovation`
        },
        {
            img: "https://www.dicoding.com/blog/wp-content/uploads/2020/06/tujuan-devops.png",
            title: "DevOps and Cloud based Hosting",
            desc: `With DevOps, there is continuous integration between the deployment of code and the testing of it . Near real-time monitoring and immediate feedback through a DevOps continuous monitoring tool enables both the developer and operations team to work together.`
        },
    ]
    return (
        <div>
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} pt-32 pb-16`}>
                <div className='mx-auto max-w-[90%] '>
                    <div className="md:flex md:spaxe-x-10  md:justify-between">
                        <div className="w-full md:w-3/5">
                            <h1 className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} font-extrabold text-3xl md:text-6xl`}>Top Notch Support</h1>
                            <p className={`py-3 text-md md:text-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Get expert guidance and assistance achieving your objectives.</p>
                            <div className="py-1">
                                <Link href='https://calendly.com/mesfin-tsegaye/codewithmesfin'
                                    target='_blank'
                                    className='rounded text-green-600'
                                >Book a meeting with <span className='font-semibold'>Mesfin</span> </Link>
                            </div>
                            <div className="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                                {
                                    tips.map((x: any, i: number) => <div key={i}>
                                        <div className={`shadow rounded p-3 ${isDarkMode?'bg-gray-800':'bg-white'}`}>
                                           <h1 className={`text-lg py-2 font-bold ${isDarkMode?'text-white':'text-gray-900'}`}>{x.title} </h1>
                                           <p className={`text-sm ${isDarkMode?'text-gray-300':'text-gray-800'}`}>{x.desc} </p>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div>
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSexuuvTagvX_cUoQxPwXfG3Zk3_EufVP6ViWFIzZr7Ww1bPPA/viewform?embedded=true"
                                    width="100%"
                                    height="1000"
                                >Loading…</iframe
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
