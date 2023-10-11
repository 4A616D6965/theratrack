import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

function LaunchScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>TheraTrack</Text>
                    <Text style={styles.subtitle}>ListeningEars helping hand</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
    },
});

export default LaunchScreen;
