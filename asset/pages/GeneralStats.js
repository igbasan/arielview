import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar ,
  FlatList,
  List,ListItem,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
//import { Content,CardItem,Body, Card, Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from "native-base";
import generalStats from '../data/generalStats';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';




import {Actions} from 'react-native-router-flux';

export default class GeneralStats extends Component  {

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
   // console.log(generalStats);
    //this.setState({ results: generalStats });
   
   // console.log(this.state.results);
    this.setState({
      results: generalStats 
    },()=>{});
   // console.log(generalStats);
  

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
   let resultData = this.state.results.map((v, i) => {
    return (
      <List>
            <ListItem selected>
              <Left>
                <Text>Simon Mignolet</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Nathaniel Clyne</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
    )
  });
    /* resultData = this.state.results.map(function(rdata,index){
      return (
        <Card>
          <CardItem>
            <Body>
              <Text>
              {rdata.Owner}
              </Text>
            </Body>
          </CardItem>
        </Card>
      )
      
    });
    */
		return(

      <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderColor: '#C1C0B9'}}>
            <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              {
                this.setState.res.map((rowData, index) => (
                  <Row
                    key={index}
                    

                    data={[rowData.Owner,rowData.Winner,rowData.RunnerUp,rowData.SecondRunnerUp]}
                    widthArr={state.widthArr}
                    
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
		
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
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
