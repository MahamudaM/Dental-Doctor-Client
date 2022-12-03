import React from 'react';
import treatment from '../../assets/images/treatment.png'
const ExceptionCare = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="h-96 rounded-lg shadow-2xl" alt='treatment' />
    <div className='ml-8'>
      <h1 className="text-5xl font-bold">Exceptional Dental<br/> care,On Your Termes</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default ExceptionCare;