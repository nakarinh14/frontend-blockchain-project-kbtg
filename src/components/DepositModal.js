import {Modal, Portal, Text, Button} from "react-native-paper";
import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {regexCheckDecimal} from "../utils/decimal-check";
import {Input} from "react-native-elements";
import {firebase} from "../firebase";
import axios from "axios";
import {
    BACKEND_URL
} from '@env'

export const DepositModal = ({visible, setDepositVisible, amount}) => {

    const [depositAmount, setDepositAmount] = useState("0.00")
    const [isLoading, setLoading] = useState(false)

    const deposit = async () => {
        try{
            setLoading(true)
            const idToken = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            await axios.post(`${BACKEND_URL}/api/donor/deposit`, {
                token_access: idToken,
                amount: depositAmount,
                currencyType: "THB"
            })
            setDepositVisible(false)
        } catch (err){
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={() => setDepositVisible(false)}
                contentContainerStyle={styles.modalContainer}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>You currently have insufficient balance</Text>
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
    }
});
