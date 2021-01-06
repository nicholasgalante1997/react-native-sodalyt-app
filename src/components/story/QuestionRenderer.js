import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, FlatList, Dimensions, Platform} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import MTMediumText from '../custom/MTMediumText'
import MainButton from '../custom/MainButton'
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useSelector, useDispatch} from 'react-redux'
import {addAnswer, resetAnswers, setCurrentUser} from '../../store/actions/actionCreator'
import { TouchableOpacity } from 'react-native-gesture-handler';

//this is a screen for questions for each screen
const QuestionRenderer = (props) => {

    //always have to pick up the param from navigation.
    //this was passed in from StoryCardHolderScreen as param:  in key/value pair 
    //Do this to avoid passing
    const storyInfo = props.navigation.getParam('storyInfo')
    const { questions } = storyInfo;

    let thisQuestion;

    const dispatch = useDispatch();
    //start with first question with id of 1
    const [currentQuestionOrder, setCurrentQuestionOrder] = useState(1)

    //This is where we hold selected answer in local state before sending to Redux
    const [chosenAnswer, setChosenAnswer] = useState(null)
    // Redux slice that saves the chosen answers
    // userSelector, argument is the entire state, the return value is the slice of state that you want
    const selectedAnswersArray = useSelector(state => state.answers)
    const userInfo = useSelector(state => state.currentUser)
    // Because back end takes a full name. Concat first and last name with a space 
    const localConcatName  = userInfo.firstName.concat(" ", userInfo.lastName)

    // Pushed answers into this user's selected answers array. One answer at a time. 
    // Persisting this to our redux before persisting to backend. 
    // Save all answers first in front end, then send them to back end when finished with story questions
    const pushAnswerToRedux = () => {
        dispatch(addAnswer(chosenAnswer));
    }
    
    // Finds what questions we are on
    // Filters entire questions array and only returns the one item, not in the array, in the object itself 
    const findThisQuestion = (orderNumber) => {
        let found = questions.filter(question => question.order === orderNumber)
        //filter returns an array. We want to return the object
        return found[0]
    }

    // At question 7 about negotiaton tactic. Whatever answer they choose 
    // Will determine question 7 variations. 
    // They all wind up going back to question 8. 
    // Also responsible for handling last question
    const switchContent = (chosenAnswerId) => {
        switch(chosenAnswerId){

            // Case of Alien Bar
            case 17: 
                setCurrentQuestionOrder(7.40)
                setChosenAnswer(null)
                break;
            case 45: 
                setCurrentQuestionOrder(7.41)
                setChosenAnswer(null)
                break;
            case 46:
                setCurrentQuestionOrder(7.41)
                setChosenAnswer(null)
                break;
            case 47: 
                setCurrentQuestionOrder(7.42)
                setChosenAnswer(null)
                break;
            case 48: 
                setCurrentQuestionOrder(7.42)
                setChosenAnswer(null)
                break;
            case 49: 
                setCurrentQuestionOrder(7.43)
                setChosenAnswer(null)
                break;
            case 50:
                setCurrentQuestionOrder(7.43)
                setChosenAnswer(null)
                break;
            case 51: 
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;
            case 52: 
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;

            // Case of Direct March Into City
            case 18: 
                setCurrentQuestionOrder(7.30)
                setChosenAnswer(null)
                break;
            case 37: 
                setCurrentQuestionOrder(7.31)
                setChosenAnswer(null)
                break;
            case 38: 
                setCurrentQuestionOrder(7.31)
                setChosenAnswer(null)
                break;
            case 39: 
                setCurrentQuestionOrder(7.32)
                setChosenAnswer(null)
                break;
            case 40:
                setCurrentQuestionOrder(7.32)
                setChosenAnswer(null)
                break
            case 41: 
                setCurrentQuestionOrder(7.33)
                setChosenAnswer(null)
                break;
            case 42: 
                setCurrentQuestionOrder(7.33)
                setChosenAnswer(null)
                break;
            case 43:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;
            case 44:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;

            // Case of Recon 
            case 19:
                setCurrentQuestionOrder(7.10)
                setChosenAnswer(null)
                break;
            case 21: 
                setCurrentQuestionOrder(7.11)
                setChosenAnswer(null)
                break;
            case 22:
                setCurrentQuestionOrder(7.11)
                setChosenAnswer(null)
                break;
            case 23: 
                setCurrentQuestionOrder(7.12)
                setChosenAnswer(null)
                break;
            case 24: 
                setCurrentQuestionOrder(7.12)
                setChosenAnswer(null)
                break;
            case 25: 
                setCurrentQuestionOrder(7.13)
                setChosenAnswer(null)
                break;
            case 26:
                setCurrentQuestionOrder(7.13)
                setChosenAnswer(null)
                break;
            case 27:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;
            case 28:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;

            // Case of the Trade
            case 20: 
                setCurrentQuestionOrder(7.20)
                setChosenAnswer(null)
                break;
            case 29: 
                setCurrentQuestionOrder(7.21)
                setChosenAnswer(null)
                break;
            case 30:
                setCurrentQuestionOrder(7.21)
                setChosenAnswer(null)
                break;
            case 31: 
                setCurrentQuestionOrder(7.22)
                setChosenAnswer(null)
                break;
            case 32: 
                setCurrentQuestionOrder(7.22)
                setChosenAnswer(null)
                break;
            case 33: 
                setCurrentQuestionOrder(7.23)
                setChosenAnswer(null)
                break;
            case 34:
                setCurrentQuestionOrder(7.23)
                setChosenAnswer(null)
                break;
            case 35:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;
            case 36:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
                break;

            // Case of Last Question 
            case 73: 
                cleanUpAfterLastQuestion()
                break;
            default: 
                setCurrentQuestionOrder(currentQOrder => currentQOrder + 1)
                setChosenAnswer(null)
                break;
        }
    }

    //this is the way AWS prefers for fetches to be sent 
    const postToSageMakerEndPoint = (answersObj) => {
        // instantiate a headers object with JS built in Headers class
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify(answersObj);
        // create a JSON object with parameters for API call and store in a variable
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
                // "https://c0eezw8cga.execute-api.us-east-2.amazonaws.com/mbti2/mbti-predictor-sansml"
        fetch("https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/demo1/getmbti", requestOptions)
        .then(response => response.json())
        .then(result => {
            //pass entire result into a params   
            //Using .navigate as an object
            // The first thing I give is the routeName instead of the string like in other pages 
            // Only if passing in an object into .navigate 
            //Do this if we want to pass params into navigation. 
            //B/c the second argument is params and can pass data from one page to the next in a stack navigator.
            // Passing the results of the personalityResult in this case, this is specific to a stack navigator
            // This is how you use params, params itself is a key/value pair 
            // Assign any names for keys
            props.navigation.navigate({routeName: 'PersonalityResultPage', params: {
                personalityResult: result
            }})

            //reset the board of the game to initial state at start of a game.
            setCurrentQuestionOrder(1)
            setChosenAnswer(null)
            resetReduxAnswers()
        })
        .catch(error => console.log('error', error))
    }

    //If any two Kearsey answers same, then that is their Sodalyt preference
    const generateSingleKearseyPreference = (prefOne, prefTwo, prefThree) => {
        if (prefOne.raw_value === prefTwo.raw_value){
            return prefTwo.raw_value
        } else if (prefTwo.raw_value === prefThree.raw_value){
            return prefThree.raw_value
        } else if (prefThree.raw_value === prefOne.raw_value){
            return prefOne.raw_value
        } else {
            return prefOne.raw_value
        }
    }

    // What we send to Marco. 
    const convertToSodalytPreference = (singleKearseyPreference) => {
        if (singleKearseyPreference === "The Artist/The Explorer"){
            return "The Creator"
        } else if (singleKearseyPreference === "The Guardian/The Sentinel"){
            return "The Champion"
        } else if (singleKearseyPreference === "The Rationalist/The Analyst"){
            return "The Builder"
        } else {
            return "The Visionary"
        }
    }

    //at the end of quiz, we want to send a post with the answers to back end
    const cleanUpAfterLastQuestion = () => {

        const currentAnswerList = [...selectedAnswersArray]
        const extrovertArray = []
        const introvertArray = []
        const judgingArray = []
        const perceivingArray = []
        const sensingArray = []
        const intuitionArray = []
        const thinkingArray = []
        const feelingArray = []
        // Using answers to kearsey questions
        let kearseyOne = selectedAnswersArray.filter(answer => answer.question_id === 3)[0]
        let kearseyTwo = selectedAnswersArray.filter(answer => answer.question_id === 6)[0]
        let kearseyThree = selectedAnswersArray.filter(answer => answer.question_id === 7)[0]
        let respect = selectedAnswersArray.filter(answer => answer.question_id === 29)[0]
        let recognition = selectedAnswersArray.filter(answer => answer.question_id === 30)[0]
        let reassurance = selectedAnswersArray.filter(answer => answer.question_id === 31)[0]
        let resilience = selectedAnswersArray.filter(a => a.question_id === 32)[0]
        let resp = selectedAnswersArray.filter(a => a.question_id === 28)[0]

        //map through all the answers and push different result into its own selected array
        currentAnswerList.forEach(answer => {
            if (answer.raw_value === "E") {
                extrovertArray.push(answer)
            }
            if (answer.raw_value === "I") {
                introvertArray.push(answer)
            }
            if (answer.raw_value === "J") {
                judgingArray.push(answer)
            }
            if (answer.raw_value === "P") {
                perceivingArray.push(answer)
            }
            if (answer.raw_value === "S"){
                sensingArray.push(answer)
            }
            if (answer.raw_value === "N"){
                intuitionArray.push(answer)
            }
            if (answer.raw_value === "T"){
                thinkingArray.push(answer)
            }
            if (answer.raw_value === "F"){
                feelingArray.push(answer)
            }
        })

        //this is being sent to Marco's back end
        // userInfo from form screen
        const returnData = {
            "accountType": userInfo.accountType,
            "name": localConcatName,
            "email": userInfo.email,
            "password": userInfo.password,
            // "kearsey-one": kearseyOne.raw_value,
            // "kearsey-two": kearseyTwo.raw_value,
            // "kearsey-three": kearseyThree.raw_value,
            //chaining sodalytPreference with respect to kearsey
            "sodalytPreference": convertToSodalytPreference(generateSingleKearseyPreference(kearseyOne, kearseyTwo, kearseyThree)),
            "respect": respect.text,
            "responsibility": resp.text,
            "recognition": recognition.text,
            "resilience": resilience.text,
            "reassurance": reassurance.text,
            "E": extrovertArray.length.toString(),
            "I": introvertArray.length.toString(),
            "S": sensingArray.length.toString(),
            "N": intuitionArray.length.toString(),
            "J": judgingArray.length.toString(),
            "P": perceivingArray.length.toString(),
            "T": thinkingArray.length.toString(),
            "F": feelingArray.length.toString(),
        }

        // console.log(returnData)
        postToSageMakerEndPoint(returnData)
    }

    const resetReduxAnswers = () => {
        dispatch(resetAnswers())
    }

    //figures out chosen answer, sends to Redux, calls switchContent to update question number based on answer selected
    const pushTo = () => {
        const chosenAnswerId = chosenAnswer.id 
        pushAnswerToRedux();
        switchContent(chosenAnswerId);
    }


    // const defaultBinaryQuestionLayout = (thisQuestion) => {
    //     return (
    //         <View style={styles.defaultBinary}>
    //         {/* BANNER */}
    //             <View style={styles.bannerWrapper}>
    //                 <View style={styles.banner}>
    //                     <MTMediumText style={styles.bannerText}>
    //                         {thisQuestion.prompt}
    //                     </MTMediumText>
    //                 </View>
    //             </View>
    //         {/* ANIMATION */}
    //             <Animatable.View 
    //             animation="lightSpeedOut" 
    //             iterationCount={1}
    //             direction="alternate" 
    //             style={styles.iconHolder}>
    //                 <FontAwesome5 
    //                 name="space-shuttle" 
    //                 size={92} 
    //                 color="white" />
    //             </Animatable.View>
    //         {/* ANSWERS */}
    //         {/* This is where chosen answers matter */}
    //         <ScrollView>
    //             <View style={styles.answerContainer}>
    //                 {/* mapping through answers of questions we are on and each answer becomes a MainButton  */}
    //                 {/* Changes color of answer you are choosing before submitting answer */}
    //                 { thisQuestion.answers.map(answer => 
    //                     <View key={answer.id} style={styles.buttonHolder}>
    //                         <MainButton 
    //                         style={chosenAnswer ? 
    //                         chosenAnswer.id === answer.id ? 
    //                             {backgroundColor: Colors.ocean.secondary} 
    //                             : {backgroundColor: Colors.rugged.secondary}
    //                         : {backgroundColor: Colors.rugged.secondary}} 
    //                         onPress={() => setChosenAnswer(answer)}>
    //                             {answer.text}
    //                         </MainButton>
    //                     </View>
    //                 )}
    //             </View>
    //         </ScrollView>
    //     </View>
    //     )
    // }

    thisQuestion = findThisQuestion(currentQuestionOrder)
    // content = defaultBinaryQuestionLayout(thisQuestion)

    return (
        // WHOLE SCREEN
        <View style={styles.container}>
            {/* TOP ROW */}
            <View style={styles.topContainer}>
                <MTMediumText style={styles.topText}>{storyInfo.story_title}</MTMediumText>
            </View>
            {/* DYNAMIC CONTENT */}
            <View style={styles.updateQuestionBanner}>
               <MTMediumText style={{textAlign: 'center'}}>{thisQuestion.prompt}</MTMediumText> 
            </View>
            <Animatable.View 
                animation="wobble" 
                iterationCount={2}
                direction="alternate" 
                style={styles.iconHolder}>
                    <FontAwesome5 
                    name="space-shuttle" 
                    size={92} 
                    color="white" />
                </Animatable.View>
                <View style={{...styles.updateAnswerContainer, bottom: thisQuestion.answers.length > 2 ? Dimensions.get('window').height / 7 : Dimensions.get('window').height / 4 }}>
                        <FlatList 
                        data={thisQuestion.answers} 
                        keyExtractor={item => item.id} 
                        renderItem={(itemData) => 
                        <TouchableOpacity style={{height: Dimensions.get('window').height > 700 ? 70 : 40, width: Dimensions.get('window').width * 0.9, marginVertical: 10}} onPress={() => setChosenAnswer(itemData.item)}>
                        <View style={{height: '100%', width: '100%', backgroundColor: chosenAnswer ? 
                            chosenAnswer.id === itemData.item.id ? 
                                Colors.ocean.secondary
                                : Colors.rugged.secondary
                            : Colors.rugged.secondary, 
                             borderRadius: 15, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                                 <MTMediumText style={{fontSize: 12, marginHorizontal: 5}}>
                                     {itemData.item.text}
                                 </MTMediumText>
                        </View>
                        </TouchableOpacity>}
                        />
                </View>
            <View style={styles.nextButtonContainer}>
                    { chosenAnswer ? 
                        <Animatable.View 
                        animation="rubberBand" 
                        iterationCount="infinite" 
                        direction="alternate" >
                            <MaterialCommunityIcons 
                            name="forward" 
                            size={48} 
                            color="white"
                            onPress={pushTo}
                            />
                        </Animatable.View>
                    : null}
                </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.rugged.primary
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',        
        alignItems: 'center',
        paddingTop: 50
    },
    defaultBinary: {
        marginVertical: 20,
        height: '75%',
        width: '100%'
    },
    bannerWrapper: {
        width: '100%',
        paddingVertical: 50,
        borderRadius: 20
    },
    banner: {
        paddingVertical: 10,
        width: '100%',
        backgroundColor: Colors.rugged.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerText: {
       color: 'white',
       fontSize: 20,
       textAlign: 'left'
    },
    iconHolder: {
        justifyContent: 'center',
        alignItems: 'center',
       position: 'absolute',
       top: Platform.OS ===  'ios' ? Dimensions.get('window').height / 3 : Dimensions.get('window').height / 3.3
    },
    answerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonHolder: {
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    nextButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 30 : Dimensions.get('window').height > 780 ? 75 : 35,
    },
    updateQuestionBanner: {
        position: "absolute",
        top: Dimensions.get('window').height / 8,
        height: Dimensions.get('window').height / 8,
        width: Dimensions.get("window").width,
        backgroundColor: Colors.ocean.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    updateAnswerContainer: {
        position: 'absolute',
        bottom: Dimensions.get('window').height / 4
    }
})
 
export default QuestionRenderer;

