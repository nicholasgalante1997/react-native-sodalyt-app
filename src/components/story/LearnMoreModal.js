import React from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native'
import Colors from '../../constants/Colors'
import MTLightText from '../custom/MTLightText'
import MTBoldText from '../custom/MTBoldText'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const LearnMoreModal = (props) => {

    return ( 
        <View style={styles.screen}>
            <View style={styles.alertContainer}>
                <View style={styles.topRow}>
                    <MaterialCommunityIcons name={props.icon} size={64} color="white" style={{paddingRight: 10}}/>
                    <MTBoldText style={{fontSize: 24}}>{props.archetype}</MTBoldText>
                </View>
                <View style={styles.medRow}>
                    <MTLightText style={{textAlign: 'center', fontStyle: 'italic', marginHorizontal: 5}}>
                        {props.archetypeDescription}
                    </MTLightText>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.circle}>
                    <Ionicons name="ios-close" size={24} color="white" onPress={props.onPress} />
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
        height: Dimensions.get('window').height > 700 ?  Dimensions.get('window').height / 2 : Dimensions.get('window').height / 1.5,
        width:  Dimensions.get('window').width / 1.5,
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
 
export default LearnMoreModal;