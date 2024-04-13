"use client"

import {motion} from 'framer-motion'

const portfolio = () => {
    return(
        <motion.div className=" h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:0.8}}>
        <div>Hello From Portfolio</div>
        </motion.div>
    )
}

export default portfolio