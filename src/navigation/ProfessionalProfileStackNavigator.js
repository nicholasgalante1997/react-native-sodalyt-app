import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import ProfProfileHomeScreen from '../screens/ProfProfileHomeScreen'

const ProfProfileNavigator = createStackNavigator({
    ProfileHome: {
        screen: ProfProfileHomeScreen
    }
})

export default createAppContainer(ProfProfileNavigator)