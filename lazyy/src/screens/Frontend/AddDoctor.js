import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/arrow.png'
import { TextInput } from 'react-native'
import axios from 'axios'

const initialState = { doctorName: "",doctorDate: "", doctorSpecialization: "", doctorContact: "", doctorSchedule: "" }

const AddDoctor = ({ navigation }) => {

    const [state, setState] = useState(initialState)

    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }

    console.log("doctor data : ", state)

    const addDoctor = () => {
        let { doctorName,doctorDate, doctorSpecialization, doctorContact, doctorSchedule } = state

        if (!doctorName) {
            return Alert.alert("Please enter Doctor Name correctly")
        }
        if (!doctorSchedule) {
            return Alert.alert("please enter Doctor Schedule correctly")
        }
        if (!doctorContact) {
            return Alert.alert("please enter Doctor Contact correctly")
        }
        if (!doctorSpecialization) {
            return Alert.alert("please enter Doctor Specialization correctly")
        }
        if (!doctorDate) {
            return Alert.alert("please enter Doctor Date correctly")
        }

        axios
            .post("http://192.168.233.83:8000/addDoctor", state)
            .then((response) => {
                console.log("Your Doctor Data created successfully!!");
                console.log("response.data : ", response.data);
                setState(initialState);
                navigation.navigate('Doctor')
            })
            .catch((error) => {
                console.log("Error : ", error);
            });

    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
        
            <ScrollView>
                <Text style={styles.topHeading}>Add Doctor</Text>
                <View style={styles.container2}>

                    <Text style={styles.orContinue}>Doctor Name</Text>
                    <TextInput style={styles.inputField} value={state.doctorName} onChangeText={val => handleChange("doctorName", val)} placeholder='Doctor Name' />

                    <Text style={styles.orContinue}>Doctor Specialization</Text>
                    <TextInput style={styles.inputField} value={state.doctorSpecialization} onChangeText={val => handleChange("doctorSpecialization", val)} placeholder='Doctor Specialization' />

                    <Text style={styles.orContinue}>Doctor Schedule</Text>
                    <TextInput style={styles.inputField} value={state.doctorSchedule} onChangeText={val => handleChange("doctorSchedule", val)} placeholder='Doctor Schedule' />

                    <Text style={styles.orContinue}>Doctor Contact</Text>
                    <TextInput style={styles.inputField} value={state.doctorContact} onChangeText={val => handleChange("doctorContact", val)} placeholder='Doctor Contact' />
                    
                    <Text style={styles.orContinue}>Date</Text>
                    <TextInput style={styles.inputField} value={state.doctorDate} onChangeText={val => handleChange("doctorDate", val)} placeholder='Doctor Free Date' />

                    {/* <View style={{ display: 'flex', textAlign: 'center', flexDirection: 'row', top: 20, }}>
                        <Text style={styles.termPolicy}>I have read the </Text>
                        <Text style={styles.termPolicy2}>Terms Of Service </Text>
                    </View> */}

                    <Text style={styles.button} onPress={addDoctor} >
                        Add Doctor-Data
                    </Text>

                </View>
                <View style={styles.container3}>
                </View>
            </ScrollView >
        </View>
    )
}

export default AddDoctor

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
        top:30,
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
        top:30,

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
        borderRadius: 31,
        padding: 15,
        top:30,
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
        color: 'white',
        fontSize: 20,
        backgroundColor:'#00b4d8',
        marginTop:60,
        borderRadius: 30,
        padding: 15,
    },
})