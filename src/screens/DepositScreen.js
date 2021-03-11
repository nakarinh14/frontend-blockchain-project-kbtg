import {Portal, Text, Button, Snackbar} from "react-native-paper";
import React, {useContext, useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {regexCheckDecimal} from "../utils/decimal-check";
import {Input} from "react-native-elements";
import {depositAPI} from "../utils/api";
import {AuthContext} from "../context/AuthContext";

export const DepositScreen = () => {

    const user = useContext(AuthContext)

    const [depositAmount, setDepositAmount] = useState("0.00")
    const [isLoading, setLoading] = useState(false)
    const [visible, setVisible] = React.useState(false);

    const onDismissSnackBar = () => setVisible(false);

    const deposit = async () => {
        try{
            setLoading(true)
            const idToken = await user.getIdToken(/* forceRefresh */ true)
            await depositAPI(idToken, depositAmount, "THB")
            setVisible(true)
        } catch (err){
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Portal>
                <Snackbar
                    style={styles.snackbar}
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'OK',
                        onPress: () => {},
                    }}>
                    {parseFloat(depositAmount).toFixed(2)} tokens are successfully deposited.
                </Snackbar>
            </Portal>
            <View style={styles.innerContainer}>
                <Text style={styles.caption}>Deposit Money</Text>
                <Input
                    label='Amount'
                    value={depositAmount}
                    keyboardType={"decimal-pad"}
                    onChangeText={(text) => setDepositAmount(text)}
                    leftIcon={
                        <Text>฿</Text>
                    }
                />
                <Button
                    mode="outlined"
                    onPress={deposit}
                    loading={isLoading}
                    icon='database-plus'
                    color='#1976D2'
                >
                    Deposit
                </Button>
                <Text style={styles.info}>Note: 1 TOKEN = 1 BAHT</Text>
            </View>

        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
    },
    modalContainer: {
        backgroundColor: 'white',
        margin: 10
    },
    innerContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        color: '#e3c800',
        fontWeight: '600'
    },
    caption:{
        marginTop: 10,
        fontSize: 18,
        fontWeight: "700",
        color: "#1976D2"
    },
    info:{
        marginTop: 19,
        fontSize: 14,
        fontWeight: "500",
        color: "#e3c800"
    },
    snackbar: {
        backgroundColor: '#66BB6A',
        bottom: '20%'
    }
});
