import React from 'react';

const ServiceCard = ({ServiceInfo}) => {
    const {discrep,img,tital}=ServiceInfo
    return (
        <div className="card w-88 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{tital}</h2>
    <p>{discrep}</p>
    
  </div>
</div>
    );
};

export default ServiceCard;