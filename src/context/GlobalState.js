import React from 'react';
import Context from './context';
export default class CartContext extends React.Component{
state = {
  items: [],
  signedIn: false
}
 
addNewItem = (item) => {
  const list = [...this.state.items, item];
  this.setState({items: list});
};
 
deleteItem = (itemId) => {
  this.setState(this.state.items.splice(itemId,1));
};
render(){
 return (
  <Context.Provider 
   value={{
    signedIn: this.state.signedIn,
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
