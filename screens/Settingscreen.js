import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settingscreen = () => {
  return (
    <View>
      {/* Topbar for Settings screen */}
    <View style={styles.topbar}>
    <Text style={{
      color:'#fff', fontSize: 25, padding: 15, marginTop: 10
    }}>Settings</Text>
    
    </View>

    {/* Various options in settings */}
    <ScrollView>
      
    </ScrollView>

    </View>
  )
}

export default Settingscreen

const styles = StyleSheet.create({
  topbar:{
    backgroundColor: '#0F2167',
    width: '100%',
    height: 100
  }
})