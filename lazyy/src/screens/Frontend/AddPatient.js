import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/arrow.png'
import { TextInput } from 'react-native'
import axios from 'axios'

const initialState = { patientName: "", patientCNIC: "", patientContact: "", patientMedical: "" }

const AddPatient = ({ navigation }) => {

    const [state, setState] = useState(initialState)

    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }

    console.log("patient data : ", state)

    const addPatient = () => {
        let { patientName, patientCNIC, patientContact, patientMedical } = state

        if (!patientName) {
            return Alert.alert("Please enter Patient Name correctly")
        }
        if (!patientCNIC) {
            return Alert.alert("please enter Patient CNIC correctly")
        }
        if (!patientContact) {
            return Alert.alert("please enter patient Contact correctly")
        }
        if (!patientMedical) {
            return Alert.alert("please enter Patient Medical Health correctly")
        }

        axios
            .post("http://192.168.233.83:8000/addPatient", state)
            .then((response) => {
                console.log("Your Patient Data created successfully!!");
                console.log("response.data : ", response.data);
                setState(initialState);
                navigation.navigate('Patient')
            })
            .catch((error) => {
                console.log("Error : ", error);
            });

    }

    return (

            <ScrollView style={styles.container}>
                <Text style={styles.topHeading}>Enter Patient Data</Text>
                <View style={styles.container2}>

                    <Text style={styles.orContinue}>Patient Name</Text>
                    <TextInput style={styles.inputField} value={state.patientName} onChangeText={val => handleChange("patientName", val)} placeholder='Enter Patient Name' />

                    <Text style={styles.orContinue}>Patient CNIC</Text>
                    <TextInput style={styles.inputField} value={state.patientCNIC} onChangeText={val => handleChange("patientCNIC", val)} placeholder='Enter Patient CNIC' />

                    <Text style={styles.orContinue}>Patient Contact</Text>
                    <TextInput style={styles.inputField} value={state.patientContact} onChangeText={val => handleChange("patientContact", val)} placeholder='Enter Patient Contact' />

                    <Text style={styles.orContinue}>Patient Medical</Text>
                    <TextInput style={styles.inputField} value={state.patientMedical} onChangeText={val => handleChange("patientMedical", val)} placeholder='Enter Patient Medical' />

                    <View style={{ display: 'flex', textAlign: 'center', flexDirection: 'row', top: 20, }}>
                        <Text style={styles.termPolicy}>I have read the </Text>
                        <Text style={styles.termPolicy2}>Terms Of Service </Text>
                    </View>

                    <Text style={styles.button} onPress={addPatient} >
                        Add Patient-Data
                    </Text>

                </View>
                <View style={styles.container3}>
                </View>
            </ScrollView >
    )
}

export default AddPatient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        // backgroundColor:'black'
    },
    container2: {
        flex: 2,
        marginHorizontal: 25,
    },
    container3: {
        flex: 2,
    },
    topHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop:70,
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
        borderRadius: 1,
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
        backgroundColor:'#00b4d8',
        borderColor: 'black',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        borderRadius: 30,
        padding: 15,
    },
})