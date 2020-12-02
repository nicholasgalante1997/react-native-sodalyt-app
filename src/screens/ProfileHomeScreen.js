import React from 'react';
import {View, StyleSheet} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'
import Colors from '../constants/Colors'

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
        headerTitle: 'Home',
        headerTitleStyle: {
            fontFamily: 'tommy-bold',
            color: Colors.rugged.primary
        },
        headerLeft: () => null
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