import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
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

      FlatListItems: [
        { id: '1',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '2',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '3',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '4',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '5',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '6',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '7',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '8',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '9',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '10', value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '11', value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '12', value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '...replying to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'}],
      activeIndex:0
    }
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };

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
      <View style={{flex: 1, marginBottom: 325}}> 
        <FlatList 
        data={this.state.FlatListItems}
        ItemSeparatorComponent={this.FlatListItemSeparator}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
           
            <View style={{ flex: 1, flexDirection: 'row'}}> 
            <Image source={{ uri: item.uri }} style={{ width: '8.2%', height: '16%', borderRadius: 100/2, marginLeft: 10, marginTop: 15, borderWidth: 1, borderColor: 'white'}} /> 
            <Text style={{ marginBottom: 180, fontSize: 15, color: 'white', width: '100%', marginLeft: 20, marginTop: 15,}}> 
      {item.value}
          </Text> 
          <Text style={{ fontSize: 15, color: 'grey', width: '100%', marginLeft: 170, position: 'absolute', marginTop: 15}}> 
      {item.day}
          </Text>
          </View> 

          <View style={{ flex: 1, flexDirection: 'row'}}> 
          <Text style={{ fontSize: 15, color: 'grey', width: '100%', marginLeft: 65, marginTop: -175, position: 'absolute'}}> 
      {item.replyingto}
          </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginRight: 100 }}> 
          <Text style={{ fontSize: 15, color: 'white', width: '100%', marginLeft: 65, marginTop: -150, position: 'absolute'}}> 
      {item.comment}
          </Text>
          </View> 

          <View style={{ flex: 1, flexDirection: 'row'}}> 
          <Text style={{ fontSize: 15, color: 'grey', width: '100%', marginLeft: 65, marginTop: -75, position: 'absolute'}}> 
      {item.view}
          </Text>
      <Text style={{ fontSize: 15, color: 'grey', width: '100%', marginLeft: 325, marginTop: -75, position: 'absolute'}}> 
      {item.reply}
          </Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: '40%', width: '100%', position: 'absolute'}}> 
          <Text style={{ fontSize: 15, color: 'grey', width: '100%', marginLeft: 10, marginTop: 175, position: 'absolute' }}> 
      {item.likenum}
          </Text>
        <Image source={{ uri: item.like }} style={{ width: '8.2%', height: '30%', borderRadius: 100/2, marginTop: 170, marginLeft: 48,  position: 'absolute'}} /> 
          <Text style={{ fontSize: 15, color: 'grey', width: '100%', marginLeft: 150, marginTop: 175, position: 'absolute' }}> 
      {item.disnum}
          </Text>
          <Image source={{ uri: item.dislike }} style={{ width: '8.2%', height: '30%', borderRadius: 100/2, marginTop: 170, marginLeft: 190,  position: 'absolute'}} />
          <Text style={{ fontSize: 15, color: 'grey', width: '100%', marginLeft: 325, marginTop: 175, position: 'absolute' }}> 
      {item.disnum}
          </Text>
          <Image source={{ uri: item.commentpic }} style={{ width: '6%', height: '30%', borderRadius: 100/2, marginTop: 170, marginLeft: 370,  position: 'absolute'}} />
         </View>
           
        </View> 
        )}
        keyExtractor={(item, index) => index.toString()}
        />
        
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