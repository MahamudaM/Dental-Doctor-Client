
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../SharedPages/Loader/Loader';


const AddDoctor = () => {
    const {register,handleSubmit,formState: { errors } }=useForm()
    const imgHostKey = process.env.REACT_APP_imageBB_ApiKey;
    const Navigate = useNavigate()
    const {data:Specialites=[],isLoading}=useQuery({
        queryKey:[],
        queryFn:async()=>{
            const res =await fetch(`http://localhost:5000/dasBordAppointSpeciality`)
            
            return res.json()           
        }
        
    })
   

const addDoctorHandler = data=>{
// img procecing
const image = data.img[0]; // image get from register form data
const formData = new FormData() //react default img show fun
formData.append('image',image) //react default img show fun
const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
fetch(url,{
  method:'POST',
  body:formData
})
.then(res=>res.json())
.then(imgData=>{
 
  if(imgData.success){
    console.log(imgData.data.url)
    const docter = {
      name:data.name,
      email:data.email,
      speciality:data.speciality,
      img:imgData.data.url

    }
    // save doctor info to the database
    fetch(`http://localhost:5000/doctors`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        authorization:`bearer ${localStorage.getItem('accesToken')}`
      },
      body:JSON.stringify(docter)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
     
        toast.success(`${data.name} is added successfully`)
        Navigate('/dashboard/manageDoctor')
    
    })
  }
})

}
if(isLoading){
    return <Loader></Loader>
}
    return (
        <div>
            {/* <h1 className='text-3xl text-center font-semibold'>Add doctor</h1> */}
            <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">Add doctor</h1>
{/* login from */}
<form onSubmit={handleSubmit(addDoctorHandler)}  >
<div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>   
  </label>
  <input type="text" {...register("name",{required:'Name is required'})} placeholder="Name" className="input input-bordered w-full " />
  {errors.name && <p role="alert">{errors.name?.message}</p>}
</div>   
    
   
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>   
  </label>
  <input type="email" {...register("email",{required:'Email Address is required'})} placeholder="email" className="input input-bordered w-full " />
  {errors.email && <p role="alert">{errors.email?.message}</p>}
</div>
<div className="form-control ">
  <label className="label">
    <span className="label-text">Speciality</span>   
  </label>
  <select {...register("speciality")} name='Speciality' className="select select-bordered w-full max-w-xs">
  {/* <option value='docter' selected>Select a doctor</option> */}
 {
  Specialites?.map(speciality=> <option value={speciality.name} key={speciality._id}>{speciality.name}</option>)
 }  
</select>
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">photo</span>   
  </label>
  <input type="file" {...register("img",{required:'Name is required'})} placeholder="choche a img" className="input input-bordered w-full " />
  {errors.img && <p role="alert">{errors.img?.message}</p>}
</div>  

      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Add Doctor" type="submit" />
      </div>
        </form>

            </div>
        </div>
    );
};

/*
three places to store img (amra img kothai rakbo seta case ba situation onojaiye veri korte pare,tobe recommandition hoche
  jekhane  rakle img ta k host kora jai shakhane rakha)
1.Third party image hosting server(best way to kepp your img)
2.file system of your server
3.mongodb (database)[ate rakle osobida hoccha 500 mb limit spa]
*/
export default AddDoctor;