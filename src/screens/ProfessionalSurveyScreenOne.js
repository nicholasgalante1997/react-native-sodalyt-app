import React from 'react';
import {View, StyleSheet} from 'react-native'
import {CheckBox} from 'react-native-elements'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors';

const ProfessionalSurveyScreenOne = (props) => {
    return ( 
        <View style={styles.screen}>
            <View style={styles.banner}>
                <MTBoldText style={{color: Colors.ocean.primary}}>
                    Professional Surveys Screen One
                </MTBoldText>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    }
})
 
export default ProfessionalSurveyScreenOne;