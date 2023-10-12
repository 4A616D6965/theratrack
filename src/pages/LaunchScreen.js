import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

function LaunchScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Thera<Text style={ styles.customColor}>Track</Text></Text>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subtitle}>ListeningEars helping hand</Text>
                    <Image
                        source={require('../assets/listeningearlogo.png')}
                        style={styles.image}
                    />
                </View>
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
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50,
        alignItems: 'center',
    },
    subTitleContainer: {
        marginTop: 180,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        width: "80%"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    customColor: {
        color: '#1C5BA7',
    },
    subtitle: {
        fontSize: 32,
        fontWeight: 700,
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 48,
        bottom: 0,
        position: 'absolute',
        width: '90%',
        marginVertical: 24,  
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#000',
        textAlign: 'center',
    },
    image: {
        width: 174,
        height: 28,
    }
});

export default LaunchScreen;
