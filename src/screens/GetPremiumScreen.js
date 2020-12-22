import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, Platform, Alert} from 'react-native'
import Colors from '../constants/Colors'
import MTMediumText from '../components/custom/MTMediumText'
import MTBoldText from '../components/custom/MTBoldText'
import MTLightText from '../components/custom/MTLightText'

const GetPremiumScreen = (props) => {
    return ( 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.rugged.primary}}>
            <View style={{height: 90, width: 90, overflow: 'hidden', borderRadius: 45, marginBottom: 20}}>
                <Image source={ require('../../assets/orange_icon.png')} style={{height: '100%', width: '100%', resizeMode: 'contain'}} />
            </View>
            <View style={{height: '12%', width: Dimensions.get('window').width * 0.9, backgroundColor: Colors.ocean.primary, justifyContent: 'center', alignItems: 'center' , borderRadius: 15, padding: 8,  marginBottom: 20}}>
                <MTBoldText>
                    Sodalyt Membership!
                </MTBoldText>
                <MTMediumText style={{textAlign: 'center'}}>
                  Thank you for being an early adopter! Our gift to you is free membership for a year. 
                </MTMediumText>
                <MTMediumText style={{textAlign: 'center'}}>
                    Arriving first to the party is finally a good thing!
                </MTMediumText>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
                <MTBoldText style={{textAlign: 'center', marginBottom: 10}}>
                    With a Sodalyt Membership, you'll have access to...
                </MTBoldText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5, textAlign: 'center', marginTop: 10}}>
                        - Higher Quality Leads via our client verification process.
                    </MTLightText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5,  textAlign: 'center'}}>
                        - Sodalyt Verification to increase your market presence.
                    </MTLightText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5,  textAlign: 'center'}}>
                        - In app direct contact, improving your lead conversion.
                    </MTLightText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5,  textAlign: 'center'}}>
                        - Lead Generation Analytics
                    </MTLightText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5,  textAlign: 'center'}}>
                        - Service Analytics
                    </MTLightText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5,  textAlign: 'center'}}>
                        - Competitive Intelligence
                    </MTLightText>
                    <MTMediumText style={{marginHorizontal: 10, textAlign: 'center', marginTop: 10}}>
                        We will update you as we begin to roll out these new features. 
                    </MTMediumText>
            </View>
            <MTBoldText style={{textAlign: 'center', marginTop:10}}>
                If you'd like to be added to our mailing list, and be notified when these features are available...
            </MTBoldText>
            <TouchableOpacity style={{height: '5%',  padding: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, borderRadius: 15}} onPress={() => {
                Alert.alert('Nice!', "You've been added to our Sodalyt Premium Mailing List. We'll let you know when these features will be available to you!", [{text: 'Woo!', onPress: () => props.navigation.goBack() }])
            }}>
                <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 15}}>
                <MTMediumText style={{color: Colors.ocean.primary, textAlign: 'center'}}>
                    Click here
                </MTMediumText>
            </View>
            </TouchableOpacity>
        </View>
     );
}
 
export default GetPremiumScreen;