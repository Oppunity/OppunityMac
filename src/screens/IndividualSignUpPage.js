
// App.js
import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, Switch, TouchableOpacity, PixelRatio } from 'react-native';

// imports from Amplify library
import { API, graphqlOperation } from 'aws-amplify'

// import the GraphQL query
//import { listUserInfos } from '../graphql/queries'
// import the GraphQL mutation
import { createUserInfo } from '../graphql/mutations'

// create client ID
import uuid from 'uuid/v4'
import { ScrollView } from 'react-native-gesture-handler';
const CLIENTID = uuid()


import DropdownMenu from 'react-native-dropdown-menu';
import DatePicker from 'react-native-datepicker'
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'


class IndividualSignUpPage extends React.Component {
  static navigationOptions = {
    header: null
}
  // add additional state to hold form state as well as UserInput data returned from the API

  state = {
    firstname: '', lastname: '', InCollege: '', collegename: '', major: '', RaceText: 'Black', GenderText: 'Male',  date: null,  country: '', currentUser: []
  }
  // execute the query in componentDidMount

  toggleSwitch = () => {
    this.setState({ InCollege: !this.state.InCollege });
    };
/*
  async componentDidMount() {
    try {
      const AllUserData = await API.graphql(graphqlOperation(listUserInfos))
      console.log('AllUserData:', AllUserData)
      this.setState({
        currentUser: AllUserData.data.listUserInfos.items
      })
    } catch (err) {
      console.log('error fetching currentUser...', err)
    }
  }
  */

  // this method calls the API and creates the mutation
  createUserInfo = async() => {
    if (this.state.firstname === '') {
      alert('You must enter first name')
      return
    }
    if (this.state.lastname === '') {
      alert('You must enter in a last name')
      return
    }
    if (this.state.date === null) {
      alert('You must enter in a date of birth')
      return
    }
    if (this.state.country.name === undefined ) {
      alert('You must pick a country of origin')
      return
    }
    if ( (this.state.InCollege === true) && ((this.state.collegename === '') || (this.state.major === ''))) {
      alert('If you are in college then you must enter in your college name and major')
      return
    }
    if (this.state.InCollege === '' || this.state.InCollege === 'false' ) {
      this.state.InCollege = false
      this.state.major = 'none'
      this.state.collegename = 'none'
    }

    const { firstname, lastname, InCollege, collegename, major, RaceText, GenderText, date, country  } = this.state
    // store the UserInput data in a variable
    const UserInput = {
      firstname, lastname, InCollege, collegename, major, RaceText, GenderText, date, country: country.name, clientId: CLIENTID
    }
    // perform an optimistic response to update the UI immediately
    const currentUser = [...this.state.currentUser, UserInput]
    this.setState({
      currentUser,
      firstname: '', lastname: '', InCollege: '', collegename: '', major: '', RaceText: 'Black', GenderText: 'Male',  date: null,  country: ''
      })
        
    try {
     
      console.log(this.state.firstname)
      console.log(this.state.lastname)
      console.log(this.state.InCollege)
      console.log(this.state.major)
      console.log(this.state.collegename)
      console.log(this.state.RaceText)
      console.log(this.state.GenderText)
      console.log(this.state.date)
      console.log(this.state.country.name) 
      // make the API call
      await API.graphql(graphqlOperation(createUserInfo, {
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

    var Race = [[ "Black", "White", "Mongoloid/Asian", "Australoid", "Perfer not to say"]];
    var Gender = [["Male", "Female", "Perfer not to say"]];

    return (
      <ScrollView style={{backgroundColor: 'black'}}> 


       <View style={{flex: 1, backgroundColor: 'black', width: '100%', height: '100%'}}>
          
          <Text style={{marginTop: 40, fontSize: 25, textAlign: 'center', fontWeight: 'bold', color: 'white'}}> 
            Account Information Sign Up Page
            </Text>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, marginTop: 1 }}/>



<Text style={{marginTop: 20, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            Input your First Name
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
                  placeholder='first name'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('firstname', v)}
                  value={this.state.firstname}
                />
                <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: 0.5,
                  marginTop: 10
                }}
              />


<Text style={{marginTop: 5, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            Input your Last Name
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
                      placeholder='last name'
                      autoCapitalize="none"
                      placeholderTextColor='white'
                      onChangeText={v => this.onChange('lastname', v)}
                      value={this.state.lastname}
                    />

            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
                marginTop: 10
              }}
            />
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
  Are you in college? 
   </Text>
   <View style={{marginLeft: 175}}>
   <Switch
        value={this.state.InCollege}
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
            If your in college input your full college name
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
                  placeholder='college name'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('collegename', v)}
                  value={this.state.collegename}
                />

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>


<Text style={{marginTop: 5, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            What is your major?
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
                  placeholder='major'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('major', v)}
                  value={this.state.major}
                />

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>

<Text style={{textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: 'white', marginTop: 5}}> 
              Select your race
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
          handler={(selection, row) => this.setState({RaceText: Race[selection][row]})}
          data={Race}
        >
           </DropdownMenu>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 230
  }}
/>


<Text style={{textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: 'white', marginTop: 5}}> 
              Select your Gender
          </Text>

<View style={{height: 10, marginTop: 5 }} />
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
          handler={(selection, row) => this.setState({GenderText: Gender[selection][row]})}
          data={Gender}
        >
           </DropdownMenu>
           <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 180
  }}
