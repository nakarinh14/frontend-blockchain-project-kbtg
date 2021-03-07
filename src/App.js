import React, {useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Button} from 'react-native';
import {AuthContext} from "./context/AuthContext"
import {firebase} from "./firebase";
import 'firebase/auth'
import {NavigationContainer} from "@react-navigation/native";
import {AuthNavigator} from "./navigation/AuthNavigator";

export default function App() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const listener=  firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        }); // unsubscribe on unmount
        return listener
    }, []);

    return (
        <>
            <StatusBar style="auto"/>
            <AuthContext.Provider value={user}>
                <NavigationContainer>
                    <AuthNavigator />
                </NavigationContainer>
            </AuthContext.Provider>
            <Button title={"logout"} onPress={() => firebase.auth().signOut()} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});