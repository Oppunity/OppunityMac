import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView,TouchableOpacity, TouchableHighlight } from 'react-native';
import { Auth } from 'aws-amplify'
import Icon from 'react-native-vector-icons/Ionicons';




const initialState = {
  username: '', password: '', user: {}, authenticationCode: '', showConfirmationForm: false
}



class LogInPage extends Component {
  static navigationOptions = {
    header: null
  } 

  state = initialState
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }

  signIn = async () => {
    const { username, password } = this.state
    if ( this.state.username.length === 0 || this.state.password.length === 0) {
      alert('please complete the fields');
return
}
    try {
       const user = await Auth.signIn(username, password)
       console.log('user successfully signed in!', user)
       alert('user successfully signed in!');
       this.props.navigation.push('MainFeed')
    } catch (err) {
      console.log('error:', err)
    }
  }
  /*
  confirmSignIn = async () => {
    const { user, authenticationCode } = this.state
    try {
       await Auth.confirmSignIn(user, authenticationCode)
       console.log('user successfully signed in!', user)
       goHome()
    } catch (err) {
      console.log('error:', err)
    }
  }
  */ 
    render()
    {
  return (

    <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
     >
       <View style={styles.container}>
       <TouchableOpacity
       activeOpacity= {0.5}
       onPress={() => this.props.navigation.push('HomeScreen')}
       >
       <Icon 
       size ={50}
       color='white' 
       name='ios-return-left'
       style={{marginTop: -125, marginLeft: -175, position: 'absolute'}}
    > 
    </Icon>
      </TouchableOpacity>
       {
         !this.state.showConfirmationForm && (
          <Fragment>

      
      
      <Image 
         style = {{marginBottom: 20, width: 250, height: 250}}
         source = {{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/University_of_San_Diego_seal.svg/1200px-University_of_San_Diego_seal.svg.png'}}
      />
       
     
         
      <TextInput style = {styles.inputBox}
        style={styles.input}
        placeholder='Username'
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('username', val)} 
       />

       <TextInput style ={styles.inputBox}
        style={styles.input}
        placeholder='Password'
        autoCapitalize="none"
        secureTextEntry={true}
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('password', val)} />

        
        
      <TouchableOpacity style = {styles.button}
      onPress={this.signIn}
      >

       <Text style = {styles.buttonText}>Login</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.button}
      onPress={() => this.props.navigation.navigate('SignUp') }
      >

        <Text style = {styles.buttonText}>Signup</Text>

      </TouchableOpacity>
      
    
         

      <TouchableOpacity>

        <Text style = {styles.forgotMyPassword}>Forgot Password? </Text>

      </TouchableOpacity>
       
      </Fragment>
        
         )   
    }
    {/*}
    { 
          this.state.showConfirmationForm && (
            <Fragment>
              <TextInput
                style={styles.input}
                placeholder='Authentication Code'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('authenticationCode', val)}
              />
              <Button
                title='Confirm Sign In'
                onPress={this.confirmSignIn}
              />
            </Fragment>
          )
        } 
      {*/}       
</View>
    </KeyboardAvoidingView>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14
  },

titleText: {
  fontSize:30,
  color: "white"
},

  inputBox: {
    width:300,
    height: 60,
    fontSize: 15,
    backgroundColor: '#a9a9a9',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 20,
    color: '#f8f8ff'
    
  },

  button:{
    width:300,
    height: 60,
    backgroundColor: '#0043cf',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16
    
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

  forgotMyPassword: {
  fontSize: 14,
  color: 'white',
},

backButon: {
  flex: 1,
  width: 500,
  height: 500,
  position: 'absolute',
  left: 10,
  top: 10,
  bottom: 50
}

  

});
export default LogInPage;