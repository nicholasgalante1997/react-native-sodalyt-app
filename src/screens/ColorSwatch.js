import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Colors from '../constants/Colors'
import MainButton from '../components/custom/MainButton'

const ColorSwatch = (props) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                Color Swatch
            </Text>
            <View style={styles.buttonHolder}>
                <MainButton style={styles.button}>Click Me!</MainButton>
            </View>
        </View>
     );
}
 
styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.primary ,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: 'black',
        fontSize: 32,
        fontFamily: 'tommy-bold'
    },
    buttonHolder: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    button: {
        backgroundColor: Colors.light.secondary,
    }
})

export default ColorSwatch;