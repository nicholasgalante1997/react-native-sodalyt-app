import React from 'react';
import {View, StyleSheet} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useSelector} from 'react-redux'

const PersonalityResultPage = (props) => {

    const returnedObject = props.navigation.getParam('personalityResult')
   
    let archetype;
    let spec;
    let description;
    let iconName;

    const typeHandler = (type) => {
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
            archetype = 'Creator'
            spec = "Virtuoso"
            description = "Bold and practical experimenters, masters of all kinds of tools."
            break;
        case "ISFP":
            archetype = "Creator"
            spec = "Adventurer"
            description = "Flexible and charming artists, always ready to explore and experience something new."
            break;
        case "ESTP":
            archetype = "Creator"
            spec = "Entrepreneur"
            description = "Smart, energetic, and very perceptive people, who truly enjoy living on the edge."
            break;
        case "ESFP":
            archetype = "Creator"
            spec = "Entertainer"
            description = "Spontaneous, energetic, and enthusiastic people, life is never boring around them."
            break;
        default:
            break;
        }
    }

    const iconHandler = () => {
        if (archetype === 'Rationalist'){
            iconName = 'brain'
        } else if (archetype === 'Idealist') {
            iconName = 'biathlon'
        } else if (archetype === 'Guardian'){
            iconName = 'shield-home'
        } else {
            iconName = 'artist'
        }
    }

    typeHandler(returnedObject.MBTI)
    iconHandler()

    return ( 
        <View style={styles.screen}>
            <View>
                <MTBoldText style={{textAlign: 'center'}}>You belong to the group</MTBoldText>
                <MTBoldText style={{fontSize: 48}}>{archetype}</MTBoldText>
            </View>
            <View>
                <MTBoldText style={{paddingTop: 20, textAlign: 'center'}}>Specifically, you're a {spec}</MTBoldText>
                <MTBoldText style={{padding: 20, textAlign: 'center'}}>These are individuals with the Meyers-Brigg type {returnedObject["MBTI"]}</MTBoldText>
            </View>
            <MaterialCommunityIcons 
            name={iconName} size={48} style={{margin: 10, padding: 5}} color="white" />
            <MTBoldText style={{padding: 20, textAlign: 'center'}}>{description}</MTBoldText>
            <View>
                    <MaterialCommunityIcons 
                    name="arrow-right-bold-circle-outline" 
                    size={48} 
                    color="white" 
                    onPress={() => {
                        props.navigation.navigate('ExploreDynamicContent')
                    }}/>
            </View>
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