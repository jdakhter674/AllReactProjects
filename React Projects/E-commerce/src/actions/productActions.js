export const set_products=(products)=>{
    return{
        type:"SET_PRODUCT",
        payload:products
    }
}
export const select_products=(product)=>{
    return{
        type:"SELECT_PRODUCT",
        payload:product
    }
}
export const remove_product=()=>{
    return{
        type:"SELECT_PRODUCT",
     
    }
}

