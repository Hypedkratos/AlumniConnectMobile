import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View>
    {/* Topbar for Find People screen */}
    <View style={styles.topbar}>
    <Text
    style={{
      color:'#fff', fontSize: 25, padding: 15, marginTop: 10
    }}>Profile</Text>
    
    </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  topbar:{
    backgroundColor: '#0F2167',
    width: '100%',
    height: 100
  }
})