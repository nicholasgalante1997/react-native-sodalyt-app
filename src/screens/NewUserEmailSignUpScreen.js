import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors'
import MTBoldText from '../components/custom/MTBoldText'
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../store/actions/actionCreator'

const demoUserInfo = {
    email: "",
    passsword: ""
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
            ...currentState, passsword: inputText
        }))
    }

    const pushToStoryPage = () => {
        dispatch(setCurrentUser(userInfo))
        props.navigation.navigate({routeName: 'StoryCardPage'})
    }

    return ( 
        <View style={styles.screen}>
            <View style={styles.labelHolder}>
                <MTBoldText>email</MTBoldText>
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
                <MTBoldText>password</MTBoldText>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={userInfo.passsword}
                onChangeText={handlePasswordInput}
                />
            </View>
            <AntDesign 
                    name="arrowright" 
                    size={48} 
                    color="white" 
                    onPress={pushToStoryPage} />
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