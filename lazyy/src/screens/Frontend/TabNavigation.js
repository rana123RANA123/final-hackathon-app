import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import Doctor from './Doctor';
import Appointment from './Appointment';
import DoctorTop from './DoctorTop';
import PatientTop from './PatientTop';
import AppointmentTop from './AppointmentTop';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return (
        <>
            <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                {/* <Tab.Screen name="Home" component={Home} /> */}
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: (color, size) => (
                            <MaterialIcons name="home" color={color} size={30} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Doctor"
                    component={DoctorTop}
                    options={{
                        tabBarIcon: (color, size) => (
                            <FontAwesome6 name="user-doctor" color={color} size={30} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Patient"
                    component={PatientTop}
                    options={{
                        tabBarIcon: (color, size) => (
                            <Fontisto name="bed-patient" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Appointment"
                    component={AppointmentTop}
                    options={{
                        tabBarIcon: (color, size) => (
                            <Foundation name="clipboard-notes" color={color} size={30} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

export default TabNavigation