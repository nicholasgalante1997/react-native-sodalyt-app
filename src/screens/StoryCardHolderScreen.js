import React from 'react';
import {View, StyleSheet} from 'react-native'

import Colors from '../constants/Colors'

import StoryTile from '../components/story/StoryTile'
import MTRegularText from '../components/custom/MTRegText'

import {useSelector} from 'react-redux'

const StoryCardScreen = (props) => {

    const currentUser = useSelector(state => state.currentUser)
    console.log(currentUser)

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