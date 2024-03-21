import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Loginscreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    //login logic here
    console.log('Logging in');
    navigation.navigate('Homescreen');
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      <View style={styles.heading}><Text style={{ fontWeight: '900', color: '#000', fontSize: 40 }}>Sign In</Text></View>
      <View style={styles.content}><Text style={{ fontSize: 18 }}>Sign in using your credentials</Text></View>

      <View style={styles.inputField}><TextInput
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={() => setEmail()}
        style={{ marginLeft: 10 }}
      ></TextInput></View>

      <View style={styles.inputField}><TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={() => setPassword()}
        style={{ marginLeft: 10 }}
      ></TextInput></View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Loginscreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CB9E7'
  },
  heading: {
    marginBottom: 10
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
  }
})