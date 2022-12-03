import React from 'react';
import DisplayHomeInfoCard from './DisplayHomeInfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const HomeInfoCard = () => {
  const cardInfo = [
    {
      id:1,
      tital:'Opening houre',
      discreption: 'Open 9:00pm to 10:00am in everyday',
  icon:clock,
  bgColor:'bg-gradient-to-r from-[#f00135] to-primary'
    },
    {
      id:2,
      tital:'Visite oure location',
      discreption: 'all time open oure chamber.pleace visite oure chamber',
  icon:marker,
  bgColor:'bg-accent'
    },
    {
      id:3,
      tital:'Contact us now',
      discreption: '+014835629357',
      icon:phone,
      bgColor:'bg-gradient-to-r from-[#f00135] to-primary'
    
    }
  ]
    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-20 ">
          {
            cardInfo.map(card=><DisplayHomeInfoCard key={card.id} card={card}></DisplayHomeInfoCard>)
          }
        </div>
    );
};

export default HomeInfoCard;