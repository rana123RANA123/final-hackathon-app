import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PatientAdmitTime = () => {


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
                console.error("Error in get products in contact: ", error);
            });
    }, []);



    return (
        <View style={styles.container}>
            <View style={{ flex: 1,top:100, justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Patient-Admit-Time ({productsData.length})</Text>
            </View>
            <View style={{ flex: 7, top:50, }}>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={styles.headerCell}>Name</Text>
                        <Text style={styles.headerCell}>Date</Text>
                        <Text style={styles.headerCell}>Time</Text>
                        {/* <Text style={styles.headerCell}>Colour</Text>
                        <Text style={styles.headerCell}>Price</Text> */}
                        {/* <Text style={styles.headerCell}>Delete</Text> */}
                    </View>

                    {productsData.map((product, i) => (
                        <View key={i + 1} style={styles.tableRow}>
                            {/* <Text style={styles.tableCell}>{i + 1}</Text> */}
                            <Text style={{ padding: 12,left:30, alignItems: 'center', flex: 1, fontWeight: 'bold', textDecorationLine: 'underline' }} >{product.patientName}</Text>
                            <Text style={styles.tableCell}>{product.date}</Text>
                            <Text style={styles.tableCell}>{product.time}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default PatientAdmitTime

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
        justifyContent:'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    headerCell: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        backgroundColor:'#00b4d8',
        textAlign: 'center',
        justifyContent:'center'
    },
    tableCell: {
        flex: 1,
        fontSize:13,
        padding: 16,
        alignContent:'center',
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'white'
    },
})