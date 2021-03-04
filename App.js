import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {OrgList} from "./src/screens/OrgList";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <OrgList/>
    </View>
  );
}
