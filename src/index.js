import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const app = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../logo.png')}
                    />

                    <View style={styles.headerIcons}>
                        <Icon name="bell" style={{ margin: 10 }} size={18} />
                        <Icon name="search" style={{ margin: 10 }} size={18} />
                        <Icon name="home" style={{ margin: 10 }} size={18} />
                    </View>

                </View>
                <Image
                    style={styles.video}
                    source={require('../video1.jpeg')}
                />
                <Image
                    style={styles.video}
                    source={require('../video2.jpeg')}
                />
                <Image
                    style={styles.video}
                    source={require('../video3.jpeg')}
                />
            </ScrollView>
            <View style={styles.footer}><Text>Footer</Text></View>
        </View>
    );
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
        height: 300
    },

    footer: {
        fontSize: 10,
        margin: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        padding: 1,
    }
});

export default app;