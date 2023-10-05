import React, { createContext, useEffect, useState } from 'react';
import auth from './fairbase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';



export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loding,setloding]=useState(true)

    const creatUser=(email,password)=>{
      setloding(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const usersingin=(email,password)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const usersingout=()=>{
        setloding(true)
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setuser(currentUser)
        setloding(false)
       })
       return ()=>{unSubscribe}
    },[])

    const authInfo={
        user,
        creatUser, 
        usersingin,
        usersingout,
        loding
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
            
        </authContext.Provider >
    );
};

export default AuthProvider;