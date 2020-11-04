import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
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
    // const [thisQuestion, setThisQuestion] = useState(findThisQuestion(currentQuestionOrder))
    const [chosenAnswer, setChosenAnswer] = useState(null)
    const checkAnswerPush = useSelector(state => state.answers)

    const pushAnswerToRedux = () => {
        dispatch(addAnswer(chosenAnswer));
        setChosenAnswer(null);
    }

    const adjustContent = () => {
        if (currentQuestionOrder < 7){
            setCurrentQuestionOrder(currentQOrder => currentQOrder + 1)
        }
    }

    const pushTo = () => {
        pushAnswerToRedux();
        adjustContent();
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
                <View style={styles.answerContainer}>
                    { thisQuestion.answers.map(answer => 
                        <View style={styles.buttonHolder}>
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
        </View>
        )
    }

    thisQuestion = findThisQuestion(currentQuestionOrder)
    content = defaultBinaryQuestionLayout(thisQuestion)

    // switch (currentQuestionOrder) {
    //     case 1:
    //         thisQuestion = findThisQuestion(currentQuestionOrder)
    //         content = defaultBinaryQuestionLayout(thisQuestion)
    //         break;
    //     case 2: 
    //         thisQuestion = findThisQuestion(currentQuestionOrder)
    //         content = defaultBinaryQuestionLayout(thisQuestion)
    //     default:
    //         break;
    // }

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
        // justifyContent: 'center',
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
        // height: Dimensions.get('window').height / 6,
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