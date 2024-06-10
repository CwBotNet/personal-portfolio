"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { HoverEffect } from '../ui/aceternity/card-hover-effect'
import axios from 'axios'
import { Project } from '@/types'


type Props = {}

// static dummy data
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
    const [data, setData] = useState([])
    // const { data } = useSWR('/api/project', fetcher)
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/api/project')
            console.log(data.projects)

            setData(data.projects)
        }

        fetchData()
    }, [])


    const project = data.map((proj: any) => ({
        title: proj.name,
        stack: proj.stack,
        description: proj.description,
        link: proj.link,
        code_link: proj.code_link,
        image: proj.image
    }))
    // console.log(project)

    return (
        <div id='projects' className=' flex justify-center mt-24'>
            <Tabs defaultValue='All'  >
                <div className='justify-center flex'>
                    <TabsList className=''>
                        <TabsTrigger value='All'>All</TabsTrigger>
                        {project.map((tab) => (
                            tab.stack?.map((tab: any) => (
                                <TabsTrigger key={tab.id} value={tab.name}>{tab.name}</TabsTrigger>
                            ))
                        ))}
                    </TabsList>
                </div>
                <TabsContent value='All'>
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={project} />
                    </div>
                </TabsContent>

                {
                    project.map((tab) => (
                        tab.stack?.map((tab: any) => (
                            <TabsContent key={tab.id} value={tab.name}>
                                <div className="max-w-5xl mx-auto px-8">
                                    <HoverEffect items={project} />
                                </div>
                            </TabsContent>
                        ))
                    ))
                }

            </Tabs>
        </div>
    )
}

export default ProjectSection