import React from 'react'
import { View,StyleSheet } from 'react-native'
import Buttonmainmenu from '../components/Buttonmainmenu'
import Searchup from '../components/Searchup'

function Basepage({navigation}) {
  return (
    <>
      <View style={styles.continer}>
        <Searchup />
      </View>
      
      <Buttonmainmenu />
    </>
  )
}

  export default Basepage

  const styles = StyleSheet.create({
    continer:{
      backgroundColor: '#DADAE5',
      height: "100%",
      width: "100%",
    },
  })