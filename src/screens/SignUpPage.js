import React, { Fragment, Component } from 'react'
import {View, Button, TextInput, StyleSheet, Image, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/Ionicons';


import { Auth } from 'aws-amplify'

const initialState = {
    username: '', password: '', email: '', authenticationCode: '', showConfirmationForm: false
  }
  
class SignUpPage extends Component {
    
    static navigationOptions = {
        header: null
    }

    state = initialState
    onChangeText = (key, val) => {
      this.setState({ [key]: val })
    }

    signUp = async () => {
      const { username, password, email } = this.state
      if ( this.state.username.length === 0 || this.state.email.length === 0  || this.state.password.length === 0) {
               alert('please complete the fields');
        return
      }
      try {
        const success = await Auth.signUp({ username, password, attributes: { email }})
        console.log('user successfully signed up!: ', success)
        this.setState({ showConfirmationForm: true })
      } catch (err) {
        console.log('error signing up: ', err)
      }
    }

    
    confirmSignUp = async () => {
      const { username, password, authenticationCode } = this.state
      try {
        await Auth.confirmSignUp( username, authenticationCode)
        console.log('successully signed up!') 
        alert('User signed up successfully!')

        const user = await Auth.signIn(username, password)
        console.log('user successfully signed in!', user)
        alert('user successfully signed in!');

        this.setState({ ...initialState })
        this.props.navigation.push('AccountSelect')
      } catch (err) {
        console.log('error confirming signing up: ', err)
      }
    }
    


    render() {
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
       style={{marginTop: -100, marginLeft: -175, position: 'absolute'}}
    > 
    </Icon>
      </TouchableOpacity>
          {
            !this.state.showConfirmationForm && (
              <Fragment>
                <Image 
         style = {{width: 250, height: 250}}
         source = {{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/University_of_San_Diego_seal.svg/1200px-University_of_San_Diego_seal.svg.png'}}
      />
      
                <TextInput
                  style={styles.input}
                  placeholder='username'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={val => this.onChangeText('email', val)}
                />

            <TouchableOpacity 
                        onPress={this.signUp}
                        style ={{   height: normalize(50),
                          width: normalize(200),
                          borderRadius: normalize(25),
                          borderWidth: normalize(2.5),
                          borderColor: '#fff',
                            backgroundColor: '#0043cf',
                            borderRadius: 25,
                            marginVertical: 10,
                            paddingVertical: 16, 
                            marginTop: 50 }}> 
               
            <Text style = {{ fontSize: 16,fontWeight: '500', color: '#ffffff', textAlign: 'center', marginTop: -1}}> Sign Up</Text>
       </TouchableOpacity>
    
              </Fragment>
            )
          }
          {
            this.state.showConfirmationForm && (
              <Fragment>
                <TextInput
                  style={styles.input}
                  placeholder='Authentication code'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={val => this.onChangeText('authenticationCode', val)}
                />
                <Button
                  title='Confirm Sign Up'
                  onPress={this.confirmSignUp}
                />
              </Fragment>
            )
          }
        </View>

</KeyboardAvoidingView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#a9a9a9',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      marginTop: 30
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    }
  })

export default SignUpPage; 