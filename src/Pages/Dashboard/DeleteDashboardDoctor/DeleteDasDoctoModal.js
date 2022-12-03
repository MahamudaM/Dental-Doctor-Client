import React from 'react';

const DeleteDasDoctoModal = ({tital,message,closeModal,modalData,successAction,successBtnName}) => {
    return (
        <div>
           


{/* Put this part before </body> tag */}
<input type="checkbox" id="delet-doctor-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="delet-doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{tital}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">   
     <label onClick={()=>successAction(modalData)} htmlFor="delet-doctor-modal" className="btn btn-primary ">{successBtnName}</label>
     <button onClick={closeModal} className='btn btn-outline'>cancle</button>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default DeleteDasDoctoModal;