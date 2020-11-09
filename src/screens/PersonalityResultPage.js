import React from 'react';
import {View, StyleSheet} from 'react-native'
import MBTextBold from '../components/custom'
import Colors from '../components/custom/MTBoldText'

const PersonalityResultPage = (props) => {
    const displayType = props.navigation.getParam('personalityResult')
    return ( 
        <View style={styles.screen}>
            <MTBoldText>Personality Result Page</MTBoldText>
            <MTBoldText>{displayType}</MTBoldText>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default PersonalityResultPage;