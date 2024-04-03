import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

type Props = {}

const ProjectSection = (props: Props) => {
    return (
        <div id='project' className=' flex justify-center mt-24'>
            <Tabs defaultValue='All'  >
                <TabsList>
                    <TabsTrigger value='All'>All</TabsTrigger>
                    <TabsTrigger value='Nextjs'>Next.js</TabsTrigger>
                    <TabsTrigger value='Mern'>Mern</TabsTrigger>
                    <TabsTrigger value='Backend'>Backend</TabsTrigger>
                    <TabsTrigger value='Frontend'>Frontend</TabsTrigger>
                </TabsList>
                <TabsContent value='All'>
                    All projects
                </TabsContent>
                <TabsContent value='Nextjs'>
                    Next.js projects
                </TabsContent>
                <TabsContent value='Mern'>
                    Mern projects
                </TabsContent>
                <TabsContent value='Backend'>
                    Backend projects
                </TabsContent>
                <TabsContent value='Frontend'>
                    Frontend projects
                </TabsContent>

            </Tabs>
        </div>
    )
}

export default ProjectSection