import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import MTMediumText from '../custom/MTMediumText'
import MainButton from '../custom/MainButton'
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useSelector, useDispatch} from 'react-redux'
import {addAnswer} from '../../store/actions/actionCreator'
import { a } from 'aws-amplify';

const QuestionRenderer = (props) => {

    const postToSageMakerEndPoint = (answersString) => {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify({"data": answersString});
        // create a JSON object with parameters for API call and store in a variable
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://c0eezw8cga.execute-api.us-east-2.amazonaws.com/mbti-1/mbti-predictor", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result, "response from the server"))
        .catch(error => console.log('error', error))
    }
   
    const findThisQuestion = (orderNumber) => {
        let found = questions.filter(question => question.order === orderNumber)
        return found[0]
    }

    const storyInfo = props.navigation.getParam('storyInfo')
    const { questions } = storyInfo;

    let content = null;
    let thisQuestion;

    const dispatch = useDispatch();
    const [currentQuestionOrder, setCurrentQuestionOrder] = useState(1)
    const [chosenAnswer, setChosenAnswer] = useState(null)
    const selectedAnswersArray = useSelector(state => state.answers)

    const pushAnswerToRedux = () => {
        dispatch(addAnswer(chosenAnswer));
    }

    const switchContent = (chosenAnswerId) => {
        switch(chosenAnswerId){

            // Case of Alien Bar
            case 17: 
                setCurrentQuestionOrder(prev => prev + 0.40)
                setChosenAnswer(null)
                break;
            case 45: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 46:
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 47: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 48: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 49: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 50:
                setCurrentQuestionOrder(prev => prev + 0.01)
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
                setCurrentQuestionOrder(prev => prev + 0.30)
                setChosenAnswer(null)
                break;
            case 37: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 38: 
                setCurrentQuestionOrder(prev => prev + 0.01)
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
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 42: 
                setCurrentQuestionOrder(prev => prev + 0.01)
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
                setCurrentQuestionOrder(prev => prev + 0.10)
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
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 24: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 25: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 26:
                setCurrentQuestionOrder(prev => prev + 0.01)
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
                setCurrentQuestionOrder(prev => prev + 0.20)
                setChosenAnswer(null)
                break;
            case 29: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 30:
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 31: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 32: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 33: 
                setCurrentQuestionOrder(prev => prev + 0.30)
                setChosenAnswer(null)
                break;
            case 34:
                setCurrentQuestionOrder(prev => prev + 0.01)
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


            case 73: 
                cleanUpAfterLastQuestion()
                break;
            // Check Difference
            // case 40:
            //     setCurrentQuestionOrder(prev => prev + 0.01)
            //     setChosenAnswer(null)
            //     break;
            // case 43:
            //     setCurrentQuestionOrder(8)
            //     setChosenAnswer(null)
            // case 44:
            //     setCurrentQuestionOrder(8)
            //     setChosenAnswer(null)
            // case 47: 
            //     setCurrentQuestionOrder(prev => prev + 0.01)
            //     setChosenAnswer(null)
            //     break;
            // case 48: 
            //     setCurrentQuestionOrder(prev => prev + 0.01)
            //     setChosenAnswer(null)
            //     break;
            // case 51: 
            //     setCurrentQuestionOrder(8)
            //     setChosenAnswer(null)
            //     break;
            // case 52: 
            //     setCurrentQuestionOrder(8)
            //     setChosenAnswer(null)
            //     break;
            default: 
                console.log('in the case statement')
                setCurrentQuestionOrder(currentQOrder => currentQOrder + 1)
                setChosenAnswer(null)
                break;
        }
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
            "E": extrovertArray.length.toString(),
            "I": introvertArray.length.toString(),
            "S": sensingArray.length.toString(),
            "N": intuitionArray.length.toString(),
            "J": judgingArray.length.toString(),
            "P": perceivingArray.length.toString(),
            "T": thinkingArray.length.toString(),
            "F": feelingArray.length.toString()
        }

        console.log(returnData, "return data object")

        postToSageMakerEndPoint(returnData)
    }

    const pushTo = () => {
        const chosenAnswerId = chosenAnswer.id 
        pushAnswerToRedux();
        console.log(chosenAnswerId, currentQuestionOrder, "in the pushTo function before switch content")
        switchContent(chosenAnswerId);
        console.log(chosenAnswerId, currentQuestionOrder, "in the pushTo function after switch content")
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
                animation="slideInDown" 
                iterationCount="infinite" 
                direction="alternate" 
                style={styles.iconHolder}>
                    <FontAwesome5 
                    name="space-shuttle" 
                    size={108} 
                    color="white" />
                </Animatable.View>
            {/* ANSWERS */}
            <ScrollView>
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

    console.log("on the mars exploration page", storyInfo, questions)
    console.log("current question", thisQuestion)
    console.log("chosen answer", chosenAnswer)
    console.log("redux state", selectedAnswersArray)
    console.log("current order", currentQuestionOrder)

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
        paddingTop: 60,
        paddingBottom: 20
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
        paddingVertical: 10
    }
})
 
export default QuestionRenderer;




// const adjustEarlyContent = () => {
    //     if (currentQuestionOrder < 7){
    //         setCurrentQuestionOrder(currentQOrder => currentQOrder + 1)
    //         setChosenAnswer(null);
    //     }
    // }