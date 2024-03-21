import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topbar from '../components/Topbar'

const Homescreen = () => {
  return (
    <View style={styles.wrapper}>
      <Topbar/>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
},
})

export default Homescreen
