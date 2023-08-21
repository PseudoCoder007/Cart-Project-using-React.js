import React from "react";
//Since this CartItem comp. does not have any state so change it into functional comp.-:
// class CartItem extends React.Component{
//     render(){
const CartItem=(props)=>{
    const {price,title,qty}=props.product;
    const {product,
        onIncreaseQunatity,
        onDecreaseQuantity,
        onDeleteProduct
    }=props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            <div className="right-block">
               <div style={{ fontSize: 25}}>{title}</div>
               <div style={{ color:'#777' }}>Rs {price}</div>
               <div style={{ color:'#777'}}>Qty: {qty}</div>
               <div className="cart-item-actions">{/* Buttons */} 
               <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                onClick={()=>onIncreaseQunatity(product)} //<- 7.4 here, on clicking + ,() will be called and this will call onIQ() with the arg. this.props.product
               />
               <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
               onClick={()=>onDecreaseQuantity(product)}
               />
               <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
               onClick={()=>onDeleteProduct(product.id)}/>
               </div>
            </div>
        </div>
      
    );
    
}
// we can style our element using object here 'style' with 'image' properties-:
const styles ={
                image: {
                    height: 200,
                    width: 200,
                    borderRadius: 4,
                    background: '#ccc'
                }
            }
export default CartItem;