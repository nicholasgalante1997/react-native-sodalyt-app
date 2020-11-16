import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
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
        headerTitle: 'Services'
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