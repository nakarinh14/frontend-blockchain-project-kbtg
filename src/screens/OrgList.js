import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Paragraph, Title} from "react-native-paper";
import orgData from "../utils/orgs-data";
import images from "../images";

export const OrgList = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{backgroundColor: '#fafafa'}}>
                {
                    orgData && orgData.map((org, idx) => (
                        <TouchableOpacity key={idx} onPress={() => navigation.push('Detail', {id: idx})}>
                            <Card style={styles.orgCard}>
                                <Card.Cover source={images.background_img[idx]}/>
                                <Card.Content>
                                    <Title>{org.title}</Title>
                                    <Paragraph>{org.paragraph}</Paragraph>
                                </Card.Content>
                                <Card.Title subtitle={org.causes.join(" | ")}/>
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
