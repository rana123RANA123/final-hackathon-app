import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Patient = () => {


    const [productsData, setProductsData] = useState([]);
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.168.233.83:8000/patients")
            .then((response) => {
                console.log("response : ", response.data);
                setProductsData(response.data);
                setState(response.data)

            })
            .catch((error) => {
                console.error("Error in get patients: ", error);
            });
    }, []);


    const handleDeletePatient = (userId) => {
        axios
            .delete("http://192.168.233.83:8000/deletePatient/" + userId)
            .then((response) => {
                console.log("response : ", response);
                const updateData = productsData.filter((user) => user._id != userId);
                setProductsData(updateData);
                console.log("product deleted successfull")
            })
            .catch((error) => {
                console.error("Error in product delete : ", error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, top: 100, justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>All-Patients ({productsData.length})</Text>
            </View>
            <View style={{ flex: 7, top: 40, }}>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={styles.headerCell}>CNIC</Text>
                        <Text style={styles.headerCell}>Name</Text>
                        <Text style={styles.headerCell}>Medical</Text>
                        <Text style={styles.headerCell}>Delete</Text>
                    </View>

                    {productsData.map((patient, i) => (
                        <View key={i + 1} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{patient.patientCNIC}</Text>
                            <Text style={{ padding: 12, left: 30, alignItems: 'center', flex: 1, fontWeight: 'bold', textDecorationLine: 'underline' }} >{patient.patientName}</Text>
                            <Text style={styles.tableCell}>{patient.patientMedical}</Text>
                            <Text style={{ padding: 12, alignItems: 'center', color: 'red', left: 12, flex: 1, fontWeight: 'bold' }} onPress={() => handleDeletePatient(patient._id)}>Del</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Patient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    table: {
        flex: 1,
        margin: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        top: 50,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    headerCell: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor:'#00b4d8',
        justifyContent: 'center'
    },
    tableCell: {
        flex: 1,
        padding: 16,
        fontSize: 12,
        alignContent: 'center',
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'white'
    },
})