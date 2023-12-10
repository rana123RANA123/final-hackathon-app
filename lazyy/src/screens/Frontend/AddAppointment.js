import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/arrow.png'
import { TextInput } from 'react-native'
import axios from 'axios'

const initialState = { appointmentNotes: "",originalDate: "", originalTime: "", }

const AddAppointment = ({ navigation }) => {

    const [state, setState] = useState(initialState)

    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }

    console.log("doctor data : ", state)

    const addAppointment = () => {
        let {appointmentNotes ,originalDate, originalTime } = state

        if (!appointmentNotes) {
            return Alert.alert("Please enter Appointment Note Name correctly")
        }
        if (!originalDate) {
            return Alert.alert("please enter original Date Schedule correctly")
        }
        if (!originalTime) {
            return Alert.alert("please enter Original Time correctly")
        }
        axios
            .post("http://192.168.233.83:8000/addAppointment", state)
            .then((response) => {
                console.log("Your Doctor Data created successfully!!");
                console.log("response.data : ", response.data);
                setState(initialState);
                navigation.navigate('Appointment')
            })
            .catch((error) => {
                console.log("Error : ", error);
            });

    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
        
            <ScrollView style={{top:90,marginVertical:30, }}>
                <Text style={styles.topHeading}>Add Appointment</Text>
                <View style={styles.container2}>

                    {/* <Text style={styles.orContinue}>Appointment Note</Text>
                    <TextInput style={styles.inputField} value={state.appointmentNotes} onChangeText={val => handleChange("appointmentNotes", val)} placeholder='Doctor Name' /> */}

                    <Text style={styles.orContinue}>Note</Text>
                    <TextInput style={styles.inputField} value={state.appointmentNotes} onChangeText={val => handleChange("appointmentNotes", val)} placeholder='Appointment Note' />
                    
                    <Text style={styles.orContinue}>Date</Text>
                    <TextInput style={styles.inputField} value={state.originalDate} onChangeText={val => handleChange("originalDate", val)} placeholder='Appointment Date' />

                    <Text style={styles.orContinue}>Time</Text>
                    <TextInput style={styles.inputField} value={state.originalTime} onChangeText={val => handleChange("originalTime", val)} placeholder='Appointment Time' />

                    <View style={{ display: 'flex', textAlign: 'center', flexDirection: 'row', top: 20, }}>
                        <Text style={styles.termPolicy}>I have read the </Text>
                        <Text style={styles.termPolicy2}>Terms Of Service </Text>
                    </View>

                    <Text style={styles.button} onPress={addAppointment} >
                        Add Doctor-Data
                    </Text>

                </View>
                <View style={styles.container3}>
                </View>
            </ScrollView >
        </View>
    )
}

export default AddAppointment

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        // flex: 2,
        marginHorizontal: 25,
    },
    container3: {
        // flex: 2,
    },
    topHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    icon: {
        height: 20,
        width: 20,
        left: 10,
        top: 20,
    },
    orContinue: {
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,

    },
    orContinue2: {
        fontSize: 15,
        marginHorizontal: 10,
        top: 23,
        marginVertical: 9,

    },
    orContinue3: {
        top: 40,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,

    },
    termPolicy: {
        top: 37,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,
        color: 'black',
        left: 15,
    },
    termPolicy2: {
        top: 37,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,
        color: '#4361ee',
        fontWeight: 'bold',
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 15,
    },
    inputField2: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        top: 24,
        padding: 15,
    },
    inputField3: {
        borderColor: 'black',
        borderWidth: 1,
        top: 42,
        borderRadius: 30,
        padding: 15,
    },
    button: {
        borderColor: 'black',
        textAlign: 'center',
        backgroundColor:'#00b4d8',
        color: 'white',
        fontSize: 20,
        borderRadius: 30,
        padding: 15,
    },
})