import React from "react";
import CartItem from './cartItem'

const Cart = (props)=>{
    const {products}=props;
    return(
        <div className="cart">
                {products.map((product)=>{
                return (
                <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQunatity={props.onIncreaseQunatity}//here we are passing the ref of hIQ to onIQ 
                onDecreaseQuantity={props.onDecreaseQuantity}
                onDeleteProduct={props.onDeleteProduct}
                />
                )
            })}
           
        </div>
       
    )
      
}

export default Cart;