import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import MTBoldText from '../components/custom/MTBoldText'
import MTLightText from '../components/custom/MTLightText'
import MTMedText from '../components/custom/MTMediumText'
import Colors from '../constants/Colors'
import { Fontisto, FontAwesome5 } from '@expo/vector-icons'; 


const WhySodalytScreen = (props) => {

    const isProfessional = props.navigation.getParam('isProfessional')
    console.log(isProfessional)

    return ( 
        <View style={styles.screen}>
            <TouchableWithoutFeedback style={{alignItems: 'center', height: '100%', width: '100%'}} onPress={() => {
                props.navigation.navigate({routeName: 'Email', params: {
                    isProfessional: true
                }})
            }}>
            <View style={styles.banner}>
                <MTBoldText style={{fontSize: 24, textAlign: 'center'}}>So, Why Sodalyt?</MTBoldText>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: Dimensions.get('window').width / 10, marginTop: 20}}>
               <MTMedText style={{textAlign: 'center'}}>
                   Our mission is to make the customer to professional relationship more meaningful through scientific matching of you and the customer.
                   </MTMedText> 
                   <MTMedText style={{textAlign: 'center', marginTop: 10}}>
                    This is good for you because it means higher lifetime customer value. 
                   </MTMedText> 
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: Dimensions.get('window').width / 12, marginTop: 20}}>
                <MTLightText style={{textAlign: 'center'}}>
                    Think higher quality leads, lower acquisition costs, less expense to retain the customer, and higher profit margins.
                </MTLightText>
                <MTLightText style={{textAlign: 'center', marginTop: 10}}>
                   Plus, don't you feel more fulfilled when you get to help people you like?
                </MTLightText>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: Dimensions.get('window').width / 12, marginTop: 20}}>
            <MTMedText style={{textAlign: 'center'}}>
                 Get Started Today and Unlock Your  Sodalyt Matches
                   </MTMedText> 
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: Dimensions.get('window').width, marginTop: 30}}>
                    <Fontisto name="persons" size={64} color="white" />
                    <FontAwesome5 name="handshake" size={64} color="white" />
                    <FontAwesome5 name="money-check-alt" size={64} color="white" />
            </View>
            <View style={{position: 'absolute', bottom: 100}}>
                <MTLightText>
                    Tap Anywhere to Get Started
                </MTLightText>
            </View>
            </TouchableWithoutFeedback>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    banner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 5
    }
})
 
export default WhySodalytScreen