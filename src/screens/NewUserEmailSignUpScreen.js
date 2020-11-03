import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors'
import MTBoldText from '../components/custom/MTBoldText'

const NewUserEmailSignUpScreen = (props) => {
    return ( 
        <View style={styles.screen}>
            <View style={styles.labelHolder}>
                <MTBoldText>email</MTBoldText>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" />
            </View>
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
        width: Dimensions.get('window').width / 3
    }
})
 
export default NewUserEmailSignUpScreen;