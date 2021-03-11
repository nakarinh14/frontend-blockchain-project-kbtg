import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {RegisterScreen} from "../screens/RegisterScreen";
import {Main} from "./Main";
import {firebase} from "../firebase";
import {AddProfileScreen} from "../screens/AddProfileScreen";
import {ProfileContext} from "../context/ProfileContext";
import {LoginScreen} from "../screens/LoginScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const getProfile = async (setProfile, uid) => {
    if(uid){
        const snapshot = await firebase.database().ref(`users/${uid}`).once('value')
        setProfile(snapshot.val())
    } else {
        setProfile(false)
    }
}

export const AuthNavigator = () => {
    const user = useContext(AuthContext);
    const [profile, setProfile] = useState(false)

    const uid = user ? user.uid : null

    useEffect(() => {
        getProfile(setProfile, uid)
    }, [user])

    const profileData = {
        getter: profile,
        setter: () => getProfile(setProfile, uid)
    }

    return (
        <ProfileContext.Provider value={profileData}>

                {
                    user && profile ? (
                        <Main />
                    ) : (
                        <Stack.Navigator>
                            <Stack.Screen name="Register" component={RegisterScreen} />
                            <Stack.Screen name="Profile"
                                          component={AddProfileScreen}
                                          options={{ title: 'Add Profile' }}
                            />
                            <Stack.Screen name="Login" component={LoginScreen} />
                        </Stack.Navigator>
                    )
                }
        </ProfileContext.Provider>
    )
}
