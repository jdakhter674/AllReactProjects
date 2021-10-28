 import firebase from '../../container/firebase'
 
 ////.////////////////////rEGISTRATION ACTION/////////////////////////////////
 const registerStart=()=>{
    return {
        type:"REGISTER_START"
    }
}
 const registerSuccess=(user)=>( {
        type:"REGISTER_SUCCESS",
        payload:user
    }
 )
 const registerFail=(err)=>{
    return {
        type:"REGISTER_FAIL",
        payload:err
    }
}

export const registerDispatch=(email,password)=>{
    return function(dispatch){
        dispatch(registerStart());
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(({user})=>{ 
            dispatch(registerSuccess(user)) 

            console.log(user)
        })
        .catch(err=>{
        dispatch(registerFail(err.message))
            // console.log(error)
        })
    }
    
}



 ////.////////////////////LOGIN ACTION/////////////////////////////////


const loginStart=(name)=>{
    return {
        type:"LOGIN_START",
        payload:name
    }
}
 const loginSuccess=(user,name)=>( {
        type:"LOGIN_SUCCESS",
        payload:{user,name}
    }
 )
 const loginFail=(error)=>{
    return {
        type:"LOGIN_FAIL",
        payload:error
    }
}

export const loginDispatch=(email,password,name)=>{
    return function(dispatch){
        dispatch(loginStart(name));
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=>{ 
            dispatch(loginSuccess(user,name)) 

            console.log(user)
        })
        .catch(error=>{
        dispatch(loginFail(error.message))
            console.log(error)
        })
    }
    
}






 ////.////////////////////LOGOUT ACTION/////////////////////////////////

 const logoutStart=()=>{
    return {
        type:"LOGOUT_START"
    }
}
 const logoutSuccess=(user)=>( {
        type:"LOGOUT_SUCCESS",
        payload:user
    }
 )
 const logoutFail=(err)=>{
    return {
        type:"LOGOUT_FAIL",
        payload:err
    }
}

export const setUser=(user)=>{
 return {
     type:"SET_USER",
     payload:user
 }
}



export const logoutDispatch=()=>{
    return function(dispatch){
        dispatch(loginStart());
        firebase.auth().signOut()
        .then((res)=>{ 
            dispatch(loginSuccess()) 

            // console.log(user)
        })
        .catch(error=>{
        dispatch(loginFail(error.message))
            console.log(error)
        })
    }
    
}

