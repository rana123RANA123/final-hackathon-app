import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Appointment = ({navigation}) => {


    const [productsData, setProductsData] = useState([]);
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.168.233.83:8000/appointments")
            .then((response) => {
                console.log("response : ", response.data);
                setProductsData(response.data);
                setState(response.data)

            })
            .catch((error) => {
                console.error("Error in get products in contact: ", error);
            });
    }, []);


    // const handleNavigate = () => {
    //     navigation.navigate("Add-Appointment");
    // };

    const handleDeleteAppointment = (userId) => {
        axios
            .delete("http://192.168.233.83:8000/deleteDoctor/" + userId)
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
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, top: 40, color: 'black', marginTop: 40, fontWeight: 'bold', textAlign: 'center' }}>All-Appointments ({productsData.length})</Text>
            </View>
            <View style={{ flex: 7, top: 40, }}>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={styles.headerCell}>Date</Text>
                        <Text style={styles.headerCell}>Time</Text>
                        <Text style={styles.headerCell}>Note</Text>
                        {/* <Text style={styles.headerCell}>Colour</Text>
                        <Text style={styles.headerCell}>Price</Text> */}
                        {/* <Text style={styles.headerCell}>Delete</Text> */}
                    </View>

                    {productsData.map((product, i) => (
                        <View key={i + 1} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{product.originalDate}</Text>
                            <Text style={{ paddingVertical:20,paddingHorizontal:14, left: 10, alignItems: 'center', flex: 1, fontWeight: 'bold', textDecorationLine: 'underline' }} >{product.originalTime}</Text>
                            <Text style={styles.tableCell}>{product.appointmentNotes}</Text>
                            {/* <Text style={styles.tableCell}>{product.doctorSchedule}</Text>
                            <Text style={styles.tableCell}>{product.doctorContact}</Text> */}
                            {/* <Text style={{ padding: 4, alignItems: 'center', color: 'red', flex: 1, fontWeight: 'bold' }} onPress={() => handleDeleteProduct(product._id)}>Del</Text> */}
                        </View>
                    ))}
                    {/* dfkj
                    <Text style={styles.button} onPress={handleNavigate}>Go To Add Appointment</Text> */}
                </View>
            </View>
        </View>
    )
}

export default Appointment

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
        backgroundColor:'#00b4d8',
        textAlign: 'center',
        justifyContent: 'center'
    },
    tableCell: {
        flex: 1,
        padding: 16,
        alignContent: 'center',
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'white'
    },
    button: {
        backgroundColor: '#1e90ff',
        borderColor: 'black',
        textAlign: 'center',
        marginHorizontal: 40,
        color: 'white',
        fontSize: 15,
        top: 160,
        borderRadius: 30,
        padding: 15,
    },
})