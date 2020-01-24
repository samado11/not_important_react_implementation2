import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Alert, TouchableOpacity , TextInput, View, StyleSheet,Text } from 'react-native';

export default class FloatingLabelExample extends Component {
  constructor (props) {
    super(props);
    this.state = {borderColor: '#ededed',margin:20};
}
  onFocus() {
    this.setState({
        borderColor: 'yellow',
    })
  }

  onBlur() {
    this.setState({
      borderColor: '#ededed'
    })
  }
  render() {
    
    return (
      <View style={{padding:10,marginTop:30}}>
        <View style={{padding:10,backgroundColor:"#ededed",borderRadius:10,borderColor:this.state.borderColor,borderWidth:2,height:60}}>
             <Item floatingLabel style={{borderBottomColor:"transparent"}}>
              <Label style={{marginTop:-16}}>Username</Label>
              <Input  onBlur={ () => this.onBlur() } onFocus={ () => this.onFocus() } style={{marginTop:-15}}/>
            </Item>
        </View>
        </View>
    );
  }
}

// render() {
    
//   return (
//       <View style={{padding:10}}>
//           <View style={{borderColor:this.state.borderColor,backgroundColor:"green",padding:4,borderRadius:10}}>
//           <Label style={{marginTop:this.state.margin}}>Username</Label>
//             <TextInput style={{backgroundColor:"blue"}} onBlur={ () => this.onBlur() } onFocus={ () => this.onFocus() } />
            
//           </View>
//           <View >
//             <Label>Password</Label>
//             <Input />
//           </View>
//       </View>

//   );
// }