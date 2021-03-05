import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import IndividualOrg from "./src/screens/First";

export default function App() {
  return (
      <IndividualOrg/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
