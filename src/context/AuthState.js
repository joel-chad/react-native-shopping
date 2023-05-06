import React from 'react';
import Context from './authContext';
export default class CartContext extends React.Component{
state = {
  
  signedIn: false
}
 
componentDidMount(){
 
}



signOut = () => {
  this.setState({signedIn: false})
};

signIn = () => {
  this.setState({signedIn: true})
};




 
render(){
 return (
  <Context.Provider 
   value={{
    signedIn: this.state.signedIn,
    signIn: this.signIn,
    signOut: this.signOut
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}
