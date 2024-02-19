import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'

const skill = true
const skillLevel = "expert"
const SkillSection = () => {
  return (
    <div className='flex justify-center'>
      <Card className='w-[80vw] flex flex-col items-center border-none'>
        <CardHeader className='text-center'>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex md:w-[50vw] justify-center md:justify-start gap-6 flex-wrap mt-6'>
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillSection