import React from 'react';
import {DonateInitial} from "../screens/DonateInitial";
import {DonateSuccess} from "../screens/DonateSuccess";
import {OrgList} from "../screens/OrgList";
import IndividualOrg from "../screens/IndividualOrg";
import {DonateHistoryRework} from "../screens/DonateHistoryRework"
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

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
