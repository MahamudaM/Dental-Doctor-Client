import React from 'react';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import dribble from '../../../assets/images/appointment.png'
const HomeContact = ({children}) => {
    return (
        <div style={{background:`url(${dribble})`}} className='p-8'>
            <div className='text-center'>
          <h3 className='text-xl font-medium text-[#f00135]'>Contact Us</h3> 
           <h1 className='text-3xl text-white'>Stay Connected With Us</h1>
          </div>
         
            {/* <form className='grid gap-x-8 w-96 mx-auto'>
            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" /><br/>
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" /><br/>
            <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Write your command"></textarea>
            </form> */}
{/* login form start  */}
<div className="card flex-shrink-0 w-full max-w-sm   mx-auto ">
      <div className="card-body ">
        <div className="form-control">
         
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control mt-4">         
          <input type="text" placeholder="Subject" className="input input-bordered" />
                  
        </div>
        <div className="form-control my-4">
        <textarea className="textarea textarea-bordered" placeholder="Write your command"></textarea> 
        </div>
        <div className='text-center'>
        <PrimaryButton>submit</PrimaryButton>
        </div>
        
        {/* <button className="btn btn-primary">Submit</button> */}
      </div>
    </div>
          {/*login form end  */}
        </div>
    );
};

export default HomeContact;