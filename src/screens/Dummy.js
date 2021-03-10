import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {OrgList} from "./OrgList";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UserProfile} from "./UserProfile";

const Tab = createBottomTabNavigator();

export const Dummy = ({ navigation }) => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'ios-home';
                    } else if (route.name === 'Profile') {
                        iconName = 'ios-person-circle';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#A2C6B5',
                style: { backgroundColor: '#01a74a'}
            }}
        >
            <Tab.Screen name="Home" component={OrgList} style={styles.screen}/>
            <Tab.Screen name="Profile" component={UserProfile} style={styles.screen}/>
        </Tab.Navigator>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    }
});
