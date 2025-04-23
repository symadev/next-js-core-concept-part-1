//data gulo aikahne o must peast korte hobe
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


export default function ServicesPages({ params }) {
    const id = params.id;
    const singleData = data.find((d)=> d.id == id);
    // ai condition debar mane holo jdi specific ai ar oikhane oi konomid thake taile no founded show korbe
    if (singleData){
        return (

            //localhost a amra je id e dey na kno oi id ta e show korbe
            <div>
                <p>ServicesPages</p>
                <p>Id:{id}</p>
                <p>singleData:{singleData.name}</p>
                <p><img src={singleData.image}  /></p>
            </div>
        )
    }
    else{
        return ('NOT FOUND SERVICE')
    }
   
}
