
import React, { Component } from 'react';
import { Navigator } from 'react-native'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreenPage from './src/screens/HomeScreenPage';
import EventClickPage from './src/screens/EventClickPage';
import IndividualInterestPage from './src/screens/IndividualInterestPage';
import LogInPage from './src/screens/LogInPage';
import MainFeedPage from './src/screens/MainFeedPage';
import MediaClickPage from './src/screens/MediaClickPage';
import OrgProfilePage from './src/screens/OrgProfilePage';
import OrgRecommendationPage from './src/screens/OrgRecommendationPage';
import OrganizationSignUpPage from './src/screens/OrganizationSignUpPage';
import PopnSearchPage from './src/screens/PopnSearchPage';
import SettingPage from './src/screens/SettingPage';
import SignUpPage from './src/screens/SignUpPage';
import UploadPage from './src/screens/UploadPage';
import UserProfilePage from './src/screens/UserProfilePage';
import ActionButton from './src/screens/ActionButton';
import AccountSelectPage  from './src/screens/AccountSelectPage';
import IndividualSignUpPage from './src/screens/IndividualSignUpPage';


 


const RootStack = createStackNavigator ( { 
  HomeScreen: HomeScreenPage,
  EventClick: EventClickPage,
  IndividualInterest: IndividualInterestPage,
  LogIn: LogInPage,
  MainFeed: MainFeedPage,
  MediaClick: MediaClickPage,
  OrgProfile: OrgProfilePage,
  OrgRecommendation: OrgRecommendationPage,
  PopnSearch: PopnSearchPage,
  Setting: SettingPage,
  SignUp: SignUpPage,
  Upload: UploadPage,
  UserProfile: UserProfilePage,
  ActionButton: ActionButton,
  AccountSelect: AccountSelectPage,
  OrganizationSignUp: OrganizationSignUpPage,
  IndividualSignUp: IndividualSignUpPage
},
{
  initialRoute: 'HomeScreen',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}
)

const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render() {
      return (
          <AppContainer/> 
      )
  };
}

export default App; 
