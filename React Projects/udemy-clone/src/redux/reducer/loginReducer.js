const initial_state={
    current_state:null,
    loadingState:false,
    error:false,
    name:'',
    count:0
}


const loginReducer=(state=initial_state , action)=>{
    const {payload , type} = action
    switch (type) {


        case "SIGN_UP_START":
        case "SIGN_IN_START":
        case "SIGN_OUT_START":
        case "GOOGLE_AUTH_START":
            return{
                ...state,
                loadingState:true
               
            }
            
            
        case "SIGN_UP_SUCCESS":
        case "SIGN_IN_SUCCESS":
        case "GOOGLE_AUTH_SUCCESS":

            return{
                ...state,
                loadingState:true,
                current_state:payload.user,
                error:null,
                name:payload.name

          }


        case "SIGN_OUT_SUCCESS":
            return {
                ...state,
                current_state:null,

            }
        case "SIGN_UP_ERROR":
        case "SIGN_IN_ERROR":
        case "SIGN_OUT_ERROR":
        case "GOOGLE_AUTH_ERROR":
            return{
            ...state,
            loadingState:false,
            error:payload
            }
       
        default:
            return state;
    } 

}



export default loginReducer;






