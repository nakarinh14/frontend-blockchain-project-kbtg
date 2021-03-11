import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DonateHistoryRework} from "../screens/DonateHistoryRework"
import {UserProfile} from "../screens/UserProfile";
import {DepositScreen} from "../screens/DepositScreen";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {color:'black'},
                headerTintColor: '#028544',
            }}
            mode="modal"
        >
            <Stack.Screen name="Profile" component={UserProfile} />
            <Stack.Screen name="History" component={DonateHistoryRework} />
            <Stack.Screen name="Deposit" component={DepositScreen} />
        </Stack.Navigator>
    )
}
