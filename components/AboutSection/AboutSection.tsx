import React from 'react'
import Image from 'next/image'
import { Tabs } from '@/components/ui/aceternity/tabs'
import Education from './Education'
import AboutMe from './AboutMe'
import Certification from './Certification'

type Props = {}


const tabs = [
    {
        title: 'About me ',
        value: 'about',
        content: (
            <AboutMe />
        )
    },
    {
        title: "Certifications",
        value: "certification",
        content: (
            <Certification />
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
        <div id='about' className='min-h-svh'>
            <div className=' w-full'>
                <Tabs tabs={tabs} containerClassName='justify-center text-sm lg:text-base gap-4 w-full tracking-wider leading-normal' tabClassName='flex justify-center item-center w-full text-xs md:text-sm lg:text-base font-normal' />
            </div>
        </div>
    )
}

export default AboutSection