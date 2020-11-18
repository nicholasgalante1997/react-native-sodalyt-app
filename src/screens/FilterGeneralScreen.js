import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'

const FilterGeneralScreen = (props) => {
    return (  
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <MTBoldText style={{color: 'black'}}>Filter General Screen</MTBoldText>
        </View>
    );
}

FilterGeneralScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Filters',
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
}}
 
export default FilterGeneralScreen;