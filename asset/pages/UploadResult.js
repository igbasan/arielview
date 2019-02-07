import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  ScrollView,
   TouchableOpacity
} from 'react-native';

import WardList from '../data/wards'
import LGAList from '../data/lga'
import StateList from '../data/states'
import PartyList from '../data/parties'
import {Actions} from 'react-native-router-flux';
;
//c/onst sList =StateList;
export default class UploadResult extends Component  {
  constructor(props) {
    super(props);
    this.state={States:{}};
    this.state= {Wards: {}}
    this.state ={LGAs:{}}
    this.state = {State: ''};
    this.state = {StationNumber: ''};
    this.state = {LGA: ''};
    this.state = {Ward: ''};
    this.state = {Station: ''};
    this.state = {ElectionType: ''};
    //this.state={Parties:[]}
  }
 

	componentWillMount(){
      this.getParties();
      this.getWards();
      this.getStates();
      this.getLGA();
      console.log(StateList);
      this.setState({States: StateList});
      console.log(this.state.States);
      //console.log(this);
     
  }
  
 // componentDidMount

  onStateChange(dat) {

    console.log(dat);
    const lga= LGAList.find(w=>w.State==dat)
    this.setState({
      LGA: lga
    });
    this.setState({State: dat});
    console.log(lga);
  }
  onLGChange(dat){
    //inventory.find( fruit => fruit.name === 'cherries' );
    const wards= WardList.find(w=>w.LGA==dat)
    this.setState({
      Ward: wards
    });
    //return WardList.find(w=>w.LGA==value)
  }
  getParties(){
      console.log(PartyList)
      console.log('party')
  }
  getLGA(){
    console.log(LGAList)
    console.log('lga')
}
  getStates(){
    console.log(StateList)
    console.log('state')
}
  getWards(){
     //let wards =fetch('../data/wards.json');//data 
    
     console.log(WardList);
     console.log('ward')
     //console.log();
  }

	render() {
    //this.setState({States: StateList});
		return(
      // console.log(StateList)
      <TouchableOpacity>
        <ScrollView>
				<View style={styles.container}>
       <Text> Select Election Type </Text>

       
            <Picker selectedValue={this.state.ElectionType} style={{width: 100}} onValueChange={(itemValue) => this.setState({ElectionType: itemValue})}>
            
                <Picker.Item label="Presidency" value="Presidency" />
                <Picker.Item label="Senate" value="Senate" />
                <Picker.Item label="Federal House" value="Federal House" />
                <Picker.Item label="Gubernatorial" value="Gubernatorial" />
          </Picker>
          
          <Text> Select States </Text>
          
          <Picker  selectedValue={this.state.State } style={{width: 100}}  onValueChange={( itemValue) => this.onStateChange(itemValue)}>
            {   StateList.map( (v)=>{
            return <Picker.Item label={v.State} value={v.State} />
            })

          }

          </Picker>
          
          <Text> Select LGA </Text>
            <Picker selectedValue={this.state.LGA}  style={{width: 100}} onValueChange={(itemValue, itemIndex) => this.setState({ElectionType: itemValue})}>
            
            
                <Picker.Item label="Presidency" value="Presidency" />
                <Picker.Item label="Senate" value="Senate" />
                <Picker.Item label="Federal House" value="Federal House" />
                <Picker.Item label="Gubernatorial" value="Gubernatorial" />
          </Picker>

          
          <Text> Select Ward </Text>
            <Picker selectedValue={this.state.Ward}  onValueChange={(itemValue) => this.setState({ElectionType: itemValue})}>
            
                <Picker.Item label="Presidency" value="Presidency" />
                <Picker.Item label="Senate" value="Senate" />
                <Picker.Item label="Federal House" value="Federal House" />
                <Picker.Item label="Gubernatorial" value="Gubernatorial" />
          </Picker>

          
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter Number"
              keyboardType='numeric'
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
             
              />
              
          
           
  		</View>
      </ScrollView>
      </TouchableOpacity>
    	)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'flex-start',
    justifyContent :'flex-start'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
