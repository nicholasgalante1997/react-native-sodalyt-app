import ExploreContentStackNavigator from './ExploreContentStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native'
import Colors from '../constants/Colors'

const TabScreenConfig = {
    Explore: {
        screen: ExploreContentStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='wpexplorer' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    },
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='grav' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    }
}

const ExploreTabsContentNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    TabScreenConfig, {
    activeColor: Colors.ocean.primary,
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

export default createAppContainer(ExploreTabsContentNavigator)