
import { useContext, useState } from 'react';
import { useForm} from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contaxt/AuthProvider';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const {register,handleSubmit,formState: { errors } }=useForm()
    const { sigIn}=useContext(AuthContext)
const [longinError,setLoginError]=useState('')
const [loginUserEmail,setLoginUserEmail]=useState()
const [token]=useToken(loginUserEmail)
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.form?.pathname || '/'

if(token){
  navigate(from,{replace:true})
}

    const loginHandler =data=>{
      console.log(data)
      setLoginError('')
      const email = data.email;
      const password = data.password;
     
      sigIn(email,password)
      .then(result=>{
        const user = result.user;
        console.log(user)
        setLoginUserEmail(email)
        // navigate user
       
      })
      .catch(error=>{
        const errorMassage = error.message;
        console.log(errorMassage)
        setLoginError(errorMassage)
      })
    }
    return (
        <div>
            <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">login</h1>
{/* login from */}
<form onSubmit={handleSubmit(loginHandler)}  >
  
    
    
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
  <input type="password" {...register("password",{required:'password required',minLength:{value:8,message:'password must be 8 charecter'}})} placeholder="password" className="input input-bordered w-full " />
  {errors.password && <p className="text-primary">{errors.password?.message}</p>}
</div>
     <p className='mt-2'>forget password?</p>
      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Login" type="submit" />
      </div>
<small className='mt-3'>New to doctor portal?<Link to='/register'className='text-primary'>Create an account</Link></small>

<div className="divider">OR</div>
      <div className=" mt-6">      
      <button className="btn btn-outline  w-full ">log in with google </button>
      </div>
      <div>
    {
       longinError && <p>{longinError }</p>
    }
      </div>
    </form>

            </div>
            
        </div>
    );
};

export default Login;