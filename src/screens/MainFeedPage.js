import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from './ActionButton'


class MainFeedPage extends Component {
    static navigationOptions = {
        header: null
    }


render()  
 { 
    return (
        <View style={{flex: 1, backgroundColor: 'black', width: '100%', height: '100%'}}> 
            <ActionButton>

            </ActionButton>

        </View>


    )


 }
}


export default MainFeedPage; 