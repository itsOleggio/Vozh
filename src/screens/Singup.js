import {Modal, DatePickerIOS, StyleSheet, TouchableOpacity, Text, View, Image, TextInput, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'

import Back_Pick from '../../assets/Back.png';
// import { head1 } from '../common/formcss';

const Singup = ({ navigation }) => {
    if (Platform.OS === 'android') {
        return (
            <KeyboardAvoidingView behavior="height">
                <View style={styles.continer}>
                    <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
                        <Image source={Back_Pick} style={styles.back_pc} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Регистрация</Text>
                    <View style={styles.continer_1}>
                        < ScrollView style={styles.Scroll} contentOffset={{ y: Platform.OS === "ios" ? -5 : 90 }}>
                            <View style={styles.formGround}>
                                <Text>Имя</Text>
                                <TextInput placeholder='Введите имя' style={styles.input} />
                                <Text>Фамилия</Text>
                                <TextInput placeholder='Введите фамилию' style={styles.input} />
                                <Text>Электронная почта</Text>
                                <TextInput placeholder='Введите email' style={styles.input} />
                                <Text>Пароль</Text>
                                <TextInput placeholder='Введите пароль' style={styles.input} />
                                <Text>Повторите пароль
                                </Text>
                                <TextInput placeholder='Повторите пароль' style={styles.input} />
                            </View>
                        </ScrollView>
                        <TouchableOpacity style={styles.button_TO}>
                            <Text style={styles.button}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
                        </TouchableOpacity>
                        <Text style={styles.Privacy_text_1}>Нажимая на "ЗАРЕГИСТРИРОВАТЬСЯ" вы соглашаетесь политикой
                            <Text style={styles.Privacy_text_2}> безопасности и конфенденциальности</Text>
                        </Text>
                        {/* <Text style={styles.Privacy_text}>с политикой безопасности и конфенденциальности</Text> */}
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
    if (Platform.OS === 'ios') {


         {/* Вызов функции Datepicker на Костылях */}

        // const [selectedDate, setDate] = useState(new Date());
        // const [showDatePicker, setShowDatePicker] = useState(false);
      
        // const handleDateChange = (newDate) => {
        //   setDate(newDate);
        //   setShowDatePicker(false);
        // };

        return (
            <KeyboardAvoidingView behavior="height">
            <View style={styles.continer}>
                <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
                    <Image source={Back_Pick} style={styles.back_pc} />
                </TouchableOpacity>
                <Text style={styles.header}>Регистрация</Text>
                <View style={styles.continer_1}>
                    < ScrollView style={styles.Scroll} contentOffset={{ y: Platform.OS === "ios" ? 0 : 90 }}>
                        <View style={styles.formGround}>
                            <Text>Имя</Text>
                            <TextInput placeholder='Введите имя' style={styles.input} />
                            <Text>Фамилия</Text>
                            <TextInput placeholder='Введите фамилию' style={styles.input} />
                         
                            {/* Datepicker на Костылях */}
                          
                            {/* <Text>Выберите дату рождения</Text> */}
                            {/* <TextInput
                                placeholder='Введите дату рождения'
                                value={selectedDate.toLocaleDateString()}
                                onFocus={() => setShowDatePicker(true)}
                                style={styles.input}
                            /> */}
                            {/* <Modal visible={showDatePicker} onRequestClose={() => setShowDatePicker(false)}>
                             <View style={{ flex: 1, paddingTop: '70%', backgroundColor: '#DADAE5'}}> 
                                <DatePickerIOS 
                                mode='date' 
                                date={selectedDate} 
                                onDateChange={handleDateChange}
                                />
                            </View>
                            </Modal> */}
                            {/* <DatePickerIOS date={chosenDate} onDateChange={setChosenDate} mode='date' /> */}
                            <Text>Электронная почта</Text>
                            <TextInput placeholder='Введите email' style={styles.input} />
                            <Text>Пароль</Text>
                            <TextInput placeholder='Введите пароль' style={styles.input}  secureTextEntry={true} />
                            <Text>Повторите пароль
                            </Text>
                            <TextInput placeholder='Повторите пароль' style={styles.input}  secureTextEntry={true}/>
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={styles.button_TO}>
                        <Text style={styles.button}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
                    </TouchableOpacity>
                    <Text style={styles.Privacy_text_1}>Нажимая на "ЗАРЕГИСТРИРОВАТЬСЯ" вы соглашаетесь политикой
                        <Text style={styles.Privacy_text_2}> безопасности и конфенденциальности</Text>
                    </Text>
                    {/* <Text style={styles.Privacy_text}>с политикой безопасности и конфенденциальности</Text> */}
                </View>
            </View>
             </KeyboardAvoidingView>
        );
    }
}

export default Singup

const styles = StyleSheet.create({
    continer: {
        height: "100%",
        width: "100%",
        backgroundColor: '#DADAE5'
    },
    header: {
        fontSize: 32,
        color: 'black',
        textAlign: 'left',
        marginLeft: 35,
        marginTop: "10%",
        marginBottom: "2%"
    },
    // СРОЧНО ДОРАБОТАТЬ ЭТОТ МОМЕНТ
    continer_1: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        // height: Platform.OS === "ios" ? "65%" : "71%",
    },
    button: {
        margin: "4%",
        color: '#fff', // белый цвет текста
        fontSize: 18, // размер текста
        fontWeight: 'bold', // жирный шрифт
        textAlign: 'center', // выравнивание текста по центру
    },
    button_TO: {
        // marginBottom: "-15%",
        backgroundColor: '#112D4E',
        borderRadius: 10,
        minHeight: 50,
        minWidth: 350,
        marginTop: Platform.OS === "ios" ? "3%" : "2%",
    },
    formGround: {
        display: "flex",
        flexDirection: 'column',
        height: -100,
        // marginTop: Platform.OS === "ios" ? 5 : 0,
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

    linkforgotpass: {
        textAlign: 'right',
        marginTop: 10,
        fontSize: 16
        // marginRight: 5
    },
    Scroll: {
        paddingBottom: 10,
        borderRadius: 10,
        maxHeight: "80%",
    },
    Privacy_text_1: {
        display: "flex",
        textAlign: "center",
        fontSize: 14,
        marginTop: 10,
        width: "90%"
    },
    Privacy_text_2: {
        display: "flex",
        textAlign: "center",
        fontSize: 14,
        marginTop: 10,
        width: "90%",
        fontWeight: 'bold',
    }
})