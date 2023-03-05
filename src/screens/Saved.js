import React, { PureComponent } from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import CartServices from '../services/CartServices';
import Icon from 'react-native-vector-icons/Ionicons'
import Button from '../components/universal/Button';
import { widthToDp, heightToDp } from "rn-responsive-screen";
import Context from '../context/context';


class Saved extends PureComponent {
  static contextType = Context;

  constructor(props){
    super(props);
    this.state = {
      data: [],
      bill: ''
    }
  }
     getSavedProducts=()=>{
        CartServices.getCartItems()
            .then(res=>{
                // setSaved(res)
                this.setState({data: res.items})
                this.setState({bill: res.bill})
                this.state.data.forEach(item=>{
                  this.context.addNewItem(item)
                })
                            
              })
            .catch(err=>{
                console.log(err)
            })
    }

    // useEffect(()=>{
    //     getSavedProducts();
    // },[]);
  
    renderCats = ({item}) => (
      <View style={{marginTop: 0}}>
      <ListItem bottomDivider>
      <Avatar rounded large source={{uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg'}} height={36} width={36} />
       <ListItem.Content>
         <ListItem.Title style={{color:'black', fontSize: 18}}>{item.name}</ListItem.Title>
         <ListItem.Subtitle style={{color: 'black'}}>{`$${item.price}`}</ListItem.Subtitle>
         <ListItem.Subtitle style={{color: 'black'}}>{`${item.quantity} units`}</ListItem.Subtitle>
       </ListItem.Content>
     </ListItem>
      </View>
    );
  
  
    componentDidMount(){
      this.getSavedProducts()
    }
  
    render(){
      return(
        <SafeAreaView style={{ flex: 1}}>
          <View style={styles.checkout}>
            <Button style={styles.button}
                  title="Checkout"     
            />          
            </View>

          <FlatList
            removeClippedSubviews={true}
            data={this.context.items} 
            renderItem={item => this.renderCats(item)}
          />
          <View style={styles.bill}>
          <Text style={styles.total}>Total: {this.state.bill}</Text>
          </View>
      </SafeAreaView>
      
        )
    }
  }

  const styles = StyleSheet.create({
    total: {
        fontSize: 25,
        // justifyContent: 'flex-end'
    },
    bill:{
      flex:1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10
    },
    checkout:{
      flex:1,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      padding: 10
    }, 
    button: {
      width: widthToDp(25),
      height: heightToDp(10)
    }
  })
  
  export default Saved;