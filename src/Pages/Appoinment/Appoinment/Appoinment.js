import React, { useState } from 'react';
import AvialableAppointment from '../AvialableAppointment/AvialableAppointment';
import AppointmentBanar from './ApoinmentBanar/AppointmentBanar';

const Appoinment = () => {
    const [selectDate,setSelectDate]=useState(new Date())
    return (
        <div>
            <AppointmentBanar
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            ></AppointmentBanar>
            <AvialableAppointment
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            ></AvialableAppointment>

            
        </div>
    );
};

export default Appoinment;