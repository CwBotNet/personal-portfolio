import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faSquareInstagram, faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
type Props = {}

const FooterSection = (props: Props) => {
    return (
        <>

            <div className='flex gap-x-8 p-8 justify-center'>
                <Link href={"https://x.com/Raj_sahani22"}>
                    <FontAwesomeIcon icon={faSquareXTwitter} className='w-8' />
                </Link>
                <Link href={"https://www.instagram.com/code_botnet?igsh=MXQxcGlqNjlpeHpyOQ=="}>
                    <FontAwesomeIcon icon={faSquareInstagram} className='w-8' />
                </Link>
                <Link href={"https://github.com/CwBotNet"}>
                    <FontAwesomeIcon icon={faSquareGithub} className='w-8' />
                </Link>
                <Link href={"https://www.linkedin.com/in/raj-sahani-5ab472257/"}>
                    <FontAwesomeIcon icon={faLinkedin} className='w-8' />
                </Link>

            </div>
        </>
    )
}

export default FooterSection