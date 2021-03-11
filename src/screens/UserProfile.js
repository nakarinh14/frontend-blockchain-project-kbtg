import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";
import {Divider, Button} from 'react-native-elements';

export const UserProfile = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image source={{uri: 'https://i.pinimg.com/originals/4c/9d/a8/4c9da86f313fa066b1184309532373a9.jpg'}} style={styles.profilePic}/>
                <Text style={{fontSize: 20}}> Johnathan Johnson </Text>
            </View>
            <Divider/>
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Account Balance</Text>
                <Text style={{fontSize: 18}}>420.00 THB</Text>
            </View>
            <Divider/>
            <Button title='Transaction History' type='outline' containerStyle={{margin: 15}} raised/>
            <View style={{alignItems: 'center'}}>
                <Button title='LOGOUT' icon={{ name: 'logout', color: 'red'}} containerStyle={{width: 100}} titleStyle={{color: 'red'}} type='clear'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
        alignItems: 'center'
    },
    profilePic: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginBottom: 20,
        borderColor: '#01a74a',
        borderWidth: 3
    },
})
