import React, {useContext} from 'react';
import {Text, Image, View, StyleSheet} from "react-native";
import {ProfileContext} from "../context/ProfileContext";
import { List, Divider } from 'react-native-paper';
import {AuthContext} from "../context/AuthContext";
import {firebase} from "../firebase";
import 'firebase/auth'

export const UserProfile = () => {

    const {getter} = useContext(ProfileContext)
    const user = useContext(AuthContext)
    const fullname = `${getter.firstname} ${getter.lastname}`

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={{uri: 'https://i.pinimg.com/originals/4c/9d/a8/4c9da86f313fa066b1184309532373a9.jpg'}} style={styles.profilePic}/>
                <Text style={{fontSize: 23, fontWeight: '600'}}>{fullname}</Text>
                <Text style={{marginTop: 10}}>{user.email}</Text>
            </View>
            <Divider/>
            <List.Item
                onPress={null}
                title="Account Balance"
                description="420.69 BAHT"
                left={props => <List.Icon {...props} icon="bank" />}
                titleStyle={{fontSize: 18}}
            />
            <Divider/>
            <List.Item
                onPress={null}
                title="Deposit"
                left={props => <List.Icon {...props} icon="database-plus" />}
                titleStyle={{fontSize: 18}}
            />
            <Divider/>
            <List.Item
                onPress={null}
                title="Transaction History"
                left={props => <List.Icon {...props} icon="history" />}
                titleStyle={{fontSize: 18}}
            />
            <Divider/>
            <List.Item
                onPress={() => firebase.auth().signOut()}
                title="Log Out"
                left={props => <List.Icon {...props} icon="logout" />}
                titleStyle={{fontSize: 18}}
            />
            <Divider/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding:20
    },
    innerContainer: {
        margin: 30,
        alignItems: 'center'
    },
    profilePic: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginBottom: 20,
        borderColor: '#01a74a',
        borderWidth: 3
    },
})
