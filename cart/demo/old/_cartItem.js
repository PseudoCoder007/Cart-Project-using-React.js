import React from "react";

class CartItem extends React.Component{
    // 7.3 here we need to export constructor
    //5.5 Adding state in CartItem
    // constructor(){
    //     //have to call parent class constructor-:
    //     super();
    //     //here, we can write our defualt state
    //     this.state={
    //         price:999,
    //         title:'Phone',
    //         qty:1,
    //         img:""
    //     }
    //     //5.7
    //     // this.increaseQuantity=this.increaseQuantity.bind(this); or we can use arrow function.
    //     //6.3-:
    //     //  this.testing();
    // }
    //6.3 setState in depth - II
    // testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);

    //     })
    //     promise.then(()=>{
    //         //setState acts like a syncheronus call
    //         this.setState(({
    //             qty:this.state.qty +10

    //         }),
    //         this.setState({
    //             qty:this.state.qty +10

    //         }),
    //         this.setState({
    //             // qty:101
    //             qty:this.state.qty +10
    //         },
    //         () => {
    //             console.log('this.state', this.state);
    //           }
    //         ));
    //         // console.log('state',this.state); <- it is not working so passed as the 2nd arg. in setState above.

    //     })
    // }
    //5.7
    increaseQuantity =() =>{
        // this.state.qty+=1;
        // console.log('this.state',this.state);
        //setState form 1-: by giving an object.It can be used to change title.
        this.setState({
            qty: this.state.qty+1 
            //, title:'Nokia phone'
        },() => {
            console.log('this.state', this.state);
          }
        )
        // 6.2
        // this.setState({
        //     qty: this.state.qty+1,
        //     title:'Nokia phone'
        // }, () => {
        //     console.log('this.state', this.state);
        //   });
        // this.setState({
        //     qty: this.state.qty+15 ,
        //     title:'Nokia phone'
        // }, () => {
        //     console.log('this.state', this.state);
        //   }
        // );
        //setState form 2-: by passing a callback function.Can be used where prevSate is required.
        // this.setState((prevState)=>{
        //     return{
        //         qty: prevState.qty+1
        //     }
        // //6.2 setState() ia asynchronus , so we dont know when its call finishes, as a result state will be late updated.So react provide with 2nd callback () .
        // },()=>{
        //     console.log('this.state',this.state); 
        // });
        // console.log(this.state); 

        

        //6.2 here if call 2nd form setState 3 times, the increase will be +3 unlike  to 1st form where the increase only by +1.
        // this.setState((prevState)=>{
        //     return{
        //         qty: prevState.qty+1
        //     }
        // });
        // this.setState((prevState)=>{
        //     return{
        //         qty: prevState.qty+1
        //     }
        // });
    }

    //6.1
    decreaseQuantity=()=>{
         
        // this.state.qty-=1;
        // console.log('this.state',this.state);
        //setState form1-:
        // this.setState({
        //     qty:this.state.qty -1
        // })
        //or setState form 2-:
        //6.2 check that qty not to be <0-:
        const {qty}=this.state;
        if(qty===0){
            return;
        }
        this.setState((prevState)=>{
           return{
            qty: prevState.qty -1
           }
        });
    }
    render(){
        // 6.2 CHECK render()-:
        console.log('render');
        
        // 5.5 we can use object destructuring
        // 7.3 Props
        // to grab from props-:
        console.log('this.props',this.props);
        const {price,title,qty}=this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    {/*5.5*/}
                   {/* <div style={{ fontSize: 25}}>Phone</div>
                   <div style={{ color:'#777' }}>Rs 999</div>
                   <div style={{ color:'#777'}}>Qty: 1</div> */}
                   {/* <div style={{ fontSize: 25}}>{this.state.title}</div> <- this title was taking local value.So to grab the props-:*/}
                   <div style={{ fontSize: 25}}>{title}</div>
                   <div style={{ color:'#777' }}>Rs {price}</div>
                   <div style={{ color:'#777'}}>Qty: {qty}</div>
                   <div className="cart-item-actions">{/* Buttons */} 
                   <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                //    5.7
                    // onClick={this.increaseQuantity.bind(this)} or
                    onClick={this.increaseQuantity}
                   />
                   <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                   //6.1
                   onClick={this.decreaseQuantity}/>
                   <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
                   </div>
                </div>
            </div>
          
        );
    }
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