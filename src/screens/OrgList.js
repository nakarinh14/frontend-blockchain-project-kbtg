import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Paragraph, Title} from "react-native-paper";
import TouchRipple from 'react-native-touch-ripple';

export const OrgList = () => {

    return (
        <View style={{alignItems: 'center', backgroundColor: '#506568', flex: 1}}>
            <ScrollView>
                <Card style={styles.orgCard}>
                    <Card.Cover source={{uri: 'https://picsum.photos/id/273/200'}}/>
                    <Card.Content>
                        <Title>Organization 1</Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                    </Card.Content>
                    <Card.Actions style={{justifyContent: 'flex-end'}}>
                        <TouchRipple rippleCentered={true} rippleContainerBorderRadius={100}>
                            <Button color='#41c3ae'>See more</Button>
                        </TouchRipple>
                    </Card.Actions>
                </Card>
                <Card style={styles.orgCard}>
                    <Card.Cover source={{uri: 'https://picsum.photos/id/238/200'}}/>
                    <Card.Content>
                        <Title>Organization 2</Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                    </Card.Content>
                    <Card.Actions style={{justifyContent: 'flex-end'}}>
                        <TouchRipple rippleCentered={true} rippleContainerBorderRadius={100}>
                            <Button color='#41c3ae'>See more</Button>
                        </TouchRipple>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    orgCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        margin: 10
    },
});
