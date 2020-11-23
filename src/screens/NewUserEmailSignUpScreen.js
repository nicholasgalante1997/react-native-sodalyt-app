import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Alert, ScrollView, Keyboard, KeyboardAvoidingView} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors'
import MTBoldText from '../components/custom/MTBoldText'
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../store/actions/actionCreator'

const demoUserInfo = {
    email: "demoNick@example.",
    password: "password",
    firstName: "demo",
    lastName: "nick"
}

const NewUserEmailSignUpScreen = (props) => {

    const dispatch = useDispatch();

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

    const pushToStoryPage = () => {
        dispatch(setCurrentUser(userInfo))
        props.navigation.navigate({routeName: 'StoryCardPage'})
    }

    const checkValidityAndPushtoStoryPage = () => {
        if (checkValidity()){
        pushToStoryPage()
        } else {
            Alert.alert(
                "Hey there", "Emails can't contain spaces and they must be valid email addresses. Passwords must be at least 4 characters.", [{text: "Dismiss", style: 'default'}]
            )
        }
    }
    
    return ( 
        <View style={{backgroundColor: Colors.ocean.primary, flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1, backgroundColor: Colors.ocean.primary}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <MTBoldText style={{fontSize: 48, textAlign: 'center', marginBottom: 20}}>Join Us!</MTBoldText>
            <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: '35%', width: '60%', borderRadius: 15}}>
             <View style={styles.labelHolder}>
                <MTBoldText style={{color: 'black'}}>First Name</MTBoldText>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.firstName}
                onChangeText={handleFirstNameInput}
                />
            </View>
            <View style={styles.labelHolder}>
                <MTBoldText style={{color: 'black'}}>Last Name</MTBoldText>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.lastName}
                onChangeText={handleLastNameInput}
                />
            </View>
            <View style={styles.labelHolder}>
                <MTBoldText style={{color: 'black'}}>Email</MTBoldText>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.email}
                onChangeText={handleEmailInput}
                />
            </View>
            {/* <View style={styles.labelHolder}>
                <MTBoldText style={{color: 'black'}}>Password</MTBoldText>
                <Input 
                style={styles.input} 
                secureTextEntry={true}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.password}
                onChangeText={handlePasswordInput}
                />
            </View> */}
        </View>
        <View style={styles.homeIcon}>
        <AntDesign 
                    name="arrowright" 
                    size={48} 
                    color="gray" 
                    onPress={checkValidityAndPushtoStoryPage} />
            </View>
        </View>
        </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        // marginTop: '30%',
        alignItems: 'center',
        backgroundColor: Colors.ocean.primary
    },
    input: {
        width: Dimensions.get('window').width / 3,
        maxWidth: Dimensions.get('window').width / 2 ,
        color: 'black',
        fontFamily: 'tommy-reg'
    },
    homeIcon: {
        height: 56,
        width: 56,
        borderRadius: 28,
        borderColor: 'gray',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 30
    }
})
 
export default NewUserEmailSignUpScreen;