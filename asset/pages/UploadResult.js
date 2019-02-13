import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Picker,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Button, Input, Item } from "native-base";

import WardList from "../data/wards";
//import ImagePicker from 'react-native-image-picker'
import LGAList from "../data/lga";
import StateList from "../data/states";
import PartyList from "../data/parties";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
//c/onst sList =StateList;

const API_URL = "http://arielviewapi.azurewebsites.net/";
const    options ={
  title:"Select Picture",
  takePhotoButtonTitle :'Take a photo',
  chooseFromLibrryButtonTitle:'Choose from gallery',
  quality:1
  
};
export default class UploadResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      States: [],
      imageSource:null,
      Wards: [],
      LGAs: [],
      LGAz:[],
      State: "",
      Total: "",
      Void: "",
      Accredited: "",
      StationNumber: "",
      LGA: "",
      SenderAccess:"ArielViewMobile",
      Ward: "",
      Station: "",
      ElectionType: "",
      loading: false,
      results: {}
    };
  }

  componentDidMount() {
    this.getParties();
    this.getWards();
    this.getStates();
    this.getLGA();
    
    this.setState({ States: StateList });
    //this.setState({ LGAs: StateList });
    this.setState({ LGAs: LGAList });
  }

  // componentDidMount

  onStateChange = dat => {
    console.log(dat);
   const lga = LGAList.filter(w => w.State === dat);
    this.setState({
      LGA: lga
    });
    this.setState({ State: dat });
    this.setState({ LGAs: lga });
  //  console.log(lga);
  };

  onLGChange = dat => {
    //inventory.find( fruit => fruit.name === 'cherries' );
    const wards = WardList.filter(w => w.LGA === dat);
    this.setState({
      Wards: wards
    });
    this.setState({
      Ward: ''
    });
    this.setState({
      LGA: dat
    });
   // console.log('lga '+ dat)
    //console.log(wards);
    
    //return WardList.find(w=>w.LGA==value)
  };

  onWardChange=dat=>{
    this.setState({
      Ward: dat 
    });
 //   console.log(dat);
    console.log('ward')
    console.log(dat)
  }

  getParties = () => {
  };

  getLGA = () => {
  };

  getStates = () => {
  };

  getWards = () => {
    //let wards =fetch('../data/wards.json');//data

    //console.log();
  };

  UploadResult = () => {
    this.setState({
      loading: true
    });
    //extract all data by desttructing the state
    const {
      results,
      State,
      StationNumber,
      LGA,
      SenderAccess,
      Ward,
      Total,
      Void,
      Accredited,
      
      ResultObjects,
      ElectionType
    } = this.state;

    const data = {
      State,
      StationNumber,
      LGA,
      Ward,
      Total,Accredited,Void,
      SenderAccess,
      ElectionType,
      ResultObjects
    };
    console.log('data');
    console.log(JSON.stringify(data));
    console.log('data 2');
/*
    // send data to the API
    Axios({
      url: API_URL + "/postresult",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
    }
    })
      .then(res => {
        console.log(res);
        // stop loading
        this.setState({
          loading: false
        });

        if (res.status === 200) {
          alert("Result submitted successfully!");
        } else {
          alert("Ooops, some error occured. Please try again");
        }
      })
      .catch(err => {
        console.dir(err);
        this.setState({
          loading: false
        });
        alert("Ooops, some error occured");
      });

      */
  };

  onchangePartyScore = (party, score) => {
    this.setState({
      ResultObjects: {
        ...this.state.ResultObjects,
        [party]: score
      }
    });
    
    this.setState({
      results: {
        ...this.state.results,
        [party]: score
      }
    });

    console.log(this.state.ResultObjects);
  };
 onElectionTypeChange =dat=>{

  this.setState({ ElectionType: dat });
  console.log(dat);
  console.log('dat')

 }

 selectPhoto(){
   console.log('in method');
   var ImagePicker = require('react-native-image-picker');
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }  else {
      const source = { uri: response.uri };
  
     
      this.setState({
        imageSource: source,
      });
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
              this.onElectionTypeChange(itemValue)
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
            style={{ width: "100%" }}
            onValueChange={itemValue => this.onStateChange(itemValue)}
          >
            {this.state.States.map((v, i) => {
              return <Picker.Item key={i} label={v} value={v} />;
            })}
          </Picker>

          <Text> Select LGA </Text>
          <Picker
            selectedValue={this.state.LGA}
            style={{ width: "100%" }}
            onValueChange={(itemValue) =>
              this.onLGChange(itemValue)
            }
          >
             {this.state.LGAs.map((v, i) => {
              return <Picker.Item key={v.Name} label={v.Name} value={v.Name} />;
            })}
          </Picker>

          <Text> Select The Ward </Text>
          <Picker  selectedValue={this.state.Ward} style={{ width: "100%" }} onValueChange={itemValue =>
                this.onWardChange(itemValue)
            }
          >
          {this.state.Wards.map((v, i) => {
              return <Picker.Item key={v.Name} label={v.Name} value={v.Name} />;
            })}
            
          </Picker>

          <View
            style={{
              flex: 1,
              paddingHorizontal: 10
            }}
          >
          <Text>StationNumber</Text>
            <Item regular style={{ width: "100%" }}>
              
              <Input
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Enter Number"
                keyboardType="numeric"
                placeholderTextColor="#ffffff"
                selectionColor="#fff"
                onChangeText={text => {
                  this.setState({ StationNumber: text })}}
                keyboardType="default"
              />
            </Item>
          </View>

          {PartyList.map((party, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 10
                }}
                key={index}
              >
                <Text>{party}</Text>
                <Item regular style={{ width: "100%" }}>
                  <Input
                    style={[
                      styles.inputBox,
                      { borderColor: "#000", width: "100%" }
                    ]}
                    placeholder={`Enter Result for ${party}`}
                    defaultValue='0'
                    placeholderTextColor={"#999"}
                    keyboardType="numeric"
                    onChangeText={text => {
                      this.onchangePartyScore(party, text);
                    }}
                  >
                  </Input>
                </Item>
              </View>

            );
          })}
