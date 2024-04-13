"use client"
import {motion} from 'framer-motion'

const About = () => {
    return(
        <motion.div className=" h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:0.8}}>
        <div>Hello from About</div>
        </motion.div>
    )
}

export default About