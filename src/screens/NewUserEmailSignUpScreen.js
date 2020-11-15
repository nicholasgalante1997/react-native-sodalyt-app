import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Alert} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors'
import MTBoldText from '../components/custom/MTBoldText'
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../store/actions/actionCreator'

const demoUserInfo = {
    email: "",
    password: ""
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

    const checkValidity = () => {
        if (userInfo.email.includes(' ')){
            return false
        } else if (userInfo.password.length < 4){
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
                "Hey you", "Emails can't contain spaces, and/or passwords must be at least 4 characters.", [{text: "Ok, I won't do it again.", style: 'default'}]
            )
        }
    }
    
    return ( 
        <View style={styles.screen}>
            <View style={styles.labelHolder}>
                <MTBoldText>Email</MTBoldText>
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
            <View style={styles.labelHolder}>
                <MTBoldText>Password</MTBoldText>
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
            </View>
            <AntDesign 
                    name="arrowright" 
                    size={48} 
                    color="white" 
                    onPress={checkValidityAndPushtoStoryPage} />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.ocean.primary
    },
    input: {
        width: Dimensions.get('window').width / 3,
        maxWidth: Dimensions.get('window').width / 2 ,
        color: 'white',
        fontFamily: 'tommy-reg'
    }
})
 
export default NewUserEmailSignUpScreen;