import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { HoverEffect } from '../ui/aceternity/card-hover-effect';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectTabs = ({
    handleTabClick,
    uniqueTabs,
    filteredData
}: {
    handleTabClick: (tabeName: string) => void;
    uniqueTabs: any,
    filteredData: any
}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='min-h-svh pt-24 w-full'>
            <Tabs defaultValue='All'>
                <div className='justify-center flex'>
                    <TabsList className=' '>
                        <Slider {...settings} className='w-[60vw] '>
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
                        </Slider>
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