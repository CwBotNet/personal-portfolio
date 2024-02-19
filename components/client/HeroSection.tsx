import Image from 'next/image'
import React from 'react'
import profile from "@/public/Image/pic4.png"
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
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

const HeroSection = () => {
    return (
        <div id="home" className='h-full mt-8'>
            <div id="box" className='flex flex-col-reverse md:flex-row items-center md:justify-between gap-x-4'>
                <div className=' ml-auto mr-auto '>
                    <Card className='border-none'>
                        <CardHeader>
                            <CardTitle className='text-center md:text-[4rem] text-[2rem]'>
                                Hello<span>👋🏻</span> I am Raj
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center w-full'>
                            <h1 className='md:text-[2rem] text-lg '>I am <span className='text-orange-400'>Raj</span> and I am a <span className='text-orange-400'>FullStack Developer</span></h1>
                            <h2 className='text-lg mt-2'>Building bridges between <span className='text-orange-400'> data</span> and <span className='text-orange-400'>design</span>.</h2>
                            <div id="button" className='flex gap-x-4 justify-center mt-4'>
                                <Drawer>
                                    <DrawerTrigger className='border md:hidden px-4 rounded border-nagitive-color bg-card-color'>contact me</DrawerTrigger>
                                    <DrawerContent className='bg-card-color h-[70vh] border-nagitive-color'>
                                        <DrawerHeader className='mt-2'>
                                            <DrawerTitle className='pt-8'>I'm just an email away from turning your ideas into reality.</DrawerTitle>
                                            <DrawerDescription></DrawerDescription>
                                        </DrawerHeader>
                                        <ContactForm className=' h-full mt-4' />
                                    </DrawerContent>
                                </Drawer>

                                <Button variant={"outline"} className='hidden md:inline'>Contact me</Button>
                                <Button variant={"outline"}>Download cv</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='flex items-center  md:w-[30vw]'> <Image src={profile} height={350} width={350} alt='dev image' className='ml-auto mr-auto' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection