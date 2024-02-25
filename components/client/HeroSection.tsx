import Image from 'next/image'
import React from 'react'
import profile from "@/public/Image/pic4.png"
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/moving-border'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import ContactForm from './ContactForm'
import { MovingBorder } from '../ui/moving-border'
import { Spotlight } from './Spotlight'
import { ButtonsCard, buttons } from '../ui/tailwindcss-buttons'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import { BackgroundBeams } from '../ui/background-beams'


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

];

const HeroSection = () => {
    return (
        <div id="home" className='h-full flex  items-center justify-center mt-8 container'>
            {/* <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white" /> */}
            <div id="box" className='flex flex-col-reverse md:flex-row items-center md:justify-between gap-x-4'>
                <div className=' ml-auto mr-auto '>
                    <Card className='border-none'>
                        <CardHeader>
                            <CardTitle className='text-center md:text-[4rem] text-[2rem]'>
                                Hello<span>👋🏻</span> I am Raj
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='flex flex-col items-center w-full'>
                            <TypewriterEffectSmooth cursorClassName='bg-orange-400/80 h-6' words={words} />
                            <h2 className='text-lg mt-2'>Building bridges between <span className='text-orange-400'> data</span> and <span className='text-orange-400'>design</span>.</h2>
                            <div id="button" className='flex gap-x-4 justify-center mt-4'>
                                <Drawer>
                                    <DrawerTrigger className='border md:hidden px-4 rounded-2xl border-nagitive-color bg-card-color'>contact me</DrawerTrigger>
                                    <DrawerContent className='bg-card-color h-[80vh] border-nagitive-color'>
                                        <DrawerHeader className='mt-2'>
                                            <DrawerTitle className='pt-8'>I'm just an email away from turning your ideas into reality.</DrawerTitle>
                                            <DrawerDescription></DrawerDescription>
                                        </DrawerHeader>
                                        <ContactForm className=' h-full mt-4' />
                                    </DrawerContent>
                                </Drawer>


                                <Button
                                    borderClassName='border-[2.5rem] border-sky-600 '
                                    // borderRadius="2.5rem"
                                    containerClassName=''
                                    duration={3200}
                                    className="bg-white border-2 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    <MovingBorder children rx='10' ry='10' />
                                    contact me
                                </Button>
                                {/* <div>
                                    <Button
                                        // borderRadius="1.75rem"
                                        containerClassName='rounded'
                                        borderClassName=' border-orange-400 border-[2.5rem]'
                                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                    >
                                        download cv
                                    </Button>
                                </div> */}

                                <Button duration={3200} borderClassName='border-[2.2rem] border-sky-600 ' borderRadius='1.75rem' className=" inline-flex h-16 animate-shimmer items-center justify-center rounded border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    Download cv
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='flex items-center  md:w-[30vw]'> <Image src={profile} height={350} width={350} alt='dev image' className='ml-auto mr-auto' />
                </div>
            </div>
            <BackgroundBeams className="z-[-11]" />
        </div>
    )
}

export default HeroSection