import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { HoverEffect } from '../ui/aceternity/card-hover-effect';
import { Project } from '@/types';
type Props = {}

const ProjectTabs = ({
    handleTabClick,
    uniqueTabs,
    filteredData
}: {
    handleTabClick: (tabeName: string) => void;
    uniqueTabs: any,
    filteredData: any
}) => {
    return (
        <div>
            <Tabs defaultValue='All'>
                <div className='justify-center flex'>
                    <TabsList className=''>
                        <TabsTrigger value='All' onClick={() => handleTabClick('All')}>All</TabsTrigger>
                        {[...uniqueTabs].map((tabName, idx) => (
                            <TabsTrigger
                                key={idx}
                                value={tabName}
                                onClick={() => handleTabClick(tabName)}
                            >
                                {tabName}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                <TabsContent value='All'>
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={filteredData} />
                    </div>
                </TabsContent>
                {[...uniqueTabs].map((tabName) => (
                    <TabsContent key={tabName} value={tabName}>
                        <div className="max-w-5xl mx-auto px-8">
                            <HoverEffect items={filteredData} />
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default ProjectTabs