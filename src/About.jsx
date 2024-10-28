import React from 'react';

function About() {
    return (
        <div data-aos="fade-left" className="overflow-hidden">
            {/* <h1 className='text-4xl text-white ml-40 font-bold mt-64 '>About</h1> */}
            <div className="grid lg:mx-20 lg:grid-cols-2 mt-40 md:grid-cols-1">
                <div className="bg-[#17C3B2] animate-pulse mt-8 w-[500px] shadow-2xl shadow-teal-700 h-[500px] rounded-full">
                    <img 
                        className="w-[600px] h-[500px] rounded" 
                        src="/Assesst/happy-caucasian-male-graduate-graduation-glow-with-diploma-looking-camera-campus-removebg-preview.png" 
                        alt="Happy male graduate"
                    />
                </div>
                <div className="mx-10 mt-8">
                    <h1 className="text-4xl font-serif text-white mt-12">About Me</h1>
                    <p className="text-2xl font-bold text-[#17C3B2] mt-4">Frontend Developer</p>
                    <p className="text-lg font-serif text-white mt-6">
                       I am a skilled web designer with over i am studing sastra university.my passion lies in creating captivating website designs and implementing them through frontent development.i take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites.throughout my career,i have developed a deep understanding of user experience(UX) and user interface(Ui) principles.By putting myself in the shoes of the end-user,i strive to create intultive and seamiess browsing experiences       .             </p>
                    <button className="mt-6 relative overflow-hidden border-2 border-[#17C3B2] bg-transparent hover:bg-[#17C3B2] px-8 py-3 text-[#17C3B2] text-lg transition duration-300 ease-in-out font-inherit hover:text-[#111]">
                        See more
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;

