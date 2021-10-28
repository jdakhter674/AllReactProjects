const select_product=(state={},action)=>{

    const{type,payload}=action

    switch(type){
        case "SELECT_PRODUCT":
            return {...state , ...payload}
        case "REMOVE_PRODUCT":
            return {}
        default :
         return state;
    }


}


export default select_product;