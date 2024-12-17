'use client'
import Image from "next/image";
import Link from "next/link";
import logo2 from "@/images/logo2.png";
import { Menu, ShoppingBag, Search, Heart, X } from "lucide-react";
import { useState } from "react";
import TopHeader from "./TopHeader";

function MyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="m-0 p-0">
      {/* Top Header */}
      <TopHeader />

      {/* Main Navbar */}
      <div className="w-[93%] mx-auto relative  text-lg">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo */}
          <div className="w-[20%]">
            <Image src={logo2} alt="nike logo" width={58} height={20} />
          </div>

          {/* Nav Links for Large Screens */}
          <ul className="hidden lg:flex justify-evenly w-[50%]">
            <li>
              <Link href="/" className="hover:text-gray-500">Home</Link>
            </li>
            <li>
              <Link href="/Product_Details" className="hover:text-gray-500">
                Product Details
              </Link>
            </li>
            <li>
              <Link href="/Men" className="hover:text-gray-500">Men</Link>
            </li>
            <li>
              <Link href="/ContactUs" className="hover:text-gray-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/Signin" className="hover:text-gray-500">Sign Up</Link>
            </li>
            <li>
              <Link href="/Login" className="hover:text-gray-500">Login</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex justify-between items-center w-[60%] lg:w-[25%] gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center rounded-[40px] bg-[#f5f5f5] p-2 md:p-3">
              <Search className="text-gray-500" />
              <input
                className="bg-transparent ml-2 w-full border-none outline-none text-sm"
                type="text"
                placeholder="Search"
              />
            </div>

            {/* Icons */}
            <Heart className="cursor-pointer" />
            <ShoppingBag className="cursor-pointer" />

            {/* Menu Icon for Small Screens */}
            <div
              className="lg:hidden cursor-pointer bg-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-md z-10 lg:hidden">
            <ul className="flex flex-col items-center py-6 space-y-4">
              <li>
                <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Product_Details" className="hover:text-gray-500" onClick={toggleMenu}>
                  Product Details
                </Link>
              </li>
              <li>
                <Link href="/Men" className="hover:text-gray-500" onClick={toggleMenu}>
                  Men
                </Link>
              </li>
              <li>
                <Link href="/ContactUs" className="hover:text-gray-500" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/Signin" className="hover:text-gray-500" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/Login" className="hover:text-gray-500" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default MyNav;
