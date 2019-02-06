import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
   
  TouchableOpacity
} from 'react-native';



import {Actions} from 'react-native-router-flux';

import iconP from '../images/presidency.png';
/**/
import iconN from '../images/nass.png';

import iconG from '../images/guber.png';

import iconSt from '../images/statsicon.png';
import iconV from '../images/result.png';
import iconM from '../images/chat.png';

import bgLogo from '../images/main_logo.jpeg';
export default class DashBoard extends Component {

  
  gotoResult(){
    Actions.uploadresult();
  }

  gotoMessaging(){
    Actions.messaging();
  }
  gotoNass(){
    Actions.nass();
  }

  gotoGuber(){
    Actions.guber();
  }

  gotoPresidency(){
    Actions.presidency();
  }
  gotoStats(){
    Actions.generalstats();
  }
  

	render() {
		return(
			<View style={homeStyles.container}>
      <View style={homeStyles.top}>
      <Image source={ bgLogo   } style={ homeStyles.headerimage }/>
        
      </View>

      <View style={ homeStyles.layer1 } >
          <View style={ homeStyles.layerItem } > 
              <TouchableOpacity
                style={ homeStyles.layerItemIcon }
                onPress={()=>this.gotoResult()}>
              <Image source={ iconV   } style={ homeStyles.layerItemIcon } />
              </TouchableOpacity>
                <Text style={ homeStyles.layerItemInner } onPress={ ()=> this.gotoResult()}>Upload Result</Text>
          </View>

          <View style={ homeStyles.layerItem }>
                <TouchableOpacity
                  style={ homeStyles.layerItemIcon }
                  onPress={()=>this.gotoPresidency()}>
                <Image source={ iconP  } style={ homeStyles.layerItemIcon }/>
                </TouchableOpacity>
                
                  <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoPresidency()} >Presidential</Text>
          </View>

          <View style={ homeStyles.layerItem } onPress={()=>this.gotoNass()}>
                <TouchableOpacity
                  style={ homeStyles.layerItemIcon }
                  onPress={()=>this.gotoNass()}>
                <Image source={ iconN } style={ homeStyles.layerItemIcon }/>
                </TouchableOpacity>
                
                  <Text style={ homeStyles.layerItemInner } onPress={()=>thisthis.gotoNass()}>NASS</Text>
          </View>
        </View>
      
      <View style={ homeStyles.layer2 }>


                <View style={ homeStyles.layerItem }>
                    <TouchableOpacity style={ homeStyles.layerItemIcon }  onPress={()=>this.gotoGuber()}>
                      <Image source={ iconG   } style={ homeStyles.layerItemIcon }/>
                        </TouchableOpacity>

                        <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoGuber()}>Guber</Text>
                </View>

              <View style={ homeStyles.layerItem }>
                        <TouchableOpacity
                          style={ homeStyles.layerItemIcon }
                          onPress={()=>this.gotoMessaging()}>
                        <Image source={ iconM   } style={ homeStyles.layerItemIcon }/>
                        </TouchableOpacity>
                          
                        <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoMessaging()}>Messaging</Text>
                  </View>

            
              <View style={ homeStyles.layerItem }>
              <TouchableOpacity
                style={ homeStyles.layerItemIcon }
                onPress={()=>this.gotoStats()}>
                <Image source={ iconSt   } style={ homeStyles.layerItemIcon }/>
              </TouchableOpacity>
              
              <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoStats()}> View Stats</Text>
              </View>
       </View>


      
    </View>
			)
	}
}

const homeStyles=StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor:'#48AF2C'

    },
    top:{
      height:'40%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#48AF2C'
     
    },
    headerimage:{
      width:140,
      height:140,
      borderRadius:50,
      borderWidth:4,
      borderColor:'#fff'

    },
    layer1 :{
      height:'30%',
      flexDirection:'row',
      flexWrap:'wrap',
      
      padding:5,
      backgroundColor:"#48AF2C"
    },
    layer2 :{
      height:'30%',
      flexDirection:'row',
      flexWrap:'wrap',
      padding:5,
      backgroundColor:"#48AF2C"
    },
    

    layerItem:{
      backgroundColor:"#48AF2C",
      width :'33%',
      alignItems:'center',
      justifyContent:'center',
      padding:5
    },
    layerItemInner:{
      
      height:'20%',
      fontSize: 13,
      fontWeight: 'bold'
     
    },
    layerItemIcon:{
      flex:1,
      width:'100%',
      height:'50%',
      padding:5,
      borderRadius:10,
      borderWidth:4,
      borderColor:'#fff'
    }
    
  }
);
