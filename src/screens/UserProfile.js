import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, StyleSheet, ScrollView, RefreshControl} from "react-native";
import {ProfileContext} from "../context/ProfileContext";
import { List, Divider } from 'react-native-paper';
import {AuthContext} from "../context/AuthContext";
import {getBalanceAPI} from '../utils/api'
import firebase from "firebase";
import 'firebase/auth'

export const UserProfile = ({ navigation }) => {

    const {getter} = useContext(ProfileContext)
    const user = useContext(AuthContext)

    const [balance, setBalance] = useState("Updating")
    const [refreshing, setRefreshing] = useState(false);

    const fullName = `${getter.firstname} ${getter.lastname}`

    const updateBalance = async () => {
        try{
            setBalance("Updating")
            const idToken = await user.getIdToken(/* forceRefresh */ true)
            const currentBalance = await getBalanceAPI(idToken)
            setBalance(`${currentBalance} TOKENS`)
        } catch (err) {
            console.log(err)
        }
    }

    const scrollRefresh = async () => {
        setRefreshing(true)
        await updateBalance()
        setRefreshing(false)
    }

    useEffect(() => {
        updateBalance()
    }, [])

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={scrollRefresh}
                />
            }
        >
            <View>
                <View style={styles.innerContainer}>
                    <Image source={{uri: 'https://ratemystation.com/wp-content/uploads/2020/03/review-news-director-male-local-tv-newsroom.jpg'}} style={styles.profilePic}/>
                    <Text style={{fontSize: 23, fontWeight: '600'}}>{fullName}</Text>
                    <Text style={{marginTop: 10}}>{user.email}</Text>
                </View>
                <Divider/>
                <List.Item
                    onPress={updateBalance}
                    title="Account Balance"
                    description={`${balance}`}
                    left={props => <List.Icon {...props} icon="bank" />}
                    titleStyle={{fontSize: 18}}
                />
                <Divider/>
                <List.Item
                    onPress={() => navigation.navigate('Deposit')}
                    title="Deposit"
                    left={props => <List.Icon {...props} icon="database-plus" />}
                    titleStyle={{fontSize: 18}}
                />
                <Divider/>
                <List.Item
                    onPress={() => navigation.navigate('History')}
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
        </ScrollView>
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
