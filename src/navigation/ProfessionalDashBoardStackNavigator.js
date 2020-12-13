import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Colors from '../constants/Colors';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';
import EditProfInfoScreen from '../screens/EditCompanyInfoScreen'
import ProfessionalAnalyticsCategoryScreen from '../screens/ProfessionalAnalyticsCategoryScreen'

const ProfessionalDashboardStackNavigator = createStackNavigator({
   ProfessionalDashboard: {
       screen: ProfessionalDashboard,
       navigationOptions: {
        headerBackTitleVisible: false
       }
   },
   EditInfo: {
       screen: EditProfInfoScreen,
       navigationOptions: {
           headerBackTitleVisible: false,
           headerTitle: "Edit Info",
           headerTitleStyle: {
               fontFamily: 'tommy-bold',
               color: Colors.ocean.primary
           }
       }
   },
   Analytics: {
       screen: ProfessionalAnalyticsCategoryScreen,
       navigationOptions: {
        headerBackTitleVisible: false,
        headerTitle: "Analytics",
        headerTitleStyle: {
            fontFamily: 'tommy-bold',
            color: Colors.ocean.primary
        }
       }
   }
})

export default createAppContainer(ProfessionalDashboardStackNavigator)