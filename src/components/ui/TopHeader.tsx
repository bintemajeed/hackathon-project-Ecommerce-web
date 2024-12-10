'use client'
import Image from "next/image"
import logo from "@/images/logo.png"
import Link from "next/link"
function TopHeader(){
    return(
        <main className=" bg-[#f5f5f5] h-[36px] m-0 p-0 w-full hidden md:block "  >
            <div className="flex items-center mt-1 w-[93%] justify-between mx-auto">
                <Image 
                src = {logo}
                alt="Man with basketball"
                width={23}
                height={23}/>
                <ul className="flex  font-medium m-0 p-0 text-xs gap-3">
                    <li className="flex"><Link href="#" className="m-0 p-0">Find a store</Link></li>
                    <li>|</li>
                    <li className="m-0 p-0"><Link href="#">Help</Link><span></span></li>
                    <li>|</li>
                    <li><Link href="#">Join us</Link> <span></span></li>
                   <li>|</li>
                    <li><Link href="#">Sign in</Link></li>
                    
                </ul>
            </div>
        </main>
    )
}
export default TopHeader