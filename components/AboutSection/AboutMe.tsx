import CardWrapper from '../ui/CardWrapper'
import { baseURL } from '@/constant';

const getData = async () => {
    try {
        const res = await fetch(`${baseURL}/api/user`, { cache: "force-cache" });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error; // re-throw the error after logging it
    }
}

const AboutMe = async () => {
    const data = await getData()


    // console.log(data.response[0].about)
    return (
        <CardWrapper>
            <div className='flex justify-center items-center p-8'>
                <h1>
                    {data.response[0].about}
                </h1>
            </div>
        </CardWrapper>
    )
}

export default AboutMe