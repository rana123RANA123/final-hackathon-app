import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Patient from './Patient';
import AddPatient from './AddPatient';
import PatientAdmitTime from './PatientAdmitTime';

const Tab = createMaterialTopTabNavigator();

const PatientTop = () => {

    return (
        <>
            <Tab.Navigator initialRouteName='Patient' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Patient" component={Patient} />
                <Tab.Screen name="Admit-Time" component={PatientAdmitTime} />
                <Tab.Screen name="Add-Patient" component={AddPatient} />
                {/* <Tab.Screen name="Logout" component={Logout} /> */}
            </Tab.Navigator>
        </>
    )
}

export default PatientTop