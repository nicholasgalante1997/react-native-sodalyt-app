import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const MainButton = (props) => {
    return ( 
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
     );
}
 
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4E87F2",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'tommy-reg',
        fontSize: 18
    }
})

export default MainButton;