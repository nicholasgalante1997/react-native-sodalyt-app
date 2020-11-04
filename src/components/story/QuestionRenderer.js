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

const QuestionRenderer = (props) => {
   
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
    const checkAnswerPush = useSelector(state => state.answers)

    const pushAnswerToRedux = () => {
        dispatch(addAnswer(chosenAnswer));
    }

    const switchContent = (chosenAnswerId) => {
        switch(chosenAnswerId){
            case 17: 
                setCurrentQuestionOrder(prev => prev + 0.40)
                setChosenAnswer(null)
                break;
            case 18: 
                setCurrentQuestionOrder(prev => prev + 0.30)
                setChosenAnswer(null)
                break;
            case 19:
                setCurrentQuestionOrder(prev => prev + 0.10)
                setChosenAnswer(null)
                break;
            case 20: 
                setCurrentQuestionOrder(prev => prev + 0.20)
                setChosenAnswer(null)
                break;
            case 21: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 22:
                setCurrentQuestionOrder(prev => prev + 0.01)
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
            case 28:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
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
            case 36:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
            case 37: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 38: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 39: 
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
            case 40:
                setCurrentQuestionOrder(prev => prev + 0.01)
                setChosenAnswer(null)
                break;
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
            case 44:
                setCurrentQuestionOrder(8)
                setChosenAnswer(null)
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
            default: 
                console.log('in the case statement')
                setCurrentQuestionOrder(currentQOrder => currentQOrder + 1)
                setChosenAnswer(null)
                break;
        }
    }

    // const adjustEarlyContent = () => {
    //     if (currentQuestionOrder < 7){
    //         setCurrentQuestionOrder(currentQOrder => currentQOrder + 1)
    //         setChosenAnswer(null);
    //     }
    // }

    const pushTo = () => {
        const chosenAnswerId = chosenAnswer.id 
        pushAnswerToRedux();
        console.log(chosenAnswerId, "in the pushTo function")
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
    console.log("redux state", checkAnswerPush)
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