import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import Modal from 'react-native-modal'

import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'
import MTBoldText from '../components/custom/MTBoldText'
import MBLightText from '../components/custom/MTLightText'
import Colors from '../constants/Colors'
import CustomAlert from '../components/custom/CustomDevelopmentAlert'
import Input from '../components/custom/Input'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions/actionCreator'

const EmailGatherScreen = (props) => {

    const [modalVisible, setModalVisible] = useState(false)

    const dispatch = useDispatch();

    const isProfessional = props.navigation.getParam('isProfessional')

    // We use isProfessional based on different screens they entered
    // accountType keeps track of whether person is professional
    const demoUserInfo = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        accountType: isProfessional ? "professional" : "customer"
    }

    const [userInfo, setUserInfo] = useState(demoUserInfo)

    const handleEmailInput = (inputText) => {
        setUserInfo(currentState => ({
            ...currentState, email: inputText
        }))
    }

    const handlePasswordInput = (inputText) => {
        setUserInfo(currentState => ({
            ...currentState, password: inputText
        }))
    }

    const handleFirstNameInput = (inputText) => {
        setUserInfo(currentState => ({
            ...currentState, firstName: inputText
        }))
    }

    const handleLastNameInput = (inputText) => {
        setUserInfo(currentState => ({
            ...currentState, lastName: inputText
        }))
    }

    const checkValidity = () => {
        if (userInfo.email.includes(' ')){
            return false
        } else if (!userInfo.email.includes('@')){
            return false
        } else if (!userInfo.email.includes('.')){
            return false
        } else if (userInfo.password.length < 4){
            return false 
        } else if (userInfo.firstName === '' || userInfo.firstName.trim() === ''){
            return false
        } else if (userInfo.lastName === '' || userInfo.firstName.trim() === ''){
            return false
        } else {
            return true
        }
    }

    // Handles the navigation 
    // If the validity is good, then we handle going to the next page
    const pushToStoryPage = () => {
        dispatch(actions.setCurrentUser(userInfo))
        props.navigation.navigate({routeName: 'StoryCardPage'})
    }

    // If the validity is not met, receive the alert
    const checkValidityAndPushtoStoryPage = () => {
        if (checkValidity()){
        pushToStoryPage()
        } else {
            // style: 'default' makes the button turn off the alert by default. Only when using Alert.alert
            Alert.alert(
                "Hey there", "Emails can't contain spaces and they must be valid email addresses. Passwords must be at least 4 characters.", [{text: "Dismiss", style: 'default'}]
            )
        }
    }

    const pushToProfessionalSurveys = () => {
        dispatch(actions.setCurrentUser(userInfo))
        props.navigation.navigate({routeName: 'ProfessionalSurveyScreenOne'})
    }

    const checkValidityAndPushToProfSurveys = () => {
        if (checkValidity()){
            pushToProfessionalSurveys()
        } else {
            Alert.alert(
                "Hey there", "Emails can't contain spaces and they must be valid email addresses. Passwords must be at least 4 characters.", [{text: "Dismiss", style: 'default'}]
            )
        }
    }

    // const pushToNewUserEmailScreen = () => {
    //     props.navigation.navigate({routeName: 'NewUserEmailSignUp'})
    // }
    
    // Create a function to change state hook
    const modalOn = () => {
        setModalVisible(true)
    }

    const modalOff = () => {
        setModalVisible(false)
    }



    return ( 
        // Everything without keyboard dismalls would instead be TouchableOpacity
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <View style={styles.container}>
            <Modal isVisible={modalVisible}>
                <CustomAlert onPress={modalOff} />
            </Modal>
          {  isProfessional ?  
          <View style={styles.banner}>
                <MTBoldText style={styles.topBannerText}>Welcome to Sodalyt, where we send you customers that are right for you.</MTBoldText>
                <MTBoldText style={topBannerInstructionsText}>To get your name out there, we are going to ask you to login, complete a form, and play a 3 minute game. </MTBoldText>
            </View>
           : <View style={styles.banner}>
                <MTBoldText>To find the professional just right for you, we will use AI power to match you on personality, culture, and service. It will take about 3 minutes total.</MTBoldText>
                {/* Used to create extra space on screen */}
                <MTBoldText></MTBoldText>
            </View>
           
        }
            <View style={styles.signInContainer}>
    { isProfessional ? null :  <MTBoldText>Let us know you're a real person by signing in.</MTBoldText> }
                <View style={styles.inputFirstNameContainer}>
                <Input 
                style={{fontFamily: 'tommy-reg', borderBottomWidth: 0, width: Dimensions.get('window').width * 0.65}} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.firstName}
                onChangeText={handleFirstNameInput}
                placeholder="First Name"
                placeholderTextColor='#C7CBCE'
                />
            </View>
            <View style={styles.inputContainer}>
            {/* value of input will tell me which input handles which registration form */}
                <Input 
                style={{fontFamily: 'tommy-reg', borderBottomWidth: 0, width: Dimensions.get('window').width * 0.65}} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.lastName}
                onChangeText={handleLastNameInput}
                placeholder="Last Name"
              placeholderTextColor='#C7CBCE'
                />
            </View>
            <View style={styles.inputContainer}>
                <Input 
                style={{fontFamily: 'tommy-reg', borderBottomWidth: 0, width: Dimensions.get('window').width * 0.65}} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.email}
                onChangeText={handleEmailInput}
                placeholder="Email"
                placeholderTextColor='#C7CBCE'
                />
            </View>
             <View style={styles.inputContainer}>
                <Input 
               style={{fontFamily: 'tommy-reg', borderBottomWidth: 0, width: Dimensions.get('window').width * 0.65}} 
                secureTextEntry={true}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.password}
                onChangeText={handlePasswordInput}
                placeholder="Password"
                placeholderTextColor='#C7CBCE'
                />
            </View>
            </View>
            <View style={styles.lowerContent}>
                <MTBoldText style={styles.textSmall}>
                    One tap sign in coming soon!
                </MTBoldText>
                {/* click facebook/google/insta icons to show an alert via modal
                click the thumb to remove the modal. Modal works like an alert */}
                <View style={styles.buttonHolder}>
                    <AntDesign 
                    name="facebook-square" 
                    size={48} 
                    color="white" 
                    style={styles.icon} 
                    onPress={modalOn} />
                    <AntDesign 
                    name="google" 
                    size={48} 
                    color="white" 
                    style={styles.icon} 
                    onPress={modalOn} />
                    <AntDesign 
                    name="instagram" 
                    size={48} 
                    color="white" 
                    style={styles.icon} 
                    onPress={modalOn} />
                </View>
            </View>
            {/* Where we send them next. Depending on if professional or customer */}
            {/* 2 lines below for button that says start */}
            <TouchableWithoutFeedback onPress={isProfessional ? checkValidityAndPushToProfSurveys : checkValidityAndPushtoStoryPage}>
                <View style={{alignItems: 'center'}}>
            {/* Holds image */}
            <View style={styles.imageContainer}>
            <Image 
                source={require('../images/circle-logo.png')} 
                style={styles.image} 
                resizeMode='cover' 
                />
            </View>
                <MTBoldText>Start</MTBoldText>
            </View>
            </TouchableWithoutFeedback>
        </View>
        </TouchableWithoutFeedback>
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
        paddingBottom: Dimensions.get('window').height / 30,
        paddingHorizontal: 10
    },
    imageContainer: {
        borderRadius: 50,
        width: 100,
        height: 100,
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
        alignItems: 'center',
        marginTop: 30
    },
    profTextContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginHorizontal: 8
    },
    returningUserTab: {
        paddingTop: 20
    },
    arrowHolder: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    topBannerText: {
        textAlign: 'center',
        marginHorizontal: Dimensions.get('window').width / 6
    },
    topBannerInstructionsText: {
        textAlign: 'center', 
        marginHorizontal: Dimensions.get('window').width / 12, 
        marginTop: 20
    }, 
    inputFirstNameContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 3, 
        marginTop: 10
    },
    inputContainer: {
    backgroundColor: 'white', 
    borderRadius: 15, 
    padding: 3, 
    marginTop: 10
    }
})
 
export default EmailGatherScreen;