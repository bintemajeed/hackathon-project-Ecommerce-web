'use client'
import Image from "next/image";
import banner from "@/images/banner.png";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import shoe1 from "@/images/shoe1.png";
import ProductCard from "./ProductCard";
import shoe2 from "@/images/shoe2.png";
import shoe3 from "@/images/shoe3.png";
import banner2 from "@/images/banner2.png";
import blueOutfit from "@/images/blueOutfit.png"
import shorts from "@/images/shorts.png"
import womenBlue from "@/images/womenBlue.png"
import fast from "@/images/fast.png"
import banner3 from "@/images/banner3.png"
import table from "@/images/table.png"
import hoodie from "@/images/hoodie.png"
import drawer from "@/images/drawer.png"


function Hero() {
  return (
    <main className="m-0 p-0 gap-60 flex flex-col ">
      <div className="w-[93%] mx-auto pb-8 bg-[#f5f5f5]">
        <div className="w-[100%]">
          <p className="text-center font-semibold pt-3">Hello Nike App</p>
          <p className="text-sm text-center pb-3">
            Download To Access Everything Nike.{" "}
            <a href="#" className="underline">
              Get You Great
            </a>
          </p>
          <Image
            src={banner}
            width={1300}
            height={700}
            alt="Nike shoe"
            layout="responsive"
          />
        </div>
        <div className="text-center mt-8">
          <p>First Look</p>
          <h1 className="text-[35px] font-semibold md:text-[55px]">
            NIKE AIR MAX PULSE
          </h1>
          <p>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </p>
        </div>
        <div className="text-center ">
          <Button text="Notify Me" />
          <Button text="Shop Air Max" />
        </div>
      </div>
      <div className="w-[93%] mx-auto">
        <div className="flex justify-between p-3">
          <h3 className="font-semibold text-lg">Best Of Air Max</h3>
          <ul className="flex gap-4 items-center">
            <p>Shop</p>
            <div className="p-1 rounded-[50%] bg-[#f5f5f5]">
              <ChevronLeft />
            </div>
            <div color={"#757575"} className="p-1 rounded-[50%] bg-[#f5f5f5]">
              <ChevronRight />
            </div>
          </ul>
        </div>
        <div className="block lg:grid lg:grid-cols-3 gap-[40px] ">
          {/* Column 1 */}
          <div className="">
            <ProductCard
              image={shoe1}
              name="Nike Air Max 7"
              price="$200"
              category="Men's Shoes"
            />
          </div>
          {/* Column 2 */}
          <div className="">
            <ProductCard
              image={shoe2}
              name="Nike Air Max Pulse"
              price="$300"
              category="Men's Shoes"
            />
          </div>
          {/* Column 3 */}
          <div className="">
            <ProductCard
              image={shoe3}
              name="Nike Air Max Pulse"
              price="$300"
              category="Women's Shoes"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Featured</h2>
          <Image
            src={banner2}
            alt="Man running"
            width={1300}
            height={700}
            layout="responsive"
          />
        </div>
        <div className="text-center h-[160px] flex flex-col items-center justify-between my-7">
          <h1 className="text-5xl font-bold sm:2xl">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p>
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <Button text="Find Your Shoe" />
        </div>
        <div  className="Gear-up-section">
          <h2 className="text-lg font-bold">Gear Up</h2>

<section className="flex flex-col items-center lg:flex-row justify-between w-full gap-[40px] overflow-hidden ">
  {/* Men's Section */}
  <div className="w-full lg:w-1/2 p-4 lg:p-2">
    <div className="flex flex-col">
      {/* Men's Heading */}
      <ul className="flex gap-4 items-center justify-end p-2">
        <p className="text-lg font-medium">Shop Men's</p>
        <div className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer">
          <ChevronLeft />
        </div>
        <div className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer">
          <ChevronRight />
        </div>
      </ul>

      {/* Men's Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-auto">
        <ProductCard
          image={blueOutfit}
          name="Nike Dri-FIT ADV TechKnit Ultra"
          price="₹3895"
          category="Men's Short-Sleeve Running Top"
        />
        <ProductCard
          image={shorts}
          name="Nike Dri-FIT Challenger"
          price="₹2495"
          category="Men's 18cm (approx.) 2-in-1 Versatile Shorts"
        />
      </div>
    </div>
  </div>

  {/* Women's Section */}
  <div className="w-full lg:w-1/2 p-4 lg:p-2">
    <div className="flex flex-col">
      {/* Women's Heading */}
      <ul className="flex gap-4 items-center justify-end p-2">
        <p className="text-lg font-medium">Shop Women's</p>
        <div className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer">
          <ChevronLeft />
        </div>
        <div className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer">
          <ChevronRight />
        </div>
      </ul>

      {/* Women's Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-auto">
        <ProductCard
          image={womenBlue}
          name="Nike Dri-FIT ADV"
          price="₹5295"
          category="Women's Long-Sleeve Running Top"
        />
        <ProductCard
          image={fast}
          name="Nike Fast"
          price="₹3795"
          category="Women's Mid-Rise 7/8 Running Leggings with Pockets"
        />
      </div>
    </div>
  </div>
</section>


<section className="Dont-miss w-full">
   <div>
    <h1 className="text-lg font-bold">Don't Miss</h1>
    <Image className="h-[700px] w-[1300px]" src={banner3}
    alt="trendy clothes"
    width={100}
    height={700} 
    layout="responsive"/>
   </div>
</section>
<div className="text-center mt-8 mb-20">
  <h1 className="text-[35px] font-semibold md:text-[55px]">FLIGHT ESSENTIALS</h1>
  <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
  <Button text="Shop"/>
</div>


<section className="w-full">
  <h1 className="text-lg font-bold">The Essentials</h1>
  <div className="block lg:grid lg:grid-cols-3 gap-[20px]">
      {/* Column 1 */}
      <div className="my-7">
        <Image src={table}
        width={430}
        height={540}
        alt="table"
        layout="responsive"/>
      </div>
      {/* Column 2 */}
      <div className="my-7">
        <Image src={hoodie}
        width={430}
        height={540}
        alt="hoodie"
        layout="responsive"/>
      </div>
      {/* Column 3 */}
      <div className="w-[430] h-[540px]">
        <Image src={drawer}
        width={430}
        height={540}
        alt="drawer"
        layout="responsive"/>
      </div>
    </div>
</section>


<section className="w-full flex justify-center my-6">
<div className="w-[100%]  flex flex-col lg:flex-row justify-center items-center gap-[50px]">
  <ul className="text-center lg:text-left">
    <li className="font-semibold my-3">Icons</li>
    <li className="text-[#757575] my-3">Air Force 1</li>
    <li className="text-[#757575] my-3">Huarache</li>
    <li className="text-[#757575] my-3">Air Max 90</li>
    <li className="text-[#757575] my-3">Air Max 95</li>
  </ul>
  <ul className="text-center lg:text-left">
  <li className="font-semibold">Shoes</li>
    <li className="text-[#757575] my-3">All Shoes</li>
    <li className="text-[#757575] my-3">Custom Shoes</li>
    <li className="text-[#757575] my-3">Jordan Shoes</li>
    <li className="text-[#757575] my-3">Running Shoes</li>
  </ul>
  <ul className="text-center lg:text-left">
  <li className="font-semibold">Clothing</li>
    <li className="text-[#757575] my-3">Modest Wear</li>
    <li className="text-[#757575] my-3">All clothing</li>
    <li className="text-[#757575] my-3">Hoodies and Pullovers</li>
    <li className="text-[#757575] my-3">Shirts And Tops</li>
  </ul>
  <ul className="text-center lg:text-left"><li className="font-semibold my-3">Kids'</li>
    <li className="text-[#757575] my-3">Infant & Toddler Shoes</li>
    <li className="text-[#757575] my-3">Kids' Shoes</li>
    <li className="text-[#757575] my-3">Kids' Jordan Shoes</li>
    <li className="text-[#757575] my-3">Kids' Basketball Shoes</li></ul>
</div>
</section>







































          
        </div>
      </div>
    </main>
  );
}
export default Hero;
