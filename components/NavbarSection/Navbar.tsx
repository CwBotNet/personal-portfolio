import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <>
            <div className='hidden md:flex justify-between items-center p-3 w-full fixed top-0 z-50 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
'>
                <div className='flex items-center gap-x-2 tracking-wider'>
                    <Image src={'/image/avatar.png'} width={480} height={480} alt='Developer character' className='w-12 rounded-full' />
                    <div className='flex flex-col items-start'>
                        <h3 className='text-md font-extrabold'>Raj sahani</h3>
                        <p className='text-orange-400 text-sm font-bold'>
                            FullStack Dev
                        </p>
                    </div>
                </div>
                <div className='flex gap-x-8 items-center'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"#about"}>About</Link>
                    <Link href={"#projects"}>Projects</Link>
                    <button className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 ">
                        <Link href={"#contact"}>Contact</Link>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Navbar