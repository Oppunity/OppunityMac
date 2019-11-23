import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';


class Homescreen extends Component {

    static navigationOptions = {
        header: null
    }

    render()
    {
        return(
            
           
       <View style={styles.BackGround}>
            <Text style={styles.CompanyLogo}> Oppunity </Text>  
            <TouchableOpacity
          style={styles.SubmitButtonLogIn}
          activeOpacity = { .5 }
          onPress={() => this.props.navigation.navigate('LogIn') }
          >
            <Text style={styles.TextStyle}> LOGIN </Text>
      </TouchableOpacity> 
  

      <TouchableOpacity
      style={styles. SubmitButtonSignUp}
      activeOpacity = { .5 }
      onPress={() => this.props.navigation.navigate('LogIn') }
      >
    <Text style={styles.TextStyle}> SignUp </Text>
    </TouchableOpacity> 

   <Text style={styles.FounderText}> Created by Devin Devlin, Daniel Dayto, Arrion Archie, William Trevena </Text> 
    </View>

    


        );
     }
}


const styles = StyleSheet.create(
    {
      BackGround: {
        flex: 1, 
        backgroundColor: 'black'
      },

      CompanyLogo: {
        flex: 1, 
        color: 'white', 
        fontSize: normalize(50), 
        paddingTop: normalize(250), 
        textAlign: 'center'
      },
      FounderText: {
        flex: 1, 
        color: 'white', 
        fontSize: normalize(8), 
        paddingTop: normalize(750), 
        marginLeft: normalize(50),
        textAlign: 'center',
        marginBottom: normalize(500),
        position: 'absolute',
        
      },
      SubmitButtonLogIn: {
        height: normalize(100),
        width: normalize(100),
        borderRadius: normalize(50),
        marginLeft: normalize(50),
        marginBottom: normalize(-100),
        borderWidth: normalize(2.5),
        paddingTop: normalize(40),
        borderColor: '#fff',
        backgroundColor:'#0043cf',    
    },

    SubmitButtonSignUp: {
      height: normalize(100),
      width: normalize(100),
      borderRadius: normalize(50),
      marginLeft: normalize(225),
      marginBottom: normalize(100),
      borderWidth: normalize(2.5),
      paddingTop: normalize(40),
      borderColor: '#fff',
      backgroundColor:'#0043cf',    
  },

    TextStyle: {
      color:'white',
      textAlign:'center',
  },
    }
    );

export default Homescreen;
