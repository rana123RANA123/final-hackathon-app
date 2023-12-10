import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AppointmentAvailable = () => {

    const [productsData, setProductsData] = useState([]);
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.168.233.83:8000/appointments")
            .then((response) => {
                console.log("response : ", response.data);
                setProductsData(response.data);

            })
            .catch((error) => {
                console.error("Error in get products in contact: ", error);
            });
    }, []);






    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, marginTop:50,color: 'black', fontWeight: 'bold', textAlign: 'center', top:40, }}>Available/UnAvailable ({productsData.length})</Text>
            </View>
            <View style={{ flex: 7, top:50, }}>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={styles.headerCell}>Doctor_Id</Text>
                        <Text style={styles.headerCell}>Patient_Id</Text>
                        <Text style={styles.headerCell}>Option</Text>
                        {/* <Text style={styles.headerCell}>Colour</Text>
                        <Text style={styles.headerCell}>Price</Text> */}
                        {/* <Text style={styles.headerCell}>Delete</Text> */}
                    </View>

                    {productsData.map((product, i) => (
                        <View key={i + 1} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{product.doctorRandomId}</Text>
                            <Text style={{ padding: 12,left:10, alignItems: 'center', flex: 1, fontWeight: 'bold', textDecorationLine: 'underline' }} >{product.doctorRandomId}</Text>
                            <Text style={styles.tableCell}>{product.available ? product.available : "unavailable" }</Text>
                            {/* <Text style={styles.tableCell}>{product.doctorSchedule}</Text>
                            <Text style={styles.tableCell}>{product.doctorContact}</Text> */}
                            {/* <Text style={{ padding: 4, alignItems: 'center', color: 'red', flex: 1, fontWeight: 'bold' }} onPress={() => handleDeleteProduct(product._id)}>Del</Text> */}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default AppointmentAvailable

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
        backgroundColor:'#00b4d8',
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent:'center'
    },
    tableCell: {
        flex: 1,
        padding: 16,
        alignContent:'center',
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'white'
    },
})