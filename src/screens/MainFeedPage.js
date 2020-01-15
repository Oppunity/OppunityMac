import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import  PostFeed   from '../components/PostFeed';

import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';


class MainFeedPage extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style = {{flex:1, width:100 + "%", height: 100 + "%", backgroundColor:'black', paddingTop: 30, paddingBottom: 10 }}>
             
            <PostFeed/>

            <ActionButton buttonColor="rgba(231,76,60,1)" style={styles.actionButton}>
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.props.navigation.navigate('UserProfile')}>
            <Icon name="ios-body" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => this.props.navigation.navigate('MainFeed')}>
            <Icon name="ios-cog" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => this.props.navigation.navigate('PopnSearch')}>
            <Icon name="ios-cog" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => this.props.navigation.navigate('Upload')}>
            <Icon name="ios-cog" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => this.props.navigation.navigate('Messaging')}>
            <Icon name="ios-cog" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => this.props.navigation.navigate('Media')}>
            <Icon name="ios-cog" style={styles.actionButtonIcon} />
          </ActionButton.Item>
            </ActionButton>
            
       </View>
            );
    }
}

const styles = StyleSheet.create(
    {
      actionButtonIcon: {
        fontSize: 20,
        height: 22, 
    
  
      //  color: 'white',
      },  
      actionButton: {
        marginTop:15,
          paddingTop:45,
          paddingBottom:15,
          marginLeft:30,
          marginRight:30,
      },
    
    }
      );


export default MainFeedPage; 