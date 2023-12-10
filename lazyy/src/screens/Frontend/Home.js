import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import homePicture from '../../assets/homePicture.jpg'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 23,textAlign:'center', color: 'black', fontWeight: 'bold' }}>Schedule Your Wellness: Book Your Doctor's Appointment Today!</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Image style={styles.picture} source={(homePicture)} />
            </View>
            <View style={{ flex: 1, }}>
                <Text style={{marginHorizontal:5, textAlign:'center',top:40,fontSize:20}}>
                    Adhering to the recommended schedule of appointments is key to managing chronic conditions and promoting overall health
                </Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    picture: {
        left: 40,
        borderRadius: 20,
        height: 260,
        width: 300,
        backgroundColor: 'white',
    },
})