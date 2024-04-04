import Image from 'next/image'
import React from 'react'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import { BackgroundBeams } from '../ui/aceternity/background-beams'

type Props = {}

const words = [
    {
        text: "I ",
        className: "text-2xl"
    },
    {
        text: "am ",
        className: "text-2xl"
    },
    {
        text: "a ",
        className: "text-2xl"
    },
    {
        text: "FullStack ",
        className: "text-2xl"
    },
    {
        text: "Developer.",
        className: " text-2xl text-orange-400 dark:text-orange-400",
    },

]

const HeroSection = (props: Props) => {
    return (
        <>

            <BackgroundBeams  />
            <div id='Home' className='h-[80vh] md:flex-row flex flex-col gap-x-12 justify-center items-center p-4 gap-8'>
                <div id='self intro' className='flex flex-col items-center'>
                    <h1 className='text-4xl'>Hello<span>👋🏻</span> I am Raj</h1>
                    <TypewriterEffectSmooth words={words} />
                    <h2 className='text-lg mt-2'>Building bridges between <span className='text-orange-400'> data</span> and <span className='text-orange-400'>design</span>.</h2>
                </div>
                <div id='image'>
                    <Image src={'/image/avatar.png'} width={1920} height={1080} alt='Developer character' className='w-[20rem]' />
                </div>
                <div id='social'>
                    <div>socials</div>
                </div>
            </div>

        </>
    )
}

export default HeroSection