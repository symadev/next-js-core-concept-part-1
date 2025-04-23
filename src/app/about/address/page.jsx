"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AddressPage() {

    //we can do that like that programetically
    const router = useRouter();
    const isLoggedIn = true;
    const handleNavigation =()=>{
if(isLoggedIn){
    router.push ("/about/address");

}else{
    router.push ("/");
}
    }
  return (

    // normally we can do that like that 
    <div>
         <p className='text-3xl text-amber-300 font-bold'>AboutPage</p>
         <p>
  <Link href="/about/address"> AddressPage</Link> </p>
  <button onClick={handleNavigation}>AddressPage</button>
  </div>
  
  )
}
