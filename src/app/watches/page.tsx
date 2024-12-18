import React from 'react'

const Watches = () => {
const watchesData=[
    {id: 1, name: "Rolex", Price: "12000", description: "Luxury Watch", image:'./rulex.jpeg'},
    {id: 2, name: "Omega", Price: "8000", description: "Sporty design", image:'./omega.jpeg'},
    {id: 3, name: "Patek Philippe", Price: "25000", description: "Elegent timeplace", image:'./patek.jpg'},
    {id: 4, name: "TAG Heuer", Price: "5000", description: "sporty and stylish", image:'./rulex.jpeg'},
    {id: 5, name: "Breitling", Price: "7000", description: "Bold and rugged", image:'./rulex.jpeg'},
    {id: 6, name: "Seiko", Price: "1000", description: "Affordable and relibale", image:'./rulex.jpeg'},
]



  return (

  <div className='watches grid  grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
    {watchesData.map(watch =>(
      <div key={watch.id}className='watch-card bg-white py-5 rounded-md  shadow-md text-center'>
        <img src={watch.image}  alt={watch.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110'></img>
        <h3 className='mt-4 text-2xl font-bold'>{watch.name}</h3>
        <p className='text-gray-500'> {watch.description}</p>
        <div className='price text-blue-500 text-xl  font-semibold mt-2'>${watch.Price}</div>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>Add to Card</button>

        </div>

    ))},
  </div>
      
  )

    }

export default Watches;


