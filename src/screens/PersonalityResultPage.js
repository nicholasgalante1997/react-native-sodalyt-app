import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import LearnMoreModal from '../components/story/LearnMoreModal'
import Modal from 'react-native-modal'
import CustomButton from '../components/custom/MainButton'
import MTLightText from '../components/custom/MTLightText';
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions/actionCreator'
import MTMediumText from '../components/custom/MTMediumText';

const PersonalityResultPage = (props) => {

    const returnedObject = props.navigation.getParam('personalityResult')
    const [modalVisible, setModalVisible] = useState(false)
    const searchedTerm = useSelector(state => state.search)
    const newProfInfo = useSelector(state => state.newProfInfo)
    const userInfo = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    let completeProfessionalInformation = {...userInfo, ...newProfInfo, ...returnedObject}
    let dispatchObject;
    const completeCustomerInformation = {...userInfo, ...returnedObject}

    const postObjectForUpdatingProfessionalData = {
        "companyZipCode": completeProfessionalInformation.companyZipCode,
        "religiousPreference": completeProfessionalInformation.religiousPreference,
        "companyDescription": completeProfessionalInformation.companyDescription,
        "genderIdentity": completeProfessionalInformation.genderIdentity,
        "religiousPreferenceOpted": false,
        "inPersonMeetStatus": completeProfessionalInformation.inPersonMeetStatus,
        "verticalId": completeProfessionalInformation.verticalId,
        "companyMBTIResponse": completeProfessionalInformation.MBTI,
        "id": completeProfessionalInformation.id,
        "lgbtqSupportive": completeProfessionalInformation.lgbtqSupportive,
        "companyProfileImage": completeProfessionalInformation.companyProfilePhotoLink,
        "resilience": completeProfessionalInformation.resilience,
        "pricingModel": completeProfessionalInformation.pricingModel,
        "companyAddress": completeProfessionalInformation.companyAddress,
        "languagesSpoken": completeProfessionalInformation.spokenLanguages.length > 0 ? completeProfessionalInformation.spokenLanguages : [""],
        "virtualMeetStatus": completeProfessionalInformation.virtualMeetStatus,
        "racialIdentity": completeProfessionalInformation.racialIdentity,
        "companyName": completeProfessionalInformation.companyName,
        "reassurance": completeProfessionalInformation.reassurance,
        "recognition": completeProfessionalInformation.recognition,
        "companyCertifications": completeProfessionalInformation.companyCertifications.length > 0 ? completeProfessionalInformation.companyCertifications :  [""],
        "companyPhoneNumber": completeProfessionalInformation.companyPhoneNumber,
        "sodalytVerified": false,
        "companyEmail": completeProfessionalInformation.email,
        "respect": completeProfessionalInformation.respect,
        "websiteAddress": completeProfessionalInformation.companyWebsite,
        "corporateSustainabilityPolicyVerification": completeProfessionalInformation.corporateSustainabilityPolicyVerification,
        "responsibility": completeProfessionalInformation.responsibility,
        "companySpecialties": completeProfessionalInformation.companySpecialties.length > 0 ? completeProfessionalInformation.companySpecialties : [""],
        "price": completeProfessionalInformation.price.toString(),
        "sodalytType": completeProfessionalInformation.sodalytPreference.slice(4)
    }

    const updateWithFullProfInfo = async () => {
        try {

            const ENDPOINT = "https://08o65vjga3.execute-api.us-east-2.amazonaws.com/alpha/inputprofessionalinfo"
            
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', "application/json")
            const JSONPackage = JSON.stringify(postObjectForUpdatingProfessionalData)

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSONPackage,
                redirect: 'follow'
            }

            const response = await fetch(ENDPOINT, requestOptions)
            const alpha = await response.json()
            return alpha 

        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        if (userInfo.accountType === 'professional'){
            updateWithFullProfInfo().then(alpha => {
                console.log(alpha, "alpha")
               dispatchObject = {...completeProfessionalInformation, ...alpha}
            })
        } else {
            return
        }
    }, [])

    const modalOn = () => {
        setModalVisible(true)
    }

    const modalOff = () => {
        setModalVisible(false)
    }
   
    let archetype;
    let spec;
    let description;
    let iconName;
    let longFormDesc;

    let epilogue = "We recognize that every individual is a mixture of different personality types. This personality test result is simply your more dominant style. Since your dominant style is where you prefer to lean, we want to match your preference with the personality type which will lead to a quick relationship connection between you and the professional expert."

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

    typeHandler(returnedObject.MBTI)
    iconHandler()
    dispatch(actions.setCustomerDetails(returnedObject))
    if (dispatchObject){
        dispatch(actions.addToProfInfo(dispatchObject))
    }

    return ( 
        <View style={styles.screen}>
            <Modal visible={modalVisible}>
                <LearnMoreModal icon={iconName} archetype={archetype} archetypeDescription={longFormDesc} onPress={modalOff} />
            </Modal>
            <View>
                <MTBoldText style={{textAlign: 'center'}}>You belong to the group</MTBoldText>
                <MTBoldText style={{fontSize: 48}}>{archetype}</MTBoldText>
            </View>
            <View>
                {/* <MTBoldText style={{paddingTop: 20, textAlign: 'center'}}>Specifically, you're a {spec}</MTBoldText>
                <MTBoldText style={{padding: 20, textAlign: 'center'}}>These are individuals with the Meyers-Brigg type </MTBoldText>
                <MTBoldText  style={{padding: 8, textAlign: 'center', fontSize: 24}}>{returnedObject["MBTI"]}</MTBoldText> */}
            </View>
            <MaterialCommunityIcons 
            name={iconName} size={48} style={{marginTop: 10, padding: 5}} color="white" />
            <MTBoldText style={{padding: 20, textAlign: 'center'}}>{description}</MTBoldText>
            <View style={{padding: 18, justifyContent: 'center', alignItems: 'center'}}>
                <MTMediumText style={{fontSize: 14}}>{longFormDesc}</MTMediumText>
            </View>
          {  userInfo.accountType === 'customer' ? 
          <View style={styles.nextCont}>
                <CustomButton onPress={() => {
                        props.navigation.navigate({routeName: 'MainContent', params: {
                            search: searchedTerm
                        }})
                    }}  style={{backgroundColor: Colors.rugged.primary, width: '80%', height:45, marginBottom: 20}}>
                    <MTBoldText color="white" style={{fontSize: 16}}>Show Me My Personality Matches</MTBoldText>
                </CustomButton>
            </View> : 
            <View style={styles.nextCont}>
            <CustomButton onPress={() => {
                    props.navigation.navigate('MainProfessionalContent')
                }}  style={{backgroundColor: Colors.rugged.primary, width: '80%', marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                <MTBoldText color="white" style={{fontSize: 16}}> 
                Complete Registration 
                </MTBoldText>
            </CustomButton>
        </View>
        }
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 20}}>
                <CustomButton onPress={modalOn}  style={{backgroundColor: Colors.ocean.secondary, width: '40%', height:45}}>
                    <MTBoldText color="white" style={{fontSize: 16}}>Learn More</MTBoldText>
                </CustomButton>
            </View>
            <View style={styles.epilogueHolder}>
                <MTLightText style={{fontSize: 8, textAlign: 'center'}}>{epilogue}</MTLightText>
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
    },
    nextCont: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    epilogueHolder: {
        marginHorizontal: 15,
        marginTop: 50
    }
})
 
export default PersonalityResultPage;