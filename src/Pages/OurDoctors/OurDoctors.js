import React from 'react';
import bgimg from '../../assets/Group 130.png';

const OurDoctors = () => {
    return (
        <div className='container mx-auto  px-4  py-5'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto ">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center ">
                        <div class="sm:w-1/2 mb-10 px-4 text-left mx-auto">

                            <h2 class="title-font text-2xl font-bold text-gray-900 mt-6 mb-3">Our Doctors</h2>

                            <h2 class="title-font text-4xl font-bold  mt-6 mb-3 text-cyan-400">Qualified Doctors</h2>
                            <p class="leading-relaxed text-1xl mx-auto my-10 text-justify">Handled directly by general doctors and professional <br /> and experienced specialists doctors.</p>
                            <div className="card w-auto mx-auto  image-full justify-start">
                                <figure><img src={bgimg} className='bg-blue-100 w-auto' alt="Shoes" /></figure>
                                <div className="card-body  rounded-lg text-left my-4" >
                                    <h2 className="card-title text-md my-4">Orthpedy</h2>
                                    <h1 className='my-4 text-3xl font-bold'>Dr. James   Wellington</h1>
                                    <div className="card-actions justify-start">
                                        <button className="btn ">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <button className="btn border-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 my-10 ">View All Doctors</button>
                        </div>
                        <div class="sm:w-1/2 mb-10 px-4 ">
                            <div className=" w-auto bg-base-100 shadow-xl rounded-l-full border-4 border-gray-400">

                                <img src="https://www.woodlandshospital.in/images/doctor-img/subrata-bhakta.jpg" alt="Shoes" className="rounded-l-full border-4 border-gray-400" />


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurDoctors;