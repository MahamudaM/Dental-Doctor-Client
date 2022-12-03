import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../SharedPages/Loader/Loader';
import DeleteDasDoctoModal from '../DeleteDashboardDoctor/DeleteDasDoctoModal';
const ManageDoctor = () => {
    const [deletingDoctor,setDeletingDoctor]=useState(null)

    const closeModal =()=>{
        setDeletingDoctor(null);
    }
   
    const {data:docters,isLoading,refetch}=useQuery({
        queryKey:['doctors'],
        queryFn:async ()=>{
            try{
const res= await fetch(`http://localhost:5000/doctors`,{
    headers:{
        authorization:`bearer ${localStorage.getItem('accesToken')}`
    }
})
const data =await res.json();
return data ;
            }
            catch(error){

            }
        }
    })
    
    if(isLoading){
        return <Loader></Loader>
    }

     // delet hadndler
     const doctorDeletHandle=doctor=>{
    //  console.log(doctor)
      fetch(`http://localhost:5000/doctors/${doctor._id}`,{
        method:'DELETE',
        headers:{
            authorization:`bearer ${localStorage.getItem('accesToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        toast.success('successfully delete')
        refetch()
      }
     
    })
  }
    return (
        <div>
            <p>manage doctor : {docters?.length}</p>
{/* doctor table */}
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Speciality</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        docters?.map((doctor,i)=> <tr key={doctor._id} doctor={doctor}>
            <th>
            {i+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={doctor.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
             {doctor.name}             
            </td>
            <td>{doctor.speciality}</td>
            <th>
            <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="delet-doctor-modal" className="btn btn-primary btn-xs">Delete</label>
             
            </th>
          </tr>)
      }
     

    </tbody>
   
    
    
  </table>
</div>
{
    deletingDoctor && <DeleteDasDoctoModal
    tital={`are you sure ot delete doctor ${deletingDoctor.name}`}
    message={`if you delete ${deletingDoctor.name} ,it can not undone`}
closeModal={closeModal}
successAction= {doctorDeletHandle}
modalData={deletingDoctor}
successBtnName = {'Delete'}
    >

    </DeleteDasDoctoModal>
}
        </div>
    );
};

export default ManageDoctor;