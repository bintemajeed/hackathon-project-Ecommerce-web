'use client'

import {Instagram, Twitter, Facebook,Youtube,MapPin} from "lucide-react";
import {ChevronDown} from "lucide-react"

function Footer(){
    return(
        <main className="bg-black text-white">
            <div className="w-[93%] mx-auto min-h-[331px] h-[auto]">
<div className="flex justify-between md:hidden">

<ul className="font-extralight text-[14px]  py-10">
    <li><a href="#" className="flex my-4">Resources <ChevronDown/></a></li>
    <li><a href="#" className="flex my-4">Help <ChevronDown/></a></li>
    <li><a href="#" className="flex my-4">About Nike <ChevronDown/></a></li>
    
</ul>
<ul className="flex py-16 gap-7">
                            <li><Twitter/></li>
                            <li><Facebook/></li>
                            <li><Youtube/></li>
                            <li><Instagram/></li></ul>
</div>

                <div className="hidden md:block">
                    <div className="flex justify-between">
                        <div className="flex w-[50%] justify-between">
                            <ul className="font-extralight text-[14px]  py-10">
                            <li className="my-6" >FIND A STORE</li>
                            <li className="my-6">BECOME A MEMBER</li>
                            <li className="my-6">SIGN UP FOR EMAIL</li>
                            <li className="my-6">SEND US FEEDBACK</li>
                            <li className="my-6">STUDENT DISCOUNTS</li>
                        </ul>
                        <ul className="font-extralight text-[14px]  py-10">
                        <li className="my-6 font-semibold" >Get Help</li>
                            <li className="my-6 text-[#757575]">Order Status</li>
                            <li className="my-6 text-[#757575]">Delivery</li>
                            <li className="my-6 text-[#757575]">returns</li>
                            <li className="my-6 text-[#757575]">Payment Options</li>
                            <li className="my-6 text-[#757575]">Contact Us on Nike.com</li>
                            <li className="my-6 text-[#757575]">Contact Us </li>

                        </ul>
                        <ul className="font-extralight text-[14px]  py-10">
                        <li className="my-6 font-semibold" >About Nike</li>
                            <li className="my-6 text-[#757575]">News</li>
                            <li className="my-6 text-[#757575]">Careers</li>
                            <li className="my-6 text-[#757575]">Sustainability</li>
                            <li className="my-6 text-[#757575]">Payment Options</li>
                        </ul>
                        </div>
                        <div><ul className="flex py-16 gap-7">
                            <li><Twitter/></li>
                            <li><Facebook/></li>
                            <li><Youtube/></li>
                            <li><Instagram/></li></ul></div>
                    </div>


                    <div className="flex justify-between">
                    <div className="flex  gap-4"><p className="flex"><MapPin/>Pakistan </p> <p> © 2023 Nike, Inc. All Rights Reserved</p></div>
                    <ul className="flex gap-6">
                    <li className="my-6 text-[#757575]">Guides</li>
                    <li className="my-6 text-[#757575]">Terms Of Sales</li>
                    <li className="my-6 text-[#757575]">Terms Of Use</li>
                    <li className="my-6 text-[#757575]">Privacy Policy</li>
                    </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Footer