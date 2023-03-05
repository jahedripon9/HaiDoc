import React from 'react';
import img1 from '../../assets/s1 1.png';
import img2 from '../../assets/s2 1.png';
import img3 from '../../assets/s3 1.png';
import img4 from '../../assets/s4 1.png';
import img5 from '../../assets/s5.png';

const Partner = () => {
    return (
        <section class="text-gray-600 body-font container mx-auto px-4 bg-blue-50">
            <div class="container px-5 py-10 mx-auto">

                <div class="flex flex-wrap -m-4 justify-center">
                    <div class="p-2 lg:w-2/12 md:w-1/2 w-full ">
                        <div class="h-full flex flex-col  items-center text-center">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-auto object-cover object-center mb-4" src={img1} />
                        </div>
                    </div>
                    <div class="p-2 lg:w-2/12 md:w-1/2 w-full">
                        <div class="h-full flex flex-col items-center text-center">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-auto object-cover object-center mb-4" src={img2} />
                        </div>
                    </div>
                    <div class="p-2 lg:w-2/12 md:w-1/2 w-full">
                        <div class="h-full flex flex-col items-center text-center">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-auto object-cover object-center mb-4" src={img3} />
                        </div>
                    </div>
                    <div class="p-2 lg:w-2/12 md:w-1/2 w-full">
                        <div class="h-full flex flex-col items-center text-center">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-auto object-cover object-center mb-4" src={img4} />
                        </div>
                    </div>
                    <div class="p-2 lg:w-2/12 md:w-1/2 w-full">
                        <div class="h-full flex flex-col items-center text-center">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-auto h-auto object-cover object-center mb-4" src={img5} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;