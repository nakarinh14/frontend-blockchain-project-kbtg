import React from 'react';
import {DonateHistoryRework} from "../screens/DonateHistoryRework"
import {UserProfile} from "../screens/UserProfile";
import {DepositScreen} from "../screens/DepositScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {color:'black'},
                headerTintColor: '#028544',
            }}
        >
            <Stack.Screen name="Profile" component={UserProfile} />
            <Stack.Screen name="History" component={DonateHistoryRework} />
            <Stack.Screen
                name="Deposit"
                component={DepositScreen}
                options={{stackPresentation:"modal"}}
            />
        </Stack.Navigator>
    )
}
