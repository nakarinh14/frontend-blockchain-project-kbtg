import {Modal, Portal, Text, Button, Snackbar} from "react-native-paper";
import React, {useContext, useState} from "react";
import {StyleSheet, View} from "react-native";
import {regexCheckDecimal, validateDecimal} from "../utils/decimal-check";
import {Input} from "react-native-elements";
import {depositAPI} from "../utils/api";
import {AuthContext} from "../context/AuthContext";

export const DepositModal = ({visible, setDepositVisible, amount}) => {

    const user = useContext(AuthContext)

    const [depositAmount, setDepositAmount] = useState(amount)
    const [isLoading, setLoading] = useState(false)
    const [snackBarVisible, setSnackBarVisible] = React.useState(false);

    const onDismissSnackBar = () => setSnackBarVisible(false);

    const deposit = async () => {
        try{
            setLoading(true)
            const idToken = await user.getIdToken(/* forceRefresh */ true)
            await depositAPI(idToken, depositAmount, "THB")
            setDepositVisible(false)
            setSnackBarVisible(true);
        } catch (err){
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const onClickDeposit = () => {
        if(validateDecimal(depositAmount)){
            return deposit()
        }
    }

    return (
        <Portal>
            <Snackbar
                style={styles.snackbar}
                visible={snackBarVisible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'OK',
                    onPress: () => {},
                }}>
                {parseFloat(depositAmount).toFixed(2)} tokens are successfully deposited.
            </Snackbar>
            <Modal
                visible={visible}
                onDismiss={() => setDepositVisible(false)}
                contentContainerStyle={styles.modalContainer}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>You currently have insufficient tokens</Text>
                    <Text style={styles.caption}>Deposit Money</Text>
                    <Input
                        label='Amount'
                        defaultValue={depositAmount}
                        keyboardType={"decimal-pad"}
                        onChangeText={(text) => regexCheckDecimal(text, setDepositAmount)}
                        leftIcon={
                            <Text>฿</Text>
                        }
                    />
                    <Button
                        mode="outlined"
                        onPress={onClickDeposit}
                        loading={isLoading}
                        icon='database-plus'
                        color='#1976D2'
                    >
                        Deposit
                    </Button>
                    <Text style={styles.info}>Note: 1 TOKEN is 1 BAHT</Text>
                </View>
            </Modal>
        </Portal>
    )
}
const styles = StyleSheet.create({
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
    snackbar: {
        backgroundColor: '#66BB6A',
        bottom: '20%'
    },
    info:{
        marginTop: 19,
        fontSize: 14,
        fontWeight: "500",
        color: "#e3c800"
    },
});
