import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';

export const DonateHistory = ({}) => {

    const tableHead = ['To', 'Amount', 'Cause', 'Timestamp'];
    const user = [
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Construction',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },
        {
            organization: 'AIA',
            amount: 230,
            cause: 'Food',
            timestamp: '23/01/2019 11:30:23'
        },

    ]
    const widthArr = [40, 80, 85, 140]


    const data = [];
    for (let i = 0; i < user.length; i += 1) {
        const dataRow = [];
        dataRow.push(user[i].organization);
        dataRow.push(user[i].amount);
        dataRow.push(user[i].cause);
        dataRow.push(user[i].timestamp);
        data.push(dataRow);
    }
    console.log(data)

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={{flex: 1}}>
                    <Table borderStyle={{borderColor: '#C1C0B9'}}>
                        <Row data={tableHead} widthArr={widthArr} style={styles.head} textStyle={styles.headerText}/>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderColor: '#C1C0B9'}}>
                            {
                                data.map((dataRow, index) => (
                                    <Row
                                        key={index}
                                        data={dataRow}
                                        widthArr={widthArr}
                                        style={[styles.row, index % 2 && {backgroundColor: '#ffffff'}]}
                                        textStyle={styles.text}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    head: {
        height: 50,
        backgroundColor: '#4CAF50',
    },
    headerText:{
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    text: {
        textAlign: 'center',
        fontWeight: '200'
    },
    dataWrapper: {
        marginTop: -1
    },
    row: {
        height: 40,
        backgroundColor: '#F7F8FA'
    }
});
