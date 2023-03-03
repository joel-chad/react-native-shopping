
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

class Saved extends PureComponent {

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
                console.log(res)
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
      {/* <Avatar rounded large source={{uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg'}} height={36} width={36} /> */}
       <ListItem.Content>
         <ListItem.Title style={{color:'black', fontSize: 18}}>{item.name}</ListItem.Title>
         <ListItem.Subtitle style={{color: 'black'}}>{`$${item.price}`}</ListItem.Subtitle>
         <ListItem.Subtitle style={{color: 'black'}}>{`${item.quantity}units`}</ListItem.Subtitle>
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
        <FlatList
          removeClippedSubviews={true}
          data={this.state.data}
          renderItem={item => this.renderCats(item)}
        />
        <Text style={styles.total}>Total {this.state.bill}</Text>
      </SafeAreaView>
        )
    }
  }

  const styles = StyleSheet.create({
    total: {
        fontSize: 25,
        // justifyContent: 'flex-end'
    }
  })
  
  export default Saved;