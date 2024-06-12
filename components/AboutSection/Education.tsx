
import { baseURL } from '@/constant';
import CardWrapper from '../ui/CardWrapper'

async function getData() {

    try {

        const res = await fetch(`${baseURL}/api/education`, { cache: "force-cache" });
        if (!res.ok) {
            console.log("failed to fetch data")
        }
        const data = res.json()
        return data
    } catch (error: any) {
        console.log(error.message)
    }
}

const Education = async () => {
    const data = await getData()


    return (
        <CardWrapper>
            <div className='flex flex-col items-center'>
                <span className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent'>
                    {data.education[0].Name}
                </span>
                <p>
                    {data.education[0].course}
                </p>
            </div>

        </CardWrapper>
    )
}

export default Education