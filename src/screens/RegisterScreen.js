import React, { useState } from 'react';
import {StyleSheet, Text, View, Alert, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import { firebase } from "../firebase";
import 'firebase/auth'

export const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const registerUser = async () => {
        if(email === '' && password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            try{
                setErrorMessage('')
                setIsLoading(true)
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                return navigation.replace('Profile')
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
            <Text style={styles.errorMessageText}>
                {errorMessage}
            </Text>
            <Button
                style={{alignSelf: 'stretch'}}
                mode='contained'
                color="#1976D2"
                onPress={registerUser}
            >
                Sign Up
            </Button>
            <Text
                style={styles.loginText}
                onPress={() => navigation.navigate('Login')}>
                Already have an account? Login
            </Text>
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
    errorMessageText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
    inputTextStyle:{
        fontSize: 16,
        marginLeft: 10
    },
    loginText: {
        color: '#1976D2',
        marginTop: 25,
        textAlign: 'center',
        fontSize: 13
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
