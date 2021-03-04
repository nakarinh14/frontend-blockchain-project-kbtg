import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {OrgList} from "./src/screens/OrgList";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function PlaceholderScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>PLACEHOLDER</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                          iconName = 'home';
                      } else if (route.name === 'Search') {
                          iconName = 'search';
                      }

                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                  },
              })}
              tabBarOptions={{
                  activeTintColor: '#41c3ae',
                  inactiveTintColor: 'gray',
              }}
          >
              <Tab.Screen name="Home" component={OrgList}/>
              <Tab.Screen name="Search" component={PlaceholderScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
  );
}
