import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, Dimensions} from 'react-native';
import {Button, Divider} from 'react-native-paper'


const width = Dimensions.get('window').width

const DisplayAnImage = ({navigation}) => {

    const donate = (org, cause) => {
        return navigation.push('Donate', {org, cause})
    }

    const org = require('../Photos/org1.png');
    const logo = require('../Photos/org1_log.png')

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <ImageBackground
                        style={styles.image}
                        imageStyle={{opacity: 0.5}}
                        source={org}
                    >
                        <Image
                            style={styles.imageOrg}
                            source={logo}
                        />
                    </ImageBackground>
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.orgTitleText}>
                        Charity Life
                    </Text>
                    <Text style={styles.textStyle}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus velit nulla, feugiat ut erat
                        et,
                        tempor mattis tortor. Phasellus fringilla fermentum imperdiet. Quisque aliquam auctor erat, ac
                        posuere ipsum gravida congue. Praesent luctus, quam in blandit tempor, dui nibh malesuada nulla,
                        id rhoncus metus tortor quis justo
                        tempor mattis tortor. Phasellus fringilla ferme
                        tempor mattis tortor. Phasellus fringilla fermetempor mattis tortor. Phasellus fringilla ferme"
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.donationContainer}>
                        <View style={{flex: 2}}>
                            <Text style={{fontWeight: "600", fontSize: 18}}>
                                Construction
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Button
                                icon="heart"
                                mode="outlined"
                                color="#EC407A"
                                onPress={() => donate("Test Org", "General")}
                            >
                                Donate
                            </Button>
                        </View>
                    </View>
                    <View style={styles.donationContainer}>
                        <View style={{flex: 2}}>
                            <Text style={{fontWeight: "600", fontSize: 18}}>
                                Food
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Button
                                icon="heart"
                                mode="outlined"
                                color="#EC407A"
                                onPress={() => donate("Test Org", "General")}
                            >
                                Donate
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default DisplayAnImage;
const styles = StyleSheet.create({
    mainText: {
        padding: 15,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageOrg: {
        width: 100,
        height: null,
        aspectRatio: 1,
        borderRadius: 150 / 2,
        marginBottom: 15
    },
    image: {
        width: width,
        height: 220,
        resizeMode: 'stretch',
        overflow: "hidden",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    donationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    bottomContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 16,
    },
    orgTitleText: {
        fontWeight: '800',
        fontSize: 24,
        marginBottom: 18
    }
});
