import React, { Component } from 'react';
import {Animated,StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';

const DisplayAnImage = () => {
    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    const org = require('../Photos/org1.png');
    const logo = require('../Photos/org1_log.png')
    return (
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={
                        org
                    }
                />
                <Image
                    style={styles.imageOrg}
                    source={
                        logo
                    }
                />
                <View style = {styles.textCont}>
                    <Text style={styles.textStyle}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus velit nulla, feugiat ut erat et,
                    tempor mattis tortor. Phasellus fringilla fermentum imperdiet. Quisque aliquam auctor erat, ac
                        posuere ipsum gravida congue. Praesent luctus, quam in blandit tempor, dui nibh malesuada nulla,
                    id rhoncus metus tortor quis justo
                    tempor mattis tortor. Phasellus fringilla ferme
                    tempor mattis tortor. Phasellus fringilla fermetempor mattis tortor. Phasellus fringilla ferme"
                </Text>
                </View>
                    <Text style={{
                        alignItems: 'center',
                        bottom: -140,
                        right : 50,
                        fontWeight: "bold",
                        fontSize: 16,
                    }}>Construction</Text>
                    <AppButton title="Donate" size="sm" backgroundColor="#007bff" />
                    <View style={styles.progressBar}>
                        <Animated.View style={styles.animate}/>
                    </View>
                    <Text style={{
                        bottom: -130,
                        right : 50,
                    }}>50%</Text>
                <Text style={{
                    alignItems: 'center',
                    bottom: -140,
                    right : 50,
                    fontWeight: "bold",
                    fontSize: 16,
                }}>Food</Text>
                <AppButton title="Donate" size="sm" backgroundColor="#007bff" />
                <View style={styles.progressBar_2}>
                    <Animated.View style={styles.animate_2}/>
                </View>
                <Text style={{
                    bottom: -130,
                    right : 50,
                }}>90%</Text>
            </View>
        );
}

export default DisplayAnImage;
const styles = StyleSheet.create({
    animate:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#8BED4F",
        width:'50%'
    },
    animate_2:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#8BED4F",
        width:'90%'
    },
    progressBar: {
        height: 20,
        width: 200,
        right : 50,
        bottom: -120,
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    },
    progressBar_2: {
        height: 20,
        width: 200,
        right : 50,
        bottom: -120,
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    },
    textCont:{
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -170,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        bottom: -140,
        left: 120,

    },
    appButtonText: {
        paddingLeft:15,
        paddingTop:4,
        width: 95,
        height: 25,
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: "uppercase"

    },
    imageOrg:{
        width: 100,
        height: undefined,
        aspectRatio: 1,
        position: 'absolute',
        bottom: 450,
        borderRadius: 150 / 2,
        overflow: "hidden",
    },
    image :{
        width: 350,
        height: undefined,
        aspectRatio: 1,
        position: 'absolute',
        bottom: 450,
        borderRadius: 150 / 2,
        overflow: "hidden",
        opacity: 0.6,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 16,
        marginBottom: 20,

    },
    navBar: {
        // justifyContent: 'center',
        // flex: 1,
    },
});
