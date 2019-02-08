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

import { Button, Input, Item } from "native-base";

import WardList from "../data/wards";
import LGAList from "../data/lga";
import StateList from "../data/states";
import PartyList from "../data/parties";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
//c/onst sList =StateList;

const API_URL = "http://arielviewapi.azurewebsites.net/";

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
      results: {}
    };
  }

  componentDidMount() {
    this.getParties();
    this.getWards();
    this.getStates();
    this.getLGA();
    
    this.setState({ States: StateList });
    
  }

  // componentDidMount

  onStateChange = dat => {
    console.log(dat);
    const lga = LGAList.find(w => w.State === dat);
    this.setState({
      LGA: lga
    });
    this.setState({ State: dat });
    console.log(lga);
  };

  onLGChange = dat => {
    //inventory.find( fruit => fruit.name === 'cherries' );
    const wards = WardList.find(w => w.LGA == dat);
    this.setState({
      Ward: wards
    });
    //return WardList.find(w=>w.LGA==value)
  };

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
      state,
      StationNumber,
      LGA,
      Ward,
      Station,
      ElectionType
    } = this.state;

    const data = {
      state,
      StationNumber,
      LGA,
      Ward,
      Station,
      ElectionType,
      results
    };

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
  };

  onchangePartyScore = (party, score) => {
    this.setState({
      results: {
        ...this.state.results,
        [party]: score
      }
    });
  };

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
