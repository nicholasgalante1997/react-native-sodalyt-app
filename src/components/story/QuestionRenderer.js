import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'
import MTMediumText from '../custom/MTMediumText'
import DATA from '../../constants/data'

const MARS_EXPLORATION = [...DATA["stories"][0]]

const QuestionRenderer = (props) => {

    let content;

    const [currentQuestionOrder, setCurrentQuestion] = useState(1)
    
    const defaultBinaryQuestionLayout = (questionData) => {
        return (
            <View style={styles.screen}>
               <MTMediumText>Top Question Banner</MTMediumText>
            </View>
        )
    }

    switch (currentQuestionOrder) {
        case 1:
            break;
        default:
            break;
    }

    return (
        <View style={styles.container}>
            {content}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        flex: 1
    }
})
 
export default QuestionRenderer;