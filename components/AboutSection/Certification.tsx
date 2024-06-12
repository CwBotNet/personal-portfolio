import CardWrapper from '../ui/CardWrapper'
import { baseURL } from '@/constant';
import { LinkPreview } from '../ui/aceternity/link-preview';
import Image from 'next/image';

type Props = {}

async function getData() {
    try {

        const res = await fetch(`${baseURL}/api/certification`, { cache: "force-cache" });
        if (!res.ok) {
            console.log("failed to fetch data")
        }
        const data = res.json()
        return data
    } catch (error: any) {
        console.log(error.message)
    }
}


const Certification = async () => {
    const data = await getData()

    return (
        <CardWrapper>
            <div className='flex flex-col items-start '>
                {data.certifications.map((item: any, idx: any) => (
                    <div key={idx} className='flex gap-x-2'>
                        <Image src={item.logo} alt='' width={52} height={52} className='bg-white rounded-full' />
                        <h1 className='text-2xl' >
                            <LinkPreview url={item.image}>
                                <span className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent'>
                                    {item.name}:{" "}
                                </span>
                            </LinkPreview>
                            {item.course}
                        </h1>
                    </div>
                ))}
            </div>
        </CardWrapper >

    )
}

export default Certification