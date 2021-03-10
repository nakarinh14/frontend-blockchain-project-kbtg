import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Card, Paragraph, Title} from "react-native-paper";
import TouchRipple from 'react-native-touch-ripple';

const data = [
    {
        title: 'Organization 1',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: 'https://picsum.photos/id/273/200'
    },
    {
        title: 'Organization 2',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: 'https://picsum.photos/id/238/200'
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
