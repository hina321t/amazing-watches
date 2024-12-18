// "use client"

// import React from 'react'
// import AOS from "aos"
// import { useEffect } from 'react'
// import "aos/dist/aos.css"
// import { url } from 'inspector'


// const HomeContent = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,

//     });
//   }, []);


//   return (
//     <section className='hero h-screen flex items-center bg-cover bg-center' style={{ backgroundImage: 'url("/bgimg.jpeg")' }}>
//      <div className='pl-0 md:pl-16 text-white text-center'>
//       <h1 className='text-6xl font-bold drop-shadow-md' data-aos="fade-up">Welcome to watch World</h1>
//       <p className='text-2xl mt-4 '>Your one -stop shop for the best watches</p>
//       <button className='mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md- font-bold '>Shop Now</button>

//      </div>
//     </section>

//   )
// }

// export default HomeContent

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

const HomeContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero h-screen flex items-center bg-gray-800 overflow-hidden">
      {/* Left Side: Text */}
      <div className="w-1/2 pl-6 md:pl-16 text-white">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">
          Welcome to Watch World
        </h1>
        <p className="text-2xl mt-4" data-aos="fade-up" data-aos-delay="200">
          Your one-stop shop for the best watches
        </p>
        <button
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold"
          data-aos="fade-up" data-aos-delay="400">
          Shop Now
        </button>
      </div>

      {/* Right Side: Image */}
      <div
        className="w-1/2 h-4/5 flex justify-center items-center"
        data-aos="fade-left">
      
        <div className="w-1/2 h-full bg-no-repeat bg-contain bg-center rounded-3xl" style={{ backgroundImage:'url("/b.watch.jpg")' }}>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;


