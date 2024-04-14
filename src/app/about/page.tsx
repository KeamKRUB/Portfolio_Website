"use client"
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useInView} from 'framer-motion'
import {useRef} from 'react'
import Link from 'next/link'

const About = () => {
    const skillRef = useRef(null)
    const isSkillRefInView = useInView(skillRef, { once: true, margin: "-200px" });
    
    const eduRef1 = useRef(null)
    const iseduRef1InView = useInView(eduRef1,{ once: true, margin: "-200px" })

    const eduRef2 = useRef(null)
    const iseduRef2InView = useInView(eduRef2,{ once: true, margin: "-200px" })

    const eduRef3 = useRef(null)
    const iseduRef3InView = useInView(eduRef3,{ once: true, margin: "-200px" })
//////////////
    const expRef1 = useRef(null)
    const isexpRef1InView = useInView(expRef1,{ once: true, margin: "-200px" })

    const expRef2 = useRef(null)
    const isexpRef2InView = useInView(expRef2,{ once: true, margin: "-200px" })

    const expRef3 = useRef(null)
    const isexpRef3InView = useInView(expRef3,{ once: true, margin: "-200px" })

    const conRef = useRef(null)
    const isconRefInView = useInView(conRef,{ once: true, margin: "-200px" })

    const profileRef = useRef(null)
    const isProfileInView = useInView(profileRef,{ once: true, margin: "-200px" })

    return(
        <motion.div className=" h-full overflow-hidden" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:0.8}}>
        {/*Content*/}
        <div className="h-full overflow-scroll overflow-x-hidden lg:flex">
            {/*Describe*/}
            <div className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                {/*BIO*/}
                <motion.div 
                className="flex flex-col gap-12 justify-center" ref={profileRef}>
                    <h1 className="font-bold text-2xl">
                        My Profile
                    </h1>
                    <p className="text-lg">
                        Hello my name is pawat chaijaroen i want to get job now yeah
                    </p>
                    <span className="italic ">“Be yourself; everyone else is already taken.” - Oscar Wilde</span>
                </motion.div>

                {/*My Education*/}
                <div className="flex flex-col justify-center">
                <motion.h1 
                initial={{x:"-500px"}} 
                animate={iseduRef1InView ? {x:0}:{}} 
                transition = {{delay:0.2}}
                className="pb-10 font-bold text-2xl">
                        My Education
                    </motion.h1>
                    {/*Education List*/}
                    <div className=" flex justify-between h-48" ref={eduRef1}>
                        {/*Education-left*/}
                        <motion.div
                                        initial={{x:"-300px",opacity: 0}} 
                                        animate={iseduRef1InView ? {x:0,opacity:1}:{}} 
                                        transition={{delay:0.2,duration:0.5}}
                                        className="w-1/3 flex flex-col gap-5">
                            {/*Company*/}
                            <div className="text-center text-xl bg-black text-white p-1 font-semibold rounded-lg w-fit">
                                ระดับปริญญาตรี
                                <div className="rounded-lg bg-white p-3 text-lg text-black font-semibold w-fit">
                                มหาวิทยาลัย: เกษตรศาสตร์
                                <div className="rounded-lg bg-white text-lg text-black font-semibold w-fit">
                                คณะ: วิทยาการคอมพิวเตอร์
                            </div>
                            </div>

                            </div>
                            {/*Job*/}

                            {/*Description*/}
                            <div className="p-1 flex gap-12">
                            <div className="rounded-lg bg-white p-2 text-sm text-black font-bold w-fit">
                                GPAX: 3.97
                            </div>
                            {/*Time*/}
                            <div className="rounded-lg bg-white p-2 text-sm text-black font-bold w-fit">
                            Credit: 44
                            </div>
                            </div>
                        </motion.div>
                        {/*Line*/}
                        <div className="w-1/6">
                            {/*Line*/}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/*Circle*/}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2">

                            </div>
                            </div>


                        </div>
                        {/*Experience-right*/}
                        <div className="w-1/3">
                        </div>
                    </div>

                    {/*Experience List*/}
                    <div className="flex justify-between h-48" ref={eduRef3}>
                        {/*Experience-left*/}
                        <div className="w-1/3">
                        </div>
                        {/*Line*/}
                        <div className="w-1/6">
                            {/*Line*/}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/*Circle*/}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2">

                            </div>
                            </div>


                        </div>
                        {/*Experience-right*/}
                        <motion.div 
                        initial={{x:"300px",opacity: 0}} 
                        animate={iseduRef3InView ? {x:"0px",opacity:1}:{}} 
                        transition={{delay:0.2,duration:0.5}}
                        className="w-1/3 flex flex-col gap-5">
                            {/*Company*/}
                            <div className="text-center text-xl bg-black text-white p-1 font-semibold rounded-lg w-fit">
                                ระดับปริญญาตรี
                                <div className="rounded-lg bg-white p-3 text-lg text-black font-semibold w-fit">
                                มหาวิทยาลัย: เกษตรศาสตร์
                                <div className="rounded-lg bg-white text-lg text-black font-semibold w-fit">
                                คณะ: วิทยาการคอมพิวเตอร์
                            </div>
                            </div>

                            </div>
                            {/*Job*/}

                            {/*Description*/}
                            <div className="p-1 flex gap-12">
                            <div className="rounded-lg bg-white p-2 text-sm text-black font-bold w-fit">
                                GPAX: 3.97
                            </div>
                            {/*Time*/}
                            <div className="rounded-lg bg-white p-2 text-sm text-black font-bold w-fit">
                            Credit: 44
                            </div>
                            </div>
                        </motion.div>
                    </div>
                    {/*Experience List*/}
                    <div className=" flex justify-between h-48" ref={eduRef2}>
                        {/*Experience-left*/}
                        <motion.div
                         initial={{x:"-300px",opacity: 0}} 
                         animate={iseduRef2InView ? {x:0,opacity:1}:{}} 
                         transition={{delay:0.2,duration:0.5}} className="w-1/3 flex flex-col gap-5">
                            {/*Company*/}
                            <div className="text-center text-xl bg-black text-white p-1 font-semibold rounded-lg w-fit">
                                ระดับปริญญาตรี
                                <div className="rounded-lg bg-white p-3 text-lg text-black font-semibold w-fit">
                                มหาวิทยาลัย: เกษตรศาสตร์
                                <div className="rounded-lg bg-white text-lg text-black font-semibold w-fit">
                                คณะ: วิทยาการคอมพิวเตอร์
                            </div>
                            </div>

                            </div>
                            {/*Job*/}

                            {/*Description*/}
                            <div className="p-1 flex gap-12">
                            <div className="rounded-lg bg-white p-2 text-sm text-black font-bold w-fit">
                                GPAX: 3.97
                            </div>
                            {/*Time*/}
                            <div className="rounded-lg bg-white p-2 text-sm text-black font-bold w-fit">
                            Credit: 44
                            </div>
                            </div>
                        </motion.div>
                        {/*Line*/}
                        <div className="w-1/6">
                            {/*Line*/}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/*Circle*/}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2">

                            </div>
                            </div>


                        </div>
                        {/*Experience-right*/}
                        <div className="w-1/3">
                        </div>
                    </div>
                </div>

                {/*My Skills*/}
                <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                    <motion.h1  
                    initial={{x:"-500px"}} 
                    animate={isSkillRefInView ? {x:0}:{}} 
                    transition={{delay:0.2}}
                    className="font-bold text-2xl">
                        My Skills
                    </motion.h1>
                    {/*Skills List*/}
                    <motion.div 
                    initial={{x:"-100vh"}} 
                    animate={isSkillRefInView ? {x:0}:{}}
                    transition = {{delay:0.5}}
                    className="flex gap-4 flex-wrap">
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Javascript
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Typescript
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            HTML
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            CSS
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            PHP
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Laravel
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Python
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Java
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            MySQL
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            React.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            Next.js
                        </div>
                    </motion.div>
                </div>

                {/*My Experience*/}
                <div className="flex flex-col justify-center" ref={expRef1}>
                <motion.h1
                    initial={{x:"-500px"}} 
                    animate={isexpRef1InView ? {x:0}:{}} 
                    transition={{delay:0.2}}
                className="pb-10 font-bold text-2xl">
                        My Experience
                    </motion.h1>
                    {/*Experience List*/}
                    <div className=" flex justify-between h-48">
                        {/*Experience-left*/}
                        <motion.div
                    initial={{x:"-300px",opacity:0}} 
                    animate={isexpRef1InView ? {x:0,opacity:1}:{}} 
                    transition={{delay:0.2,duration:0.5}}
                        className="w-1/3">
                            {/*Company*/}
                            <div className="bg-black text-white p-1 font-semibold rounded-lg w-fit">
                                ชื่อบริษัท
                            </div>
                            {/*Job*/}
                            <div className="rounded-lg bg-white p-3 text-sm font-semibold w-fit">
                                ตำแหน่งที่ทำ: Software Engineer
                            </div>
                            {/*Description*/}
                            <div className="p-3 text-sm italic ">
                                ได้ทำงานเกี่ยวกับคอมพิวเตอร์ เช่น บลาๆๆๆๆ
                            </div>
                            {/*Time*/}
                            <div className="text-red-400 text-sm font-semibold">
                            ระยะเวลา: 5 ปี
                            </div>
                        </motion.div>
                        {/*Line*/}
                        <div className="w-1/6">
                            {/*Line*/}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/*Circle*/}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2">

                            </div>
                            </div>


                        </div>
                        {/*Experience-right*/}
                        <div className="w-1/3">
                        </div>
                    </div>

                    {/*Experience List*/}
                    <div className="flex justify-between h-48" ref={expRef2}>
                        {/*Experience-left*/}
                        <div className="w-1/3">
                        </div>
                        {/*Line*/}
                        <div className="w-1/6">
                            {/*Line*/}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/*Circle*/}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2">

                            </div>
                            </div>


                        </div>
                        {/*Experience-right*/}
                        <motion.div
                    initial={{x:"300px",opacity:0}} 
                    animate={isexpRef2InView ? {x:0,opacity:1}:{}} 
                    transition={{delay:0.2,duration:0.5}}
                        className="w-1/3">
                            {/*Company*/}
                            <div 
                    className="bg-black text-white p-1 font-semibold rounded-lg w-fit">
                                ชื่อบริษัท
                            </div>
                            {/*Job*/}
                            <div className="rounded-lg bg-white p-3 text-sm font-semibold w-fit">
                                ตำแหน่งที่ทำ: Software Engineer
                            </div>
                            {/*Description*/}
                            <div className="p-3 text-sm italic w-fit">
                            ได้ทำงานเกี่ยวกับคอมพิวเตอร์ เช่น บลาๆๆๆๆ
                            </div>
                            {/*Time*/}
                            <div className="text-red-400 text-sm font-semibold">
                                ระยะเวลา: 5 ปี
                            </div>
                        </motion.div>
                    </div>
                    {/*Experience List*/}
                    <div className=" flex justify-between h-48" ref={expRef3}>
                        {/*Experience-left*/}
                        <motion.div
                                            initial={{x:"-300px",opacity:0}} 
                                            animate={isexpRef3InView ? {x:0,opacity:1}:{}} 
                                            transition={{delay:0.2,duration:0.5}}
                                             className="w-1/3">
                            {/*Company*/}
                            <div className="bg-black text-white p-1 font-semibold rounded-lg w-fit">
                                ชื่อบริษัท
                            </div>
                            {/*Job*/}
                            <div className="rounded-lg bg-white p-3 text-sm font-semibold w-fit">
                                ตำแหน่งที่ทำ: Software Engineer
                            </div>
                            {/*Description*/}
                            <div className="p-3 text-sm italic ">
                                ได้ทำงานเกี่ยวกับคอมพิวเตอร์ เช่น บลาๆๆๆๆ
                            </div>
                            {/*Time*/}
                            <div className="text-red-400 text-sm font-semibold">
                            ระยะเวลา: 5 ปี
                            </div>
                        </motion.div>
                        {/*Line*/}
                        <div className="w-1/6">
                            {/*Line*/}
                            <div className="w-1 h-full bg-gray-600 rounded relative">
                            {/*Circle*/}
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2">

                            </div>
                            </div>


                        </div>
                        {/*Experience-right*/}
                        <div className="w-1/3">
                        </div>
                    </div>
                </div>

                {/*My Contact*/}
                <div className="flex flex-col gap-8 justify-center pb-48" ref={conRef}>
                    <motion.h1 
                    initial={{x:"-100vh"}}
                    animate={isconRefInView ? {x:0} : {}}
                    className="font-bold text-2xl">
                        My Contact
                    </motion.h1>
                    <motion.div 
                    initial={{x:"-300px",opacity:0}}
                    animate={isconRefInView ? {x:0,opacity:1} : {}}
                    transition={{delay:0.2,duration:0.5}}
                    className="p-3 flex flex-col gap-8 justify-center">
                    {/*Facebook*/}
                    <div className="flex gap-4">
                        <Image alt="" src="/fb.png" width={24} height={24} />
                        <Link href="https://www.facebook.com/profile.php?id=100005002366932">
                            ภวัฐ ไชยเจริญ
                        </Link>
                    </div>
                    {/*IG*/}

                    <div className="flex gap-4">
                        <Image alt="" src="/ig.png" width={24} height={24} />
                        <Link href="https://www.instagram.com/pwt_keam/">
                            pwt_keam
                        </Link>
                    </div>
                    {/*Discord*/}

                    <div className="flex gap-4">
                        <Image alt="" src="/Discord.png" width={24} height={12} />
                        <Link href="">
                            Icecream#2895
                        </Link>
                    </div>
                    {/*Email*/}

                    <div className="flex gap-4">
                        <Image alt="" src="/email.png" width={24} height={24} />
                        <Link href="">
                            pawatchijaroen2564@gmail.com
                        </Link>
                    </div>
                    {/*Phone*/}

                    <div className="flex gap-4">
                        <Image alt="" src="/phone.png" width={24} height={24} />
                        <Link href="">
                            099-496-5145
                        </Link>
                    </div>
                    </motion.div>
                </div>
        </div>
        {/*Image*/}
        <div className="hidden lg:block sticky top-0 w-1/3 xl:w-1/2">
            <Image src="/cat.png" alt="" fill className="object-contain"/>
        </div>
        </div>

        </motion.div>
    )
}

export default About