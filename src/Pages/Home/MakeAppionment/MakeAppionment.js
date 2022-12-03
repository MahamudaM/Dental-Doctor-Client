import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import apoinmentBg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
const MakeAppionment = ({children}) => {
    return (
     <section>
           <div className="hero  my-10" style={{background : `url(${apoinmentBg})`}} >
  <div className="hero-content flex-col lg:flex-row p-0">
    <img src={doctor} className="lg:w-1/2 rounded-lg  -mt-36" alt='doctor'/>
    <div className='ml-6'>
      <h3 className='text-lg font-bold text-primary'>appointment</h3>
      <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>appointment</PrimaryButton>
    </div>
  </div>

</div>
     </section>
    );
};

export default MakeAppionment;