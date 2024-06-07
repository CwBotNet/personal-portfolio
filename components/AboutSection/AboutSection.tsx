import React from 'react'
import Image from 'next/image'
import { Tabs } from '@/components/ui/aceternity/tabs'
import Education from './Education'

type Props = {}


const tabs = [
    {
        title: 'About me ',
        value: 'about',
        content: (
            <div className='w-full overflow-hidden relative h-[60vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'>
                about me
            </div>
        )
    },
    {
        title: "Certifications",
        value: "certification",
        content: (
            <div className='w-full overflow-hidden relative h-[60vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'>
                certification card
            </div>
        )
    },
    {
        title: "Education",
        value: "education",
        content: (
            <Education />
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