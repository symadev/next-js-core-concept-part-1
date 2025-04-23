import React from 'react'

export default function NavBar() {
  return (
    <div className='flex justify-center p-4'>
      <nav className='w-full max-w-md'>
        <ul className='flex justify-between text-lg font-medium'>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  )
}
