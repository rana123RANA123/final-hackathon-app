import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DoctorTime = () => {


    const [productsData, setProductsData] = useState([]);
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.168.233.83:8000/doctors")
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
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Doctor Date ({productsData.length})</Text>
            </View>
            <View style={{ flex: 7, top:40 }}>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={styles.headerCell}>Name</Text>
                        <Text style={styles.headerCell}>Date</Text>
                        <Text style={styles.headerCell}>Time</Text>
                    </View>

                    {productsData.map((product, i) => (
                        <View key={i + 1} style={styles.tableRow}>
                            <Text style={{ padding: 12,left:30, alignItems: 'center', flex: 1, fontWeight: 'bold', textDecorationLine: 'underline' }} >{product.doctorName}</Text>
                            <Text style={styles.tableCell}>{product.date}</Text>
                            <Text style={styles.tableCell}>{product.time}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default DoctorTime

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
        padding: 16,
        alignContent:'center',
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'white'
    },
})