
import React, { Component } from 'react';
import { StyleSheet, Easing, View, TouchableOpacity, Animated } from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Ionicons';


class ActionButton extends Component {
 constructor(props) {
  super(props);
   this.animation = new Animated.Value(0); // this is for the circle movement 

   this.moveAnimation = new Animated.ValueXY(); // this is for the top center or uplaod button 

   this.moveAnimation1 = new Animated.ValueXY(); // this is for the top left or media button

   this.moveAnimation2 = new Animated.ValueXY(); // this is for the bottom left or popular page

   this.moveAnimation3 = new Animated.ValueXY(); // this is for the bottom right or indivudal page

   this.moveAnimation4 = new Animated.ValueXY(); // this is for the top right or settings page

   this.state = {
      count: 0 
   }

   this.animate = this.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  })
 }

  startAnimation = () => {
    this.animation.setValue(0)
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 200, 
      easing: Easing.linear,
      useNativeDriver: true
    }).start();

   
   this.setState({ count: this.state.count + 1 })
   if (this.state.count % 2) {
      Animated.spring(this.moveAnimation, 
      {toValue: {x: normalize(-5), y: normalize(-5)}}, 
      ).start();

      Animated.spring(this.moveAnimation1, 
        {toValue: {x: normalize(-5), y: normalize(-5)}}, 
      ).start();

      Animated.spring(this.moveAnimation2, 
        {toValue: {x: normalize(-5), y: normalize(-5)}}, 
      ).start();

      Animated.spring(this.moveAnimation3, 
        {toValue: {x: normalize(-5), y: normalize(-5)}}, 
      ).start();

      Animated.spring(this.moveAnimation4, 
        {toValue: {x: normalize(-5), y: normalize(-5)}}, 
      ).start();
  //this.moveAnimation.setValue({ x: normalize(172), y: normalize(690)})
  // this.moveAnimation1.setValue({ x: normalize(172), y: normalize(610)})
  // this.moveAnimation2.setValue({ x: normalize(172), y: normalize(690)})
  // this.moveAnimation3.setValue({ x: normalize(172), y: normalize(690)})
  // this.moveAnimation4.setValue({ x: normalize(172), y: normalize(690)})
   }
   else {
      Animated.spring(this.moveAnimation, 
        {toValue: {x: normalize(-5), y: normalize(-105)}}, 
      ).start();
      
      Animated.spring(this.moveAnimation1, 
        {toValue: {x: normalize(-130), y: normalize(-115)}}, 
      ).start();
      
      Animated.spring(this.moveAnimation2, 
        {toValue: {x: normalize(-130), y: normalize(5)}}, 
      ).start();

      Animated.spring(this.moveAnimation3, 
        {toValue: {x: normalize(120), y: normalize(5)}}, 
      ).start();

      Animated.spring(this.moveAnimation4,
        {toValue: {x: normalize(120), y: normalize(-105)}}, 
      ).start();
  //  this.moveAnimation.setValue({ x: normalize(170), y: normalize(600)})
  //  this.moveAnimation1.setValue({ x: normalize(60), y: normalize(510)})
  // this.moveAnimation2.setValue({ x: normalize(60), y: normalize(510)})
  // this.moveAnimation3.setValue({ x: normalize(285), y: normalize(415)})
  //   this.moveAnimation4.setValue({ x: normalize(285), y: normalize(230)})
   }
   this.setState({ count: this.state.count + 1 })
  }

  render() {

const animatedStyles = { 
  transform: [
    {
      rotate: this.animate
    }
  ]
}
    return (
 

      <View style={{ flex: 1, backgroundColor: 'green', width: '0%'}}>

  
     
     
  
     <TouchableOpacity
      style={styles.Button }
      activeOpacity = { 0.5 } 
      onPress={() => this.props.navigation.navigate('Upload') }>
       {/*} onPress={}> {*/} 
     <Animated.View style={[ styles.SubmitButtonPopular, this.moveAnimation.getLayout()]} >
     <Icon style={styles.TextStyle1}
  size={normalize(30)}
  name='ios-add-circle-outline'
  type='ionicon'
  color='blue'
/> 
     </Animated.View>
  </TouchableOpacity> 
  

  <TouchableOpacity
      style={styles.Button }
      activeOpacity = { 0.5 }
      onPress={() => this.props.navigation.navigate('OrgRecommendation') } >
       {/*} onPress={}> {*/} 
     <Animated.View style={[ styles.SubmitButtonPopular1, this.moveAnimation1.getLayout()]} >
     <Icon style={styles.TextStyle1}
  size={normalize(30)}
  name='ios-star'
  type='ionicon'
  color='blue'
/>  
     </Animated.View>
  </TouchableOpacity> 
  

  <TouchableOpacity
      style={styles.Button }
      activeOpacity = { 0.5 }
      onPress={() => this.props.navigation.navigate("PopnSearch") } >
     <Animated.View style={[ styles.SubmitButtonPopular2, this.moveAnimation2.getLayout()]} >
     <Icon style={styles.TextStyle1}
  size={normalize(30)}
  name='ios-people'
  type='ionicon'
  color='blue'
/> 
    
     </Animated.View>
  </TouchableOpacity> 
  


  <TouchableOpacity
      style={styles.Button }
      activeOpacity = { 0.5 } 
      onPress={() => this.props.navigation.push('UserProfile')}>
     <Animated.View style={[ styles.SubmitButtonPopular3, this.moveAnimation3.getLayout()]} >
     <Icon style={styles.TextStyle1}
  size={normalize(30)}
  name='ios-person'
  type='ionicon'
  color='blue'
/> 
    
     </Animated.View>
  </TouchableOpacity> 


  <TouchableOpacity
      style={styles.Button }
      activeOpacity = { 0,5 } 
      onPress = {() => alert('This is a button!')}
      >
     <Animated.View style={[ styles.SubmitButtonPopular4, this.moveAnimation4.getLayout()]} >
     <Icon style={styles.TextStyle1}
  size={normalize(30)}
  name='ios-hammer'
  type='ionicon'
  color='blue'
/> 
    
     </Animated.View>
  </TouchableOpacity> 


           <TouchableOpacity
          style={styles.SubmitButtonLogIn}
          activeOpacity = { 1 }
          onPress={this.startAnimation} >
     <Animated.View style={[ animatedStyles ]}>
   <Icon style={styles.TextStyle}
  size={normalize(50)}
  name='ios-add-circle-outline'
  type='ionicon'
  color='white'
/> 
</Animated.View>
</TouchableOpacity> 
    
      

      </View>

      
    );
  }
}
 
