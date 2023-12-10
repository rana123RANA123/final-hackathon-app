import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useEffect } from 'react'
import firstPage from '../../assets/firstPage.jpg'
// import icon from '../../assets/right.png'
import arrow2 from '../../assets/arrow2.png'

const FirstPage = ({ navigation }) => {

    const handleNavigate2 = () => {
        navigation.navigate("TabNavigation");
    };

    useEffect(() => {
        setTimeout(() => {navigation.navigate('TabNavigation')}, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Pressable onPress={handleNavigate2}>
                    <Image
                        source={(arrow2)}
                        style={styles.arrow2}
                    />
                </Pressable>
            </View>
            <View>
                <Image style={styles.picture} source={(firstPage)} />
            </View>
            <View>
                <Text style={styles.boldText}>
                Choose The Doctor You Want
                </Text>
            </View>
            <View>
                <Text style={styles.secondText}>
                   Now it's so easy to make an appointment with your Doctor & stay fit
                </Text>
            </View>
            {/* <View>
                <Pressable onPress={onPressHandler}>
                    <Image
                        source={()}
                        style={styles.icon}
                    />
                </Pressable>
            </View> */}
        </View>

    )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    picture: {
        left: 40,
        top: 140,
        borderRadius: 20,
        position: 'relative',
        height: 260,
        width: 260,
        backgroundColor: 'white',
    },
    boldText: {
        backgroundColor: 'white',
        fontWeight: '900',
        top: 185,
        color: 'black',
        textAlign: 'center',
        fontSize: 23,
    },
    secondText: {
        fontWeight: '900',
        top: 210,
        paddingHorizontal: 15,
        textAlign: 'center',
        fontSize: 16,

    },
    arrow2: {
        height: 24,
        width: 20,
        right:15,
        top:20,
    },
    icon: {
        left: 140,
        top: 250,
        borderRadius: 40,
        position: 'relative',
        height: 20,
        width: 20,
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: '#4361ee',
    }


})