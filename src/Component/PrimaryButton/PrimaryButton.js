import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-[#f00135] to-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;