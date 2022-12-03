import React from 'react';

const ApoinmentOptionCard = ({appOptionCard,SetTreatment}) => {
    const {name,slots}=appOptionCard
    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-primary text-2xl">{name}</h2>
    <p>{slots.length>0? slots[0]:'try another day'}</p>
    <p>{slots.length} {slots.length>1?'spaces':'space'} Availavle</p>
    <div className="card-actions justify-end">
      
      <label onClick={()=>SetTreatment(appOptionCard)} disabled={slots.length===0} className="btn btn-primary  bg-gradient-to-r from-[#f00135] to-primary" htmlFor="book-modal">Book Appoinment</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ApoinmentOptionCard;