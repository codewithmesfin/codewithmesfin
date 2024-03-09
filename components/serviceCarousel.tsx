import { useTheme } from '@/context/themeContext';
import React, { useEffect, useState } from 'react'
import Icon from './icon';
import services from '@/utils/services';

export default function ServiceCarousel() {
    const { isDarkMode } = useTheme();

    const [indexes, setIndexes] = useState({ first: 0, last: 3 })

    const [items, setItems] = useState(services.slice(indexes.first, indexes.last))


    useEffect(() => {
        setItems(services.slice(indexes.first, indexes.last))
    }, [indexes])

    const [mobileItem, setMobileItem] = useState<any>({ ...services[0], index: 0 })

    return (
        <div>
            <div className="hidden md:block">
                <div className="md:flex md:justify-between md:items-center md:space-x-10">
                    <div
                        onClick={() => {
                            if (indexes.first > 0) setIndexes({ ...indexes, first: indexes.first - 1, last: indexes.last - 1 })
                            else setIndexes({ ...indexes, first: services.length - 4, last: services.length - 1 })
                        }}
                        className={`cursor-pointer p-3 ${isDarkMode ? 'border-gray-600 text-white' : 'border-gray-500 text-[#565656]'} rounded-full border`}>
                        <Icon path='left' w='6' h='6' radius='2' />
                    </div>
                    <div>
                        <div className="grid grid-cols-1 grid-cols-3 gap-4">
                            {
                                items.map((x: any, i: number) => <div key={i}
                                    className={`h-full cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-900' : 'bg-white hover:bg-gray-100'} rounded-xl shadow-sm p-5`}
                                >
                                    <div>
                                        <h1 className={`${isDarkMode ? 'text-gray-100' : 'text-[#1D1E1C]'} font-bold text-lg md:text-xl pb-3`}>{x.title} </h1>
                                        <p className={`${isDarkMode ? 'text-gray-200' : 'text-[#565656]'} line-clamp-6 card-p`}>{x.desc} </p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            if (indexes.last < services.length - 1)
                                setIndexes({ ...indexes, first: indexes.first + 1, last: indexes.last + 1 })
                            else setIndexes({ ...indexes, first: 0, last: 3 })
                        }}
                        className={`cursor-pointer p-3 ${isDarkMode ? 'border-gray-600 text-white' : 'border-gray-500 text-[#565656]'} rounded-full border`}>
                        <Icon path='right' w='6' h='6' radius='2' />
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <div className={`h-full cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-900' : 'bg-white hover:bg-gray-100'} rounded-xl shadow-sm p-5`}>
                    <div>
                        <h1 className={`${isDarkMode ? 'text-gray-100' : 'text-[#1D1E1C]'} font-bold text-lg md:text-xl pb-3`}>{mobileItem.title} </h1>
                        <p className={`${isDarkMode ? 'text-gray-200' : 'text-[#565656]'} line-clamp-6 card-p`}>{mobileItem.desc} </p>
                    </div>
                </div>

                <div className="py-3 mt-8">
                    <div className="flex justify-between space-x-10">
                        <div
                            onClick={() => {
                                if (mobileItem.index > 0) setMobileItem({ ...services[mobileItem.index - 1], index: mobileItem.index - 1 })
                                else setMobileItem({ ...services[services.length - 1], index: services.length - 1 })
                            }}
                            className={`cursor-pointer p-2 ${isDarkMode ? 'border-gray-600 text-white' : 'border-gray-500 text-[#565656]'} rounded-full border`}>
                            <Icon path='left' w='6' h='6' radius='2' />
                        </div>
                        <div
                            onClick={() => {
                                if (mobileItem.index < services.length - 1) setMobileItem({ ...services[mobileItem.index + 1], index: mobileItem.index + 1 })
                                else setMobileItem({ ...services[0], index: 0 })
                            }}
                            className={`cursor-pointer p-2 ${isDarkMode ? 'border-gray-600 text-white' : 'border-gray-500 text-[#565656]'} rounded-full border`}>
                            <Icon path='right' w='6' h='6' radius='2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
