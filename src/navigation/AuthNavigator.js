import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from "../context/AuthContext";
import {RegisterScreen} from "../screens/RegisterScreen";
import {Main} from "../screens/Main";
import {firebase} from "../firebase";
import {AddProfileScreen} from "../screens/AddProfileScreen";
import {ProfileContext} from "../context/ProfileContext";
import {LoginScreen} from "../screens/LoginScreen";


const Stack = createStackNavigator();

const getProfile = async (setProfileExist, uid) => {
    if(uid){
        const snapshot = await firebase.database().ref(`users/${uid}`).once('value')
        setProfileExist(snapshot.exists())
    } else {
        setProfileExist(false)
    }
}

export const AuthNavigator = () => {
    const user = useContext(AuthContext);
    const [profileExist, setProfileExist] = useState(false)

    useEffect(() => {
        getProfile(setProfileExist, user?.id)
    }, [user])

    return (
        <ProfileContext.Provider value={() => getProfile(setProfileExist, user?.uid)}>
            <Stack.Navigator>
                {
                    user && profileExist ? (
                        <Stack.Screen name="Main" component={Main} />
                    ) : (
                        <>
                            <Stack.Screen name="Register" component={RegisterScreen} />
                            <Stack.Screen name="Profile"
                                          component={AddProfileScreen}
                                          options={{ title: 'Add Profile' }}
                            />
                            <Stack.Screen name="Login" component={LoginScreen} />
                        </>
                    )
                }
            </Stack.Navigator>
        </ProfileContext.Provider>
    )
}
