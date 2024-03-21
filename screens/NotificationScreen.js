import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
  
  return (
    <View>
    {/* Topbar for Notifications screen */}
    <View style={styles.topbar}>
    <Text style={{
      color:'#fff', fontSize: 25, padding: 15, marginTop: 10
    }}>Notifications</Text>
    
    </View>

    {/* Notification Boxes to be created */}
    
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  topbar:{
    backgroundColor: '#0F2167',
    width: '100%',
    height: 100
  }
})