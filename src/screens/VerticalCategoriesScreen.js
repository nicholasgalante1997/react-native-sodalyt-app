import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import MTBoldText from '../components/custom/MTBoldText'

const VerticalCategoriesScreen = (props) => {
    return ( 
        <View style={styles.screen}>
                <MTBoldText>Vertical Categories Screen</MTBoldText>
        </View>
     );
}

VerticalCategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Services',
        headerLeft: () => {
            return <Ionicons name="ios-menu" color="black" size={24} />
        }
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
 
export default VerticalCategoriesScreen;