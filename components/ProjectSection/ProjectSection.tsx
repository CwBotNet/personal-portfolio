"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { HoverEffect } from '../ui/aceternity/card-hover-effect'

type Props = {}


const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

const ProjectSection = (props: Props) => {
    return (
        <div id='projects' className=' flex justify-center mt-24'>
            <Tabs defaultValue='All'  >
                <div className='justify-center flex'>
                    <TabsList className=''>
                        <TabsTrigger value='All'>All</TabsTrigger>
                        <TabsTrigger value='Nextjs'>Next.js</TabsTrigger>
                        <TabsTrigger value='Mern'>Mern</TabsTrigger>
                        <TabsTrigger value='Backend'>Backend</TabsTrigger>
                        <TabsTrigger value='Frontend'>Frontend</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value='All'>
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                </TabsContent>
                <TabsContent value='Nextjs'>
                    Next.js projects
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                </TabsContent>
                <TabsContent value='Mern'>
                    Mern projects
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                </TabsContent>
                <TabsContent value='Backend'>
                    Backend projects
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                </TabsContent>
                <TabsContent value='Frontend'>
                    Frontend projects
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                </TabsContent>

            </Tabs>
        </div>
    )
}

export default ProjectSection