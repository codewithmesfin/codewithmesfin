import { useTheme } from '@/context/themeContext';
import React from 'react'

export default function Services() {
    const { isDarkMode } = useTheme();
    const services = [
        {
            title: "Tech mentorship",
            desc: `Navigate the ever-changing world of technology with personalized guidance from an experienced tech mentor. Whether you're a seasoned professional looking to upskill or a beginner taking your first steps, I can provide tailored advice, support your learning journey, and answer any questions you may have`,
        },
        {
            title: "Agile Best Practices",
            desc: "Embrace the power of Agile methodologies to streamline your project management. I can help you understand and implement Agile principles, such as iterative development, continuous improvement, and user-centric design, to deliver projects faster and adapt to changing needs effectively"
        },
        {
            title: "ERPNext Setup and Maintenance",
            desc: "Unlock the potential of ERPNext, an open-source Enterprise Resource Planning software, for your business. I offer comprehensive services, from initial setup and configuration to ongoing maintenance and support. This ensures your ERPNext system seamlessly integrates with your operations, boosting efficiency and productivity"
        },
        {
            title: "Generative AI",
            desc: "Delve into the exciting world of Generative AI and explore its potential to revolutionize various aspects of your business. I can provide guidance on implementing Generative AI tools for tasks like content creation, image generation, and code generation, enabling you to unlock new possibilities and gain a competitive edge."
        },
        {
            title: "Mobile app developmnet",
            desc: "Bring your mobile app idea to life with my expertise in mobile app development. I can handle the entire development process, from initial concept and design to development, testing, and deployment, ensuring your app delivers a seamless and engaging user experience."
        },
        {
            title: "Web app developmnet",
            desc: "Build a robust and user-friendly web application to meet your specific business needs. I offer comprehensive web development services, encompassing the entire journey from concept development and user interface design to back-end development and deployment, guaranteeing a high-quality and reliable web application"
        },
        {
            title: "CI/CD and DevOps Implementation",
            desc: "Streamline your software development lifecycle and accelerate product delivery with my expertise in CI/CD (Continuous Integration and Continuous Delivery) and DevOps practices. I can help you implement automated build, test, and deployment pipelines, ensuring consistent and reliable software releases while fostering collaboration between development and operations teams. This can lead to faster time-to-market, improved software quality, and reduced development costs."
        },
        {
            title: "Data Analytics",
            desc: "Make data-driven decisions and gain valuable insights from your data with my data analytics expertise. I can help you collect, clean, analyze, and interpret your data, providing actionable insights to optimize your operations, identify trends, and make informed business decisions."
        },
        {
            title: "Web3.0 and Blockchain",
            desc: "Stay ahead of the curve by exploring the transformative potential of Blockchain and Web3 technologies. I can provide guidance on understanding these emerging technologies and their potential applications in various industries, helping you navigate this exciting realm and identify potential opportunities"
        },
        {
            title: "Project(Product) Management",
            desc: "Ensure your projects stay on track and achieve their goals with my effective project management services. I can help you create and implement project plans, manage resources, track progress, and mitigate risks, ensuring your projects are delivered on time, within budget, and to high standards."
        },
        {
            title: "Remote team setup and management",
            desc: "Build and manage high-performing remote teams that thrive in a distributed environment. I can guide you through the entire process, from team selection and onboarding to establishing effective communication channels and fostering a collaborative work culture, enabling your remote team to operate efficiently and achieve success"
        },
        {
            title: "Trainigs",
            desc: "Equip yourself and your team with the latest tech skills through engaging and informative training sessions. I offer both remote and on-site training options, tailored to your specific needs and learning preferences. These sessions can cover various topics, from programming languages and software applications to industry-specific technologies"
        },
        {
            title: "Tech Driven Business Consultancy",
            desc: "Gain valuable insights and expert advice to optimize your tech strategy and achieve your business goals. I offer comprehensive tech business consultancy services, helping you identify technology solutions that align with your strategic objectives, assess technology adoption risks and benefits, and develop a roadmap for successful implementation"
        },
        {
            title: "Graduation Project mentorship",
            desc: "Ensure your graduation project reaches its full potential with personalized guidance and support. I can act as your mentor, providing valuable feedback, helping you overcome challenges, and ensuring your project meets all academic requirements while showcasing your skills and knowledge effectively"
        },
        {
            title: "Job Readiness Tips and Advice",
            desc: "Prepare yourself for a successful career in the ever-evolving tech industry. I can provide personalized advice and tips on crafting a compelling resume, preparing for job interviews, and developing essential skills to stand out in a competitive job market."
        }
    ]
    return (
        <div>
            <section className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} pt-24 pb-16`}>
                <div className='mx-auto max-w-[90%] '>

                    <div className="mx-auto w-full md:max-w-6xl mt-6 md:my-8">
                        <h1 className={`${isDarkMode ? 'text-white' : "text-gray-800"} text-4xl text-center md:text-7xl font-extrabold py-3`}>
                            Services
                        </h1>
                        <p className={`${isDarkMode ? 'text-gray-200' : "text-gray-800"} hidden md:block text-sm md:text-md md:text-center`}>
                            Whether {"you're"} looking to navigate the tech landscape with mentorship,
                            build high-performing mobile or web apps, leverage the power of data
                            analytics, or stay ahead of the curve with emerging technologies like
                            Blockchain and Web3, I offer a comprehensive suite of services to empower
                            individuals and businesses. My expertise spans project management,
                            remote team setup, tech training, business consultancy, and even
                            graduation project mentorship, ensuring you have the guidance and
                            support needed to achieve your goals.
                        </p>
                    </div>
                    <div className="py-5 md:pt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            services.map((x: any, i: number) => <div key={i} className='h-full'>
                                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded h-full p-5`}>
                                    <h1 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} capitalize py-2  text-lg md:text-xl font-semibold`}>{x.title} </h1>
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{x.desc} </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
