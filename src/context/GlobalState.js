import React from 'react';
import Context from './context';
import CartServices from '../services/CartServices';
export default class CartContext extends React.Component{
state = {
  items: [],
  // signedIn: false
}
 
componentDidMount(){
  CartServices.getCartItems()
    .then(res=>{
      this.setState({items : res.items})           
      })
    .catch(err=>{
      console.log(err)
    })
}

addNewItem = () => {
  CartServices.getCartItems()
    .then(res=>{
      this.setState({items : res.items})           
      })
    .catch(err=>{
      console.log(err)
    })
};

deleteItem = () => {
  CartServices.getCartItems()
    .then(res=>{
      this.setState({items : res.items})           
      })
    .catch(err=>{
      console.log(err)
    })
};
 
// deleteItem = (itemId) => {
//   this.setState(this.state.items.splice(itemId,1));
// };
render(){
 return (
  <Context.Provider 
   value={{
    // signedIn: this.state.signedIn,
    items: this.state.items,
    addNewItem: this.addNewItem,
    deleteItem: this.deleteItem
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}
