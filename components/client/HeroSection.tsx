import Image from 'next/image'
import React from 'react'
import profile from "@/public/Image/pic4.png"
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/moving-border'
import { Button as Buttonui } from '../ui/button'
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
                            <div id="button" className='flex gap-x-4 justify-center mt-4 '>
                                <Drawer>
                                    <DrawerTrigger className='border sm:hidden px-4 rounded-2xl border-nagitive-color bg-card-color'>contact me</DrawerTrigger>
                                    <DrawerContent className='bg-card-color h-[80vh] border-nagitive-color'>
                                        <DrawerHeader className='mt-2'>
                                            <DrawerTitle className='pt-8'>I'm just an email away from turning your ideas into reality.</DrawerTitle>
                                            <DrawerDescription></DrawerDescription>
                                        </DrawerHeader>
                                        <ContactForm className=' h-full mt-4' />
                                    </DrawerContent>
                                </Drawer>

                                <button className="p-[3px] relative hidden sm:inline-block ">
                                    <div className="absolute  inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl" />
                                    <div className="px-8 py-2  bg-black rounded-[7px]  relative group transition duration-200 text-white hover:bg-transparent">
                                        contact me
                                    </div>
                                </button>

                                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                        Download cv
                                    </span>
                                </button>
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