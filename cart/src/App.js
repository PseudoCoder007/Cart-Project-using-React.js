import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
          id: 1
        },
        {
          price: 999,
          title: 'Phone',
          qty: 21,
          img: "https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          id: 2
        },
        {
          price: 9999,
          title: 'Laptop',
          qty: 11,
          img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80",
          id: 3
        }
      ]
    }
  }
  //7.4 Handling increaseQuantity() in Cart :- for this we need to raise an event handleIncreaseQuantity that will change the state.This event/funnction gets called when clicking on + and it is sent as a prop with the reference onIncreaseQuantity.
  handleIncreaseQuantity = (product) => {//here product is the item whose qty has to be increased.
    console.log('Hey! pls increase the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })

  }
  handleDecreaseQuantity = (product) => {//here product is the item whose qty has to be increased.
    console.log('Hey! pls decrease the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    //check 0/-ve condition-:
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })

  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;//<- will get products from state
    //we will filter the particular product that we want to delete.
    const items = products.filter((item) => item.id !== id);//<- [{}]= this will return me another array & it will contain proudct whose id is not equal to the id that is passed.
    this.setState({
      products: items
    })}
  // 7.8 make our count dynamic-:
  getCartCount=() =>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty
    })
    return count;
  }
  //7.9 Total Price
  getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price;
    })
    return cartTotal;
  }
  render(){
    const{products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
         products={products}
         onIncreaseQunatity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}  
        />
        <div style={{fontSize:20, padding:10}}>Total:{this.getCartTotal()}</div>
      </div>
      
    )
  }
}

export default App;
