import React, {  useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loader from '../../SharedPages/Loader/Loader';


const AdminRoutes = ({children}) => {
    const location= useLocation()
    const {user,loader} = useContext(AuthContext)
    const [isAdmin,isAdminLoading]=useAdmin(user?.email);
    if(loader || isAdminLoading){
        return <Loader></Loader>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}}replace ></Navigate>
};

export default AdminRoutes;