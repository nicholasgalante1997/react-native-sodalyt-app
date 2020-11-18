import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import ProfileHomeScreen from '../screens/ProfileHomeScreen'

const ProfileNavigator = createStackNavigator({
    ProfileHome: {
        screen: ProfileHomeScreen
    }
})

export default createAppContainer(ProfileNavigator)
