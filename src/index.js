import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000000"/>
            <View style={styles.container}>
                <Text style={styles.title}>WhatsApp Black</Text>
            </View>
        </>    
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#222222',
    },

    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});