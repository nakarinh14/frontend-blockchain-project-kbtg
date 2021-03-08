import React from 'react';
import {StyleSheet, View} from "react-native";
import {Divider, Text} from "react-native-paper";
import { Avatar } from 'react-native-paper';

const data = {
    from: "Nakarin Hansawattana",
    to: "Somchai Saemjit",
    timestamp: "20 Jan 2021  19:23:33" ,
    amount: 300,
    cause: "Roof Fixing"
}

export const DonateSuccess = ({navigation}) => {

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
                    <Text style={{fontSize: 17}}>{data.timestamp}</Text>
                </View>

            </View>
            <View style={styles.bottomSection}>
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>From</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>{data.from}</Text>
                    </View>
                </View>
                <Divider />
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>To</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>{data.to}</Text>
                    </View>
                </View>
                <Divider />
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>Cause</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>{data.cause}</Text>
                    </View>
                </View>
                <View style={styles.keyView}>
                    <View>
                        <Text style={styles.keyText}>Amount</Text>
                    </View>
                    <View>
                        <Text style={styles.valText}>฿ {data.amount}</Text>
                    </View>
                </View>
                <Divider />
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

