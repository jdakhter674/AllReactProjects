
const initial_state={
    products:[]
}
const set_product=(state=initial_state,action)=>{
    switch(action.type){
        case "SET_PRODUCT":
            return {
                ...state,
                products:action.payload
            }
        
        default :
           return state
    }
}


export default set_product;