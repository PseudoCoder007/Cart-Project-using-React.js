import React from "react";
import CartItem from './cartItem'
class Cart extends React.Component{
    constructor(){//7.3
        super();
        //here, we will edit our default state to a product list with 3 CI.And then we have to render this list using the CartItem component-:
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
    render(){
        // const arr=[1,2,3,'saif',0]
        const {products}=this.state;
        return(
            <div className="cart">
                 {/* 7.2 Rendering a list */}
                 {/* { {arr} <-& for loop we will use map()
                    arr.map((item)=>{
                    return item+5;
                })} */}
                {/* 7.3 Props*/}
                {/* <CartItem qty={11} title={'Watch'} price={999} img={''}/> <-passed below */}
                {products.map((product)=>{
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    
                    />
                    ) //<-here we are passing product as a prop.& key() is just to unqiuely identify the list items so to avoid error and key() is not a prop.
                })}
               
            </div>
           
        )
    }   
}

export default Cart;