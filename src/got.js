import React, { useEffect, useState } from 'react';
import { SafeAreaView, Pressable, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {
    const [frases, setFrases] = useState([]);

    useEffect(() => {
        buscaFrases();
    }, []);

    const buscaFrases = async () => {
        await api.get('random').then(response => {
            setFrases(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />

            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 30, color: 'red' }}>{frases.character.name}</Text>
                <Text style={styles.frase}>	&ldquo; {frases.sentence} &rdquo;</Text>
                <Pressable style={styles.botao} onPress={() => buscaFrases()}>
                    <Text style={styles.frase}>Mudar Frase</Text>
                </Pressable>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center'
    },

    frase: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    botao: {
        alignItems: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 100,
    }
});