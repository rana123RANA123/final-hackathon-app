import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Doctor = () => {


    const [productsData, setProductsData] = useState([]);
    const [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.168.233.83:8000/doctors")
            .then((response) => {
                console.log("response : ", response.data);
                setProductsData(response.data);
                const fullData = response.data;
                // const filterData = fullData.filter((item) => item.available = "available")
                // if(fullData){
                //     console.log("this")
                // }
                setState(fullData)

            })
            .catch((error) => {
                console.error("Error in get products in contact: ", error);
            });
    }, []);



    
    const handleDeleteDoctor = (userId) => {
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
            <View style={{ flex: 1,top:60, justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center', top:40, }}>All-Doctors ({productsData.length})</Text>
            </View>
            <View style={{ flex: 7, top:50, }}>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={styles.headerCell}>#</Text>
                        <Text style={styles.headerCell}>Name</Text>
                        <Text style={styles.headerCell}>Specialization</Text>
                        <Text style={styles.headerCell}>Delete</Text>
                    </View>

                    {productsData.map((product, i) => (
                        <View key={i + 1} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{i + 1}</Text>
                            <Text style={{ padding: 12,left:30, alignItems: 'center', flex: 1, fontWeight: 'bold', textDecorationLine: 'underline' }} >{product.doctorName}</Text>
                            <Text style={styles.tableCell}>{product.doctorSpecialization}</Text>
                            <Text style={{ padding: 12, alignItems: 'center', color: 'red', left: 12, flex: 1, fontWeight: 'bold' }} onPress={() => handleDeleteDoctor(product._id)}>Del</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    table: {
        flex: 1,
        margin: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        top: 50,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent:'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        fontWeight:'bold',
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