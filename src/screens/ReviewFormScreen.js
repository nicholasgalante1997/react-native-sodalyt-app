import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import {AntDesign} from '@expo/vector-icons'

const ReviewFormScreen = () => {
    return ( 
        <View style={styles.screen}>
            <MTBoldText>Filter Screen</MTBoldText>
            <View style={styles.starHolder}>

            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    starHolder: {
        flexDirection: 'row'
    }
})
 
export default ReviewFormScreen;