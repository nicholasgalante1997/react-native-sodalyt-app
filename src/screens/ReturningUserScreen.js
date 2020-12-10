import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors'
import {CheckBox} from 'react-native-elements';

const ReturningUserScreen = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: Colors.ocean.primary, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: Dimensions.get('window').height / 3, width: Dimensions.get('window').width / 2, backgroundColor: 'white'}}>
                
            </View>
        </View>
      );
}
 
export default ReturningUserScreen;
