import React, { Component} from 'react';
import  Rating  from './Rating.js';
import { FlatList } from "react-native";



class RatingFeed extends Component{

name = ["overall rating", "actviness of girl", " likely to be blacked", "food", "music", "free stuff", "how acceptable is it to be black out"]

    _renderPost({ item }) {
       return <Rating item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        return (
        <FlatList
            data = {this.name}
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
             />
        
        );        
    }
}

export default RatingFeed;