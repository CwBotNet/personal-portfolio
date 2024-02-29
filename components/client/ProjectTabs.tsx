import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Eye, Github } from 'lucide-react'
import Link from 'next/link'
type Props = {
    data: []
}

const ProjectTabs = (props: Props) => {
    return (
        <div className=' container w-full h-screen flex gap-x-4 flex-wrap items-center justify-center'>
            {
                props.data.map(
                    (data: any, idx: any) => (
                        <div key={idx} className="relative mt-12 flex w-80 flex-col rounded-xl bg-[#FBFBFF] bg-clip-border text-gray-700 shadow-md">
                            <div className={`relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-cover bg-center from-blue-500 to-blue-600 `}
                                style={{ backgroundImage: `url(${data.coverImage})` }}
                            >
                            </div>
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {data.title}
                                </h5>
                                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    {data.description}
                                </p>
                            </div>
                            <div className="p-6 pt-0 flex gap-x-2 ">
                                <Link href={`${data.sorceCode}`}>
                                    <Github className='hover:text-blue-500' />
                                </Link>
                                <Link href={`${data.LivePreview}`}>
                                    <Eye className='hover:text-blue-500' />
                                </Link>

                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export { ProjectTabs }