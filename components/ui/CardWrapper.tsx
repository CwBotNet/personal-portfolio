import React, { ReactNode } from 'react'


const CardWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full overflow-hidden relative h-[60vh] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'>
            {children}
        </div>
    )
}

export default CardWrapper