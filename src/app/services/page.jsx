'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const data = [
    {
      id: 1,
      name: "Haircut & Styling",
      description: "Professional haircut and styling to match your personality.",
      image: "https://www.shutterstock.com/image-photo/female-hairdresser-standing-making-hairstyle-600nw-391326496.jpg"
    },
    {
      id: 2,
      name: "Facial Treatment",
      description: "Relaxing and rejuvenating facial for glowing skin.",
      image: "https://img.freepik.com/premium-photo/facial-skin-treatment-girl-facial-treatment-facial-skincare-spa-body-careclose-up-portrait-beauti_129180-7649.jpg"
    },
    {
      id: 3,
      name: "Manicure & Pedicure",
      description: "Complete nail care and grooming with premium products.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpghEFKbgYDATEI0cfEX33TX2s3uotxHoCcQ&s"
    },
    {
      id: 4,
      name: "Makeup Services",
      description: "From natural to glam — makeup for every occasion.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB5s-i4Ec4pgXu5hR7WvCTngyBOGsE8IEb8g&s"
    },
  ];

  return (
    <div className='p-6'>
      <h1 className='text-3xl text-amber-500 font-bold mb-6'>ServicesPage</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((d) => (
          <div key={d.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <Link href={`/services/${d.id}`}>
              <img src={d.image} alt={d.name} className="w-full h-48 object-cover rounded" />
            </Link>
            <h2 className="text-xl font-semibold mt-2">{d.name}</h2>
            <p className="text-gray-600">{d.description}</p>
          </div>
        ))}
      </div>
    </div> 
  );
}
