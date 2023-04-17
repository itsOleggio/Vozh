import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text} from 'react-native'
// import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import Magnifier from '../../assets/Pic/magnifier.png'

export default function SearchBar({}) {
    const [searchQuery, setSearchQuery] = useState('');
    
    // Функия поиска - ПОКА ВЫВОДИТ В КОНСОЛЬ

    // const handleSearchPress = () => console.log(searchQuery);

    function handleSearchPress(searchTerm) {
      console.log(searchQuery);
    }

    return (
      <View style={styles.container}>
        <>
          {/* <Image style={styles.img} source={Magnifier} /> */}
          <Ionicons name="ios-search" size={24} color="#999" style={styles.searchIcon} />
         <TextInput
          style={styles.input}
          placeholder='Введите запрос...'
          value={searchQuery} 
          onChangeText={setSearchQuery} 
          onSubmitEditing={handleSearchPress}
          />
          {/* <TouchableOpacity style={styles.button_TO_1} onPress={handleSearchPress} >
                   <Text style={styles.button1}>Найти</Text>
          </TouchableOpacity> */}
          {/* <Button style={styles.buttext} title="Найти" onPress={handleSearch} /> */}
        </>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS === "ios" ? 45 : 55,
      backgroundColor: '#fff',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
       marginHorizontal: 15,
       marginVertical: 10,
       height: 50,
       paddingLeft: 10,
       ...Platform.select({
        ios:{
          shadowColor: 'black',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,
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
      // flexDirection: 'row',
      // alignItems: 'center',
      // paddingHorizontal: 8,
      // paddingVertical: 8,
      // backgroundColor: '#DADAE5',
      // width: '97%',
      // alignSelf: 'center',
      // justifyContent: 'center',
       },
    input: {
      borderRadius: 4,
      borderTopLeftRadius: 0,
      borderButtonLeftRadius: 0,
      padding: 10,
      backgroundColor: '#fff',
      fontSize: 18,
      color: '#333',
      flex: 1,
      // flex: 1,
      // paddingHorizontal: 8,
      // fontSize: 16,
      // marginLeft: 8,
      // marginRight: 8,
      // borderWidth: 1,
      // borderColor: '#ccc',
      // fontSize: 18,
    },
    button_Magnifier:{
      resizeMode: 'cover',
      width: 50,
      height: 50,
    },
    searchIcon: {
      backgroundColor: '#fff',
      padding: 10,
      // marginRight: 10,
    },
    searchInput: {
    fontSize: 18,
    color: '#333',
    flex: 1,
    },
    img: {
      height: 36,
      width: 36,
      backgroundColor: 'white', 
      padding: 10,
      borderRadius: 4,
      borderTopRightRadius: 0,
      borderButtonRightRadius: 0,
      // marginRight: 8,
    },
    buttext:{
      color: 'black'
    },
    button_TO_1: {
      backgroundColor: 'white',
      borderRadius: 5,
      minHeight: 5,
      minWidth: 35,
  },
    button1: {
      margin: "4%",
      color: '#112D4E', // белый цвет текста
      fontSize: 18, // размер текста
      fontWeight: 'bold', // жирный шрифт
      textAlign: 'center', // выравнивание текста по центру
},
  });