import React from "react";
import CartItem from './cartItem'
class Cart extends React.Component{
    constructor(){//7.3
        super();
        this.state={
            products:[
            {
            price:99,
            title:'Watch',
            qty:1,
            img:"",
            id:1
            },
            {
            price:999,
            title:'Phone',
            qty:21,
            img:"",
            id:2
            },
            {
            price:9999,
            title:'Laptop',
            qty:11,
            img:"",
            id:3
            }
            ]
        }
    }
    //7.4 Handling increaseQuantity() in Cart :- for this we need to raise an event handleIncreaseQuantity that will change the state.This event/funnction gets called when clicking on + and it is sent as a prop with the reference onIncreaseQuantity.
    handleIncreaseQuantity=(product)=>{//here product is the item whose qty has to be increased.
        console.log('Hey! pls increase the qty of',product);
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })

    }
    handleDecreaseQuantity=(product)=>{//here product is the item whose qty has to be increased.
        console.log('Hey! pls decrease the qty of',product);
        const {products}=this.state;
        const index=products.indexOf(product);
        //check 0/-ve condition-:
        if(products[index].qty === 0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products:products
        })

    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;//<- will get products from state
        //we will filter the particular product that we want to delete.
        const items=products.filter((item)=> item.id !== id);//<- [{}]= this will return me another array & it will contain proudct whose id is not equal to the id that is passed.
        this.setState({
            products:items
        })
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                    {products.map((product)=>{
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQunatity={this.handleIncreaseQuantity}//here we are passing the ref of hIQ to onIQ 
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}
                    />
                    )
                })}
               
            </div>
           
        )
    }   
}

export default Cart;