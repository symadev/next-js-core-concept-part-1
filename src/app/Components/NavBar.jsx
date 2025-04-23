import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex justify-center p-4'>
      <nav className='w-full max-w-md'>
        <ul className='flex justify-between text-lg font-medium'>
          <Link href="/">
          <li>Home</li></Link>
         
          <Link href="/services">
          <li>services</li></Link>
         
          <Link href="/about">
          <li>about</li></Link>
         
        </ul>
      </nav>
    </div>
  )
}
