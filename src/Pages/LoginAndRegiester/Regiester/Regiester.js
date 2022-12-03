import React, { useContext, useState } from 'react';
import { useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contaxt/AuthProvider';
import useToken from '../../../Hooks/useToken';

const Regiester = () => {
    const {register,handleSubmit,formState: { errors } }=useForm()

const {createUser,updateuserInfo} = useContext(AuthContext)
const [registerError,setRegisterError] = useState()
const [createdUserEmail,setCreatedUserEmail] = useState('')
const [token]=useToken(createdUserEmail)
const navigate = useNavigate()
if(token){
  navigate('/')
}
    const registerHandler =data=>{
      setRegisterError('')
      console.log(data)
      const email = data.email;
      const password = data.password;
      const name = data.name
      // register a  new user 
      /* 
      akhane creatUser jodi thik moto hoi tahole amra updateuser k call kortece ,abar update user jode thik moto hoi tahole 
       saveUser k call korce ,saveUser thik moto hole navigate korar age user ar kas thake token niye asbo ,token thik moto 
      paile amr user k navigate korte dibo
       */
      createUser(email,password)
      .then(result=>{
        toast('User Register successfully')
        // const user = result.user;      
        const userInfo = {
          displayName : data.name
        }
        updateuserInfo(userInfo)
        .then(()=>{
          saveUser(email,name)         
        })
        .catch(error=>console.log(error))
      })
      .catch(error=>{
const errorMassage = error.message;
setRegisterError(errorMassage)        
      })
    }

// send user info in mongodb
const saveUser= (email,name)=>{
  const user = {email,name}
  fetch(`http://localhost:5000/users`,{
   method:'POST',
   headers:{
    'content-type':'application/json'
   },
   body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setCreatedUserEmail(email)
    
  })
}

    return (
        <div>
           <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">Sign up</h1>
{/* register  from */}
<form onSubmit={handleSubmit(registerHandler)}  >
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
    <span className="label-text">password</span>   
  </label>
  <input type="password" {...register("password",{required:'password required',minLength:{value:8,message:'password must be 8 charecter'},pattern:{value:/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*/,message:'password must have number, uppercase and lowercase'}})} placeholder="password" className="input input-bordered w-full " />
  {errors.password && <p className="text-primary">{errors.password?.message}</p>}
</div>
<p className='mt-2'>forget password?</p>
      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Sing up" type="submit" />
      </div>
<small className='mt-3'>Have an account? <Link to='/login'className='text-primary'>Longin</Link></small>

<div className="divider">OR</div>
      <div className=" mt-6">      
      <button className="btn btn-outline  w-full ">sing up with google </button>
      </div>
     <div>
      {
        registerError && <p>{registerError}</p>
      }
     </div>
    </form>

            </div>
        </div>
    );
};

export default Regiester;