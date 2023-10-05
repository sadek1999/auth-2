import React, { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
  const {user,loding}=useContext(authContext)
  if(loding){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  if(user){
    return children
  }


    return <Navigate to={'/singin'}></Navigate>
};

export default Private;