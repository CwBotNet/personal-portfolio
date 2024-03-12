import React from 'react';
import Image from 'next/image'; // assuming you want to use Next.js Image component
import { Eye, Github } from 'lucide-react';
import Link from 'next/link';
import httpModule from "@/app/helpers/httpModule";

interface Project {
    title: string;
    description: string;
    coverImage: string;
    sourceCode: string; // corrected typo
    LivePreview: string;
}

const ProjectTabs = async () => {
    try {
        const response: any = await httpModule.get<Project[]>("/project");
        const data = response.data.data;

        return (
            <div className=' container w-full h-screen flex gap-x-4 flex-wrap items-center justify-center'>
                {data.map((project: Project, idx: number) => (
                    <div key={idx} className="relative mt-12 flex w-80 flex-col rounded-xl bg-[#FBFBFF] bg-clip-border text-gray-700 shadow-md">
                        <div className={`relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-cover bg-center from-blue-500 to-blue-600 `}>
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {project.title}
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {project.description}
                            </p>
                        </div>
                        <div className="p-6 pt-0 flex gap-x-2 ">
                            <Link href={`${project.sourceCode}`}>
                                <Github className='hover:text-blue-500' />
                            </Link>
                            <Link href={`${project.LivePreview}`}>
                                <Eye className='hover:text-blue-500' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error("Error fetching projects:", error);
        // Handle the error here, potentially display an error message
        return <div>Error fetching projects</div>;
    }
};

export { ProjectTabs };
