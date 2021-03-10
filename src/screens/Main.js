import React  from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeNavigator} from "../navigation/HomeNavigator";
import {firebase} from "../firebase";
import 'firebase/auth'
const Tab = createBottomTabNavigator();

function PlaceholderScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title={"logout"} onPress={() => firebase.auth().signOut()} />
            <Text>PLACEHOLDER</Text>
        </View>
    );
}

export const Main = ({ navigation }) => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Explore') {
                        iconName = focused
                            ? 'globe'
                            : 'globe-outline';
                    } else if (route.name === 'Transactions') {
                        iconName = 'search';
                    } else if (route.name === 'User') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: '#01a74a',
            }}
        >
            <Tab.Screen name="Explore" component={HomeNavigator} style={styles.screen}/>
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
