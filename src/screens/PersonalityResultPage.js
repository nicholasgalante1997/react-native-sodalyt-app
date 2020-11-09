import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/Colors'

const PersonalityResultPage = (props) => {
    const displayType = props.navigation.getParam('personalityResult')
    return ( 
        <View>
            <Text>Personality Result Page</Text>
            <Text>{displayType}</Text>
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