import React from "react";
//Since this Navbar comp. does not have any state so change it into functional comp.& for every functional comp. props are passed by default-:
// class Navbar extends React.Component{
//     render(){
const Navbar=(props)=>{
    return(
        <div style={styles.nav} >
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/711/711897.png" alt="cart-icon"/>
                {/* <span style={styles.cartCount}>3</span> <- now we will make it dynamic*/}
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
      
    );
}
//here we will use inline-styling-:
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 2,
      top: -11
    }
  };
export default Navbar;