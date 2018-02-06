import React from 'react';
import {StyleSheet, Text, ScrollView, Image, TextInput, View, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import { fishRef } from './firedb'

export default class MapScreen extends React.Component{

    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(){
        super();
        const currLoc = { latitude:37.78825, longitude:-122.4324, latitudeDelta:0.015  ,longitudeDelta:0.0121 }
        const markers = [];
        this.state = {currLoc, markers};
      }


    componentWillMount(){
        console.log('testing');
        fishRef.orderByKey().once('value').then(val => {
            console.log("val ==> ",val.val())
            const markers = []; // val.map(e => e.val());
           val.forEach(e => {
               markers.push(e.val());
               console.log('res', e.val());
           });
            console.log('val', val);
            console.log('mark', markers);
           this.setState({...this.state, marker});
           console.log('state', this.state);
        });
    }

    render(){
        const { navigate } = this.props.navigation;
        console.log('state', this.state);
        return <View style={{flex: 1, flexDirection: 'column'}}>
            <MapView style={styles.map} 
                    region={this.state.currLoc}>
                    {this.state.markers.map(marker => (
                      <Marker key={marker.id}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                      />
                    ))}
            </MapView>
            <Button title="Go to Jane's profile" onPress={() => navigate('Profile', { name: 'Jane' }) } />
        </View>

    }

}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});