import React from 'react';
import {StyleSheet, Text, ScrollView, Image, TextInput} from 'react-native';

export default class SignUpForm extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image source={imgSrc} style={styles.imgStyle}/>
                <Text style={styles.txtStyle}>Best H!5</Text>
                <TextInput style={styles.tbStyle} placeholder="Enter Username"/>
                <TextInput style={styles.tbStyle} secureTextEntry={true} placeholder="Enter Password"/>
            </ScrollView>
        );
    }
}

const imgSrc = {
    uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    imgStyle: {
        width: 320,
        height: 180
    },
    txtStyle: {
        color: "red",
        textAlign: "center"
    },
    tbStyle: {
        height: 40
    }
});
