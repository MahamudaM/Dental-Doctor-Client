import React from 'react';

const HomeTestimoniCard = ({singleTestimoni}) => {
    const {name,discp,img,place}=singleTestimoni
    return (
        <div className="card border">
  <div className="card-body items-center text-center">
    
    <p>{discp}</p>
    <div className="card-actions justify-between ">
    
  <div className="avatar pt-6">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  {/* <figure className=" pt-6 "> */}
    <img src={img} alt="Shoes" />
  {/* </figure> */}
  </div>
</div>
      <div className='mt-6 ml-4'>
        <p className='text-lg font-semibold'>{name}</p>
        <p>{place}</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default HomeTestimoniCard;