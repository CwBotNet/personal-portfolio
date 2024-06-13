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
        <div id='about' className='min-h-svh p-8 pt-24'>
            <Tabs tabs={tabs} containerClassName='justify-center text-[0.6rem] lg:text-[0.9rem] gap-4 w-full' tabClassName='flex justify-center item-center w-full ' />
        </div>
    )
}

export default AboutSection