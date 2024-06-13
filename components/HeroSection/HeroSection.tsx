import Image from 'next/image'
import React from 'react'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import { BackgroundBeams } from '../ui/aceternity/background-beams'
import DownloadBtn from '../ui/DownloadBtn'
import ContactButton from '../ui/ContactButton'


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

const HeroSection = () => {
    return (
        <>

            <div id='Home' className='min-h-svh z-50  md:flex-row flex flex-col gap-x-16 justify-center place-items-center items-center gap-8'>
                <div id='self intro' className='flex  flex-col gap-6'>
                    <div className='flex flex-col items-center justify-center '>
                        <h1 className='text-4xl'>Hello<span>👋🏻</span> I am Raj</h1>
                        <TypewriterEffectSmooth words={words} />
                        <h2 className='text-lg'>Building bridges between <span className='text-orange-400'> data</span> and <span className='text-orange-400'>design</span>.</h2>
                    </div>
                    <div className='flex justify-center gap-x-8 items-center '>
                        <DownloadBtn />
                        <ContactButton />
                    </div>
                </div>

                <div id='image'>
                    <Image src={'/image/avatar.png'} width={1920} height={1080} alt='Developer character' className='w-[20rem]' />
                </div>

            </div>
            <BackgroundBeams />

        </>
    )
}

export default HeroSection