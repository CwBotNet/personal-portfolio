import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import Navbar from './Navbar'

type Props = {}

const navItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Skill",
        link: "#skill"
    },
    {
        name: "Projects",
        link: "#projects"
    }
]


const NavbarSection = (props: Props) => {
    return (
        <div>
            <Navbar />
            <FloatingNav navItems={navItems} className='' />
        </div>
    )
}

export default NavbarSection