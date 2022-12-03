import { useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react';
import { AuthContext } from '../../../Contaxt/AuthProvider';
import Dashboardcard from '../Dashboardcard/Dashboardcard';

const MyAppointment = () => {
const {user}=useContext(AuthContext)
    const {data:bookings=[]}= useQuery({
        queryKey:['bookings',user?.email],
        queryFn:()=>fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
          headers:{
            authorization:`bearer ${localStorage.getItem('accesToken')}`
          }
        })
        .then(res=>res.json())
    })
    return (
        <div>
      <div className=' flex  mb-6 justify-between'>
    <h1 className='text-xl font-semibold'>My appointment </h1>
    <button className="btn btn-outline btn-primary">button</button>
    </div>
    {/* dashboard table */}
    <div>
    <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>NAME</th>
        <th>SERVICE</th>
        <th>DATE</th>
        <th>TIME</th>
      </tr>
    </thead>
    <tbody>
   
{
bookings?.map((book,i)=><Dashboardcard key={book._id} i={i} book={book}></Dashboardcard>)
}
     
    </tbody>
  </table>
</div>
    </div> 
        </div>
    );
};

export default MyAppointment;