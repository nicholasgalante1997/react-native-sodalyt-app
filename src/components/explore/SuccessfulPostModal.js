import React from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native'
import Colors from '../../constants/Colors'
import MTLightText from '../custom/MTLightText'
import MTBoldText from '../custom/MTBoldText'
import { Ionicons, EvilIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

//Lets customer know he has posted review successfully 
//If no successful, let's them know there's an error 
const CustomAlert = (props) => {

    return ( 
        <View style={styles.screen}>
            <View style={styles.alertContainer}>
                <View style={styles.topRow}>
                <EvilIcons name="check" size={24} color="black" style={{paddingRight: 10}} />
                <MTBoldText>Success!</MTBoldText>
                </View>
                <View style={styles.medRow}>
                    <MTLightText style={{textAlign: 'center'}}>You've successfully posted your review.</MTLightText>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.circle}>
                        <TouchableOpacity onPress={props.onPress}>
                            <MTLightText style={{fontSize: 6}}>Close</MTLightText>
                        </TouchableOpacity>
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
        height: Dimensions.get('window').width / 2.8,
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