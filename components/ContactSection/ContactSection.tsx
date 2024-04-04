import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from '../ui/button'



const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

type Props = {}

const ContactSection = (props: Props) => {
    return (

        <>
            <div id="testimonial" className="h-[40rem] mt-[6rem] rounded-xl flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
            </div>

            <div id='contact' className=' container p-12 flex flex-col-reverse lg:flex-row-reverse md:justify-around items-center pt-24 gap-12'>
                <div id='contactsection' className='w-[80vw]'>
                    <Label>
                        Name
                    </Label>
                    <Input placeholder="Name" />
                    <Label>
                        Email
                    </Label>
                    <Input placeholder="Email" type='email' />
                    <Label>
                        Contact
                    </Label>
                    <Input placeholder="contact" type='number' />
                    <Select>
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Frontend</SelectItem>
                            <SelectItem value="dark">Backend</SelectItem>
                            <SelectItem value="system">FullStack</SelectItem>
                        </SelectContent>
                    </Select>
                    <Textarea placeholder="message" className='mt-4' />
                    <Button className='mt-4 w-full'>Send Message</Button>
                </div>
                <div className="flex justify-center items-center tracking-wider">
                    <h1 className="text-3xl text-center">I&apos;m passionate about design and
                        <span className="text-orange-400">
                            {" "} I&apos;m always looking for new projects.
                        </span>
                        Let&apos;s chat and see how I can help bring your vision to life</h1>
                </div>
            </div>
        </>
    )
}

export default ContactSection