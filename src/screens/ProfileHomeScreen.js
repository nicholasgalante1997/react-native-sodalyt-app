import React from 'react';
import {View, StyleSheet} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'

const ProfileHomeScreen = (props) => {
    return ( 
        <View style={styles.screen}>
            <MTBoldText>
                Profile Home Screen
            </MTBoldText>
        </View>
     );
}

ProfileHomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Home'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#888'
    }
})
 
export default ProfileHomeScreen