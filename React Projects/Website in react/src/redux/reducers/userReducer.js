const initialState= {
    loading:false,
    currentUser:null,
    error:null,
    name:""
}

 const userReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){

        case "LOGIN_START":
            return {
                ...state,
                loading:true,
                name:payload

            }
            
        case "REGISTER_START":
        case "LOGOUT_START":
            return {
                ...state,
                loading:true,

            }
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                currentUser:null,
            }
        
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading:false,
                currentUser:payload.user,
                name:payload.name
            }
        case "REGISTER_ERROR":
        case "LOGIN_FAIL":
        case "LOGOUT_FAIL":
            return {
                ...state,
               loading:false,
               error:payload
            }


        case "SET_USER":
            return {
                ...state,
                loading:false,
                currentUser:payload
            }
        default:
            return state;
    }
}

export default userReducer;