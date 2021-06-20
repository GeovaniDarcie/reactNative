import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Video from 'react-native-video';
import { Container, Content, List, ListItem } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ListaVideos = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../logo.png')}
                    />

                    <View style={styles.headerIcons}>
                        <Icon name="bell" style={{ margin: 10 }} size={16} />
                        <Icon name="search" style={{ margin: 10 }} size={18} />
                        <Icon name="home" style={{ margin: 10 }} size={18} />
                    </View>
                </View>
                <Content>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Video', {
                            external: true,
                            videoUrl: 'https://www.youtube.com/embed/IU3KH0a4IUg'
                        })
                    }}>
                        <Image style={styles.video}
                            source={require('../video1.jpeg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Video', {
                            external: false,
                            videoUrl: require('../coelho.mp4')
                        })
                    }}>
                        <Image style={styles.video}
                            source={require('../video2.jpeg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Video', {
                            external: true,
                            videoUrl: 'https://youtu.be/zZdLSGytRc0'
                        })
                    }}>
                        <Image style={styles.video}
                            source={require('../video3.jpeg')}
                        />
                    </TouchableOpacity>

                </Content>
            </ScrollView>
            <View style={styles.footer}>
                <Icon name="home" style={{ margin: 10 }} size={20} />
                <Icon name="compass" style={{ margin: 10 }} size={20} />
                <AntDesign name="pluscircleo" style={{ margin: 10 }} size={25} />
                <MaterialIcons name="app-registration" style={{ margin: 10 }} size={20} />
                <MaterialIcons name="library-add" style={{ margin: 10 }} size={20} />
            </View>
        </View>
    );
}

const VideoPlayer = ({ navigation, route }) => {
    const { videoUrl, external } = route.params;
    return (
        <Container style={styles.container}>
            <Video
                controls
                resizeMode="contain"
                source={external ? { uri: videoUrl } : videoUrl}
                style={styles.backgroundVideo}
            />
        </Container>
    )
}

const Stack = createStackNavigator();

const app = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Youtube" component={ListaVideos} />
                <Stack.Screen name="Video" component={VideoPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        margin: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        padding: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },

    headerIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    main: {
        color: 'black',
        fontSize: 20,
    },

    logo: {
        width: 100,
        height: 70,
    },

    video: {
        width: '100%',
        height: 280
    },

    footer: {
        flexDirection: 'row',
        fontSize: 10,
        margin: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        padding: 1,
        justifyContent: 'space-around'
    },
    backgroundVideo: {
        position: 'absolute',
        height: 500,
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
        backgroundColor: 'black'
    }
});

export default app;