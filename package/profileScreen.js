import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class ProfileScreen extends React.Component{

    static navigationOptions = {
        title: 'Profile',
    };

    render(){
        console.log(this.props);
        return <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>TEst</Text>
        </View>

    }

}