import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import MTMediumText from '../custom/MTMediumText'
import MainButton from '../custom/MainButton'
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useSelector, useDispatch} from 'react-redux'
import {addAnswer, resetAnswers} from '../../store/actions/actionCreator'

const QuestionRenderer = (props) => {

    const storyInfo = props.navigation.getParam('storyInfo')
    const { questions } = storyInfo;

    let content = null;
    let thisQuestion;

    const dispatch = useDispatch();

    const [currentQuestionOrder, setCurrentQuestionOrder] = useState(1)

    const [chosenAnswer, setChosenAnswer] = useState(null)
    const selectedAnswersArray = useSelector(state => state.answers)
    const userInfo = useSelector(state => state.currentUser)
    const localConcatName  = userInfo.firstName.concat(" ", userInfo.lastName)

    const pushAnswerToRedux = () => {
        dispatch(addAnswer(chosenAnswer));
    }
    
    const findThisQuestion = (orderNumber) => {
        let found = questions.filter(question => question.order === orderNumber)
        return found[0]
    }

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
            // issues 39 , 40 - quick patch with hard code value
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

    const postToSageMakerEndPoint = (answersObj) => {
        // instantiate a headers object
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
        fetch("https://c0eezw8cga.execute-api.us-east-2.amazonaws.com/mbti2/mbti-predictor-sansml", requestOptions)
        .then(response => response.json())
        .then(result => {
            
            console.log(result)
            props.navigation.navigate({routeName: 'PersonalityResultPage', params: {
                personalityResult: result
            }})

            setCurrentQuestionOrder(1)
            setChosenAnswer(null)
            resetReduxAnswers()

        })
        .catch(error => console.log('error', error))
    }

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
        let kearseyOne = selectedAnswersArray.filter(answer => answer.question_id === 3)[0]
        let kearseyTwo = selectedAnswersArray.filter(answer => answer.question_id === 6)[0]
        let kearseyThree = selectedAnswersArray.filter(answer => answer.question_id === 7)[0]
        let respect = selectedAnswersArray.filter(answer => answer.question_id === 29)[0]
        let recognition = selectedAnswersArray.filter(answer => answer.question_id === 30)[0]
        let reassurance = selectedAnswersArray.filter(answer => answer.question_id === 31)[0]
        let resilience = selectedAnswersArray.filter(a => a.question_id === 32)[0]
        let resp = selectedAnswersArray.filter(a => a.question_id === 28)[0]

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

        const returnData = {
            "name": localConcatName,
            "email": userInfo.email,
            "password": userInfo.password,
            "kearsey-one": kearseyOne.raw_value,
            "kearsey-two": kearseyTwo.raw_value,
            "kearsey-three": kearseyThree.raw_value,
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

        postToSageMakerEndPoint(returnData)
    }

    const resetReduxAnswers = () => {
        dispatch(resetAnswers())
    }

    const pushTo = () => {
        const chosenAnswerId = chosenAnswer.id 
        pushAnswerToRedux();
        switchContent(chosenAnswerId);
    }

    const defaultBinaryQuestionLayout = (thisQuestion) => {
        return (
            <View style={styles.defaultBinary}>
            {/* BANNER */}
                <View style={styles.bannerWrapper}>
                    <View style={styles.banner}>
                        <MTMediumText style={styles.bannerText}>
                            {thisQuestion.prompt}
                        </MTMediumText>
                    </View>
                </View>
            {/* ANIMATION */}
                <Animatable.View 
                animation="lightSpeedOut" 
                iterationCount="infinite" 
                direction="alternate" 
                style={styles.iconHolder}>
                    <FontAwesome5 
                    name="space-shuttle" 
                    size={108} 
                    color="white" />
                </Animatable.View>
            {/* ANSWERS */}
            <ScrollView style={{marginTop: Dimensions.get('window').height > 700 ? 0 : 50}}>
                <View style={styles.answerContainer}>
                    { thisQuestion.answers.map(answer => 
                        <View key={answer.id} style={styles.buttonHolder}>
                            <MainButton 
                            style={chosenAnswer ? 
                            chosenAnswer.id === answer.id ? 
                                {backgroundColor: Colors.ocean.secondary} 
                                : {backgroundColor: Colors.rugged.secondary}
                            : {backgroundColor: Colors.rugged.secondary}} 
                            onPress={() => setChosenAnswer(answer)}>
                                {answer.text}
                            </MainButton>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
        )
    }

    thisQuestion = findThisQuestion(currentQuestionOrder)
    content = defaultBinaryQuestionLayout(thisQuestion)
   
    return (
        // WHOLE SCREEN
        <View style={styles.container}>
            {/* TOP ROW */}
            <View style={styles.topContainer}>
                <MTMediumText style={styles.topText}>{storyInfo.story_title}</MTMediumText>
            </View>
            {/* DYNAMIC CONTENT */}
            {content}
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

let styles = StyleSheet.create({
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
       textAlign: 'left',
       marginHorizontal: 9
    },
    iconHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 60,
        // paddingBottom: 20,
        marginVertical: 20
    },
    answerContainer: {
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 15,
        height: (Dimensions.get('window').height / 10) * 4
        // width: '90%'
    },
    buttonHolder: {
        marginVertical: 5,
        marginHorizontal: 15
    },
    nextButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})

if (Dimensions.get('window').height < 700){
    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.rugged.primary
        },
        topContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',        
            alignItems: 'center',
            paddingTop: 20
        },
        defaultBinary: {
            // marginVertical: 10,
            height: '80%',
            width: '100%',
            borderRadius: 15
        },
        bannerWrapper: {
            width: '100%',
            paddingVertical: 20,
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
           textAlign: 'left',
           marginHorizontal: 9
        },
        iconHolder: {
            justifyContent: 'center',
            alignItems: 'center',
            // paddingTop: 60,
            // paddingBottom: 20,
            marginVertical: 20
        },
        answerContainer: {
            // marginTop: 100,
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 15,
            height: (Dimensions.get('window').height / 10) * 3
            // width: '90%'
        },
        buttonHolder: {
            marginVertical: 5,
            marginHorizontal: 15
        },
        nextButtonContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        }
    })
}
 
export default QuestionRenderer;

