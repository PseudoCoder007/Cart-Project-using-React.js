// import CartItem from './cartItem.js';
import Cart from './Cart';//here we want cartItem to be inside CART component;
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
       <Navbar/>
     {/* <h1>Cart</h1> */}
     <Cart />
    
     {/* <CartItem/> */}
    </div>
  );
}

export default App;