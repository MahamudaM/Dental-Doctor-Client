import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appoinment from "../Pages/Appoinment/Appoinment/Appoinment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginAndRegiester/Login/Login";
import Review from "../Pages/Review/Review";
import Regiester from "../Pages/LoginAndRegiester/Regiester/Regiester";

import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import AdminRoutes from "./AdminRoute/AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/appoinment',
                element:<Appoinment></Appoinment>
            },
            {
                path:'/review',
                element:<Review></Review>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Regiester></Regiester>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allUser',
                element:<AdminRoutes><Allusers></Allusers></AdminRoutes>
            },
            // 
            {
                path:'/dashboard/addDoctor',
                element:<AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path:'/dashboard/manageDoctor',
                element:<AdminRoutes><ManageDoctor></ManageDoctor></AdminRoutes>
            },
        ]
    }
])