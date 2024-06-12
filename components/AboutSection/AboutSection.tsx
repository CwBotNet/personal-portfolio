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
        <div className='h-[90vh] '>
            <div id='about' className=''>
                <Tabs tabs={tabs} containerClassName='justify-center gap-4' />
            </div>
        </div>
    )
}

export default AboutSection