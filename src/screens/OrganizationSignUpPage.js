
// App.js
import React from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, ScrollView  } from 'react-native';

// imports from Amplify library
import { API, graphqlOperation } from 'aws-amplify'

// import the GraphQL mutation
import { createOrgInfo } from '../graphql/mutations'

// create client ID
import uuid from 'uuid/v4'
const CLIENTID = uuid()

import DropdownMenu from 'react-native-dropdown-menu';



class OrganizationSignUpPage extends React.Component {
  static navigationOptions = {
    header: null
}
  // add additional state to hold form state as well as UserInput data returned from the API

  state = {
    orgName: '', pfirst: '', plast: '', CollegeA: '', OrgSchool: '', OrgText: 'Professional', currentUser: []
  }
  // execute the query in componentDidMount

  toggleSwitch = () => {
    this.setState({ CollegeA: !this.state.CollegeA });
    };

  // this method calls the API and creates the mutation
  createUserInfo = async() => {
    if (this.state.orgName === '') {
      alert('You must enter in a orgnaization or club name')
      return
    }
    if (this.state.pfirst === '') {
      alert('You must enter in your presidents first name')
      return
    }
    if (this.state.plast === '') {
      alert('You must enter in your presidents first name')
      return
    }
    if ( (this.state.CollegeA === true) && (this.state.OrgSchool === '')) {
      alert('If you are in college then you must enter in your college name and major')
      return
    }
    if (this.state.CollegeA === '' || this.state.CollegeA === 'false' ) {
      this.state.CollegeA = false
      this.state.OrgSchool = 'none'
    }

    const {  orgName, pfirst, CollegeA, OrgSchool, plast, OrgText  } = this.state
    // store the UserInput data in a variable
    const UserInput = {
      orgName, pfirst, CollegeA, OrgSchool, plast, OrgText, clientId: CLIENTID
    }
    // perform an optimistic response to update the UI immediately
    const currentUser = [...this.state.currentUser, UserInput]
    this.setState({
      currentUser,
      orgName: '', pfrist: '', CollegeA: '', OrgSchool: '', plast: '', OrgText: 'Professional', 
      })
        
    try {
     
      console.log(this.state.orgName)
      console.log(this.state.pfirst)
      console.log(this.state.plast)
      console.log(this.state.CollegeA)
      console.log(this.state.OrgSchool)
      console.log(this.state.OrgText)
      // make the API call
      await API.graphql(graphqlOperation(createOrgInfo, {
        input: UserInput
      }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating UserInput...', err)
    }
    this.props.navigation.navigate('MainFeed')
  }
  // change form state then user types into input
  onChange = (key, value) => {
    this.setState({ [key]: value })
  }
  render() {

    var TypeOrg = [[ "Professional", "Social", "Fraternity/Sororties", "Intramural", "Academic",]];
   

    return (
      <ScrollView style={{backgroundColor: 'black'}}> 


       <View style={{flex: 1, backgroundColor: 'black', width: '100%', height: '100%'}}>
          
          <Text style={{marginTop: 40, fontSize: 25, textAlign: 'center', fontWeight: 'bold', color: 'white'}}> 
            Organization/Club Information Sign Up Page
            </Text>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, marginTop: 1 }}/>



<Text style={{marginTop: 20, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            Input your Organization or Club name
          </Text>
        <TextInput
                  style={{  width: 350,
                    height: 55,
                    backgroundColor: '#a9a9a9',
                    marginLeft: 30,
                    padding: 8,
                    color: 'white',
                    borderRadius: 14,
                    marginTop: 10}}
                  placeholder='organization or club name'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('orgName', v)}
                  value={this.state.orgName}
                />
                <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: 0.5,
                  marginTop: 10
                }}
              />


<Text style={{marginTop: 5, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            Input your President First Name
            </Text>
            <TextInput
                      style={{  width: 350,
                        height: 55,
                        backgroundColor: '#a9a9a9',
                        marginLeft: 30,
                        padding: 8,
                        color: 'white',
                        borderRadius: 14,
                        marginTop: 10}}
                      placeholder='president first name'
                      autoCapitalize="none"
                      placeholderTextColor='white'
                      onChangeText={v => this.onChange('pfirst', v)}
                      value={this.state.pfirst}
                    />

            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
                marginTop: 10
              }}
            />

<Text style={{marginTop: 5, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            What is your president last name 
          </Text>
        <TextInput
                  style={{  width: 350,
                    height: 55,
                    backgroundColor: '#a9a9a9',
                    marginLeft: 30,
                    padding: 8,
                    color: 'white',
                    borderRadius: 14,
                    marginTop: 10}}
                  placeholder='president last name'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('plast', v)}
                  value={this.state.plast}
                />

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>

            <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
  Is your organization/club assciated with a schools? 
   </Text>
   <View style={{marginLeft: 175}}>
   <Switch
        value={this.state.CollegeA}
        onValueChange={this.toggleSwitch}
        changeValueImmediately={true}
        renderInsideCircle={() =>  <Text style={{ color: 'red', fontWeight: 'bold'}}> Yes</Text> }
        activeText={'Yes'}
        inActiveText={'Off'}
        backgroundActive={'green'}
        backgroundInactive={'red'}
        circleActiveColor={'green'}
        circleInActiveColor={'red'}
        renderActiveText={false}
        renderInActiveText={false}
      />
</View>

   <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>


<Text style={{marginTop: 5, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            If yes, to previous question then input your full college name 
          </Text>
        <TextInput
                  style={{  width: 350,
                    height: 55,
                    backgroundColor: '#a9a9a9',
                    marginLeft: 30,
                    padding: 8,
                    color: 'white',
                    borderRadius: 14,
                    marginTop: 10}}
                  placeholder='Orgainzation or club School Associated'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('OrgSchool', v)}
                  value={this.state.OrgSchool}
                />

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>



<Text style={{textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: 'white', marginTop: 5}}> 
              What type of Organziatoin are you?
          </Text>

<View style={{height: 20 }} />
        <DropdownMenu
        
          style={{flex: 1}}
          bgColor={'#a9a9a9'}
          tintColor={'black'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          //optionTextStyle={{color: 'black'}}
          titleStyle={{color: 'black'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({RaceText: TypeOrg[selection][row]})}
          data={TypeOrg}
        >
           </DropdownMenu>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 230
  }}
/>
<TouchableOpacity 
                        onPress={this.createUserInfo}
                        style ={{   height: 50,
                          width: 200,
                          borderRadius: 25,
                          borderWidth: 2.5,
                          borderColor: '#fff',
                            backgroundColor: '#0043cf',
                            borderRadius: 25,
                            marginVertical: 10,
                            paddingTop: 15, 
                            marginTop: 40,
                            marginLeft: 100 }}> 
               
            <Text style = {{ fontSize: 16,fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginTop: -1}}> Sign Up</Text>
       </TouchableOpacity>



        </View>
      </ScrollView> 
    )
  }
}

export default OrganizationSignUpPage; 