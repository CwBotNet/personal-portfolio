import Image from 'next/image'
import React from 'react'
import profile from "@/public/Image/pic4.png"
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
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
                                <Button variant={"outline"}>contact me</Button>
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