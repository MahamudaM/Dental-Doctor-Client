import React from 'react';
import HomeTestimoniCard from './HomeTestimoniCard';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import quote  from '../../../assets/icons/quote.svg'
const HomeTestimonial = () => {
const testimoniInfo = [
    {
        id:1,
        discp: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
        name:'Harry porter',
        place: 'Istambul',
        img:person1
    },
    {
        id:2,
        discp: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
        name:'Harry porter',
        place: 'Istambul',
        img:person2
    },
    {
        id:3,
        discp: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
        name:'Harry porter',
        place: 'Istambul',
        img:person3
    }
]

    return (
        <div>
             <div className='flex justify-between'>
          <div>
          <h3 className='text-xl font-medium text-[#f00135]'>Testimonials</h3> 
           <h1 className='text-4xl'>What Oure Patient Say</h1>
          </div>
          <figure>
            <img src={quote} alt='' className='w-24 lg:w-48' />
          </figure>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-20 ">
    {
        testimoniInfo.map(singleTestimoni=><HomeTestimoniCard key={singleTestimoni.id} singleTestimoni={singleTestimoni}></HomeTestimoniCard>)
    }
</div>

        </div>
    );
};

export default HomeTestimonial;