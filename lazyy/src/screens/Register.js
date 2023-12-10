import { Button, Image, Pressable, Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/arrow.png'
import { TextInput } from 'react-native'
import axios from 'axios'
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { useAuthContext } from '../contexts/AuthContext';
// import { TextField } from 'native-base'

const initialState = { email: "", password: "", confirmPassword: "" }

const Register = ({ navigation }) => {

    // const {dispatch} = useAuthContext()
    const [state, setState] = useState(initialState)

    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }

    const handleSignUp = () => {
        let { email, password, confirmPassword } = state

        if (!email) {
            return Alert.alert("please enter email correctly")
        }
        if (password.length < 6) {
            return Alert.alert("please enter password correctly")
        }
        if(confirmPassword !== password){
            return Alert.alert("please enter confirm password correctly")
        }

        
        axios
        .post("http://192.168.233.83:8000/auth/register", state)
        .then((res) => {
            console.log("res.data : ", res.data);
            console.log("User successfuly registered");
            setState(initialState);
            navigation.navigate("Loginn")
        })
        .catch((error) => {
          console.log("Error in register function : ", error.message);
        });
  

    //     auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             createUserProfile(user)
    //             navigation.navigate("Loginn")
    //             console.log('User account signed in!');
    //         })
    //         .catch(error => {
    //             if (error.code === 'auth/invalid-email') {
    //                 console.log('That email address is invalid!');
    //             }
                
    //             Alert.alert("That email address is invalid! Try Again")
    //             console.error("error => ", error);
    //         });


    //         const createUserProfile = async (user) => {
    //             const { email ,uid } = user
            
    //             const userData = {
    //               email,uid, password,
    //               status: "active",
    //               roles: ["superAdmin"]
    //             }
            
    //             firestore().collection('Users').add(userData)
    //             .then(() => {
    //                 console.log('User added!');
    //                 // dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } })

    //             })
    //             .catch(error => {
    //                 console.error("firestore error => ", error);
    //             });
    //         }
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
                <Text style={styles.topHeading}>Sign up free</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.orContinue}>Or Continue With</Text>
                <TextInput keyboardType='email' onChangeText={val => handleChange("email", val)} style={styles.inputField} placeholder='Enter-e-mail address' />

                <Text style={styles.orContinue2}>Or Continue With</Text>
                <TextInput secureTextEntry={true} onChangeText={val => handleChange("password", val)} password={true} style={styles.inputField2} placeholder='Create a password' />

                <Text style={styles.orContinue3}>Or Continue With</Text>
                <TextInput secureTextEntry={true} onChangeText={val => handleChange("confirmPassword", val)} password={true} style={styles.inputField3} placeholder='Repeat password' />

                <View style={{ display: 'flex', textAlign: 'center', flexDirection: 'row', top: 20, }}>
                    <Text style={styles.termPolicy}>I have read the </Text>
                    <Text style={styles.termPolicy2}>Terms Of Service </Text>
                </View>

                <Text style={styles.button} onPress={handleSignUp}>
                    Submit
                </Text>


            </View>
            <View style={styles.container3}>
            </View>
        </>
    )
}

export default Register

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
        top: 152,
        borderRadius: 30,
        padding: 15,
    },
})


// -----------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, firestore } from '../../config/firebase';
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

// export default function Register() {
//     const [state, setState] = useState({ fullName: "", email: "", password: "" });
    // const [isProcessing, setIsProcessing] = useState(false);

    
//     const handleChange = (name, value) => setState(s => ({ ...s, [name]: value }));
    
//     console.log("user Data" , state)

//     const handleRegister = async () => {
//         let { fullName, email, password } = state;

//         console.log("register Data" , state)
//     };

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
//             <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>Register</Text>

//             <TextInput
//                 style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
//                 placeholder="Full Name"
//                 onChangeText={(text) => handleChange('fullName', text)}
//             />
//             <TextInput
//                 style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
//                 placeholder="Email"
//                 onChangeText={(text) => handleChange('email', text)}
//             />
//             <TextInput
//                 style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
//                 placeholder="Password"
//                 secureTextEntry
//                 onChangeText={(text) => handleChange('password', text)}
//             />

//             <Button
//                 title="Register"
//                 onPress={handleRegister}
//             />
//         </View>
//     );
// }
