import { format } from 'date-fns';
import React from 'react';
import {AuthContext} from '../../../../Contaxt/AuthProvider'
import{useContext} from 'react'
import toast from 'react-hot-toast'
const AppBookModal = ({treatment,selectDate, SetTreatment,refetch}) => {
    const {name,slots}=treatment
    const date = format(selectDate,'PP')
    const {user}= useContext(AuthContext)
    console.log(user.displayName)

    const modalSubmitHandler = event=>{
      event.preventDefault()

      const form = event.target
      const slot = form.slot.value
      const paintName = form.name.value;
      const phone = form.phone.value;
      const email = form.email.value;
      const booking = {
        treatmentName: name,
        appointmentDate : date,
        patientName: paintName,
        phone,
        email,
        slot

      }
      // console.log(booking) 
      /*
      Todo:Send data to the server and once data is saved then close the modal and display success toast
      */
fetch('http://localhost:5000/bookings',{
  method :'POST',
  headers :{
    'content-type': 'application/json'
  },
  body :JSON.stringify(booking)

})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  SetTreatment(null)
  if(data.acknowledged===true){
    toast.success('booking confirmed')
    refetch()
  }
  else{
    toast.error(data.message)
  }
  
})
     
    }
    return (
        <>
        <input type="checkbox" id="book-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    {/* modal form */}
    <div className='mx-auto'>
   <form onSubmit={modalSubmitHandler} className='grid gap-x-6 justify-items-center'>
   <input type="text" className="input input-bordered w-full max-w-xs" disabled value={date}/><br/>
   <select name='slot' className="select select-bordered w-full max-w-xs">
  {/* <option  selected>Select a time</option> */}
 {
  slots.map((slot,index)=> <option value={slot} key={index}>{slot}</option>)
 }
  
</select><br/>
    <input type="text" name='name' defaultValue ={user?.displayName} placeholder="name" className="input input-bordered w-full max-w-xs" /><br/>
    <input type="text" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs" /><br/>
    <input type="email" name='email' defaultValue ={user?.email} placeholder="email" className="input input-bordered w-full max-w-xs" /><br/>
    <input type="submit"  value="Submit" className="input input-bordered w-full max-w-xs bg-[#f00135] text-white" /><br/>
   </form>
    </div>
  </div>
</div> 
        </>
    );
};

export default AppBookModal;