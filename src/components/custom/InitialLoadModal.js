import React from 'react'
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Colors from '../../constants/Colors'
import MTBoldText from './MTBoldText'
import MTMediumText from './MTMediumText'

const InitialLoadModal = (props) => {
    return (  
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: Dimensions.get('window').height * 0.47, width: Dimensions.get('window').width / 1.2, backgroundColor: Colors.ocean.primary, borderRadius: 15, justifyContent:'flex-end', alignItems: 'center'}}>
                <View style={{width: '80%', height: '10%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 3, borderBottomColor: Colors.rugged.primary, marginBottom: 10}}>
                    <MTBoldText style={{fontSize: 22, }}>
                        Welcome {props.companyName}!
                    </MTBoldText>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, marginBottom: 20}}>
                    <MTMediumText style={{textAlign: 'center'}}>
                    "Voila!  Here is what customers will see when they click on your profile.  To get more clicks, sign up for a Sodalyt Membership. You can do this by clicking the check in the top right corner of your screen.
                    </MTMediumText>
                    <MTMediumText style={{textAlign: 'center', marginTop: 5}}>
                        This is how your page will appear to customer users. You can edit this at any time with the orange settings icon in the bottom right corner of the screen.
                    </MTMediumText>
                    <MTMediumText style={{textAlign: 'center', marginTop: 5}}>
                        You can also access your user analytics by selecting the graph icon in the top left corner of your screen. Here you'll be able to find different types of information about the breakdown of your customers, and help yourself better your customer relationships.
                    </MTMediumText>
                    <MTMediumText style={{textAlign: 'center', marginTop: 5}}>
                        When you're ready to get started, just tap "Start Matching Me Now" below.
                    </MTMediumText>
                </View>
                <View style={{width: '100%', height: '10%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 15, borderColor: 'black', backgroundColor: 'white', position: 'relative', bottom: 0 }}>
                        <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={props.onPress}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <MTBoldText style={{color: Colors.ocean.primary}}>
                                    Start Matching Me Now
                                </MTBoldText>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
 
export default InitialLoadModal;