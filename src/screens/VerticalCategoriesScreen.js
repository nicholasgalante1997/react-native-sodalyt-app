import React from 'react';
import {View, StyleSheet, FlatList, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import MTBoldText from '../components/custom/MTBoldText'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'

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
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title="Menu" 
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu' } 
                onPress={() => {
                    console.log('click')
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        )
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