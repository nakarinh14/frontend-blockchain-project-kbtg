import React, {useEffect, useState} from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();
import {StatusBar} from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import {AuthContext} from "./context/AuthContext"
import {NavigationContainer} from "@react-navigation/native";
import {AuthNavigator} from "./navigation/AuthNavigator";
import {firebase} from "./firebase";
import 'firebase/auth'
import {OrgList} from "./screens/OrgList";

export default function App() {

    const [user, setUser] = useState({});

    useEffect(() => {
         // unsubscribe on unmount
        return firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        })
    }, []);

    return (
        <PaperProvider>
            <StatusBar style="auto"/>
            <AuthContext.Provider value={user}>
                <NavigationContainer>
                    <OrgList/>
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    );
}

