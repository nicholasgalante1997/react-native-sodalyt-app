import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Platform, Alert} from 'react-native'
import Colors from '../constants/Colors'
import MTMediumText from '../components/custom/MTMediumText'
import MTBoldText from '../components/custom/MTBoldText'
import MTLightText from '../components/custom/MTLightText'

const GetPremiumScreen = (props) => {
    return ( 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.rugged.primary}}>
            <View style={{height: '10%', width: Dimensions.get('window').width * 0.9, backgroundColor: Colors.ocean.primary, justifyContent: 'center', alignItems: 'center' , borderRadius: 15, padding: 8,  marginBottom: 20}}>
                <MTBoldText>
                    Sodalyt Premium!
                </MTBoldText>
                <MTMediumText style={{textAlign: 'center'}}>
                    If you're happy with the growth of your customer base, why not try out out premium model and get even more perks?
                </MTMediumText>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
                <MTBoldText style={{textAlign: 'center', marginBottom: 10}}>
                    Right now, we're offering Sodalyt Premium features to all of our Beta users, as a thank you for sticking with us from the beginning.
                </MTBoldText>
                <MTBoldText style={{textAlign: 'center', marginBottom: 10}}>
                    After the launch of Sodalyt Premium, you'll have access to...
                </MTBoldText>
                <MTMediumText style={{marginHorizontal: 10, textAlign: 'center'}}>
                    1. Inside access to Sodalyt Analytics. With Sodalyt Analytics, you'll be among the first to have access to Sodalyt insider information. You'll be the first to know on...
                    </MTMediumText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5, textAlign: 'center', marginTop: 10}}>
                        - Service Specific Data on what's working in your market. 
                    </MTLightText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5,  textAlign: 'center'}}>
                        - Analytics on your profile page's visits and conversions, see what's working and what's not.
                    </MTLightText>
                    <MTLightText style={{marginLeft: 15,  marginRight: 5,  textAlign: 'center'}}>
                        - Analytics on what Sodalyt users are asking for next!
                    </MTLightText>
                    <MTMediumText style={{marginHorizontal: 10, textAlign: 'center', marginTop: 10}}>
                    2. In App calendar scheduling and messaging with clients.
                    </MTMediumText>
                    <MTMediumText style={{marginHorizontal: 10, textAlign: 'center', marginTop: 10}}>
                    3. Prime Marketing Placement and advertisement placing within our feed.
                    </MTMediumText>
                    <MTBoldText style={{marginTop: 20}}>
                        And so much more!
                    </MTBoldText>
            </View>
            <TouchableOpacity style={{height: '5%', width: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, borderRadius: 15}} onPress={() => {
                Alert.alert('Nice!', "You've been added to our Sodalyt Premium Mailing List. We'll let you know when these features will be available to you!", [{text: 'Woo!', onPress: () => props.navigation.goBack() }])
            }}>
                <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 15}}>
                <MTMediumText style={{color: Colors.ocean.primary, textAlign: 'center'}}>
                    Click here if you'd like to be added to our mailing list when Sodalyt Premium is available!
                </MTMediumText>
            </View>
            </TouchableOpacity>
        </View>
     );
}
 
export default GetPremiumScreen;