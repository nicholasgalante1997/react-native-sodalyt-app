import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Colors from '../constants/Colors'
import DATA from '../constants/data'
import StoryTile from '../components/story/StoryTile'
import MTRegularText from '../components/custom/MTRegText'

const StoryCardScreen = (props) => {
    console.log(DATA.stories.length)
    return ( 
        <View style={styles.container}>
            <MTRegularText>
                Story Card Page
            </MTRegularText>
        </View>
     );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.ocean.primary
    }
})
 
export default StoryCardScreen;