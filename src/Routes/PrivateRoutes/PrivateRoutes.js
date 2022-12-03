import React, {  useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';

const PrivateRoutes = ({children}) => {
    const location= useLocation()
    const {user,loader} = useContext(AuthContext)
    if(loader){
        return <button className="btn loading ml-6 mt-6">loading</button>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}}replace ></Navigate>
};

export default PrivateRoutes;