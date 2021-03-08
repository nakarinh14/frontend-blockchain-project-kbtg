import React, {useState} from 'react';
import {StyleSheet, View, Platform} from "react-native";
import {Divider, Text, Button} from "react-native-paper";
import {DismissKeyboard} from "../components/DismissKeyboard";
import {Input} from "react-native-elements";
import {regexCheckDecimal, validateDecimal} from "../utils/decimal-check"
const data = {
    to: "Somchai Saemjit Charity",
    timestamp: "20 Jan 2021  19:23:33" ,
    amount: 300,
    cause: "Roof Fixing"
}

export const DonateInitial = ({navigation}) => {

    const [donationAmount, setDonationAmount] = useState("0.00")

    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <View>
                        <Text style={{fontSize: 23, fontWeight: '600'}}>{data.to}</Text>
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
                    <Divider />
                    <View style={styles.keyView}>
                            <Input
                                label='Amount'
                                value={donationAmount}
                                keyboardType={"decimal-pad"}
                                onChangeText={(text) => regexCheckDecimal(text, setDonationAmount)}
                                leftIcon={
                                    <Text>฿</Text>
                                }
                            />
                    </View>
                </View>
                <View style={styles.actions}>
                    <Button
                        mode="outlined"
                        icon="heart"
                        onPress={() => navigation.replace('DonateSuccess')}
                    >
                        Donate
                    </Button>
                </View>
            </View>
        </DismissKeyboard>
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
    },
    actions: {

    }
});

