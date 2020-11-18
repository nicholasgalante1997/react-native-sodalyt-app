import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import VerticalCategoriesScreen from '../screens/VerticalCategoriesScreen'
import { FontAwesome5 } from '@expo/vector-icons'; 

const ExploreContentNavigator = createStackNavigator({
    ServicesGeneralPage: {
        screen: VerticalCategoriesScreen
    }
})

export default createAppContainer(ExploreContentNavigator)