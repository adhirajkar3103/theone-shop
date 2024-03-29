export const addDecimals = (num)=>{
    return (Math.round(num*100)/100).toFixed(2);
}

const updateCart = (state)=>{
    //Items price
    state.itemPrice = addDecimals(state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0))
    //Shipping price
    state.shippingPrice = addDecimals(state.itemPrice>100?0:10);
    //tax price
    state.taxPrice = addDecimals(Number((0.15*state.itemPrice).toFixed(2)))
    //Total price
    state.totalPrice = (
        Number(state.itemPrice)+
        Number(state.shippingPrice)+
        Number(state.taxPrice)
    ).toFixed(2);
    localStorage.setItem('cart',JSON.stringify(state));
    return state;
}

export default updateCart;