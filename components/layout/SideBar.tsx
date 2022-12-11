import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {ChevronRightIcon} from '@heroicons/react/24/outline'
import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import TopScreen from "./TopScreen";
import Plans from "../list/Plans";

export default function SideBar() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="fixed top-5 left-0 flex pt-4 z-10">
                <button
                    type="button"
                    className="bg-sideBar bg-contain h-[150px] w-[50px] bg-no-repeat focus:outline-0"
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Close panel</span>
                    <ChevronRightIcon className="h-6 w-6 float-left text-white" aria-hidden="true"/>
                </button>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute top-5 right-0 translate-x-full flex pt-4">
                                                <button
                                                    type="button"
                                                    className="bg-sideBar bg-contain h-[150px] w-[50px] bg-no-repeat focus:outline-0"
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <ChevronLeftIcon className="h-6 w-6 float-left text-white"
                                                                     aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-auto bg-purple py-6">
                                            <Dialog.Title className="text-lg font-medium text-white">
                                                <TopScreen/>
                                            </Dialog.Title>
                                            <Plans/>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}