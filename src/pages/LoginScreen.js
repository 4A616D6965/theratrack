import { Link } from '@mui/material';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen ({navigation}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
            <Icon onPress={() => navigation.navigate('LaunchScreen')} name="chevron-left" size={12} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Log in</Text>

      </View>

      {/* Input Boxes */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>

        <View style={styles.termsStyle}>
            <Text>By continuing, you agree to our <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>.</Text>
        </View>
      <TouchableOpacity style={styles.adminLoginButton}>
            <Text style={styles.adminLoginButtonText} onPress={() => navigation.navigate('EmployeeScreen')}>Admin Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText} onPress={() => navigation.navigate('Employee')}>Employee Log in</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  button: { 
    marginRight: 'auto'
  },    
  termsStyle: {
    marginBottom: 100
  },
  adminLoginButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 48,
    borderColor: '#1C5BA7',
    bottom: 50,
    position: 'absolute',
    width: '90%',
    marginVertical: 24, 
  },
  loginButton: {
    backgroundColor: '#1C5BA7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 48,
    bottom: 0,
    position: 'absolute',
    width: '90%',
    marginVertical: 24, 
  },
  adminLoginButtonText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    textAlign: 'center',
  },    
  loginButtonText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginRight: 120,
    textAlign: 'center'
  },
  inputContainer: {
    flex: 2,
    marginTop: 20
  },
  input: {
    height: 40,
    borderRadius: 8,
    borderColor: '#E3E5E5',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  forgotPassword: {
    color: '#1C5BA7',
    textAlign: 'left',
    fontWeight: 500
  },
});

export default LoginScreen;
