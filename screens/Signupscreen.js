import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Signupscreen = () => {

    const [email, setEmail] = useState('');
    const [rollNumber, setRollNumber]= useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignUp = () => {
        //signup logic will go here
        console.log('Register ho gya bhaiya!');
        navigation.navigate('Loginscreen');
    };

    const navigateToLoginScreen = () => {
        navigation.navigate('Loginscreen');
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.heading}><Text style={{ fontWeight: '900', color: '#0F2167', fontSize: 40 }}>Sign up</Text></View>
            <View style={styles.content}><Text style={{ fontSize: 18 }}>Join the community of thousands of
                students. Where the goal is to grow and
                learn together.</Text></View>

            <View style={styles.inputField}><TextInput
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={() => setEmail()}
                style={{ marginLeft: 10 }}
            ></TextInput></View>

            <View style={styles.inputField}><TextInput
                placeholder="Roll Number"
                onChangeText={() => setRollNumber()}
                style={{ marginLeft: 10 }}
            ></TextInput></View>

            <View style={styles.inputField}><TextInput
                placeholder="Username"
                onChangeText={() => setUsername()}
                style={{ marginLeft: 10 }}
            ></TextInput></View>

            <View style={styles.inputField}><TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={() => setPassword()}
                style={{ marginLeft: 10 }}
            ></TextInput></View>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToLoginScreen}>
                <Text style={styles.linkText}>Already signed up? Click here</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default Signupscreen

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CB9E7',
    },
    heading: {
        marginBottom: 20
    },
    content: {
        marginBottom: 60,
        marginLeft: 29,
        marginRight: 29,
    },
    inputField: {
        height: 50,
        width: 270,
        borderColor: '#0F2167',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 30,
        paddingHorizontal: 10
    },
    button: {
        width: 130,
        backgroundColor: '#0F2167',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center'
    },
    linkText: {
        color: '#FFECD6',
        textDecorationLine: 'underline',
        fontSize: 16,
        marginTop: 6
    }
})