import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
import { firebase } from "../firebase";
import 'firebase/auth'
import {AuthContext} from "../context/AuthContext";
import {ProfileContext} from "../context/ProfileContext";

export const AddProfileScreen = ({ navigation }) => {

    const [firstName, setFirstname] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const user = useContext(AuthContext);
    const setProfile = useContext(ProfileContext);

    const addProfile = async () => {
        try{
            setIsLoading(true)
            await firebase.database().ref(`users/${user.uid}`).set({
                firstName,
                middleName,
                lastName
            });
            await setProfile();
            // Let the stack navigator do its job to switch screen
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
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
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="First Name"
                value={firstName}
                onChangeText={(val) => setFirstname(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Middle Name"
                value={middleName}
                onChangeText={(val) => setMiddleName(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(val) => setLastName(val)}
            />
            <Button
                color="#3740FE"
                title="Submit"
                onPress={addProfile}
            />
            <Text>
                {errorMessage}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
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
