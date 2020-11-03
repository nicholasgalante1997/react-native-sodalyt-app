import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';
import MTMediumText from '../custom/MTMediumText'

const QuestionRenderer = (props) => {

    const storyParams = props.navigation.getParam('storyInfo')

    let content = null;

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
            <MTMediumText>{storyParams.story_title}</MTMediumText>
            {content}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.rugged.primary
    },
    screen: {
        flex: 1
    }
})
 
export default QuestionRenderer;