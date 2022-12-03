import React from 'react';

const Dashboardcard = ({book,i}) => {
  console.log(book)
  const {appointmentDate,patientName,treatmentName,slot}= book
    return (
        <tr>
        <th>{i+1}</th>
        <td>{patientName}</td>
        <td>{treatmentName}</td>
        <td>{appointmentDate}</td>
        <td>{slot}</td>
      </tr>
    );
};

export default Dashboardcard;