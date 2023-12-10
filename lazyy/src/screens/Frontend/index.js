import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage from './FirstPage'
import AddAppointment from './AddAppointment'
import TabNavigation from './TabNavigation'

const Stack = createNativeStackNavigator()

const index = () => {
  const [newuser, setNewUser] = useState({})
  const [initialRoute, setInitialRoute] = useState('Login');

  // useEffect(() => {
  //   // Check if the token is present in AsyncStorage
  //   checkToken();
  // }, []);

  // const checkToken = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     // Set the initial route based on the presence of the token
  //     setInitialRoute(token ? 'Home' : 'Page1');
  //   } catch (error) {
  //     console.error('Error checking token:', error);
  //   }
  // };

  // useEffect(() => {
  //   auth().onAuthStateChanged((newuser) => {
  //     if (newuser) {
  //       setNewUser(newuser)
  //       console.log("user login with this data :- ", newuser)
  //     }
  //     else {
  //       console.log("User isn't signed in")
  //     }
  //   })
  // }, [])
  return (
    <>
      <Stack.Navigator initialRouteName={"FirstPage"}>
        <Stack.Screen name='FirstPage' component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
        {/* <Stack.Screen name='Add-Appointment' component={AddAppointment} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </>
  )
}

export default index