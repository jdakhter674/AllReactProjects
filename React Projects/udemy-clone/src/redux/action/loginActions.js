


export const sign_up_start=()=>{
    return {
        type:'SIGN_UP_START'
    }
}
export const sign_up_success=({user , name})=>{
    return {
        type:'SIGN_UP_SUCCESS',
        payload:{user , name}
    }
}
export const sign_up_error=(error)=>{
    return {
        type:'SIGN_UP_ERROR',
        payload:error
    }
}







export const sign_in_start=()=>{
    return {
        type:'SIGN_IN_START'
    }
}
export const sign_in_success=({user , name})=>{
    return {
        type:'SIGN_IN_SUCCESS',
        payload:{user , name}
    }
}
export const sign_in_error=(error)=>{
    return {
        type:'SIGN_IN_ERROR',
        payload:error
    }
}





export const google_auth_start=()=>{
    return {
        type:'GOOGLE_AUTH_START'
    }
}
export const google_auth_success=({user , name})=>{
    return {
        type:'GOOGLE_AUTH_SUCCESS',
        payload:{user , name}
    }
}
export const google_auth_error=(error)=>{
    return {
        type:'GOOGLE_AUTH_ERROR',
        payload:error
    }
}














export const sign_out_start=()=>{
    return {
        type:'SIGN_OUT_START'
    }
}
export const sign_out_success=()=>{
    return {
        type:'SIGN_OUT_SUCCESS',
 
    }
}
export const sign_out_error=(error)=>{
    return {
        type:'SIGN_OUT_ERROR',
        payload:error
    }
}