<View
                style={{
                  flex: 1,
                  paddingHorizontal: 10
                }}
                
              >
                <Text>Accredited Votes</Text>
                <Item regular style={{ width: "100%" }}>
                  <Input
                    style={[
                      styles.inputBox,
                      { borderColor: "#000", width: "100%" }
                    ]}
                    placeholder={`Enter The Total Votes`}
                    defaultValue='0'
                    placeholderTextColor={"#999"}
                    keyboardType="numeric"
                    onChangeText={text => {
                      this.setState({ Accredited: text })}}
                  >
                  </Input>
                </Item>
              </View>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 10
                }}
                
              >
                <Text>Void Votes</Text>
                <Item regular style={{ width: "100%" }}>
                  <Input
                    style={[
                      styles.inputBox,
                      { borderColor: "#000", width: "100%" }
                    ]}
                    placeholder={`Enter The Void Votes`}
                    defaultValue='0'
                    placeholderTextColor={"#999"}
                    keyboardType="numeric"
                    onChangeText={text => {
                      this.setState({ Void: text })}}
                  >
                  </Input>
                </Item>
              </View>
         <View
                style={{
                  flex: 1,
                  paddingHorizontal: 10
                }}
                
              >
                <Text>Total Votes</Text>
                <Item regular style={{ width: "100%" }}>
                  <Input
                    style={[
                      styles.inputBox,
                      { borderColor: "#000", width: "100%" }
                    ]}
                    placeholder={`Enter The Total Votes`}
                    defaultValue='0'
                    placeholderTextColor={"#999"}
                    keyboardType="numeric"
                    onChangeText={text => {
                      this.setState({ Total: text })}}
                  >
                  </Input>
                </Item>
              </View>

              <View>
                <Image style={styles.Image} source={this.state.ImageSource!=null?this.state.imageSource:require('../images/noimage.jpg')}/>
          <TouchableOpacity style={styles.button} onPress={this.selectPhoto.bind(this)}>
            <Text style={styles.Text}> Capture Result Sheet</Text>
          </TouchableOpacity>
        </View>

          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              paddingVertical: 12
            }}
          >
            <Button onPress={this.UploadResult} style={{ padding: 12 }}>
              <Text style={{ color: "#fff" }}> Upload Result </Text>
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
  button:{
    width:250,
    height:50,
    borderRadius:30,
    backgroundColor:'#330006'
  },
  image:{
    width:200,
    height:200,
    marginTop:15
  },
  Text:{
    color:'white',
    fontSize:18,
    textAlign:'center'
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
