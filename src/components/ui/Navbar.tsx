'use client'
import Image from "next/image"
import Link from "next/link"
import logo2 from "@/images/logo2.png"
import {Menu, ShoppingBag} from "lucide-react"
import { Search,Heart,ChevronDown} from "lucide-react"
import TopHeader from "./TopHeader"

function Navbar(){
    return(
        <main className="m-0 p-0">
            <TopHeader/>
<div className="w-[93%] mx-auto">
            <div className="  flex  justify-between items-center h-[60px]">
                <div className="w-[20%]"><Image
                
                src={logo2}
                alt="nike logo"
                width={58}
                height={20}/></div>
                <ul className=" hidden justify-evenly w-[40%] lg:flex">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Product_Details">Product Details</Link></li>
                    <li><Link href="/ContactUs">Contact Us</Link></li>
                    <li><Link href="/Signin">Sign Up</Link></li>
                    <li><Link href="/Login">Login</Link></li>
                   
                </ul>
                <div className="flex justify-between items-center w-[60%] lg:w-[25%]">
                    <div className="flex justify-start rounded-[40px] bg-[#f5f5f5] md:p-2 ">
                  <Search className="font-light" />
                     <input className="bg-transparent mx-[10px] w-[70%] border-none hidden md:block" type="text" placeholder="Search"/></div>
                    <Heart/>
                  <ShoppingBag/>
                    <div className="flex  bg-white lg:hidden" ><Menu/></div>

                </div>
            </div>
            </div>
        </main>
    )
}
export default Navbar