import React from 'react';
import doctor from '../../assets/Special.png';
import Covid from '../../assets/covid-test 2.png';

const SpecialServices = () => {
    return (
        <div className='container mx-auto  px-4 bg-blue-50 py-5'>
            <div className="hero min-h-screen lg:mx-10">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='mx-auto lg:mx-24 mt-24'>
                        <h1 className="text-4xl font-bold text-black">Our <span className='py-6 text-4xl font-bold text-cyan-400'>Special Services</span></h1>
                        <p className="py-6 lg:pr-20  text-lg font-sm text-gray-400 text-justify ">In times like today, your health is very important,
                            especially since the number of COVID-19 cases is
                            increasing day by day, so we are ready to help you
                            with your health consultation</p>
                        <div className='grid grid-cols-1 lg:w-auto lg:grid-cols-2 gap-2 '>
                            <div className="w-56 h-60 shadow-xl ">
                                <figure><img src={Covid} alt="Shoes" /></figure>
                                <div className="card-body -my-10">
                                    <h2 className="card-title">
                                        Covid-19 Test
                                    </h2>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>

                                </div>
                            </div>
                            <div className="w-56 h-60 shadow-xl">
                                <figure><img src={Covid} alt="Shoes" /></figure>
                                <div className="card-body -my-10">
                                    <h2 className="card-title">
                                        Covid-19 Test
                                    </h2>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>

                                </div>
                            </div>
                            <div className="w-56 h-60 shadow-xl">
                                <figure><img src={Covid} alt="Shoes" /></figure>
                                <div className="card-body -my-10">
                                    <h2 className="card-title">
                                        Covid-19 Test
                                    </h2>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>

                                </div>
                            </div>
                            <div className=" w-56 h-60 shadow-xl">
                                <figure><img className='mx-5' src={Covid} alt="Shoes" /></figure>
                                <div className="card-body -my-10">
                                    <h2 className="card-title">
                                        Covid-19 Test
                                    </h2>
                                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider">\/</div>
                           
                        </div>
                    </div>
                    <img src={doctor} className="lg:w-1/2 w-2/2 rounded-lg drop-shadow-2xl " />
                </div>
            </div>
            
        </div>
    );
};

export default SpecialServices;