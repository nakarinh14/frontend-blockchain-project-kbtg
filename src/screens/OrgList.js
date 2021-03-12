import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Paragraph, Title} from "react-native-paper";

const data = [
    {
        title: 'Bumrungrad International Hospital',
        paragraph: 'Founded in 1980, Bumrungrad Hospital has been a global pioneer in providing world-class healthcare services and international patient support for nearly four decades. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Thailand_Bangkok_Bumrungrad_International_Hospital_entrance-building.jpg',
        donationCauses: 'Equipment, Research'
    },
    {
        title: 'Thai Child Development Foundation',
        paragraph: 'The TCDF supports by making sure that customized medical care and education is also available to children with disabilities, learning disorders or children from challenged families\'.',
        image: 'https://media-exp1.licdn.com/dms/image/C4D1BAQGUHDdjYlv4yg/company-background_10000/0/1519800436997?e=2159024400&v=beta&t=U1kx21yKG1Arije6qpwRee9PpTMpUMYGKnkT2bQ_Tv4',
        donationCauses: 'Construction, Clothing, Food'
    },
]

export const OrgList = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{backgroundColor: '#fafafa'}}>
                {
                    data && data.map((org, idx) => (
                        <TouchableOpacity key={idx} onPress={() => navigation.push('Detail')}>
                            <Card style={styles.orgCard}>
                                <Card.Cover source={{uri: org.image}}/>
                                <Card.Content>
                                    <Title>{org.title}</Title>
                                    <Paragraph>{org.paragraph}</Paragraph>
                                </Card.Content>
                                <Card.Title subtitle={org.donationCauses}/>
                            </Card>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    orgCard: {
        margin: 10,
    },
});
