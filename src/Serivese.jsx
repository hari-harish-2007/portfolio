import React from 'react'

function Serivese() {
  return (
    <div className='mt-20 overflow-hidden'>
      <h1 className='text-5xl text-white ml-40 font-bold'>Services</h1>
      <div className=' items-center mt-20 grid lg:grid-cols-4 md:grid-cols-1 gap-40 mx-20 justify-center p-8'>
      <div data-aos="zoom-in">
        <div class="card w-12 h-[500px] ">
          <p class="heading text-white text-bold font-bold">
            Ui Design
          </p>
          <p className='text-white font-serif'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maiores?
          </p>
        </div>
        </div>
        <div data-aos="zoom-in">
        <div class="card">
          <p class="heading text-white text-bold font-bold">
            Frontend Development
          </p>
          <p className='text-white font-serif'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus dicta fuga,
          </p>
</div>
        </div>
        <div data-aos="zoom-in">
        <div class="card">
          <p class="heading text-white text-bold font-bold">
            Backend Development
          </p>
          <p className='text-white font-serif'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum vel quia
          </p>
        </div>
        </div>
        <div data-aos="zoom-in">
        <div class="card p-12 w-12 h-12">
          <p class="heading text-white text-bold font-bold">
            Teasting
          </p>
          <p className='text-white font-serif'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium a quae  Id laborum vel quia
          </p>
        </div>
        </div>

      </div>
    </div>

  )
}
export default Serivese;
