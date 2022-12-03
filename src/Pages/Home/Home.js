import React from 'react';
import ExceptionCare from '../Services/ExceptionCare';
import Services from '../Services/Services';
import HomeContact from './HomeContact/HomeContact';
import HomeInfoCard from './HomeInfoCard/HomeInfoCard';
import HomeTestimonial from './HomeTestimonial/HomeTestimonial';
import HomeTextAndImg from './HomeTextAndImg/HomeTextAndImg';
import MakeAppionment from './MakeAppionment/MakeAppionment';

const Home = () => {
    return (
        <div>
        <div className=' max-w-6xl mx-auto'>
           <HomeTextAndImg></HomeTextAndImg>
           <HomeInfoCard></HomeInfoCard>
           <Services></Services>
           <ExceptionCare></ExceptionCare>
           <MakeAppionment></MakeAppionment>
           <HomeTestimonial></HomeTestimonial>
           
        </div>
        <HomeContact></HomeContact>
        </div>

    );
};

export default Home;