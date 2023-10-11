import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { sendHttpRequest } from '.././api/createTherapist.js'; 

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleButtonPress = () => {
        sendHttpRequest()
        .then((response) => {
            console.log('Request succeeded with JSON response:', response);
            // Handle the response data here
        })
        .catch((error) => {
            // Handle any errors here
        });
    };

    const handleLogin = () => {
        // handle login logic here
    };

    const handleForgotPassword = () => {
        // handle forgot password logic here
    };

    const handleGoogleSignIn = () => {
        // handle Google sign in logic here
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity onPress={handleGoogleSignIn}>
                <Text>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>Log In</Text>
            </TouchableOpacity>
            <Button title="Send HTTP Request" onPress={handleButtonPress} />
        </View>
    );
};

export default LoginScreen;
