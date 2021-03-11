import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Text, RefreshControl, Linking, Alert} from 'react-native';
import {Chip} from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {AuthContext} from "../context/AuthContext";
import {getTransactionHistory} from "../utils/api";

export const DonateHistoryRework = ({}) => {
    const user = useContext(AuthContext)

    const [data, setData] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const fetchHistory = async () => {
        const res = await getTransactionHistory(user.uid)
        setData(res)
    }

    const scrollRefresh = async () => {
        setRefreshing(true)
        await fetchHistory()
        setRefreshing(false)
    }

    const onPressChip = async (txId) => {
        try{
            if(txId){
                return Linking.openURL(`https://storage.cloud.google.com/edonation-blockchain.appspot.com/${txId}.pdf`)
            }
        } catch (err){
            console.log(err)
        }

    }
    useEffect(() => {
        fetchHistory()
    }, [])



    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={scrollRefresh}
                />
            }
        >
            <View style={styles.container}>
                {
                    data.map((item, idx) => {
                        const parsedTimestamp = new Date(item.timestamp)
                        return (
                            <View key={`row-${idx}`} style={styles.card}>
                                <Text style={styles.timestampText}>
                                    {parsedTimestamp.toDateString()}  {parsedTimestamp.toLocaleTimeString()}
                                </Text>
                                <View style={styles.captionContainer}>
                                    <Text style={styles.contextText}>
                                        {item.data.to}
                                    </Text>
                                    <MaterialIcons name="circle" size={3} color='#757575' style={{marginHorizontal: 4}}/>
                                    <Text style={styles.contextText}>
                                        {item.data.cause}
                                    </Text>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text style={styles.amountText}>
                                        ฿ {item.data.value}
                                    </Text>
                                    <Chip
                                        mode='flat'
                                        icon="information"
                                        selectedColor={item.data.tax_reduction ? '#0277BD' : '#FF9800'}
                                        textStyle={{fontSize: 12}}
                                        onPress={() => onPressChip(item.txId)}
                                    >
                                        {item.data.tax_reduction ? 'Tax-deductible' : 'Non tax-deductible'}
                                    </Chip>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    card: {
        marginTop: 10,
        backgroundColor: '#F5F5F5',
        padding: 20
    },
    timestampText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#546E7A',
        marginBottom: 10
    },
    amountText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#43A047'
    },
    captionContainer: {
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    contextText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#757575'
    }
});
