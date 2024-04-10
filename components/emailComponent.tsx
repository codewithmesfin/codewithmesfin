import React, { Fragment, useState } from 'react'
import PrimaryButton from './primaryButton'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Icon from './icon';

export default function EmailComponent() {
    const [loading, setLoading] = useState(false)
    let [isOpen, setIsOpen] = useState(false)

    const [message, setMessage] = useState<any>({ email: "", phone: "", name: "", subject: "", message: "" })

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const submit = async () => {
        if (message.email != "" && message.name != "" && message.message != "") {
            setLoading(true)
            const payload = {
                subject: `${message.name} - ${message.phone}`,
                from: message.email,
                to: "sciemesfin55@gmail.com",
                message: message.message
            }
            try {
                await axios.post('/api/emailApi', {
                    ...payload
                });
                toast.success('Message sent to Mesfin Successfully!', {
                    position: "top-right",
                });
            } catch (error) {
                toast.error('Unable to send message. Try again later.', {
                    position: "top-right"
                });
            } finally {
                closeModal()
                setLoading(false)
            }
        }



    }

    return (
        <>
            <div className="flex space-x-3">
                <div className='w-[62%] md:w-3/5'>
                    <div
                        className='cursor-pointer text-gray-400 w-full bg-white border border-gray-100 px-4 rounded-xl w-full py-3'
                        onClick={openModal}
                    >Your email address</div>
                </div>
                <div className='w-[38%] md:w-2/5 '>
                    <PrimaryButton title="Get Started"
                        onClick={openModal}
                    />

                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10"
                    //  onClose={closeModal}
                    static
                    onClose={() => null}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex items-center justify-between text-lg py-3 font-medium leading-6 text-gray-900"
                                    >
                                        Reach out Mesfin
                                        <div>
                                            <div
                                            onClick={closeModal}
                                            className='cursor-pointer text-red-600'>
                                                <Icon path='close' w='6' h='6' radius='2' />
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                    <form onSubmit={e => e.preventDefault()}>
                                        <div className="my-2">
                                            <input type="text" placeholder='Your full name'
                                                className='w-full bg-white border border-gray-100 px-4 rounded-xl w-full py-3'
                                                required
                                                value={message.name}
                                                onChange={(e: any) => setMessage({ ...message, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <input type="email" placeholder='Your email address'
                                                className='w-full bg-white border border-gray-100 px-4 rounded-xl w-full py-3'
                                                required
                                                value={message.email}
                                                onChange={(e: any) => setMessage({ ...message, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <input type="text" placeholder='Your Phone Number'
                                                className='w-full bg-white border border-gray-100 px-4 rounded-xl w-full py-3'
                                                value={message.phone}
                                                onChange={(e: any) => setMessage({ ...message, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <textarea
                                                rows={6} placeholder='Message to Mesfin'
                                                className='w-full bg-white border border-gray-100 px-4 rounded-xl w-full py-3'
                                                required
                                                value={message.message}
                                                onChange={(e: any) => setMessage({ ...message, message: e.target.value })}
                                            />
                                        </div>

                                        <div className="my-4 ">
                                            <PrimaryButton title="Submit"
                                                onClick={submit}
                                                isLoading={loading}
                                            />
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
