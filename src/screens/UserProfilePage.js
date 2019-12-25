
import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Container, Button} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

class UserProfilePage extends Component { 
    static navigationOptions = {
        header: null
    }
  
    constructor(props)
  {
    super(props)

    this.state = {
      activeIndex:0
    }
  }
  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSectionZero = () => {
      return (
        <View> 
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: '400%', height: '50%', borderRadius: 100/2, marginTop: 40, marginLeft: 75}} />
        </View>
      )
    
  }

  renderSectionOne = () => {
    return (
      <View> 
        <Text style={{ color: "white"}}> This is for comment </Text>
      </View>
    )
  
}

renderSectionTwo = () => {
  return (
    <View> 
 <Text style={{ color: "white"}}> This is for Rating</Text>
    </View>
  )

}

renderSectionThree = () => {
  return (
    <View> 
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
   style={{width: '400%', height: '50%', borderRadius: 100/2, marginTop: 40, marginLeft: 75}} />
    </View>
  )

}

renderSectionFourth = () => {
  return (
    <View> 
<Text style={{ color: "white"}}> This is for Check-In Events</Text> 
    </View>
  )

}

  renderSection = () => {
    if(this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionZero()}
        </View>
      )
    }
    if(this.state.activeIndex == 1) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }
    if(this.state.activeIndex == 2) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionTwo()}
        </View>
      )
    }
    if(this.state.activeIndex == 3) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionThree()}
        </View>
      )
    }
    if(this.state.activeIndex == 4) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionFourth()}
        </View>
      )
    }
  }
  
  render() { 

  return (
    <Container style={{flex: 1, backgroundColor: "black"}}> 
        <View style={{width: '100%', height: '35%', backgroundColor: "black"}}>
        <View style={{flexDirection: 'row',}}>
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: '30%', height: '250%', borderRadius: 100/2, marginTop: 40, marginLeft: 20}} />
     </View>
     <View style={{flexDirection: 'row',}} > 
        <Text style={{marginLeft: 175, marginTop: 20, fontWeight: '900',  color: '#42a5f5', fontSize: 20}}> Oppunity User Profile </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 140, justifyContent: 'space-around'}} > 
           <Text style={{ fontWeight: 'bold', color: 'white'}}> 100000
      </Text>
      <Text style={{  fontWeight: 'bold',  color: 'white'}}> 100000
      </Text>
      </View>

      
      <View style={{flexDirection: 'row', marginLeft: 140, justifyContent: 'space-around', marginTop: 10}} > 
           <Text style={{  fontWeight: 'bold',  color: 'white'}}> Followers 
      </Text>
      <Text style={{ fontWeight: 'bold', color: 'white'}}> Following 
      </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}} > 
        <Text style={{ fontSize: 30, color: 'white'}}> Rating: 9.6 </Text> 
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: '10%', height: '35%', borderRadius: 100/2, marginLeft: 10}} />
        <TouchableOpacity
        activeOpacity = {0.5} >
        <View style={{flexDirection: 'row', width: '125%', height: '35%', borderRadius: 100/2, marginLeft: 25, backgroundColor: '#42a5f5'}}>
          <Text style={{marginLeft: 65, paddingTop: 10 }}> 
            Follow
          </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: -55}}>
          <Text style={{ color: '#42a5f5', fontWeight: 'bold'}}> President of NSBE </Text> 
          </View>
          <View style={{flexDirection: 'row', marginTop: 25}}>
          <Text style={{ color: 'white'}}> This is where you can add a description. </Text> 
          </View>

          <View> 
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, borderTopWidth: 1, borderTopColor: "#eae5e5" }}> 
              <Button transparent
              onPress={()=> this.segmentClicked(0)}
              active={this.state.activeIndex == 0}>
                <Icon 
                size= {25}
                name="ios-calendar"
                style={[this.state.activeIndex == 0 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </Button>
              <Button transparent
              onPress={()=> this.segmentClicked(1)}
              active={this.state.activeIndex == 1}>
                <Icon 
                size= {25}
                name="ios-paper"
                style={[this.state.activeIndex == 1 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </Button>
              <Button transparent
              onPress={()=> this.segmentClicked(2)}
              active={this.state.activeIndex == 2}>
                <Icon 
                size= {25}
                name="ios-star-half"
                style={[this.state.activeIndex == 2 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </Button>
              <Button transparent
              onPress={()=> this.segmentClicked(3)}
              active={this.state.activeIndex == 3}>
                <Icon 
                size= {25}
                name="ios-images"
                style={[this.state.activeIndex == 3 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </Button>
              <Button transparent
              onPress={()=> this.segmentClicked(4)}
              active={this.state.activeIndex == 4}>
                <Icon 
                size= {25}
                name="ios-add"
                style={[this.state.activeIndex == 4 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </Button>
            </View>
            
            </View>
            
          </View>
          {this.renderSection()}
    </Container>


  )
   
  

}
}

export default UserProfilePage; 