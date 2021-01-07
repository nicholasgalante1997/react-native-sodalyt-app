import React from 'react'
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Colors from '../../constants/Colors'
import MTBoldText from './MTBoldText'
import MTMediumText from './MTMediumText'

// If you are a professional user showing up for the first time, this is what shows up before you use the app
const InitialLoadModal = (props) => {
    return (  
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: Dimensions.get('window').height * 0.32, width: Dimensions.get('window').width / 1.2, backgroundColor: Colors.ocean.primary, borderRadius: 15, justifyContent:'flex-end', alignItems: 'center'}}>
                <View style={{width: '80%', height: '10%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 3, borderBottomColor: Colors.rugged.primary, marginBottom: 10}}>
                    <MTBoldText style={{fontSize: 22, }}>
                        Welcome {props.companyName}!
                    </MTBoldText>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, marginBottom: 20}}>
                    <MTMediumText style={{textAlign: 'center'}}>
                        "Voila!  
                    </MTMediumText>
                    <MTMediumText style={{textAlign: 'center', marginTop: 5}}>
                        Here is how your show page looks.
                    </MTMediumText>
                    <MTMediumText style={{textAlign: 'center', marginTop: 3}}>
                      You can edit any time under My Profile.
                    </MTMediumText>
                    <MTMediumText style={{textAlign: 'center', marginVertical: 7, marginHorizontal: 8}}>
                        To get more clicks, sign up for a Sodalyt Membership. Click on the Verified Icon at the top right corner of your screen to learn more.
                    </MTMediumText>
                    <MTMediumText style={{textAlign: 'center', marginTop: 3}}>
                        When you are ready to publish your show page, just tap the orange Start Matching Me Now button below. 
                    </MTMediumText>
                </View>
                <View style={{width: '100%', height: '15%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 15, borderColor: 'black', backgroundColor: Colors.rugged.primary, position: 'relative', bottom: 0 }}>
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