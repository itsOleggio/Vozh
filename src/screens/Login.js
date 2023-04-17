import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput,KeyboardAvoidingView } from 'react-native'
import React from 'react'
// import { Swipeable } from 'react-native-gesture-handler';

import Back_Pick from '../../assets/Back.png';
import { head1 } from '../common/head_formcss';

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const login = ({ navigation }) => {
    if (Platform.OS === 'android') {
        return (
            <KeyboardAvoidingView behavior= "height" style={styles.KeyboardView}>
            <View style={styles.continer}>
                <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
                    <Image source={Back_Pick} style={styles.back_pc} />
                </TouchableOpacity>
                <Text style={head1}>Вход</Text>
                
                <View style={styles.continer_1}>
                {/* <KeyboardAwareScrollView> */}
                
                    <View style={styles.formGround}>
                        <TextInput placeholder='Логин' style={styles.input} />
                        <TextInput placeholder='Пароль' secureTextEntry={true} style={styles.input} />
                    </View>
                    {/* </KeyboardAwareScrollView> */}
                    
                    <TouchableOpacity style={styles.button_TO}>
                        <Text style={styles.button}>ВОЙТИ</Text>
                    </TouchableOpacity>
                    <Text style={styles.linkforgotpass}>Восстановить пароль</Text>
    
                    <Text style={styles.link1}>Еще нет аккаунта?
                        <Text style={styles.link2} onPress={() => navigation.navigate('signup')}> Зарегистрироваться!</Text>
                    </Text>
                </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
    if (Platform.OS === 'ios') {
        return (
            <View style={styles.continer}>
                <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
                    <Image source={Back_Pick} style={styles.back_pc} />
                </TouchableOpacity>
                <Text style={head1}>Вход</Text>
                <View style={styles.continer_1}>
                <KeyboardAvoidingView behavior= "height" enabled>
                    <View style={styles.formGround}>
                        <TextInput placeholder='Логин' style={styles.input} />
                        <TextInput placeholder='Пароль' secureTextEntry={true} style={styles.input} />
                    </View>
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={styles.button_TO}>
                        <Text style={styles.button}>ВОЙТИ</Text>
                    </TouchableOpacity>
                    <Text style={styles.linkforgotpass}>Восстановить пароль</Text>
    
                    <Text style={styles.link1}>Еще нет аккаунта?
                        <Text style={styles.link2} onPress={() => navigation.navigate('signup')}> Зарегистрироваться!</Text>
                    </Text>
                </View>
            </View>
            
        )
    }
}

export default login


const styles = StyleSheet.create({
    continer: {
        height: "100%",
        width: "100%",
        backgroundColor: '#DADAE5'
    },
    continer_1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        margin: "4%",
        color: '#fff', // белый цвет текста
        fontSize: 18, // размер текста
        fontWeight: 'bold', // жирный шрифт
        textAlign: 'center', // выравнивание текста по центру
    },
    formGround: {
        display: "flex",
        flexDirection: 'column',
        margin: 10,
    },
    input: {
        padding: 18,
        fontSize: 20,
        minWidth: 350,
        borderColor: '#000000',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15
    },
    back_pc: {
        marginLeft: 35,
        marginTop: 85
    },
    button_TO: {
        backgroundColor: '#112D4E',
        borderRadius: 10,
        minHeight: 50,
        minWidth: 350,
    },
    linkforgotpass: {
        textAlign: 'right',
        marginTop: 15,
        fontSize: 18
        // marginRight: 5
    },
    link1: {
        marginTop: 15,
        fontSize: 14
    },
    link2: {
        fontWeight: 'bold',
    },
    KeyboardView:{

    },

})