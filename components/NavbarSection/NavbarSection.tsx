import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'

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
        <div><FloatingNav navItems={navItems} className='' /></div>
    )
}

export default NavbarSection