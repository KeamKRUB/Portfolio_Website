"use client"

import Image from "next/image";
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div className=" h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:0.8}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      {/*Image*/}
      <div className="z=-1 h-1/2 relative lg:h-full lg:w-1/2">
      <Image src="/cat.png" alt="" fill className="object-contain"/>
      </div>

      {/*text*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hello Human</h1>
        <p className="md:text-xl">Welcome to my Portfolio Website Meow meow MeowwMeow meow MeowwMeow meow MeowwMeow meow MeowwMeow meow Meoww</p>
        {/*Button*/}
        <div className="w-full flex gap-4">
          <button onClick={() => {location.href='portfolio';}}className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            MyPortfolio
          </button>
          <button onClick={() => {location.href='https://www.facebook.com/profile.php?id=100005002366932';}} className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
