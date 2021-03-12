import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, ScrollView, Dimensions} from 'react-native';
import {Button} from 'react-native-paper'
import images from "../images";
import orgData from "../utils/orgs-data";

const width = Dimensions.get('window').width

const IndividualOrg = ({navigation, route}) => {
    const {id} = route.params
    const donate = (cause) => {
        return navigation.push('Donate', {orgName, cause})
    }
    const orgName = orgData[id].title

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <ImageBackground
                        style={styles.image}
                        imageStyle={{opacity: 0.5}}
                        source={images.background_img[id]}
                    >
                        <Image
                            style={styles.imageOrg}
                            source={images.logo[id]}
                        />
                    </ImageBackground>
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.orgTitleText}>
                        {orgName}
                    </Text>
                    <Text style={styles.textStyle}>
                        {orgData[id].paragraph}
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    {
                        orgData[id].causes.map((cause, idx) => (
                            <View
                                key={idx}
                                style={styles.donationContainer}
                            >
                                <View style={{flex: 2}}>
                                    <Text style={{fontWeight: "600", fontSize: 18}}>
                                        {cause}
                                    </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Button
                                        icon="heart"
                                        mode="outlined"
                                        color="#EC407A"
                                        onPress={() => donate(cause)}
                                    >
                                        Donate
                                    </Button>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default IndividualOrg;
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
        fontSize: 20,
        marginBottom: 18,
        textAlign: 'center', // <-- the magic
    }
});
