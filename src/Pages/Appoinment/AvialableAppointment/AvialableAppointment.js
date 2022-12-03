import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loader from '../../../SharedPages/Loader/Loader';
import ApoinmentOptionCard from '../ApoinmentOptionCard/ApoinmentOptionCard';
import AppBookModal from './AppBookModal/AppBookModal';

const AvialableAppointment = ({selectDate}) => {
    const [treatment,SetTreatment]=useState(null) //treatment is just a appOptionCard
// const [appointmentOption,setAppointmentOption]=useState([])
const date = format(selectDate,'PP')
// react query
const {data:appointmentOption=[],refetch,isLoading} =useQuery({
    queryKey:['appiontOption',date],
    queryFn:()=> fetch(`http://localhost:5000/appiontOption?date=${date}`)
.then(res=>res.json())})
if(isLoading){
    return <Loader></Loader>
}

// useEffect(()=>{
//     fetch('http://localhost:5000/appiontOption')
//     .then(res=>res.json())
//     .then(data=>setAppointmentOption(data))
// },[])
    return (
        <div className='my-10'>
            <p className='text-center text-primary font-bold'>Availavle appointment on ,{date}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-20 ml-10">
{
    appointmentOption?.map(appOptionCard=><ApoinmentOptionCard 
    key={appOptionCard._id} 
    appOptionCard={appOptionCard}
    SetTreatment={SetTreatment}
    ></ApoinmentOptionCard>)
}
{/* Appointment Modal */}
            </div>
        {
            treatment &&
            <AppBookModal 
            treatment={treatment} 
            SetTreatment={SetTreatment}
             selectDate={selectDate}
             refetch={refetch}
             ></AppBookModal>
        }
        </div>
    );
};

export default AvialableAppointment;