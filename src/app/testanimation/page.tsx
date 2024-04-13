"use client"

import {motion} from 'framer-motion'

const TestAnimation = () => {
    const vars = {
        var1:{
            x:400,
            y:300,
            opacity:0.5,
            transition:{
                duration:1
            }
        },
        var2:{
            x:100,y:300,rotation:90
        }
    }
    return(
        <div className="flex items-center justify-center h-full">
            <motion.div className="w-96 h-96 bg-red-400 rounded"  
            initial={{x:-100}}
            variants={vars}
            animate={1==1?"var1":"var2"}
            >
            </motion.div>
        </div>
    )
}

export default TestAnimation