import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='h-16 bg-teal-500 flex justify-between px-6 items-center text-white'>
        <Link className="logo font-bold text-2xl" href="/">BitLinks</Link>
    <ul className='flex justify-center gap-10 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <li className='flex gap-6 '>
        <Link href="/shorten"><button className='cursor-pointer bg-teal-400  text-white rounded-lg shadow-lg px-3 py-2 font-bold'>Try Now</button></Link>
        <Link href="/github"><button className='cursor-pointer bg-teal-400  text-white rounded-lg shadow-lg px-3 py-2 font-bold'>GitHub</button></Link>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
