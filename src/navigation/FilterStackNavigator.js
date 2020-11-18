import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import FilterGeneralScreen from '../screens/FilterGeneralScreen'

const FilterStackNavigator = createStackNavigator({
    FilterGeneral: {
        screen: FilterGeneralScreen
    }
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <MaterialIcons 
        name="filter-list" 
        size={24} 
        color={drawerConfig.tintColor} />
    }
})

export default createAppContainer(FilterStackNavigator)