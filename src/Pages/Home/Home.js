import React from 'react';
import GetStarted from '../GetStarted/GetStarted';
import HeroSection from '../HeroSection/HeroSection';
import OurDoctors from '../OurDoctors/OurDoctors';
import Partner from '../Partner/Partner';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import SpecialServices from '../SpecialServices/SpecialServices';
import MainService from '../MainService/MainService';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Partner />
            <MainService />
            <SpecialServices />
            <OurDoctors />
            <GetStarted />
            <Footer />
        </div>
    );
};

export default Home;