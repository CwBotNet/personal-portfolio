import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import httpModule from '@/app/helpers/httpModule'

const skill = true
const skillLevel = "expert"



const SkillSection = async () => {

  const response = await httpModule.get('/skill')
  const data = response.data.data

  const items = data.map((item: any, idx: any) => ({
    image: <Image key={idx} width={500} height={500} alt="skill icon" className={` w-20 `} src={item.icon} />,
  }));

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