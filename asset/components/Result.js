import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {State: ''};
    this.state = {LGA: ''};
    this.state = {Ward: ''};
    this.state = {Station: ''};
    this.state = {ElectionType: ''};
    //this.state={Parties:[]}
  }
  getParties(){
  
    
  }
  
  getWard(){
   
  }


componentDidMount(){
  //getWard();
 // getParties();
}
	render(){
		return(
			<View style={styles.container}>
       <Text> Select Election Type </Text>
            <Picker selectedValue={this.state.ElectionType}  onValueChange={(itemValue, itemIndex) => this.setState({ElectionType: itemValue})}>
            
            <Picker.Item label="Presidency" value="Presidency" />
            <Picker.Item label="Senate" value="Senate" />
            <Picker.Item label="Federal House" value="Federal House" />
            <Picker.Item label="Gubernatorial" value="Gubernatorial" />
          </Picker>

          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="PhoneNumber"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="phone-pad"
              onSubmitEditing={()=> this.password.focus()}
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onSubmitEditing={()=> this.password.focus()}
              />
          
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});