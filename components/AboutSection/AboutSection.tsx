import React from 'react'
import Image from 'next/image'
import { Tabs } from '@/components/ui/aceternity/tabs'

type Props = {}


const tabs = [
    {
        title: 'About me ',
        value: 'about',
        content: (
            <div className="w-full overflow-hidden relative h-[60vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                about me
            </div>
        )
    },
    {
        title: "Certifications",
        value: "certification",
        content: (
            <div className='w-full overflow-hidden relative h-[60vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
                certification card
            </div>
        )
    },
    {
        title: "Education",
        value: "education",
        content: (
            <div className='w-full overflow-hidden relative h-[60vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
                education card
            </div>
        )
    },

]

const AboutSection = (props: Props) => {
    return (
        <div className='h-[90vh] '>
            <div id='about' className=''>
                <Tabs tabs={tabs} containerClassName='justify-center gap-4' />
            </div>
        </div>
    )
}

export default AboutSection