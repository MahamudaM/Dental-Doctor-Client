import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const Services = () => {
    const ServicesInfo = [
        {
            id:1,
            img:fluoride,
            tital:'Fluoride Treatment',
            discrep:'We provide best fluoride  treatment.Oure goal is recovar your pain and give better teath. '
        },
        {
            id:2,
            img:cavity,
            tital:'cavity Filling',
            discrep:'We provide best fluoride  treatment.Oure goal is recovar your pain and give better teath. '
        },
        {
            id:3,
            img:whitening,
            tital:'Teath whitening',
            discrep:'We provide best fluoride  treatment.Oure goal is recovar your pain and give better teath. '
        },
    ]
    return (
        <div>
          <div className='text-center'>
          <h3 className='text-xl font-medium text-[#f00135]'>Oure Services</h3> 
           <h1 className='text-4xl'>Services We Provide</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-20 ">
            {
             ServicesInfo.map(ServiceInfo=><ServiceCard key={ServiceInfo.id} ServiceInfo={ServiceInfo}></ServiceCard>)   
            }
          </div>
        </div>
    );
};

export default Services;