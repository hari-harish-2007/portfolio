
import Navbar from './Compantant/Navbar';
import { TypeAnimation } from 'react-type-animation';
import { AiFillBulb } from "react-icons/ai";
import React, { useEffect } from 'react';
 import AOS from 'aos';
 import 'aos/dist/aos.css'; // Import AOS styles

function Home() {
    useEffect(() => {
            AOS.init({ duration: 1000 }); // Set the AOS animation duration to 1000ms
          }, []);
    
    return (
        <div data-aos="fade-right w-[100%] h-[100%] overflow-hidden">
            <div>
                <div>
                    <Navbar />
                </div>
                <div className='grid  lg:grid-cols-2 overflow-hidden md:grid-cols-1 '>
                    <div className=' w-[100%] mt-20 mx-20 h-[100%]'>

                        <div className=''>
                            <h1 className='text-white font-bold text-2xl'>Hi,it's me<span className='text-3xl text-[#00ffee] font-serif ml-4'>Harish</span></h1>
                            <TypeAnimation

                                sequence={[

                                    "I' am a web Developer ",
                                    1000,
                                    "I' am a Ui/Ux Design",
                                    1000,
                                    "I' am a linux",
                                    1000,
                                    "I' am a Frontent Developer",
                                    1000

                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block', color: '#00ffee' }}
                                repeat={Infinity}
                            />
                            <p className='text-white md:text-2xl text-lg font-semibold w-3/4 mt-4 '> Introduce myself my name is harish.i am completed my bachelor degree in computer science from sastra university,papansam along witn my degree,i have completed net webdevelopment and Ui/Ux design. i am belong to a nuclear family.my strength are i am a hardwork and self motivating person and i have strong communication skill .</p>

                        </div>

                        <div className='flex gap-6 mt-12'>
                            <section class="">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#17C3B2] text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:from-[#331029] hover:to-[#310413]"
                                    href="/"
                                >
                                    <svg
                                        class="w-8"

                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 448 512"
                                        height="1.8em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                                        ></path>
                                    </svg>
                                    <span
                                        class="absolute opacity-0 group-hover:opacity-100 group-hover:white group-hover:text-md group-hover:-translate-y-10 duration-500"
                                    >
                                        Facebook
                                    </span>
                                </button>
                            </section>
                            <section class="flex justify-center items-center">
                                <button
                                    href="/"
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#17C3B2] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1.8em"
                                        viewBox="0 0 24 24"
                                        stroke-width="1"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        class="w-8"
                                    >
                                        <path
                                            d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                                        ></path>
                                    </svg>
                                    <span
                                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                    >
                                        Instagram
                                    </span>
                                </button>
                            </section>
                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-2xl bg-[#17C3B2] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                    href="/"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        height="1.8em"
                                        width="1.8em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                                        ></path>
                                    </svg>
                                    <span
                                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                    >
                                        Dribbble
                                    </span>
                                </button>
                            </section>

                            <section class=" ">
                                <button
                                    href="/"
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#17C3B2] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1.8em"
                                        viewBox="0 0 512 512"
                                        stroke-width="0"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        class="w-8 h-8"
                                    >
                                        <path
                                            d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                                        ></path>
                                    </svg>
                                    <span
                                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                    >
                                        Linkedin
                                    </span>
                                </button>
                            </section>


                        </div>


                        <div className='mt-12 rounded-lg flex gap-8'>

                            <button class="change relative overflow-hidden border-2 border-[#17C3B2] bg-transparent hover:bg-[#17C3B2] px-8 py-3 text-[#17C3B2]  text-lg transition duration-300 ease-in-out font-inherit hover:text-[#111]">
                                Here
                            </button>
                            <button class=" change relative overflow-hidden border-2 border-[#17C3B2] bg-transparent hover:bg-[#17C3B2] px-8 py-3 text-[#17C3B2] text-lg transition duration-300 ease-in-out font-inherit hover:text-[#111]">
                                Contact
                            </button>
                        </div>

                    </div>
                    <div className='bg-[#17C3B2] ml-4    mt-8 lg:w-[500px] shadow-2xl shadow-teal-700 lg:h-[500px] rounded-full'>
                        <img className='w-[600px] -mb-12  rounded- h-[500px]' src='/Assesst/happy-caucasian-male-graduate-graduation-glow-with-diploma-looking-camera-campus-removebg-preview.png' />
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Home;
