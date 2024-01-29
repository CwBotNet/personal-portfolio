"use client"
import Link from "next/link";
// import your icons
import { faInstagram, faXTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let date = new Date()

export default () => {
    return (
        <footer className="text-[#191919] px-4 py-5 max-w-screen-xl mx-auto md:px-8 z-50 fixed bottom-0 right-6">
            <div className="mt-8 items-center justify-between sm:flex gap-4">
                <div className="mt-4 sm:mt-0 ">
                    &copy; {date.getFullYear()} Float UI All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border bg-white rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                                <FontAwesomeIcon color="#405DE6" icon={faLinkedin} />
                            </Link>
                        </li>

                        <li className="w-10 h-10 border bg-white  rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                                <FontAwesomeIcon color="#4267B2" icon={faFacebook} />
                            </Link>
                        </li>

                        <li className="w-10 h-10 border bg-white rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </Link>
                        </li>

                        <li className="w-10 h-10 border bg-pink-50 rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                                <FontAwesomeIcon color="#C13584" icon={faInstagram} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
