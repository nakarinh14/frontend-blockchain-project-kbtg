import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const Dummy = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text> I am a Dummy </Text>
        </View>
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
