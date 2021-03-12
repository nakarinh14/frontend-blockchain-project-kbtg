import React, { useState, useContext } from 'react';
import {StyleSheet, Text, View, TextInput, Button, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import {ProfileContext} from "../context/ProfileContext";
import {addProfileAPI} from "../utils/api";
import {AuthContext} from "../context/AuthContext";

export const AddProfileScreen = () => {
    const { setter } = useContext(ProfileContext);
    const user = useContext(AuthContext)

    const [firstName, setFirstname] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const addProfile = async () => {
        try{
            setIsLoading(true)
            const idToken = await user.getIdToken(/* forceRefresh */ true)
            await addProfileAPI(idToken, firstName, lastName)
            // Let the stack navigator do its job to switch screen
            setter();
        } catch (error) {
            setErrorMessage(error.message)
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
        <KeyboardAvoidingView
            style={styles.container}
            enabled
            behavior={ Platform.OS === 'ios'? 'padding': 'height'}
        >
            <TextInput
                style={styles.inputStyle}
                placeholder="First Name"
                value={firstName}
                onChangeText={(val) => setFirstname(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Middle Name (Optional)"
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
        </KeyboardAvoidingView>
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
