"use client"

import React,{useState} from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";// shopping card icon
import { GiHamburgerMenu } from "react-icons/gi";// Hamburger icon
import { FaRegWindowClose } from "react-icons/fa";//close icon
import { IoNavigateCircle } from 'react-icons/io5';

const Header = () => {
const[isMenuOpen,setIsMenuOpen] =useState(false);

const toggleMenu =()  => {
    setIsMenuOpen(!isMenuOpen);//toggle manu open close

};
const closeMenue =() =>{
  setIsMenuOpen(false);//close the menue
};


  return (
    
      <header className='bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10'>
      <h1 className='text-2xl font-bold '>Watch World </h1>

      {/* Desktop Navbar */}
      <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href="/"onClick={closeMenue}>Home</Link>
        <Link href="/about"onClick={closeMenue}>About</Link> 
        <Link href="/watches"onClick={closeMenue}>Watches</Link>
        <Link href="/contect"onClick={closeMenue}>Contect</Link>
        <FaShoppingCart  className='text-white-text-xl'/>
        </nav>

        {/*
        mobile Navbar(Hhamburger menu)  */}

        <div className='md:hidden flex items-center'>
        <GiHamburgerMenu
        className='text-white text-3xl cursor-pointer'
        onClick={toggleMenu} //toggle menu on click
        />
        </div>
        {/* Mobile menu */}

        <div className={`${
          isMenuOpen ? 'block' :'hidden'
         } absolute top-0 left-0 w-full h-full bg-blue-500 p-5 md:hidden z-20`}
        >
          {/* close button */}
          <div className='flex justify-end'>
            <FaRegWindowClose
            className='text-white text-3xl cursor-pointer'
            onClick={toggleMenu} //close menu with clicked
            />
             </div>
             <nav className='flex flex-row item-center gap-3 text-white font-bold'>
              <Link href="/"onClick={closeMenue}>Home</Link>
              <Link href="/about"onClick={closeMenue}>About</Link>
              <Link href="/watches"onClick={closeMenue}>Watches</Link>
              <Link href="/contect"onClick={closeMenue}>Contect</Link>
              <IoNavigateCircle className='text-white text-xl'/>
              
              
              </nav>
             </div>
              
         </header>  

  );
};

export default Header