import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView, Alert} from 'react-native'
import {CheckBox} from 'react-native-elements'
import MTBoldText from '../components/custom/MTBoldText'
import MTMediumText from '../components/custom/MTMediumText'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux'

import * as actions from '../store/actions/actionCreator'

// General company information
const ProfessionalSurveyScreenOne = (props) => {

    const [companyName, setCompanyName] = useState("")
    const [companyAddress, setCompanyAddress] = useState("")
    const [compState, setCompState] = useState("")
    const [companyZipCode, setCompanyZipCode] = useState("")
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState('')
    const [companyWebsite, setCompanyWebsite] = useState("")
    const [companyProfilePhotoLink, setCompanyProfilePhotoLink] = useState("")
    const [companyDesc, setCompanyDesc] = useState("")

    const dispatch = useDispatch();

    const dispatchObject = {
        companyName: companyName,
        companyAddress: companyAddress,
        companyZipCode: companyZipCode,
        companyPhoneNumber: companyPhoneNumber,
        companyWebsite: companyWebsite,
        companyProfilePhotoLink: companyProfilePhotoLink,
        companyDescription: companyDesc
    }


    const onTextChange = (text) => {
        var cleaned = ('' + text).replace(/\D/g, '')
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            //var used to assign number
            var intlCode = (match[1] ? '+1 ' : ''),
                number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    
            setCompanyPhoneNumber(number) 
         
       
            return;
        }
    
        setCompanyPhoneNumber(text)
      
    }
    
    // Make sure all values are filled in to the way we like them  
    const verifyObjectValues = () => {
        if (companyName.length < 2){
            return false
        } else if (companyName.length > 50){
            return false
        } else if (companyAddress.length < 6){
            return false
        } else if (companyZipCode.length !== 5){
            return false
        } else if(companyPhoneNumber.length !== 14) {
            return false
        } else if (companyWebsite.length < 6){
            return false 
        } else if (companyProfilePhotoLink.length < 6){
            return false
        } else {
            return true
        }
    }

    // Check if everything is good
    // If not, alert that incorrect input
    // TO DO: 
    // Can adjust to specifics of each input field if filled incorrectly
    const verifyAndDispatchObject = () => {
        if (verifyObjectValues()){
            dispatch(actions.setNewProfInfo(dispatchObject))
            props.navigation.navigate('ProfessionalSurveyScreenTwo')
        } else {
            Alert.alert('Wait!', "It appears one or more of your sections have been filled in incorrectly. Double check your info before moving to the next form.", [{style: 'default', text: 'Ok'}])
        }
    }

    // KeyboardAvoidingView for Android
    // TouchableWithoutFeedback for iOS
    return (
        <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
        <TouchableWithoutFeedback style={{alignItems: 'center'}} onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
            <View style={styles.banner}>
                <MTBoldText style={{color: Colors.ocean.primary, fontSize: 24}}>
                    Tell us about yourself!
                </MTBoldText>
                <MTMediumText>
                    Let's start off with a little information about your company. Some of this information will be available to customers later on, but we'll let you edit what's visible before you finish registering.
                </MTMediumText>
            </View>
            {/* Where all info is actually gathered */}
            <View style={styles.card}>
                <ScrollView>
                <MTMediumText style={{color: 'black'}}>
                    Company Name*
                </MTMediumText>
                {/* Control the input field with value and onChangeText */}
                <Input 
                style={{
                        width: '90%',
                        fontFamily: 'tommy-light'
                    }}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={companyName}
                onChangeText={(text) => setCompanyName(text)}
                placeholder="The Best Company Inc."
                placeholderTextColor='#C7CBCE'
                />
                 <MTMediumText style={{color: 'black'}}>
                    Company Address*
                </MTMediumText>
                <Input 
                style={{
                        width: '90%',
                        fontFamily: 'tommy-light'
                    }}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={companyAddress}
                onChangeText={(text) => setCompanyAddress(text)}
                placeholder="123 Best Street"
                placeholderTextColor='#C7CBCE'
                />
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <MTMediumText style={{color: 'black', marginRight: 5}}>
                    State*
                </MTMediumText>
                <Input 
                style={{
                        width: '10%',
                        fontFamily: 'tommy-light'
                    }}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={compState}
                onChangeText={(text) => setCompState(text)}
                placeholder="TX"
                placeholderTextColor='#C7CBCE'
                />
                {/* Special circumstance, set to numeric to set validity check before hand  */}
                <MTMediumText style={{color: 'black', marginRight: 5}}>
                    Zip Code*
                </MTMediumText>
                <Input 
                style={{
                        width: '30%',
                        fontFamily: 'tommy-light',
                        textAlign: 'center'
                    }}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="numeric" 
                value={companyZipCode}
                onChangeText={(text) => setCompanyZipCode(text)}
                placeholder="00000"
                placeholderTextColor='#C7CBCE'
                />
                </View>
                <MTMediumText style={{color: 'black'}}>
                    Phone Number*
                </MTMediumText>
                <Input 
                    onChangeText={(text) => onTextChange(text) }
                    value={companyPhoneNumber}
                    textContentType='telephoneNumber' 
                    dataDetectorTypes='phoneNumber' 
                    keyboardType='phone-pad' 
                    maxLength={14}
                />
               
                <MTMediumText style={{color: 'black'}}>
                    Company Website*
                </MTMediumText>
                {/* Will work with Marco on setting up database to receive, host, store pictures
                To do: Can host photos like you would online but from our own database 
                He'll have a url/cdn for every photo and i'll be fetching that to attach to users
                Expo permissions allows me to handle anything I want to get from the phone that isnt in 
                the app/i.e. photos  */}
                <Input 
                style={{
                        width: '90%',
                        fontFamily: 'tommy-light'
                    }}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={companyWebsite}
                onChangeText={(text) => setCompanyWebsite(text)}
                placeholder="www.thebestcompany.com"
                placeholderTextColor='#C7CBCE'
                />
                  <MTMediumText style={{color: 'black'}}>
                    Company Profile Photo URL*
                </MTMediumText>
                <Input 
                style={{
                        width: '90%',
                        fontFamily: 'tommy-light'
                    }}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={companyProfilePhotoLink}
                onChangeText={(text) => setCompanyProfilePhotoLink(text)}
                placeholder="https://images.unsplash.com/photo-1607637433813-9e3c41861836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
                placeholderTextColor='#C7CBCE'
                />
                  <MTMediumText style={{color: 'black'}}>
                    Company Blurb*
                </MTMediumText>
                <Input 
                style={{
                        width: '90%',
                        fontFamily: 'tommy-light'
                    }}
                ellipsizeMode="tail"
                blurOnSubmit 
                autoCapitalize="none" 
                multiline={true}
                editable={true}
                autoCorrect={false} 
                keyboardType="default" 
                value={companyDesc}
                onChangeText={(text) => setCompanyDesc(text)}
                placeholder="A little about you..."
                placeholderTextColor='#C7CBCE'
                />
                <View style={{height: 40, width: "100%"}}>
                </View>
            </ScrollView>
            </View>
            {/* Sending our current state to redux state where its going to hold it and send to the next screen, ProfessionalSurveyScreen2 */}
            <View style={{height: 150, width: Dimensions.get('window').width, justifyContent: 'center', alignItems:'center'}}> 
            <TouchableWithoutFeedback onPress={verifyAndDispatchObject} style={{backgroundColor: Colors.ocean.secondary, height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{backgroundColor: Colors.ocean.secondary, height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <MTBoldText>
                            Next
                        </MTBoldText>
                    </View> 
                     </TouchableWithoutFeedback>
            </View>
        </View>   
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    banner: {
        // marginTop: 20,
        alignItems: 'flex-start',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height / 7,
        backgroundColor: Colors.rugged.primary,
        padding: 10,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    },
    card: {
        marginTop: 40,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height / 2.1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10
    }
})
 
export default ProfessionalSurveyScreenOne;