import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';

import logo_2 from '../../assets/logo_4.png'
import { button1 } from '../common/button';
import { button2 } from '../common/button';

const welcome = ({ navigation }) => {
    return (
        <View style={styles.continer}>

            <View style={styles.continer_1}>
                <Image styles={styles.logo} source={logo_2} />
                <View style={styles.buttons_box}>
                    <TouchableOpacity style={styles.button_TO_1} onPress={() => navigation.navigate('login')}>
                        <Text style={button1}>Войти</Text>
                    </TouchableOpacity>


{/* Тестовая кнопка для Main Page */}
                    <TouchableOpacity style={styles.button_TO_1} onPress={() => navigation.navigate('basepage')}>
                        <Text style={button1}>main-test</Text>
                    </TouchableOpacity>
{/* Тестовая кнопка для Main Page */}

                    <TouchableOpacity style={styles.button_TO_2} onPress={() => navigation.navigate('signup')}>
                        <Text style={button2}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default welcome

const styles = StyleSheet.create({
    continer: {
        height: "100%",
        width: "100%",
        backgroundColor: '#DADAE5'
    },
    logo: {
        resizeMode: "contain"
    },
    continer_1: {
        // marginTop: "5%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
    head: {
        padding: "10%",
        fontSize: 30,
        color: "black",
    },
    background: {
        backgroundColor: '#DADAE5'
    },
    button_TO_1: {
        backgroundColor: 'white',
        borderRadius: 10,
        minHeight: 50,
        minWidth: 350,
        marginBottom: 15
    },
    button_TO_2: {
        backgroundColor: '#112D4E',
        borderRadius: 10,
        minHeight: 50,
        minWidth: 350,
    },
    buttons_box: {
        marginTop: Platform.OS === "ios" ? "13%" : "10%",
    }
})