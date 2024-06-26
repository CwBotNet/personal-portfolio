import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        name: string;
        description: string;
        link: string;
        code_link?: string;
        image?: string;
        stack?: string[];
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 w-full",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="flex items-center gap-2">
                            <CardTitle>{item.name}</CardTitle>
                            <Link href={`${item.code_link}`} >
                                <Link2 />
                            </Link>
                        </div>
                        <CardDescription>{item.description}</CardDescription>

                        <div className="flex flex-wrap gap-1 pt-1">
                            {item.stack?.map((stack: any) => (
                                <div key={stack.id} className="flex justify-center items-center">
                                    <span className='inline-flex flex-wrap cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-2 py-1 text-[0.6rem] sm:text-sm font-medium text-gray-300 backdrop-blur-3xl'>
                                        <span className='bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent'>
                                            {stack.name}
                                        </span>
                                    </span>
                                </div>
                            ))}

                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
