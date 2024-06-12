import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal'
import Image from 'next/image'
import { baseURL } from '@/constant'

type Props = {}


async function getData() {
    const res = await fetch(`${baseURL}/api/user`, { cache: 'force-cache' })

    if (!res.ok) {
        console.log("faild to fetch data")
    }

    const data = res.json()
    return data
}


const content = [
    {
        title: "Frontend",
        description: " facilis suscipit.Ut iste non dolorum perspiciatis minus nostrum! Quibusdam voluptates veniam esse!",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image src={"/image/about-avatar.png"} width={1920} height={1080} alt='Developer character' className='w-56' />
            </div>
            //     Collaborative Editing
        )
    },
    {
        title: "Backend",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Delectus esse reprehenderit sint facilis suscipit.Ut iste non dolorum perspiciatis minus nostrum! Quibusdam voluptates veniam esse!",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image src={"/image/avatar2.png"} width={1920} height={1080} alt='Developer character' className='w-56' />
            </div>
            //     Collaborative Editing
        )
    },
    {
        title: "Full stack",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Delectus esse reprehenderit sint facilis suscipit.Ut iste non dolorum perspiciatis minus nostrum! Quibusdam voluptates veniam esse!",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image src={"/image/avatar3.png"} width={1920} height={1080} alt='Developer character' className='w-56' />
            </div>
            //     Collaborative Editing
        )
    },
]

const SkillSection = async () => {

    const data = await getData()
    content[0].description = data.response[0].skills.frontend
    content[1].description = data.response[0].skills.backend
    content[2].description = data.response[0].skills.fullStack
    return (
        <div id='skill' className=''>
            <StickyScroll content={content} contentClassName='' />
        </div>
    )
}

export default SkillSection