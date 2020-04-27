import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const total = cart.reduce((total ,prd) =>total +prd.price,0)
    let total=0;
    for(let i=0;i<cart.length;i++)
    {
        const prd=cart[i];
        total = total+prd.price;

    }

    let shipping =0;
    if (total>35)
    {
        shipping=0;
    }
    else if (total>15)
    {
        shipping=4;
    }
    
    const tax = Math.round(total/10).toFixed(2) ;

    const grandTotal= (total + shipping + Number(tax)).toFixed(2);

    return (
        <div className="cartList">
            <h4>Order Summery</h4>  
            <p>Number of selected items : {cart.length}</p>
            <p>Product price : {total}</p>
            <p>Shipping cost : {shipping}</p>
            <p>Tax + Vat : {tax}</p>
            <p>Total Price : {grandTotal}</p>
            <button className="buyNow">Buy Now</button>
        </div>
    );
};

export default Cart;   