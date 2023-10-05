import React, { createContext, useState } from 'react';
import auth from './fairbase/firebase.config';



const authContex = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)

    const creatUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo={
        user
    }

    return (
        <authContex.Provider value={authInfo}>
            {children}
            
        </authContex.Provider >
    );
};

export default AuthProvider;