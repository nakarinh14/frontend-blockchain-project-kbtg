import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from "../context/AuthContext";
import {DonateInitial} from "../screens/DonateInitial";
import {DonateSuccess} from "../screens/DonateSuccess";
import {OrgList} from "../screens/OrgList";
import IndividualOrg from "../screens/IndividualOrg";
import {DonateHistory} from "../screens/DonateHistory"

const Stack = createStackNavigator();

export const HomeNavigator = () => {

    const user = useContext(AuthContext);

    return (
        <Stack.Navigator>
            <Stack.Screen name="OrgList" component={OrgList}/>
            <Stack.Screen name="IndividualOrg" component={IndividualOrg}/>
            <Stack.Screen name="DonateInitial" component={DonateInitial}/>
            <Stack.Screen name="DonateSuccess" component={DonateSuccess}/>
            <Stack.Screen name="DonateHistory" component={DonateHistory}/>
        </Stack.Navigator>
    )
}
