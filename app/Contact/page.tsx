"use client"
import React from 'react'

const Contact = () => {
    return (
        <main className="py-14 bg-image h-screen pt-24">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-indigo-600 font-semibold">
                        Contact
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p>
                        We’d love to hear from you! Please fill out the form bellow.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                                <label className="font-medium">
                                    First name
                                </label>
                                <input
                                    title='first name'
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-800 focus:border-indigo-600 shadow-sm rounded-xl"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Last name
                                </label>
                                <input
                                    title='last name'
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-800 focus:border-indigo-600 shadow-sm rounded-xl"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                title='email'
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-800 focus:border-indigo-600 shadow-sm rounded-xl"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r  border-gray-800 pr-2">
                                    <select title='contact number code' className="text-sm bg-transparent outline-none rounded-xl h-full ">
                                        <option>IN</option>
                                        <option>US</option>
                                        <option>MR</option>
                                        <option>ES</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+91 (5555) 000-000"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 placeholder:text-white appearance-none bg-transparent outline-none border border-gray-800 focus:border-indigo-600 shadow-sm rounded-xl"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea title='message' required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-gray-800 focus:border-indigo-600 shadow-sm rounded-xl"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-xl duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact
