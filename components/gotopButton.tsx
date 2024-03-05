import React, { useEffect, useState } from 'react'

export default function GotopButton() {
    const isBrowser = () => typeof window !== 'undefined';
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isBrowser()) {
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
  
        window.addEventListener('scroll', toggleVisibility);
  
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }
    }, []);
  
    const scrollToTop = () => {
      if (isBrowser()) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };
  

    return isVisible &&(
        <div
            onClick={scrollToTop}
            className="rounded-full p-3 fixed bottom-5 right-5  bg-[#a278fe] shadow-xl text-white cursor-pointer"
         
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>

        </div>
    )
}
