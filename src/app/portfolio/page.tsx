import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
    const items = [
        {
            id: 1,
            color: "from-blue-300 to-blue-500",
            title:"Portfolio Website",
            img: "/cat.png",
            desc:"My Portfolio wowwwwwwowwwwwwowwwwwwowwwwwwowwwwwwowwwwwwoww wwwowwwwwwowwwww wowwwww",
            link: "/",
            github: "https://github.com/KeamKRUB/Portfolio_Website"
        },
        {
            id: 2,
            color: "from-blue-500 to-violet-300",
            title:"Shoe Store Website",
            img: "/cat.png",
            desc:"เว็บไซต์ขายรองเท้า ที่ไม่มีรองเท้าขาย",
            link: "http://localhost/Project01/",
            github: "https://github.com/KeamKRUB/Portfolio_Website"
        },
        {
            id: 3,
            color: "from-violet-300 to-violet-500",
            title:"API For KU-Rent",
            img: "/cat.png",
            desc:"API ดึงข้อมูลเรียงหมวดหมู่ แต่ตัวดึงข้อมูลอยู่ที่เพื่อน",
            link: "http://localhost/Ku-Rent/",
            github: "https://github.com/KeamKRUB/Portfolio_Website"
        },
        {
            id: 4,
            color: "from-violet-500 to-red-300",
            title:"API For Storyworld",
            img: "/cat.png",
            desc:"เหมือนอันที่แล้วแหละ",
            link: "http://localhost/Storyworld/",
            github: "https://github.com/KeamKRUB/Portfolio_Website"
        },
        {
            id: 5,
            color: "from-red-300 to-red-500",
            title:"Portfolio Website",
            img: "/ig.png",
            desc:"My Portfolio wowwwww",
            link: "localhost:3000",
            github: "https://github.com/KeamKRUB/Portfolio_Website"
        }
    ]
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress,[0,1],["0%","-67%"]);
    
    return(
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:0.8}}>
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center text-8xl">
                    My Portfolio
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-300"></div>
                        {items.map(item=>(
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                                <div className="flex flex-col gap-8 text-white flex items-center jestify-center text-center">
                                    <h1 className="font-bold text-4xl">{item.title}</h1>  
                                    <div className="">
                                        <Image src="/cat.png" alt="" width={400} height={400}/>
                                    </div>
                                    <p className="bg-white text-black rounded-xl p-4 w-2/3">
                                        {item.desc}
                                    </p>
                                    <div className="flex gap-12">
                                        <Link href={item.link} className="p-3 font-semibold bg-white text-black rounded-lg">
                                            Preview
                                        </Link>
                                        <Link href={item.github} className="p-3 font-semibold bg-black text-white rounded-lg">
                                            Github
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Portfolio;
