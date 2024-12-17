'use client'
import ProductData from "../functionality/data";
import Image from "next/image";
function Products(){
    return(
<main>
    <div className="w-[93%] mx-[auto] my-10 text-[#111111] flex gap-6">
<aside className="w-[20%] border-r-2 border-r-[#f5f5f5] pr-4" >
    <div>
        <h1 className="font-semibold text-2xl">New  (500)</h1>
        <ul className="space-y-3 font-semibold mt-8 mb-8">
            <li>Shoes</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Shorts</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories</li>
        </ul>
    </div>
    <hr className="my-2"/>
    {/* Gender */}
<div><h1 className="font-semibold text-lg">Gender</h1>
<ul className="text-sm space-y-1 font-[500] my-3">
    <li><label className="flex items-center ">
                  <input type="checkbox" className="mr-2" /> Men
                </label></li>
    <li>
    <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Women
                </label>
    </li>
    <li>
    <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Unisex
                </label>
    </li>
    </ul></div>
    <hr className="my-2"/>
    {/* kids section */}
    <div><h1 className="font-semibold text-lg">Kids</h1>
    <ul className="text-sm space-y-1 font-[500] my-3">
        <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Girls
                </label></li>
                <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Boys
                </label></li>
                </ul>
                </div>
{/* price section */}
<hr className="my-2"/>
        <div>
            <h1 className="font-semibold text-lg">Shop By Price</h1>
        <ul className="text-sm space-y-1 font-[500] my-3" >
        <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Under ₹ 2 500.00
                </label></li>
                <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />₹ 2 501.00 - ₹ 7 500.00
                </label></li>
                </ul>
            </div>        
</aside>
<div className="right w-[80%]">
    <div className="w-full grid grid-cols-3 grid-rows-4 gap-3">
         {ProductData.map((i,index)=>{return(
            <div className="w-[340px] h-[530px] " key={index}><Image src={`@/images/Rectangle(${index+1})`} alt={i.name} width={340} height={340}/></div>
         )})}
    </div>
</div>
    </div>
</main>
    )


}
export default Products;