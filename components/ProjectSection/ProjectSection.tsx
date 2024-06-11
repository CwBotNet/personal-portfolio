"use client"

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Project } from '@/types';
import ProjectTabs from './ProjectTabs';

type Props = {};

const ProjectSection: React.FC = (props: Props) => {
    const [data, setData] = useState<Project[]>([]);
    const [stack, setStack] = useState("All");
    const [filteredData, setFilteredData] = useState<Project[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('/api/project');
                setData(data.projects);
                setFilteredData(data.projects); // Initialize filteredData with all projects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (stack === 'All') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(proj => proj.stack?.some(stackItem => stackItem.name === stack));
            setFilteredData(filtered);
        }
    }, [stack, data]);

    const handleTabClick = (tabName: string) => {
        setStack(tabName);
    };

    const uniqueTabs = new Set<string>();
    data.forEach(proj => {
        proj.stack?.forEach(tab => {
            uniqueTabs.add(tab.name);
        });
    });

    return (
        <div id='projects' className='flex justify-center mt-24'>
            <ProjectTabs filteredData={filteredData} handleTabClick={handleTabClick} uniqueTabs={uniqueTabs} />
        </div>
    );
};

export default ProjectSection;
