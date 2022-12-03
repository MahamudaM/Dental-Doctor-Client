import React from 'react';

const DisplayHomeInfoCard = ({card}) => {
    const {tital,discreption,bgColor,icon}=card
    return (
        <div className={`card card-side  shadow-xl ${bgColor} text-white p-3`}>
  <figure><img src={icon} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{tital}</h2>
    <p>{discreption}</p>
   
  </div>
</div>
    );
};

export default DisplayHomeInfoCard;