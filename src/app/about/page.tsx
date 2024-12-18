import React from 'react'

const About = () => {
  return (
   <section className='about h-screen flex item-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url('/bg.about.jpg')" }}>
  
    
    <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
     <h2 className='text-4xl font-bold mb-4 pt-20'data-sos="fade-up">About US </h2>
     <p >Wlcome to watch world, where we blieave a watch is more than just an accessory it is a statement of style.precision, and craftsmanship Ourmission is to bring you a divers selaction of premium time pieces form around the globe.whther you are a connoisseur or simply  appreciate  the beauty of a well-made watch. weare here to help you find the perfect piece  to complement your personality and elevate your look. </p>
     </div>



     {/* img section */}

     <div
        className="w-1/2 h-4/5 flex justify-center items-center"
        data-aos="fade-left">
      
        <div className="w-full h-full bg-no-repeat bg-contain bg-center rounded-3xl" style={{ backgroundImage:'url("/aboutimg.jpg")' }}>
        </div>
      </div>
  

     
       
    </section>
  )
}
export default About  
      
