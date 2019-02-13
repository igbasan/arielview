import React, { Component } from 'react';
import {
  StyleSheet,
  
  ScrollView,
  View,
  StatusBar ,
  FlatList,
  
  TouchableOpacity
} from 'react-native';
import { Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import senateData from '../data/senate';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


import thumbnail from '../images/thumbnail.jpeg';

import {Actions} from 'react-native-router-flux';

export default class NASS extends Component  {

  constructor(props){
    super(props);
    this.state={
      results:[],
      tableHead:['State', 'Leader', 'RunnerUp', '2nd RunnerUp']
    }
  }
	signup() {
		Actions.signup()
	}

  componentDidMount(){
   // console.log(senateData);
    //this.setState({ results: senateData });
   
   // console.log(this.state.results);
    this.setState({
      results: senateData 
    },()=>{});
   // console.log(senateData);
  

  }
  getData(){
    /*
      fetch('../data/presidency.json')
      .then(results=>results.json())
      .then(results=>this.setState({'data':results}));
*/

  };
  
	render() {

  console.log(this.state.results);
  console.log('this.state.results');
  console.log(this.state.results);
  
   
   let resultData = this.state.results.map(function(rdata,index){
    return (
      <Card>
        <CardItem>
            <Left>
                    <Thumbnail source={{uri: this.thumbnail}} />
                    
                    <Body>
                      <Text>{rdata.Owner}</Text>
                      <Text>Leader {rdata.Winner}</Text>
                    </Body>
          </Left>
          <Right>
              <Text>Second {rdata.RunnerUp}</Text>
          </Right>
        </CardItem>

        <CardItem>
              <Left>
                
                
                 <Text>Third {rdata.SecondRunnerUp}</Text>
                            
              </Left>
              
              <Right>
                <Text>Last Update :12:12:30 a.m.</Text>
              </Right>
            </CardItem>

      </Card>
    )
    
  });
		return(
<Container>
        <Header />
        <Content>
        
        
          {resultData}
        </Content>
      </Container>

     
			)
	}
}

const tablestyles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
    
  },
  table:{
    borderColor: '#C1C0B9',
    backgroundColor:'green',
    alignItems:'flex-end',
    justifyContent :'center',
    width:'100%',
    height:'100%',

  },
  header:{
    width:'100%',
    backgroundColor:'green',
    

  },
  item:{
    width:'100%',
    backgroundColor:'green',
    

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
