import React, {  createContext, useEffect, useState } from 'react';
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/Firebase.confic';



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loader,setLoader] = useState(true)
    // create user by register
    const createUser =(email,password)=>{ 
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    //  login user
    const sigIn =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sing out
    const logOut=()=>{
        setLoader(true)
        return signOut(auth)
    }
    // update user
    const updateuserInfo = (userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }

    // user observer
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user observer')
            setUser(currentUser)
            setLoader(false)
        });
        return ()=> unsubscribe()
    },[])
    const authInfo = {
        createUser,
        sigIn,
        user,
        logOut,
        updateuserInfo,
        loader
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;