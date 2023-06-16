import React from 'react';
import chat from '../../assets/doctor (1) 1.png'
import medicine from '../../assets/medicine (1) 1.png'
import hospital from '../../assets/hospital (1) 1.png'

const MainService = () => {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto text-center">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">Our <span className='font-bold text-transparent bg-gradient-to-r bg-clip-text from-teal-500 via-teal-500 to-teal-800'>Main Services</span> <br /> <span className=''>Categories</span></h1>

                    </div>
                    <div class="flex justify-evenly flex-wrap -m-4">
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full ">
                            <div class="h-full p-6 rounded-3xl  flex flex-col relative overflow-hidden bg-sky-100 drop-shadow-lg">
                                <div className='rounded-full p-0 mx-auto w-3/5 bg-white mb-10'>
                                    <img className='object-cover object-center w-full h-full block' src={chat} alt="" />
                                </div>
                                <h1 class="text-2xl font-bold text-gray-900 pb-4 mb-2 border-b border-gray-200 leading-none">Chat with doctor</h1>
                                <p class="text-1xl text-gray-500 ">You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.</p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-3xl bg-gradient-to-b from-teal-300 to-teal-600 flex flex-col relative overflow-hidden drop-shadow-lg">

                                <div className='rounded-full p-6 mx-auto w-3/5 bg-white mb-10'><img className='object-cover object-center w-full h-full block ' src={medicine} alt="" />
                                </div>
                                <h1 class="text-2xl font-bold text-gray-100 pb-4 mb-2 border-b border-gray-200 leading-none">Health Store</h1>
                                <p class="text-1xl text-gray-100 my-5">Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment</p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-3xl bg-sky-100 flex flex-col relative overflow-hidden drop-shadow-lg">
                                <div className='rounded-full p-6 mx-auto w-3/5 bg-white mb-10'>
                                    <img className='object-cover object-center w-full h-full block' src={hospital} alt="" />
                                </div>
                                <h1 class="text-2xl font-bold text-gray-900 pb-4 mb-2 border-b border-gray-200 leading-none">Visit Hospitals</h1>
                                <p class="text-1xl text-gray-500 ">Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainService;