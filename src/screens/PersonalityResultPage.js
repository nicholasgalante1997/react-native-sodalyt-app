import React from 'react';
import {View, StyleSheet} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors'

const PersonalityResultPage = (props) => {
    const displayType = props.navigation.getParam('personalityResult')
    return ( 
        <View style={styles.screen}>
            <MTBoldText style={styles.text}>Personality Result Page</MTBoldText>
            <MTBoldText style={styles.text}>{displayType}</MTBoldText>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black'
    }
})
 
export default PersonalityResultPage;