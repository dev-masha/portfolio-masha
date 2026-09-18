"use client"
import { useState, useEffect } from 'react'

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white/50 backdrop-blur-sm'>
      
      <a href="#top" className='text-3xl font-bold cursor-pointer'>
        Masha<span className='text-red-500'>.</span>
      </a>

      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 bg-white shadow-sm bg-opacity-50'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">My Work</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>

      <div className='flex items-center gap-4'>
        <a href="#contact" className='hidden lg:flex items-center gap-2 border border-gray-400 rounded-full px-6 py-2'>
          Contact <span>↗</span>
        </a>
      </div>

    </nav>
  )
}
export default Navbar