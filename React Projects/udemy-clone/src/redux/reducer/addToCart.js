
const addToCart=(state=0 , action)=>{
    const {type , payload } = action
    switch (type) {
        case "SHOP_COUNTER":
            return state + 1
        default:
            return state
    }
}


export default addToCart