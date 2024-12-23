export const cartReducer=(
    state,{type,payload}
)=>{
    switch(type){
        case "ADD_TO_CART" :{
            return {
                ...state,
                cart:[...state.cart,payload]
            }
        }
        case "REMOVE_FROM_CART":{
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id!=payload)
            }
        }
        case "ADD_TO_WISHL_LIST":{
            return {
                ...state,
                wishlist:[...state.wishlist,payload]
            }
        }
        case "REMOVE_FROM_WISHL_LIST":{
            return{
                ...state,
                wishlist:state.wishlist.filter((item)=>item.id!=payload)
            }
        }
        default : return state
    }
}