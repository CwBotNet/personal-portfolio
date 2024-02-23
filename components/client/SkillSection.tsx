import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

const skill = true
const skillLevel = "expert"

const items = [
  {
    image: < Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
  },
  {
    image: < Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
  },
  {
    image: < Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
  },
  {
    image: < Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
  },
  {
    image: < Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
  },
  {
    image: < Image width={1200} height={1200} alt="skill icon" className={`rounded-full w-20 `} src={"https://images.unsplash.com/photo-1706778573754-e52010c13b97?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
  },
]
const SkillSection = () => {
  return (
    <div className='flex justify-center container'>
      <Card className='w-[80vw] flex flex-col items-center border-none'>
        <CardContent>
          <div className='flex w-[80vw] sm:w-full justify-center md:justify-start gap-2 flex-wrap mt-6'>
            <InfiniteMovingCards
              items={items}
              // direction=''
              speed='fast'
            >

            </InfiniteMovingCards>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillSection