import { Alert, Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/arrow.png'
import { TextInput } from 'react-native'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import auth from '@react-native-firebase/auth';
// import useFishStore from '../../../store';
// import { useAuthContext } from '../contexts/AuthContext';

const initialState = { email: "", password: "" }

const Login = ({ navigation }) => {

    // const {readUserProfile} = useAuthContext()

    // const { addUser }=useFishStore()

    const [state, setState] = useState(initialState)

    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }

    console.log("check data", state)

    const handleLogin = async () => {
        let { email, password } = state

        if (!email) {
            return Alert.alert("please enter email correctly")
        }
        if (password.length < 6) {
            return Alert.alert("please enter password correctly")
        }

        axios
            .post("http://192.168.233.83:8000/auth/login", state)
            .then((res) => {
                console.log("res.data : ", res.data);
                console.log("User Successfuly Loggedin!!");
                setState(initialState);
                // Store the token in AsyncStorage
                const token = response.data.token;
                // AsyncStorage.setItem('token', token);
                navigation.navigate("TabNavigation")
                console.log("Token Payload : ", jwtDecode(token));
            })
            .catch((error) => {
                console.log("Error In Login Function : ", error.message);
            });


        // auth()
        //     .signInWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         user = userCredential.user;
        //         console.log("login user", user)
        //         // readUserProfile(user)
        //         addUser(user)
        //         console.log('User account signed in!');
        //         navigation.navigate("TabNavigation")
        //     })
        //     .catch(error => {
        //         if (error.code === 'auth/invalid-email') {
        //             Alert.alert("That email address is invalid!")
        //             console.log('That email address is invalid!');
        //         }
        //         Alert.alert("Login Error", error)
        //         console.error("error => ", error);
        //     });


        console.log("Full Login Data", state)
    }

    const onPressHandler = () => {
        navigation.goBack();
    };

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Pressable onPress={onPressHandler}>
                        <Image
                            source={(icon)}
                            style={styles.icon}
                        />
                    </Pressable>
                </View>
                <Text style={styles.topHeading}>Login</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.orContinue}>Email</Text>
                <TextInput style={styles.inputField} onChangeText={val => handleChange("email", val)} placeholder='Enter-e-mail address' />

                <Text style={styles.orContinue2}>Password</Text>
                <TextInput secureTextEntry={true} password={true} style={styles.inputField2} onChangeText={val => handleChange("password", val)} placeholder='Enter your password' />

                <View style={{ display: 'flex', textAlign: 'center', flexDirection: 'row', top: 20, }}>
                    <Text style={styles.termPolicy}>I have read the </Text>
                    <Text style={styles.termPolicy2}>Terms Of Service </Text>
                </View>

                <Text style={styles.button} onPress={handleLogin} >
                    Submit
                </Text>
                {/* <Button title='Alert' onPress={() => {Alert("hello")}} /> */}




            </View>
            <View style={styles.container3}>
            </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 2,
        top: 30,
        marginHorizontal: 25,
    },
    container3: {
        flex: 2,
    },
    topHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        top: 60,
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
        backgroundColor: '#1e90ff',
        borderColor: 'black',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        top: 252,
        borderRadius: 30,
        padding: 15,
    },
})