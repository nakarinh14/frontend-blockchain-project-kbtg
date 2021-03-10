import React, {useContext, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {Divider, Text, Button} from "react-native-paper";
import { CheckBox } from 'react-native-elements'
import {DismissKeyboard} from "../components/DismissKeyboard";
import {Input} from "react-native-elements";
import {regexCheckDecimal, validateDecimal} from "../utils/decimal-check"
import axios from "axios";
import {firebase} from "../firebase";
import {
    BACKEND_URL
} from '@env'
import {DepositModal} from "../components/DepositModal";
import {ProfileContext} from "../context/ProfileContext";


const data = {
    to: "Somchai Saemjit Charity",
    timestamp: "20 Jan 2021  19:23:33" ,
    amount: 300,
    cause: "Roof Fixing"
}

export const DonateInitial = ({navigation, route}) => {

    const {org, cause} = route.params;
    const [donationAmount, setDonationAmount] = useState("0.00")
    const [donationLoading, setDonationLoading] = useState(false)
    const [depositVisible, setDepositVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(true);

    const { getter } = useContext(ProfileContext)
    const {firstname, lastname} = getter

    const triggerDeposit = () => {
        setDepositVisible(true)
    }

    const validateBalance = async () => {
        try{
            const idToken = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            const res = await axios.post(`${BACKEND_URL}/api/balance`, {
                token_access: idToken,
            })
            return res.data.balance;
        } catch (err){
            console.log(err)
        }
    }

    const initiateDonation = async () => {

        try{
            setDonationLoading(true)
            const idToken = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            const balance = await validateBalance()
            const parsedBalanced = parseFloat(donationAmount)

            if(parseFloat(balance) < parsedBalanced) {
                setDonationLoading(false)
                return triggerDeposit()
            }

            const res = await axios.post(`${BACKEND_URL}/api/donor/donate`, {
                token_access: idToken,
                amount: donationAmount,
                recipient: org,
                cause,
                tax_reduction: checked
            })

            return navigation.replace('Success', {data: res.data.result})
        } catch (err){
            setDonationLoading(false)
            console.log(err)
        }
    }

    const onClickDonate = () => {
        if(!validateDecimal(donationAmount)){
            return
        }
        return initiateDonation()
    }


    return (
        <>
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
                                <Text style={styles.valText}>{`${firstname} ${lastname}`}</Text>
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
                        <View style={{marginBottom: 20}}>
                            <CheckBox
                                title='Allow transaction information to be used for tax-reduction'
                                checked={checked}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>
                        <Button
                            mode="contained"
                            loading={donationLoading}
                            onPress={onClickDonate}
                            color='green'
                        >
                            Confirm
                        </Button>
                    </View>
                </View>
            </DismissKeyboard>
            <DepositModal
                visible={depositVisible}
                setDepositVisible={setDepositVisible}
                amount={donationAmount}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        padding: 20,
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
    },
    keyText: {
        fontSize: 19,
        fontWeight: "500"
    },
    valText: {
        fontSize: 19
    },
    keyView: {
        marginVertical: 13,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20
    }
});

