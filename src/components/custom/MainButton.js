import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Colors from '../../constants/Colors'


const MainButton = (props) => {
    return ( 
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
     );
}
 
const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'tommy-reg',
        fontSize: 18
    }
})

export default MainButton;