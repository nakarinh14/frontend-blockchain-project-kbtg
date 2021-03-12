import React, {useContext, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import {Divider, Text, Button} from "react-native-paper";
import { CheckBox } from 'react-native-elements'
import {DismissKeyboard} from "../components/DismissKeyboard";
import {Input} from "react-native-elements";
import {regexCheckDecimal, validateDecimal} from "../utils/decimal-check"
import {DepositModal} from "../components/DepositModal";
import {ProfileContext} from "../context/ProfileContext";
import {donateAPI, getBalanceAPI} from "../utils/api";
import {AuthContext} from "../context/AuthContext";

export const DonateInitial = ({navigation, route}) => {

    const {orgName, cause} = route.params;
    const [donationAmount, setDonationAmount] = useState("0.00")
    const [donationLoading, setDonationLoading] = useState(false)
    const [depositVisible, setDepositVisible] = useState(false);
    const [checked, setChecked] = useState(true);

    const user = useContext(AuthContext)
    const { getter } = useContext(ProfileContext)
    const {firstname, lastname} = getter

    const triggerDeposit = () => {
        setDepositVisible(true)
    }

    const fetchBalance = async () => {
        const idToken = await user.getIdToken(/* forceRefresh */ true)
        return await getBalanceAPI(idToken)
    }

    const initiateDonation = async () => {

        try{
            setDonationLoading(true)
            // Validate balance, if not enough then initiate deposit modal
            const balance = await fetchBalance()
            if(parseFloat(balance) < parseFloat(donationAmount)) {
                setDonationLoading(false)
                return triggerDeposit()
            }
            // Else, proceed the donation process
            const idToken = await user.getIdToken(/* forceRefresh */ true)
            const res = await donateAPI(idToken, donationAmount, orgName, cause, checked)
            return navigation.replace('Success', {data: res})
        } catch (err){
            console.log(err)
            setDonationLoading(false)
        }
    }

    const onClickDonate = () => {
        if(validateDecimal(donationAmount)){
            return initiateDonation()
        }
    }

    return (
        <>
            <DismissKeyboard>
                <KeyboardAvoidingView
                    style={styles.container}
                    enabled
                    behavior={ Platform.OS === 'ios'? 'padding': 'height'}
                >
                    <View style={styles.topSection}>
                        <View>
                            <Text style={{fontSize: 19, fontWeight: '600'}}>{orgName}</Text>
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
                                <Text style={styles.valText}>{orgName}</Text>
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
                                <Input
                                    label='Amount'
                                    value={donationAmount}
                                    keyboardType={"decimal-pad"}
                                    returnKeyLabel='Done'
                                    returnKeyType='done'
                                    onChangeText={(text) => regexCheckDecimal(text, setDonationAmount)}
                                    rightIcon={
                                        <Text>TOKENS</Text>
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
                </KeyboardAvoidingView>
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
        fontSize: 16,
        fontWeight: "500"
    },
    valText: {
        fontSize: 16
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

