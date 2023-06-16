import React from 'react';
import Banner from '../../assets/Hero .png';


const HeroSection = () => {
    return (
        <div className='container mx-auto px-4 bg-blue-50'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Banner} className="lg:w-1/2 w-2/2 rounded-lg  " />

                    <div>
                        <h1 className="text-6xl font-bold text-black ">We Are Ready to</h1>
                        <p className="py-6 text-6xl font-bold text-cyan-400 text-transparent bg-gradient-to-r bg-clip-text from-teal-500 via-teal-500 to-teal-800">Help Your Health</p>
                        <h1 className="text-6xl font-bold  text-black">Problems</h1>
                        <p className="py-6 lg:pr-20  text-lg font-sm text-gray-400 text-justify ">In times like today, your health is very important,
                            especially since the number of COVID-19 cases is
                            increasing day by day, so we are ready to help you
                            with your health consultation</p>
                        <button className="btn border-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">Try Free Consultation</button>

                        <div className='flex flex-row py-10 '>
                            <div class="p-2 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 class="title-font font-bold text-4xl text-gray-900">200+</h2>
                                <p class="leading-relaxed">Active Doctor</p>
                            </div>
                            <div class="p-2 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 class="title-font font-bold text-4xl text-gray-900">15K+</h2>
                                <p class="leading-relaxed">Active User</p>
                            </div>
                            <div class="p-2 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 class="title-font font-bold text-4xl text-gray-900">50+</h2>
                                <p class="leading-relaxed">Active Pharmacy</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HeroSection;