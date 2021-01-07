import React from 'react';
import {Platform} from 'react-native'
// Import from package installed 
import {HeaderButton} from 'react-navigation-header-buttons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors'

//custom Header when moving from another screen. 
//Can pass as a prop almost any function to this prop
//Child of CustomHeaderButtons ALWAYS, as HeaderButton that is inserted to help 
//Navigate to another screen when pressed
const CustomHeaderButton = (props) => {
    // return their header buttons, destructure all props, only takes 
    // in one Icon family, went with MaterialCommunityIcons (chose this b/c widest options)
    // Set size which fits well for a header at top 
    // Headers on top, do a quick check to see which device we are on. android is white, ios is Sodalyt blue color
    return (  
        <HeaderButton 
        {...props} 
        IconComponent={MaterialCommunityIcons} 
        iconSize={24} 
        color={Platform.OS === 'android' ?  'white' : Colors.ocean.primary}
        />
    );
}
 
export default CustomHeaderButton;