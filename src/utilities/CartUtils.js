
export const isPresentInCart=(products,id)=> products?.length>0 && products.some(product=>product.id===id)

export const getTotalCartAmount=(cart)=>cart.length>0 ?cart.reduce((acc,item)=>acc+item.price,0):0