const styles = StyleSheet.create({

 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#F5F5F5'
  },
  
  SubmitButtonLogIn: {
    height: normalize(75),
    width: normalize(75),
    borderRadius: normalize(50),
    marginLeft: normalize(155),
   // top: normalize(700),
    bottom: normalize(37),
    paddingTop: normalize(40),
    
    backgroundColor:'#0043cf', 
    position: 'absolute'
},

SubmitButtonPopular: {
 // display: 'flex',  
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: normalize(100),
    borderWidth: normalize(2),
    borderColor: 'blue',
    width: normalize(50),
    height: normalize(50),
    marginLeft: normalize(170),
    marginTop: normalize(680)
  },

  SubmitButtonPopular1: {
  //  display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: normalize(100),
        borderWidth: normalize(2),
        borderColor: 'blue',
        width: normalize(50),
        height: normalize(50),
        marginLeft: normalize(170),
        marginTop: normalize(-40)
      },

SubmitButtonPopular2: {
  //  display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8b008b',
      borderRadius: normalize(100),
      borderWidth: normalize(2),
      borderColor: 'blue',
      width: normalize(50),
      height: normalize(50),
      marginLeft: normalize(170),
      marginTop: normalize(-60)
          },

SubmitButtonPopular3: {
  //  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: normalize(100),
    borderWidth: normalize(2),
    borderColor: 'blue',
    width: normalize(50),
    height: normalize(50),
    marginLeft: normalize(170),
    marginTop: normalize(-60)
                  },

SubmitButtonPopular4: {
 //  display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'pink',
   borderRadius: normalize(100),
   borderWidth: normalize(2),
   borderColor: 'blue',
   width: normalize(50),
   height: normalize(50),
   marginLeft: normalize(170),
   marginTop: normalize(-60)
    },
        
Button: {
  top: normalize(24),
  bottom: normalize(24),
},

  TextStyle: {

    position: 'absolute',
    marginTop: normalize(-27),
    paddingLeft: normalize(18),
    
},

TextStyle1: {

 // position: 'absolute',
 // marginTop: normalize(50),
  //paddingLeft: normalize(1),
}

});


export default ActionButton;
