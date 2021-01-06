import ProfessionalDashboardStackNavigator from './ProfessionalDashBoardStackNavigator'
import ProfProfileStackNavigator from './ProfessionalProfileStackNavigator'
//For Android
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
//For iOS
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native'
import Colors from '../constants/Colors'

// These main navigators aren't screen, they send me to screens
//This is a tab navigator. Not used as much as stack navigator. 
//So each stack of the tab is its own little thing to display 
// Every time displaying more than one screen, using a stack navigator 
const TabScreenConfig = {
    Profile: {
        //Each of these names are reflected on the bottom. Profile and Dashboard are words on the bottom tabs
        //We use a stack navigator for the screen for this tab 
        screen:  ProfessionalDashboardStackNavigator,
        navigationOptions: {
            //Icon being used, important from @exp/vector-icons to be an icon for tabs
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='grav' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    },
    DashBoard: {
        //We use a stack navigator for the Dashboard for the screen of this tab 
        screen: ProfProfileStackNavigator,
        navigationOptions: {
            //Icon being used for that tab.
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='wpexplorer' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    }
}

//Terniary to see what device user is on.
// If on iOS, use normal tabNavigator
const ProfessionalTabsContentNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    TabScreenConfig, {
        //First argument always TabScreenConfig
    shifting: true,
    //for android, set shifting for true so they light up when selected 
    navigationOptions: {
        //Set a drawerIcon. Do so b/c at one point we use the drawer navigator. 
        // When we use the drawerIcon or drawer navigator, these are the icons weve chosen to select them
        drawerIcon: drawerConfig => <FontAwesome5 
        name="globe-americas" 
        size={24} 
        color={drawerConfig.tintColor} />
    }
}) : 
createBottomTabNavigator(TabScreenConfig, {
    tabBarOptions: {
        //iOS must use tabBarOPtions. This object is where we do styling for bottom tabs 
        //Using fonts from it 
        labelStyle: {
            fontFamily: 'tommy-reg'
        },
        activeTintColor: Colors.ocean.primary,
        //This gets active tab to highlight instead of shifting
        labelPosition: 'below-icon'
        //position weve chosen below the icon
    },
    navigationOptions: {
        drawerIcon: drawerConfig => <FontAwesome5 
        name="globe-americas" 
        size={24} 
        color={drawerConfig.tintColor} />
    }
})

export default createAppContainer(ProfessionalTabsContentNavigator)