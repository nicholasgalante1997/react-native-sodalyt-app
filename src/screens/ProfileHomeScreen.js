import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import {useSelector} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'
import Colors from '../constants/Colors'
import MTLightText from '../components/custom/MTLightText';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


const ProfileHomeScreen = (props) => {

    const userInfo = useSelector(state => state.userDetails)
    console.log(userInfo)

    let archetype;
    let spec;
    let description;
    let iconName;
    let longFormDesc;

    const typeHandler = (type) => {
        switch(type){
        case "INTJ":
            archetype = "Builder"
            spec = "Architect"
            description = "Imaginative and strategic thinkers, with a plan for everything."
            longFormDesc = "You speak optimistically and then you do what will work as opposed to speaking of what is real and doing what is right.  Others see you as logical and reasonable, the calm in the storm, and constantly curious; sometimes this can be viewed as skeptical, tough-minded, or insensitive.  You enjoy problem solving with a combination of intuition, rationalism, and an analyst mindset.  The world around you should be investigated, it needs to be debated, and then an ingenious plan should be put into action!"
            break;
        case 'INTP': 
            archetype = 'Builder',
            spec = "Logician"
            description = "Innovative inventors with an unquenchable thirst for knowledge."
            longFormDesc = "You speak optimistically and then you do what will work as opposed to speaking of what is real and doing what is right.  Others see you as logical and reasonable, the calm in the storm, and constantly curious; sometimes this can be viewed as skeptical, tough-minded, or insensitive.  You enjoy problem solving with a combination of intuition, rationalism, and an analyst mindset.  The world around you should be investigated, it needs to be debated, and then an ingenious plan should be put into action!"
            break;
        case 'ENTJ':
            archetype = 'Builder',
            spec = "Commander"
            description = "Bold, imaginative, and strong willed leaders, always finding a way- or making one."
            longFormDesc = "You speak optimistically and then you do what will work as opposed to speaking of what is real and doing what is right.  Others see you as logical and reasonable, the calm in the storm, and constantly curious; sometimes this can be viewed as skeptical, tough-minded, or insensitive.  You enjoy problem solving with a combination of intuition, rationalism, and an analyst mindset.  The world around you should be investigated, it needs to be debated, and then an ingenious plan should be put into action!"
            break;
        case 'ENTP':
            archetype = 'Builder',
            spec = "Debater"
            description = "Smart and curious thinkers who cannot resist an intellectual challenge."
            longFormDesc = "You speak optimistically and then you do what will work as opposed to speaking of what is real and doing what is right.  Others see you as logical and reasonable, the calm in the storm, and constantly curious; sometimes this can be viewed as skeptical, tough-minded, or insensitive.  You enjoy problem solving with a combination of intuition, rationalism, and an analyst mindset.  The world around you should be investigated, it needs to be debated, and then an ingenious plan should be put into action!"
            break;
        case "INFJ":
            archetype = 'Visionary'
            spec = "Advocate"
            description = "Quiet and mystical, yet very inspiring and tireless idealists."
            longFormDesc = "You speak optimistically and then do what is right as opposed to speaking of what is real and doing what is possible.  Others see you as inspiring, intuitive, and a morale center of virtue; sometimes this can be viewed as fervent, doctrine-like, and oversensitive.  You pair your passion and sensibility into advocating for others, painting the bigger picture for others to follow, and bringing resolution to conflicts.  The world around you has great opportunity to grow and with the right guidance can improve and mature."
            break;
        case "INFP":
            archetype = "Visionary"
            spec = "Mediator"
            description = "Poetic, kind, and altruistic people, always eager to help a good cause."
            longFormDesc = "You speak optimistically and then do what is right as opposed to speaking of what is real and doing what is possible.  Others see you as inspiring, intuitive, and a morale center of virtue; sometimes this can be viewed as fervent, doctrine-like, and oversensitive.  You pair your passion and sensibility into advocating for others, painting the bigger picture for others to follow, and bringing resolution to conflicts.  The world around you has great opportunity to grow and with the right guidance can improve and mature."
            break;
        case "ENFJ":
            archetype = "Visionary"
            spec = "Protagonist"
            description = "Charismatic and inspiring leaders, able to mesmerize their listeners."
            longFormDesc = "You speak optimistically and then do what is right as opposed to speaking of what is real and doing what is possible.  Others see you as inspiring, intuitive, and a morale center of virtue; sometimes this can be viewed as fervent, doctrine-like, and oversensitive.  You pair your passion and sensibility into advocating for others, painting the bigger picture for others to follow, and bringing resolution to conflicts.  The world around you has great opportunity to grow and with the right guidance can improve and mature."
            break;
        case "ENFP":
            archetype = "Visionary"
            spec = "Campaigner"
            description = "Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile."
            longFormDesc = "You speak optimistically and then do what is right as opposed to speaking of what is real and doing what is possible.  Others see you as inspiring, intuitive, and a morale center of virtue; sometimes this can be viewed as fervent, doctrine-like, and oversensitive.  You pair your passion and sensibility into advocating for others, painting the bigger picture for others to follow, and bringing resolution to conflicts.  The world around you has great opportunity to grow and with the right guidance can improve and mature."
            break;
        case "ISTJ":
            archetype = "Champion"
            spec = "Logistician"
            description = "Practical and fact minded individuals, whose reliability cannot be doubted."
            longFormDesc = " You speak the truth of what is real and then you do what is right as opposed to speaking optimistically and doing what will work.  Others see you as sensible, industrious,  and traditional; sometimes this can be viewed as depressive and judging.  You find purpose in taking care of others, through acquisition of assets, and providing a sense of structured community.  The world is something to be shaped through economic value, a common-sense approach, and judiciousness."
            break;
        case "ISFJ": 
            archetype = "Champion"
            spec = "Defender"
            description = "Very dedicated and warm protectors, always ready to defend their loved ones."
            longFormDesc = " You speak the truth of what is real and then you do what is right as opposed to speaking optimistically and doing what will work.  Others see you as sensible, industrious,  and traditional; sometimes this can be viewed as depressive and judging.  You find purpose in taking care of others, through acquisition of assets, and providing a sense of structured community.  The world is something to be shaped through economic value, a common-sense approach, and judiciousness."
            break;
        case "ESTJ":
            archetype = "Champion"
            spec = "Executive"
            longFormDesc = " You speak the truth of what is real and then you do what is right as opposed to speaking optimistically and doing what will work.  Others see you as sensible, industrious,  and traditional; sometimes this can be viewed as depressive and judging.  You find purpose in taking care of others, through acquisition of assets, and providing a sense of structured community.  The world is something to be shaped through economic value, a common-sense approach, and judiciousness."
            description = "Excellent administrators, unsurpassed at managing things or people."
            break;
        case "ESFJ":
            archetype = "Champion"
            spec = "Consul"
            description = "Extraordinarily caring, social, and popular people, always eager to help."
            longFormDesc = " You speak the truth of what is real and then you do what is right as opposed to speaking optimistically and doing what will work.  Others see you as sensible, industrious,  and traditional; sometimes this can be viewed as depressive and judging.  You find purpose in taking care of others, through acquisition of assets, and providing a sense of structured community.  The world is something to be shaped through economic value, a common-sense approach, and judiciousness."
            break;
        case "ISTP": 
            archetype = 'Creator'
            spec = "Virtuoso"
            description = "Bold and practical experimenters, masters of all kinds of tools."
            longFormDesc = "You speak the truth of what is real and then you do what will work as opposed to speaking optimistically and doing what is right.  Others see you as carefree, playful, and spontaneous; sometimes this can be viewed as impulsive, manic, or changeable.  You like to carve new paths and seek pleasure, placing your trusted intuition at the front of your decision making.  The world around you is to be enjoyed, disrupted, and improved  through beauty and creativity."
            break;
        case "ISFP":
            archetype = "Creator"
            spec = "Adventurer"
            description = "Flexible and charming artists, always ready to explore and experience something new."
            longFormDesc = "You speak the truth of what is real and then you do what will work as opposed to speaking optimistically and doing what is right.  Others see you as carefree, playful, and spontaneous; sometimes this can be viewed as impulsive, manic, or changeable.  You like to carve new paths and seek pleasure, placing your trusted intuition at the front of your decision making.  The world around you is to be enjoyed, disrupted, and improved  through beauty and creativity."
            break;
        case "ESTP":
            archetype = "Creator"
            spec = "Entrepreneur"
            description = "Smart, energetic, and very perceptive people, who truly enjoy living on the edge."
            longFormDesc = "You speak the truth of what is real and then you do what will work as opposed to speaking optimistically and doing what is right.  Others see you as carefree, playful, and spontaneous; sometimes this can be viewed as impulsive, manic, or changeable.  You like to carve new paths and seek pleasure, placing your trusted intuition at the front of your decision making.  The world around you is to be enjoyed, disrupted, and improved  through beauty and creativity."
            break;
        case "ESFP":
            archetype = "Creator"
            spec = "Entertainer"
            description = "Spontaneous, energetic, and enthusiastic people, life is never boring around them."
            longFormDesc = "You speak the truth of what is real and then you do what will work as opposed to speaking optimistically and doing what is right.  Others see you as carefree, playful, and spontaneous; sometimes this can be viewed as impulsive, manic, or changeable.  You like to carve new paths and seek pleasure, placing your trusted intuition at the front of your decision making.  The world around you is to be enjoyed, disrupted, and improved  through beauty and creativity."
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

    typeHandler(userInfo.MBTI)
    iconHandler()

    return ( 
        <View style={styles.screen}>
           <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height * 0.1, backgroundColor: Colors.ocean.primary, flexDirection: 'row'}}>
                <View style={{height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center'}}>
                    <MTBoldText style={{fontSize: userInfo.name.length < 10 ? 32 : 18}}>
                        {userInfo.name}
                    </MTBoldText>
                </View>
                <View style={{height: '100%', width: '50%', justifyContent: 'center'}}>
                    { userInfo.accountType === 'professional' ?
                        <MTBoldText style={{fontSize: 16}}>
                        Type: The {userInfo.sodalytType}
                    </MTBoldText> : 
                     <MTBoldText style={{fontSize: 16}}>
                     Type: {userInfo.sodalytPreference}
                 </MTBoldText>
                    }
                    <MTLightText>
                        {description}
                    </MTLightText>
                </View>
                <View style={{height: '100%', width: '10%', justifyContent: 'center', alignItems: 'center'}}>
                   <MaterialCommunityIcons size={48} color='white' name={iconName} />
                </View>
           </View>
           <View style={{justifyContent: 'center', alignItems: 'center', height: '90%', width: Dimensions.get('window').width}}>
               <MTBoldText style={{color: Colors.ocean.primary}}>
                    In App Direct Messaging Coming Soon!
               </MTBoldText>
           </View>
        </View>
     );
}

ProfileHomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Home',
        headerTitleStyle: {
            fontFamily: 'tommy-bold',
            color: Colors.rugged.primary
        },
        headerLeft: () => null
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    }
})
 
export default ProfileHomeScreen