"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Linktype{
    link:any
}

const Navlink = ({link}:Linktype) => {
    const pathName = usePathname()
    console.log(pathName)
    return(
    <Link href={link.url} className={`rounded p-1 ${pathName===link.url && "bg-black text-white"}`}>{ link.title }</Link>
)
}

export default Navlink