import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from "../context/AuthContext";
import {RegisterScreen} from "../screens/RegisterScreen";
import {Dummy} from "../screens/Dummy";
import {AddProfileScreen} from "../screens/AddProfileScreen";

const Stack = createStackNavigator();

export const AuthNavigator = () => {

    const user = useContext(AuthContext);

    return (
        <Stack.Navigator>
            {
                user ? (
                    <>
                        <Stack.Screen name="Dummy" component={Dummy}/>
                        <Stack.Screen name="AddProfile" component={AddProfileScreen}/>
                    </>
                ) : (
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                )
            }
        </Stack.Navigator>
    )
}
