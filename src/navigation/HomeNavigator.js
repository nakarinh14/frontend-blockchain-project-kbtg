import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from "../context/AuthContext";
import {DonateInitial} from "../screens/DonateInitial";
import {DonateSuccess} from "../screens/DonateSuccess";
import {OrgList} from "../screens/OrgList";
import IndividualOrg from "../screens/IndividualOrg";

const Stack = createStackNavigator();

export const HomeNavigator = () => {

    const user = useContext(AuthContext);

    return (
        <Stack.Navigator>
            <Stack.Screen name="OrgList" component={OrgList}/>
            <Stack.Screen name="IndividualOrg" component={IndividualOrg}/>
            <Stack.Screen name="DonateInitial" component={DonateInitial}/>
            <Stack.Screen name="DonateSuccess" component={DonateSuccess}/>
        </Stack.Navigator>
    )
}
