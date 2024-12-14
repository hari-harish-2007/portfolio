import React from 'react'

function Zoom() {
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">

      <h1 className='lg:text-5xl text-4xl text-white font-bold mt-20 ml-20 uppercase'>Our project</h1>
      <div className='grid md:mx-20 lg:ml-12 lg:grid-cols-3 md:grid-cols-1 justify-center gap-10 mt-20'>

        <div class="overflow-hidden  shadow-2xl shadow-teal-700 w-96 h-72 rounded-sm">
          <img  src="/Assesst/project-1.jpg" alt="Zoomable Image" class="transform transition duration-500 hover:scale-110 w-full h-full object-cover " />
        </div>
        <div class="computer overflow-hidden shadow-2xl shadow-teal-700 w-96 h-72 rounded-lg">
          <img src="/Assesst/project-6.jpg" alt="Zoomable Image" class=" transform transition duration-500 hover:scale-110 w-full h-full object-cover" />
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dicta tenetur, fugiat accusamus, dignissimos voluptatibus magni quis veritatis cumque culpa nam atque, explicabo provident officiis eaque quo quam ullam quibusdam!</p>
        </div>
        <div class="overflow-hidden shadow-2xl shadow-teal-700 w-96 h-72 rounded-lg">
          <img src="/Assesst/project-2.jpg" alt="Zoomable Image" class="transform transition duration-500 hover:scale-110 w-full h-full object-cover" />
        </div>
        <div class="overflow-hidden shadow-2xl shadow-teal-700 lg:ml-80 mt-20 w-96 h-72 rounded-lg">
          <img src="/Assesst/project-4.jpg" alt="Zoomable Image" class="transform transition duration-500 hover:scale-110 w-full h-full object-cover" />
        </div>
        <div class="overflow-hidden shadow-2xl shadow-teal-700  lg:ml-80 mt-20 w-96 h-72 rounded-lg">
          <img src="/Assesst/project-5.jpg" alt="Zoomable Image" class="transform transition duration-500 hover:scale-110 w-full h-full object-cover" />
        </div>
      </div>
    </div>
    
  )
}
export default Zoom;
