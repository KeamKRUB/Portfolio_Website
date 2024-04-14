"use client"

import { AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"
import Credit from "./Credit"
import {motion} from 'framer-motion'
import { usePathname } from "next/navigation"

const Transition = ({children}:any) => {
const pathName = usePathname()


    return(
<AnimatePresence mode="wait">
    <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-white to-blue-100">
        
        <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        animate={{height:"0vh"}}
        exit={{height:"140vh"}}
        transition={{duration:0.3,ease:"easeOut"}}>
        </motion.div>

        <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
        initial={{height:"140vh"}}
        animate={{height:"0vh",transition:{delay:0.3}}}
        >
        </motion.div>
        <div className="h-24">
          <Navbar />
        </div>
    <div className="h-[calc(100vh-8rem)]">{children}</div>
        <center>
            <div>
                <Credit />
          </div>
        </center>
    </div>
</AnimatePresence>
    )
}

export default Transition