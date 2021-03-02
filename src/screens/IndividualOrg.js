import React, { useState, useEffect, useContext } from 'react';
import {
    Avatar,
    withTheme,
    Card,
    Title,
    Paragraph,
    List, Button
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HTML from 'react-native-render-html';
import ImageLoad from 'react-native-image-placeholder';
import {
    Share,
    ScrollView,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import ContentPlaceholder from '../components/ContentPlaceholder';
import moment from 'moment';
const SinglePost = ({ route }) => {
    const [isLoading, setisLoading] = useState(true);
    const [post, setpost] = useState([]);
    useEffect(() => {
        fetchPost()
    }, []);
    const fetchPost = async () => {
        let post_id = route.params.post_id;
        // const response = await fetch(
        //     ,
        // ); fetch from?
        const post = await response.json();
        setpost(post);
        setisLoading(false);

    }
    if (isLoading) {
        return (
            <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
                <ContentPlaceholder />
            </View>
        )
    } else {
        return (
            <ScrollView>
                <Card>
                    <Card.Content>
                        <Title>{post[0].title.rendered}</Title>

                        <List.Item
                            title={`${post[0]._embedded.author[0].name}`}
                            description={`${post[0]._embedded.author[0].description}`}
                        />
                    </Card.Content>
                    <ImageLoad
                        style={{ width: '100%', height: 250 }}
                        loadingStyle={{ size: 'large', color: 'grey' }}
                        source={{ uri: post[0].jetpack_featured_media_url }}
                    />
                    <Card.Content>
                        <HTML
                            html={post[0].content.rendered}
                            imagesMaxWidth={Dimensions.get('window').width}

                        />
                    </Card.Content>
                </Card>
            </ScrollView>
        );
    }
}
export default SinglePost
