import React, {useContext, useEffect, useState} from 'react';
import {Share, StyleSheet, View} from "react-native";
import {Avatar, Button, Divider, Text} from "react-native-paper";
import {ProfileContext} from "../context/ProfileContext";
import {FIREBASE_STORAGE_BUCKET} from '@env'
import * as WebBrowser from 'expo-web-browser';
import firebase from "firebase";

const fetchData = async (txId, setter) => {
    try {
        const ref = firebase.storage().ref(`${txId}.pdf`)
        const url = await ref.getDownloadURL()
        setter(url)
    } catch (err) {
        console.log(err)
    }

}

export const DonateSuccess = ({route}) => {
    const {to, cause, amount, txId, timestamp} = route.params.data
    const parsedTimestamp = new Date(timestamp);
    const { getter } = useContext(ProfileContext)
    const {firstname, lastname} = getter
    const [pdfUrl, setPdfUrl] = useState("")

    useEffect( () => {
        fetchData(txId, setPdfUrl)
    },[])

    const _handleOpenUrlAsync = () => WebBrowser.openBrowserAsync(pdfUrl);

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={{backgroundColor: 5}}>
                    <Avatar.Icon size={50} icon="check-bold" backgroundColor='green'/>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 23, fontWeight: '600'}}>Donation Success</Text>
                </View>
                <View style={{marginTop: 4}}>
                    <Text style={{fontSize: 17}}>{timestamp}</Text>
                </View>

            </View>
            <View style={styles.bottomSection}>
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>From</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>{`${firstname} ${lastname}`}</Text>
                    </View>
                </View>
                <Divider />
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>To</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>{to}</Text>
                    </View>
                </View>
                <Divider />
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>Cause</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>{cause}</Text>
                    </View>
                </View>
                <Divider />
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>Amount</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>฿ {amount}</Text>
                    </View>
                </View>
                <Divider />
                <Button
                    style={{marginTop: 30}}
                    mode='contained'
                    color='darkblue'
                    icon='share-variant'
                    onPress={_handleOpenUrlAsync}
                >
                    Share
                </Button>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    topSection:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomSection:{
        flex: 4,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: 50
    },
    keyText: {
        fontSize: 19,
        fontWeight: "500"
    },
    valText: {
        fontSize: 19
    },
    keyView: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