/>


<Text style={{ marginBottom: 10,textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: 'white', marginTop: 10}}> 
              Select your date of birth
          </Text>
         
  
      <DatePicker
        style={{width: 200, marginBottom: 10, marginLeft: 100, backgroundColor: 'white', marginTop: 10 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1800-01-01"
     //   maxDate="2020-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
      //  showIcon={false}
       // customStyles={{
         // dateIcon: {
         //   position: 'absolute',
         //   left: 0,
         //   top: 4,
         //   marginLeft: 0
        //  },
         // dateInput: {
          //  marginLeft: 36
         // }
          // ... You can check the source to find the other keys.
    //    }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
       
      <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>
<Text style={{ marginBottom: 10,textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: 'white', marginTop: 10}}> 
              Which country are you from?
          </Text>

          <CountryPicker
          
          onSelect={(value)=> this.setState({country: value})}
          translation='eng'
          withAlphaFilter={true}
          withEmoji={true}
          containerButtonStyle={{marginLeft: 150}}

       theme={DARK_THEME}

        />
         
        {this.state.country.name &&
          <Text style={{ width: '50%',
            padding: 10,
            marginTop: 7,
            fontSize: 20,
            marginLeft: 100,
            textAlign: 'center',
            backgroundColor: 'black',
            borderColor: 'red',
            borderWidth: 1 / PixelRatio.get(),
            fontWeight: 'bold',
            color: 'white'}}>
            {JSON.stringify(this.state.country.name, null, 2)}
          </Text>
  }

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
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


{/* </View>
        <TextInput
          style={{ height: 50, margin: 5, backgroundColor: "#ddd" }}
          onChangeText={v => this.onChange('firstname', v)}
          value={this.state.firstname} placeholder='firstname'
        />
        <TextInput
          style={{ height: 50, margin: 5, backgroundColor: "#ddd" }}
          onChangeText={v => this.onChange('lastname', v)}
          value={this.state.lastname} placeholder='lastname'
        />
        <TextInput
          style={{ height: 50, margin: 5, backgroundColor: "#ddd" }}
          onChangeText={v => this.onChange('age', v)}
          value={this.state.age} placeholder='age'
        />

  
        <Button onPress={this.createUserInfo} title='Create UserInput' />

        {
          this.state.currentUser.map((UserInput, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.firstname}>{UserInput.firstname}</Text>
              <Text style={styles.lastname}>{UserInput.lastname}</Text>
            </View>
          ))
        }
      */}
        </View>
      </ScrollView> 
    )
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: { padding: 10 },
  firstname: { fontSize: 20, color: 'white' },
  lastname: { fontWeight: '600', marginTop: 4, color: 'white' },
  age: { marginTop: 4, color: 'white' }
})
*/
export default IndividualSignUpPage;

