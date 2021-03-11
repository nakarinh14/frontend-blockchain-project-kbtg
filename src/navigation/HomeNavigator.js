import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DonateInitial} from "../screens/DonateInitial";
import {DonateSuccess} from "../screens/DonateSuccess";
import {OrgList} from "../screens/OrgList";
import IndividualOrg from "../screens/IndividualOrg";
import {DonateHistoryRework} from "../screens/DonateHistoryRework"

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {color:'black'},
                headerTintColor: '#028544',
            }}
        >
            <Stack.Screen name="Explore" component={OrgList}/>
            <Stack.Screen name="Detail" component={IndividualOrg}/>
            <Stack.Screen name="Donate" component={DonateInitial}/>
            <Stack.Screen name="Success" component={DonateSuccess}/>
            <Stack.Screen name="DonateHistory" component={DonateHistoryRework}/>
        </Stack.Navigator>
    )
}
