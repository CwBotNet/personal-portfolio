import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Adjust the import path
import Image from 'next/image';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'; // Adjust the import path
import httpModule from '@/app/helpers/httpModule';


interface skill {
  icon: string;
}

const SkillSection = async () => {
  try {

    const response: any = await httpModule.get<skill[]>('/skill');
    const data = response.data.data;

    const items = data.map((item: skill, idx: number) => ({
      image: (
        <Image
          key={idx}
          width={500}
          height={500}
          alt="skill icon"
          className="w-20"
          src={item.icon}
        />
      ),
    }));

    return (
      <div className="flex justify-center container">
        <Card className="w-[80vw] flex flex-col items-center border-none">
          <CardContent>
            <div className="flex w-[80vw] sm:w-full justify-center md:justify-start gap-2 flex-wrap mt-6">
              <InfiniteMovingCards items={items} speed="fast" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error: any) {
    console.log(error?.message);
    return null

  }
};

export default SkillSection;
