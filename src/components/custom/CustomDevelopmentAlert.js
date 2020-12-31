import React from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native'
import Colors from '../../constants/Colors'
import MTLightText from './MTLightText'
import MTBoldText from './MTBoldText'
import { Ionicons } from '@expo/vector-icons'; 

// View with construction icon, Still under development message 
const CustomAlert = (props) => {

    return ( 
        <View style={styles.screen}>
            <View style={styles.alertContainer}>
                <View style={styles.topRow}>
                    <Ionicons name="md-construct" size={24} color="white" style={{paddingRight: 10}}/>
                    <MTBoldText>Oh No!</MTBoldText>
                </View>
                <View style={styles.medRow}>
                    <MTLightText style={{textAlign: 'center'}}>We're sorry! This app is still under development, so not all features are operational. Check back in at a later time to get the full experience. Thank you for understanding!</MTLightText>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.circle}>
                    <Ionicons name="md-thumbs-up" size={24} color="white" onPress={props.onPress} />
                    </View>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: Colors.ocean.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertContainer: {
        height: Dimensions.get('window').width / 1.5,
        width:  Dimensions.get('window').width / 2,
        backgroundColor: Colors.ocean.secondary,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topRow: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    medRow: {
        height: '60%',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    bottomRow: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30
    },
    circle: {
        backgroundColor: 'gray',
        height: 42,
        width: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white'
    }
})
 
export default CustomAlert;