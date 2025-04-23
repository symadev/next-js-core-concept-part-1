import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
   <div>
     <div className='text-xl place-content-around place-items-center'>404NotFound</div>
     <Link href="/"> go back to home</Link>
   </div>
  )
}
