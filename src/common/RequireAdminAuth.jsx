import React, { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth';
import { Navigate } from 'react-router-dom';
import { adminToken } from './config';
const RequireAdminAuth = ({children}) => {
    const {admin} = useContext(AdminAuthContext);
    const token = adminToken();

    if(!admin && !token){
        return <Navigate to="/admin/login" />
    }
   return children;
}

export default RequireAdminAuth;