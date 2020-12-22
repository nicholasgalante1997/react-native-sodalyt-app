import ProfessionalDashboardStackNavigator from './ProfessionalDashBoardStackNavigator'
import ProfProfileStackNavigator from './ProfessionalProfileStackNavigator'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native'
import Colors from '../constants/Colors'

const TabScreenConfig = {
    Profile: {
        screen:  ProfessionalDashboardStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='grav' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    },
    DashBoard: {
        screen: ProfProfileStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='wpexplorer' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    }
}

const ProfessionalTabsContentNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    TabScreenConfig, {
    shifting: true,
    navigationOptions: {
        drawerIcon: drawerConfig => <FontAwesome5 
        name="globe-americas" 
        size={24} 
        color={drawerConfig.tintColor} />
    }
}) : 
createBottomTabNavigator(TabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'tommy-reg'
        },
        activeTintColor: Colors.ocean.primary,
        labelPosition: 'below-icon'
    },
    navigationOptions: {
        drawerIcon: drawerConfig => <FontAwesome5 
        name="globe-americas" 
        size={24} 
        color={drawerConfig.tintColor} />
    }
})

export default createAppContainer(ProfessionalTabsContentNavigator)