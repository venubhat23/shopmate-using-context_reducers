export const cartReducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList:payload.abc}
        case "REMOVE_FROM_CART":
            return {...state, cartList:payload.abc}

        case "UPDATE_TOTAL":
            return {...state,total:payload.total}
        default:
            throw new Error("No case Found in cart Reducer")
        
    }
}