import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {BottomNavigation, Button, Card, Paragraph, Text, Title} from "react-native-paper";
import TouchRipple from 'react-native-touch-ripple';

export const OrgList = () => {
    const MusicRoute = () => <Text>Music</Text>;

    const AlbumsRoute = () => <Text>Albums</Text>;

    const RecentsRoute = () => <Text>Recents</Text>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'queue-music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <View style={{alignItems: 'center'}}>
            <ScrollView>
                <Card style={styles.orgCard}>
                    <Card.Cover source={{uri: 'https://picsum.photos/id/273/200'}}/>
                    <Card.Content>
                        <Title>Organization 1</Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                    </Card.Content>
                    <Card.Actions style={{justifyContent: 'flex-end'}}>
                        <TouchRipple rippleCentered={true} rippleContainerBorderRadius={100}>
                            <Button>See more</Button>
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
                            <Button>See more</Button>
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
