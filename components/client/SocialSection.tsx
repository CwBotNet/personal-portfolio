import React from 'react'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import { Github, Mail, Twitter } from 'lucide-react'

const SocialSection = () => {
    return (
        <div>
            <Card className='w-full border-none'>
                <CardContent className='flex justify-between pt-4'>
                    <div className='text-xs text-gray-500'>
                        @2024 all right resvered
                    </div>
                    <div className='flex gap-2'>
                        <Link href={"#"}><Github /></Link>
                        <Link href={"#"}><Mail /></Link>
                        <Link href={"#"}><Twitter /></Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SocialSection