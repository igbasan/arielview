import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  ScrollView,
  TouchableOpacity
} from "react-native";

import {Button, Input} from 'native-base';

import WardList from "../data/wards";
import LGAList from "../data/lga";
import StateList from "../data/states";
import PartyList from "../data/parties";
import { Actions } from "react-native-router-flux";
//c/onst sList =StateList;

const API_URL  = "http://arielviewapi.azurewebsites.net/";


export default class UploadResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      States: [],
      Wards: [],
      LGAs: [],
      State: "",
      StationNumber: "",
      LGA: "",
      Ward: "",
      Station: "",
      ElectionType: "",
      loading: false,
      results:{}
    };
  }

  componentDidMount() {
    this.getParties();
    this.getWards();
    this.getStates();
    this.getLGA();
    console.log(StateList);
    this.setState({ States: StateList });
    console.log(this.state.States);
  }

  // componentDidMount

  onStateChange = (dat)  => {
    console.log(dat);
    const lga = LGAList.find(w => w.State === dat);
    this.setState({
      LGA: lga
    });
    this.setState({ State: dat });
    console.log(lga);
  }
  onLGChange = (dat) => {
    //inventory.find( fruit => fruit.name === 'cherries' );
    const wards = WardList.find(w => w.LGA == dat);
    this.setState({
      Ward: wards
    });
    //return WardList.find(w=>w.LGA==value)
  }
  getParties = () => {
    console.log(PartyList);
    console.log("party");
  }
  getLGA = () => {
    console.log(LGAList);
    console.log("lga");
  }

  getStates = () => {
    console.log(StateList);
    console.log("state");
  }

  getWards = () => {
    //let wards =fetch('../data/wards.json');//data

    console.log(WardList);
    console.log("ward");
    //console.log();
  }

  UploadResult = () => {
    this.setState({
      loading: true
    });
    //extract all data by desttructing the state
    const {results, state, StationNumber,LGA, Ward, Station, ElectionType } = this.state;
    fetch({
      url: API_URL+'/postresult',
      method: 'POST',
      body: {
        state,
        StationNumber,
        LGA,
        Ward,
        Station,
        ElectionType,
        results
      }
    }).then(res => {
      // stop loading 
      this.setState({
        loading: false
      });
      if(res.status === 200){
        
        alert("Result submitted successfully!");
      } else {
        alert("Ooops, some error occured. Please try again");  
      }
    }).catch(err => {
      this.setState({
        loading: false
      })
      alert("Ooops, some error occured");
    })
  }

  onchangePartyScore = (party,score) => {
    this.setState({
      results: {
        ...this.state.results,
        party: score
      }
    });
  }

  render() {
    return (
      
        <ScrollView style={{}}>
          <View style={styles.container}>
            <Text> Select Election Type </Text>

            <Picker
              selectedValue={this.state.ElectionType}
              style={{ width: "100%" }}
              onValueChange={itemValue =>
                this.setState({ ElectionType: itemValue })
              }
            >
              <Picker.Item label="Presidency" value="Presidency" />
              <Picker.Item label="Senate" value="Senate" />
              <Picker.Item label="Federal House" value="Federal House" />
              <Picker.Item label="Gubernatorial" value="Gubernatorial" />
            </Picker>

            <Text> Select States </Text>

            <Picker
              selectedValue={this.state.State}
              style={{ width: "100%"  }}
              onValueChange={itemValue => this.onStateChange(itemValue)}
            >
              {this.state.States.map( (v,i) => {
                return <Picker.Item key={i} label={v} value={v} />;
              })}
            </Picker>

            <Text> Select LGA </Text>
            <Picker
              selectedValue={this.state.LGA}
              style={{ width: "100%"  }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ ElectionType: itemValue })
              }
              
            >
              <Picker.Item label="Presidency" value="Presidency" />
              <Picker.Item label="Senate" value="Senate" />
              <Picker.Item label="Federal House" value="Federal House" />
              <Picker.Item label="Gubernatorial" value="Gubernatorial" />
            </Picker>

            <Text> Select Ward </Text>
            <Picker
              selectedValue={this.state.Ward}
              onValueChange={itemValue =>
                this.setState({ ElectionType: itemValue })
              }
            >
              <Picker.Item label="Presidency" value="Presidency" />
              <Picker.Item label="Senate" value="Senate" />
              <Picker.Item label="Federal House" value="Federal House" />
              <Picker.Item label="Gubernatorial" value="Gubernatorial" />
            </Picker>

            <Input
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Enter Number"
              keyboardType="numeric"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="default"
            />

            {
              
              PartyList.map( (party, index) => {
                return <View style={{
                  flex: 1, paddingHorizontal: 10}
                } key={index}>
                  <Text>
                    {party}
                  </Text>
                  <Input 
                  style={[styles.inputBox,{ borderColor: "#000", width: "100%" }]}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Enter Number"
              keyboardType="numeric"
              placeholderTextColor="#333"
              selectionColor="#222" 
              onChangeText={(text) => {this.onchangePartyScore(party,text)}}
              > </Input>
                </View>
              })
            }


            <View style={{
              alignSelf:"center",
              alignItems:"center",
              justifyContent:"center",
              flex: 1,
              paddingVertical: 12,
              
            }}>
            <Button onPress={this.UploadResult}  style={{padding: 12}} >
              <Text style={{color: "#fff"}}> Upload Result </Text>
            </Button>
            </View>
          </View>
        </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  },
  inputBox: {
    borderColor: "#000"
  }
});
