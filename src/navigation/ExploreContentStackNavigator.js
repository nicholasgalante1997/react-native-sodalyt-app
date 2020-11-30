import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchResultScreen from '../screens/SearchResultScreen'
import Colors from '../constants/Colors';
import ProfessionalUserShowPage from '../screens/ProfessionalUserShowPage';

const ExploreContentNavigator = createStackNavigator({
   SearchResultPage: {
       screen: SearchResultScreen,
       navigationOptions: {
           headerLeft: () => null,
           headerTitle: "Search Results",
           headerTintColor: Colors.ocean.primary,
           headerTitleStyle: {
               fontFamily: 'tommy-bold'
           }
       }
   },
   ProfessionalUserShowPage: {
       screen: ProfessionalUserShowPage,
       navigationOptions: {
          headerBackTitleStyle: {
              fontFamily: 'tommy-reg',
              fontSize: 14,
              color: Colors.ocean.primary
          } 
       }
   }
})

export default createAppContainer(ExploreContentNavigator)