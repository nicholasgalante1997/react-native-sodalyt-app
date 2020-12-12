import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Colors from '../constants/Colors';
import ProfessionalDashboard from '../screens/ProfessionalDashboard';

const ProfessionalDashboardStackNavigator = createStackNavigator({
   ProfessionalDashboard: {
       screen: ProfessionalDashboard,
       navigationOptions: {
        headerBackTitleVisible: false
       }
   }
})

export default createAppContainer(ProfessionalDashboardStackNavigator)