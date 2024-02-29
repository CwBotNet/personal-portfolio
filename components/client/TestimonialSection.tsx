import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const TestimonialSection = () => {
    return (
        <div className='h-full w-full container p-8' id="testimonials">
            <Card className='border-none'>
                <CardHeader className='text-center m-2'>
                    <CardTitle className='text-2xl font-semibold'>
                        Testimonial
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col md:flex-row items-center md:justify-center gap-8 pt-8'>
                    <Carousel className="w-full flex justify-center">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 12 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 gap-12 flex justify-center">
                                        <Card className='md:w-[20vw] rounded-xl p-4 border-none'>
                                            <div className='flex flex-col items-center'>
                                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur deserunt est atque.</p>
                                                <div className='flex mt-4 gap-2'>
                                                    <div className='flex items-center'><Image alt='profile' width={1200} height={1200} className='h-10 w-10 rounded-full' src={"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></div>
                                                    <div className='flex flex-col justify-center'>
                                                        <h1 className='text-xs'>name</h1>
                                                        <p className='text-xs'>company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </CardContent>
            </Card>

        </div>
    )
}

export default TestimonialSection