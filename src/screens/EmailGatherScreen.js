import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native'

import {AntDesign} from '@expo/vector-icons'

import MTBoldText from '../components/custom/MTBoldText'
import MBLightText from '../components/custom/MTLightText'
import Colors from '../constants/Colors'

const EmailGatherScreen = (props) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.banner}>
                <MTBoldText>Our mission is to make the customer-to-professional relationship more meaningful.</MTBoldText>
                <MTBoldText> </MTBoldText>
                <MTBoldText>We do that through AI powered matching, based upon your needs and your personality.</MTBoldText>
            </View>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../images/circle-logo.png')} 
                style={styles.image} 
                resizeMode='cover' 
                />
            </View>
            <View style={styles.lowerContent}>
                <MTBoldText style={styles.textSmall}>
                    tap an icon below to auto-register otherwise tap the arrow below
                </MTBoldText>
                <MTBoldText style={styles.textSmall}>
                    to register with your email
                </MTBoldText>
                <View style={styles.buttonHolder}>
                    <AntDesign 
                    name="facebook-square" 
                    size={48} 
                    color="white" 
                    style={styles.icon} />
                    <AntDesign 
                    name="google" 
                    size={48} 
                    color="white" 
                    style={styles.icon} />
                    <AntDesign 
                    name="instagram" 
                    size={48} 
                    color="white" 
                    style={styles.icon} />
                </View>
                <View style={styles.arrowHolder}>
                    <AntDesign 
                    name="arrowright" 
                    size={48} 
                    color="white" />
                </View>
                <View style={styles.profTextContainer}>
                    <MBLightText>
                        Professional User? Click here to sign up.
                    </MBLightText>
                </View>
                <View style={styles.returningUserTab}>
                    <MBLightText>
                        Returning User?
                    </MBLightText>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        paddingBottom: Dimensions.get('window').height / 20,
        paddingHorizontal: 10
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.5 / 18,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        overflow: 'hidden',
        // marginBottom: Dimensions.get('window').height / 20
    },
    image: {
        height: '100%',
        width: '100%'
    },
    buttonHolder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        paddingVertical: 25,
        paddingHorizontal: 25
    },
    textSmall: {
    fontSize: 10
    },
    lowerContent: {
        alignItems: 'center'
    },
    profTextContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    returningUserTab: {
        paddingTop: 50
    }
})
 
export default EmailGatherScreen;