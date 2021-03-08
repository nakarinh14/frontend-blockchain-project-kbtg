import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from "../context/AuthContext";
import {RegisterScreen} from "../screens/RegisterScreen";
import {Main} from "../screens/Main";

const Stack = createStackNavigator();

export const AuthNavigator = () => {

    const user = useContext(AuthContext);

    return (
        <Stack.Navigator>
            {
                user ? (
                    <Stack.Screen name="Main" component={Main} />
                ) : (
                    <Stack.Screen name="Register" component={RegisterScreen} />
                )
            }
        </Stack.Navigator>
    )
}
