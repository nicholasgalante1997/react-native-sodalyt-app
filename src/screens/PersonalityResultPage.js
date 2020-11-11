import React from 'react';
import {View, StyleSheet} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors'

const PersonalityResultPage = (props) => {

    const displayType = props.navigation.getParam('personalityResult')
    let archetype;
    let spec;
    let description;

    const typeHandler = (type) => {
        console.log('inside the handler')
        switch(type){
        case "INTJ":
            archetype = "Rationalist"
            spec = "Architect"
            description = "Imaginative and strategic thinkers, with a plan for everything."
            break;
        case 'INTP': 
            archetype = 'Rationalist',
            spec = "Logician"
            description = "Innovative inventors with an unquenchable thirst for knowledge."
            break;
        case 'ENTJ':
            archetype = 'Rationalist',
            spec = "Commander"
            description = "Bold, imaginative, and strong willed leaders, always finding a way- or making one."
            break;
        case 'ENTP':
            archetype = 'Rationalist',
            spec = "Debater"
            description = "Smart and curious thinkers who cannot resist an intellectual challenge."
            break;
        case "INFJ":
            console.log('in the case')
            archetype = 'Idealist'
            spec = "Advocate"
            description = "Quiet and mystical, yet very inspiring and tireless idealists."
            break;
        case "INFP":
            archetype = "Idealist"
            spec = "Mediator"
            description = "Poetic, kind, and altruistic people, always eager to help a good cause."
            break;
        case "ENFJ":
            archetype = "Idealist"
            spec = "Protagonist"
            description = "Charismatic and inspiring leaders, able to mesmerize their listeners."
            break;
        case "ENFP":
            archetype = "Idealist"
            spec = "Campaigner"
            description = "Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile."
            break;
        case "ISTJ":
            archetype = "Guardian"
            spec = "Logistician"
            description = "Practical and fact minded individuals, whose reliability cannot be doubted."
            break;
        case "ISFJ": 
            archetype = "Guardian"
            spec = "Defender"
            description = "Very dedicated and warm protectors, always ready to defend their loved ones."
            break;
        case "ESTJ":
            archetype = "Guardian"
            spec = "Executive"
            description = "Excellent administrators, unsurpassed at managing things or people."
            break;
        case "ESFJ":
            archetype = "Guardian"
            spec = "Consul"
            description = "Extraordinarily caring, social, and popular people, always eager to help."
            break;
        case "ISTP": 
            archetype = "Artist"
            spec = "Virtuoso"
            description = "Bold and practical experimenters, masters of all kinds of tools."
            break;
        case "ISFP":
            archetype = "Artist"
            spec = "Adventurer"
            description = "Flexible and charming artists, always ready to explore and experience something new."
            break;
        case "ESTP":
            archetype = "Artist"
            spec = "Entrepreneur"
            description = "Smart, energetic, and very perceptive people, who truly enjoy living on the edge."
            break;
        case "ESFP":
            archetype = "Artist"
            spec = "Entertainer"
            description = "Spontaneous, energetic, and enthusiastic people, life is never boring around them."
            break;
        default:
            break;
        }
    }

    typeHandler(displayType.slice(1, -1))

    console.log(displayType, displayType.slice(1, -1))

    return ( 
        <View style={styles.screen}>
            <MTBoldText>You belong to the group</MTBoldText>
            <MTBoldText style={{fontSize: 48}}>{archetype}</MTBoldText>
            <MTBoldText style={{paddingTop: 20}}>Specifically, you're a {spec}</MTBoldText>
            <MTBoldText style={{padding: 20, textAlign: 'center'}}>These are individuals with the Meyers-Brigg type {displayType.slice(1, -1)}</MTBoldText>
            <MTBoldText style={{paddingTop: 20, textAlign: 'center'}}>{description}</MTBoldText>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black'
    }
})
 
export default PersonalityResultPage;