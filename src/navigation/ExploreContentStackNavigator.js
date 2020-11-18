import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import VerticalCategoriesScreen from '../screens/VerticalCategoriesScreen'
import SpecificServicesScreen from '../screens/SpecificServicesPage'

const ExploreContentNavigator = createStackNavigator({
    ServicesGeneralPage: {
        screen: VerticalCategoriesScreen
    },
    SpecificServicesPage: {
        screen: SpecificServicesScreen
    }
})

export default createAppContainer(ExploreContentNavigator)