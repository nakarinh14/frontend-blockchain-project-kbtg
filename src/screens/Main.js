import React  from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeNavigator} from "../navigation/HomeNavigator";
import {firebase} from "../firebase";
import 'firebase/auth'
import {DonateHistory} from "./DonateHistory"

const Tab = createBottomTabNavigator();

function PlaceholderScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title={"logout"} onPress={() => firebase.auth().signOut()} />
            <Button title={"History"} onPress={() => navigation.navigate(DonateHistory) } />

            <Text>PLACEHOLDER</Text>
        </View>
    );
}

export const Main = ({ navigation }) => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Transactions') {
                        iconName = 'search';
                    } else if (route.name === 'User') {
                        iconName = 'person-outline'
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
            <Tab.Screen name="Home" component={HomeNavigator} style={styles.screen}/>
            <Tab.Screen name="Transactions" component={PlaceholderScreen} style={styles.screen}/>
            <Tab.Screen name="User" component={PlaceholderScreen} style={styles.screen}/>
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
