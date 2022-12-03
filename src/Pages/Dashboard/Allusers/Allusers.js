import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const {data:users=[],refetch}=useQuery({
        queryKey:['allusers'],
        queryFn:()=>
            fetch(`http://localhost:5000/allusers`)
            .then(res=>res.json())
            
        
    })
    const makeAdminHandler=(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT',
            headers:{
                authorization:`bearar ${localStorage.getItem('accesToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('make admin successfully')
                refetch()
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h3 className='text-center text-xl text-primary'>All users</h3>
             {/* dashboard table */}
    <div>
    <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ADMIN</th>
        <th>DELETE</th>
      </tr>
    </thead>
    <tbody>
   
{
users.map((user,i)=><tr key={user._id}>
<th>{i+1}</th>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user?.role !=='admin' && <button onClick={()=>makeAdminHandler(user._id)} className='btn btn-xs btn-primary'>make admin</button>}</td>
<td><button className='btn btn-xs btn-dangerus'>Delete</button></td>
</tr>)
}
     
    </tbody>
  </table>
</div>
    </div> 
        </div>
    );
};

export default Allusers;