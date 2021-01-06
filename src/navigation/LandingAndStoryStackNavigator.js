import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Colors from '../constants/Colors'

import LandingScreen from '../screens/LandingScreen'
import EmailGatherScreen from '../screens/EmailGatherScreen'
import StoryCardHolderScreen from '../screens/StoryCardHolderScreen'
import QuestionRenderer from '../components/story/QuestionRenderer'
import PersonalityResultPage from '../screens/PersonalityResultPage'
import NewUserEmailSignUpScreen from '../screens/NewUserEmailSignUpScreen'
import TesterEndScreen from '../screens/TesterEndScreen'
import LandingCUSearchScreen from '../screens/LandingCUSearchScreen'
import ReturningUserScreen from '../screens/ReturningUserScreen'
import WhySodalytScreen from '../screens/WhySodalytScreen'
import ProfessionalSurveyScreenOne from '../screens/ProfessionalSurveyScreenOne'
import ProfessionalSurveyScreenTwo from '../screens/ProfessionalSurveyScreenTwo';
import ProfessionalSurveyScreenThree from '../screens/ProfessionalSurveyScreenThree';

//Take our screens and assign them.
// Form Stack Navigator file was the whole project
// Now we created this to get to Landing and Story Stack Navigators
const FormStackNavigator = createStackNavigator({
    //Important for how I use props.navigatoe. Will be based on these route names
    //Welcome is a route name. Landing Screen is a route name.
    // Everything in blue which are object keys are route names
    // Welcome. Welcome.screen
    Welcome: {
        //First screen is first one to pop up, LandingScreen
        screen: LandingScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    LandingSearchScreen: {
        //This is a stack so welcome takes us to LandingSearchScreen
        screen: LandingCUSearchScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Email: {
        screen: EmailGatherScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    WhySodalyt: {
        //Pops up if youre a professional. Branches split based on whether or 
        //Not you are a professional 
        screen: WhySodalytScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    ProfessionalSurveyScreenOne: {
        screen: ProfessionalSurveyScreenOne,
        navigationOptions: {
            // automatically sets to headerLeft is a back button. Removing that here.
            //We dont want them to be able to navigate back to previous screen 
            //We are using headers, but dont want the back button 
            //If we want a button on headerRight: , we would set it up on headerRight
            //Buttons set up differently here
            headerLeft: () => null,
            //Name of header I am using 
            headerTitle: "Company Registration",
            //style of the header
            headerTitleStyle: {
                fontFamily: 'tommy-bold',
                color: Colors.ocean.primary
            }
        }
    },
    ProfessionalSurveyScreenTwo: {
        screen: ProfessionalSurveyScreenTwo,
        navigationOptions: {
            headerTitle: "Service Information",
            //Stylistic preference to now have the word back on it 
            //to take the button off, have to use headerLeft: () => null
            headerBackTitleVisible: false,
            headerTitleStyle: {
                //Have to keep HeaderTitleStyle here
                fontFamily: 'tommy-bold',
                color: Colors.ocean.primary
            }
        }
    },
    ProfessionalSurveyScreenThree: {
        screen: ProfessionalSurveyScreenThree,
        navigationOptions: {
            headerTitle: "Culture Information",
            headerBackTitleVisible: false,
            headerTitleStyle: {
                fontFamily: 'tommy-bold',
                color: Colors.ocean.primary
            }
        }
    },
    ReturningUserScreen: {
        screen: ReturningUserScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    StoryCardPage: {
        screen: StoryCardHolderScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    NewUserEmailSignUp: {
        screen: NewUserEmailSignUpScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    QuestionRenderer: {
        screen: QuestionRenderer,
        navigationOptions: {
            headerShown: false,
        }
    },
    PersonalityResultPage: {
        screen: PersonalityResultPage,
        navigationOptions: {
            headerShown: false
        }
    },
    TesterEndScreen: {
        //Was only for story part testing for the story. Just an end 
        // screen to the story. No longer exists, but can be used if
        // needed for other stories to test
        screen: TesterEndScreen,
        navigationOptions: {
            headerShown: false 
        }
    }
})

export default createAppContainer(FormStackNavigator)
/* 
ExploreDynamicContent: {
    screen: ExploreTabsContentNavigator,
    navigationOptions: {
        headerBackTitleVisible: false,
        headerTitle: 'Services',
        headerLeftContainerStyle: {
            marginLeft: 20
        },
        headerLeft: () => {
            return <Ionicons name="ios-menu" color="black" size={24} />
        }
    }
}
*/
