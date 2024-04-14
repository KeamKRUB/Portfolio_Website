"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Navlink from './Navlink'
import {motion} from 'framer-motion'

const links = [
    {url: "/", title:"Home"},
    {url: "/portfolio", title:"Portfolio"},
    {url: "/about", title:"About"},
    {url: "https://www.facebook.com/profile.php?id=100005002366932", title:"Contact"}
]

const Navbar = () => {
    const[open,setOpen] = useState(false)

    const top_nav = {
        closed:{
            rotate:0
        },
        opened:{
            rotate:45,
            backgroundColor:"white",
        }
    }
    const center_nav = {
        closed:{
            opacity:1
        },
        opened:{
            opacity:0
        }
    }
    const bottom_nav = {
        closed:{
            rotate:0
        },
        opened:{
            rotate:-45,
            backgroundColor:"white",
        }
    }

    const listVars = {
        closed:{
            x:"100vw"

        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren: 0.2
            }
        }
    }
    const listItemVars = {
        closed:{
            x:-10,
            opacity:0
        },
        opened:{
            x:0,
            opacity:1
        }
    }

    return(
        
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl">
          {/*Links*/}
            <div className="hidden md:flex gap-4">
                {links.map(link=>(
                    // <Link href={link.url} key={link.title}>{ link.title }</Link>
                    <Navlink link={link} key={link.title}/>
                ))}
            </div>

            {/*Logo*/}
            <div className="md:hidden lg:flex justify-center xl:w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white">KeamKung</span>
                    <span className="w-12 h-8 rounded px-10 bg-white text-black flex items-center justify-center">Portfolio</span>
                </Link>

            {/*GitHub*/}
            </div>
            <div className="hidden md:flex gap-4">
                <Link href="https://github.com/KeamKRUB" className="text-sm bg-white rounded-md p-1 font-semibold flex items-center justify-center">
                <Image src="/github.png" alt="" width={24} height={24}/>
                <span className="text-black">KeamKung</span>
                <span className="w-12 h-8 rounded px-5 bg-black text-white flex items-center justify-center">Github</span>
                </Link>
            </div>


            <div className="md:hidden">
            {/*Menu Button*/}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev)=>!prev)}>
                    <motion.div 
                    variants={top_nav} 
                    animate={open ? "opened":"closed"}
                    className="w-10 h-1 bg-black rounded origin-left">
                    </motion.div>
                    <motion.div 
                    variants={center_nav} 
                    animate={open ? "opened":"closed"}
                    className="w-10 h-1 bg-black rounded">
                    </motion.div>
                    <motion.div 
                    variants={bottom_nav} 
                    animate={open ? "opened":"closed"}
                    className="w-10 h-1 bg-black rounded origin-left">
                    </motion.div>
                </button>
            {/*Menu List*/}
            { open &&(
            <motion.div
            variants={listVars} initial="closed" animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex opacity-70 flex-col items-center justify-center gap-5 text-4xl z-40" >
                {links.map(link=>(
                <motion.div 
                variants={listItemVars}
                className="" key={link.title}>
                    <Link href={link.url} >
                        { link.title }
                    </Link>
                </motion.div>
                ))}
            </motion.div>
        )}
        </div>
    </div>
    )
}

export default Navbar