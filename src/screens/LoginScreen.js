import React, { useState } from 'react';
import {StyleSheet, Text, View, Alert, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-paper'
import { firebase } from "../firebase";
import 'firebase/auth'
import {Input} from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const signIn = async () => {
        if(email === '' && password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            try{
                setIsLoading(true)
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
            } catch (error) {
                setErrorMessage(error.message)
                setIsLoading(false)
            }
        }
    }

    if(isLoading){
        return(
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            enabled
            behavior={ Platform.OS === 'ios'? 'padding': 'height'}
        >
            <View style={styles.container}>
                <Input
                    label="Email"
                    placeholder='yours@example.com'
                    textContentType='emailAddress'
                    keyboardType="email-address"
                    autoCompleteType="email"
                    returnKeyType="next"
                    inputStyle={styles.inputTextStyle}
                    value={email}
                    leftIcon={
                        <Icon
                            name='mail'
                            size={16}
                            color='grey'
                        />
                    }
                    onChangeText={(val) => setEmail(val)}
                    autoCapitalize='none'
                />
                <Input
                    label="Password"
                    placeholder='Enter password'
                    textContentType='newPassword'
                    returnKeyType="done"
                    value={password}
                    inputStyle={styles.inputTextStyle}
                    autoCorrect={false}
                    leftIcon={
                        <Icon
                            name='lock-closed'
                            size={16}
                            color='grey'
                        />
                    }
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
                <Button
                    style={{alignSelf: 'stretch'}}
                    mode='contained'
                    color="#1976D2"
                    onPress={signIn}
                >
                    Sign Up
                </Button>
                <Text>
                    {errorMessage}
                </Text>
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#fff'
    },
    inputTextStyle:{
        fontSize: 16,
        marginLeft: 10
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});
