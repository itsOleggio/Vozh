import { View, TouchableOpacity,KeyboardAvoidingView, Text, StyleSheet, Image, Platform } from 'react-native'
import React from 'react'

import KnowledgeBase from '../../assets/ButtonMenue/KnowledgeBase.png';
const Favourites = require('../../assets/ButtonMenue/Favourites.png');
const MyShift = require('../../assets/ButtonMenue/MyShift.png');
const Book = require('../../assets/ButtonMenue/Book.png');
const Lk = require('../../assets/ButtonMenue/Lk.png');

const Buttonmainmenu = ({}) => {
  if (Platform.OS === 'android') {
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
  <View style={styles.container}>
  <View style={styles.in_container}>
      <TouchableOpacity style={styles.button}>
        <Image source={KnowledgeBase} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={Favourites} style={[styles.image, styles.image_correct]}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={MyShift} style={[styles.image, styles.image_correct_2]}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={Book} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={Lk} style={styles.image}/>
      </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  }
  if (Platform.OS === 'ios') {
   return (
  <View style={styles.container}>
    <View style={styles.in_container}>
        <TouchableOpacity style={styles.button}>
          <Image source={KnowledgeBase} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={Favourites} style={[styles.image, styles.image_correct]}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={MyShift} style={[styles.image, styles.image_correct_2]}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={Book} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={Lk} style={styles.image}/>
        </TouchableOpacity>
        </View>
      </View>
  )
   }
}

export default Buttonmainmenu

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#9CB9E8',
    position: 'absolute',
    bottom: 0,
    marginBottom: Platform.OS === "ios" ? "6%" : "4%",
    width: '93%',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    ...Platform.select({
      ios:{
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
      },
      android:{
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      }
      }),
  },
  in_container:{
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    // backgroundColor: 'blue',
    width: '96%',
    height: '90%'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
  },
  image_correct:{
    width: 55,
    height: 55,
  },
  image_correct_2:{
    width: 47,
    height: 47,
  }
})