import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions, ScrollView, Platform, FlatList, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText';
import MTMediumText from '../components/custom/MTMediumText';
import MTLightText from '../components/custom/MTLightText'
import Colors from '../constants/Colors'
import Modal from 'react-native-modal'
import { Feather, FontAwesome } from '@expo/vector-icons'; 
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../store/actions/actionCreator'
import InitialLoadModal from '../components/custom/InitialLoadModal'

const ProfessionalDashboard = (props) => {


    const [modalVisible, setModalVisible] = useState(false)
    const proUserInfo = useSelector(state => state.newProfInfo)
    const reviews = useSelector(state => state.reviews)

    const dispatch = useDispatch();

    const fetchReviews = async function () {
        try {

            let myHeaders = new Headers();
            myHeaders.append ('Content-Type', 'application/json');

            const content = { 
                "professionalId": proUserInfo.id
            } 

            const JSONPackage = JSON.stringify(content)

            const ENDPOINT = "https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/getreviews/getprofessionalreviews";

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSONPackage,
                redirect: 'follow'
            }

            let response = await fetch(ENDPOINT, requestOptions);
            let reviews = await response.json()
            return reviews

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchReviews().then(reviews => dispatch(actions.setReviews(reviews)))
    }, [])

    useEffect(() => {
        props.navigation.setParams({companyName: proUserInfo.companyName})
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setModalVisible(true)
        }, 1000)
    }, [])

    const modalOn = () => {
        setModalVisible(true)
    }

    const modalOff = () => {
        setModalVisible(false)
    }

    const starGenerator = (itemData, returnIcon) => {
        let a = []
        for (let i=1; i < parseInt(itemData.item.rating); i++){
            a.push(returnIcon)
        }
        return a
    }

   const ReviewRenderItem = (itemData) => {
       return (
           <View style={{height: 40, width: Dimensions.get('window').width * 0.9, alignSelf: 'center', backgroundColor: Colors.ocean.secondary, padding: 8}}>
               <View style={{flexDirection: 'row', height: '85%', width: '100%', justifyContent: 'space-between'}}>
                   <View style={{width: '75%'}}>
                   <MTMediumText
                        style={{fontSize: 8}}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {itemData.item.review}
                    </MTMediumText>
                   </View>
                   <View style={{flexDirection: 'row'}}>
                        {
                    starGenerator(itemData, <Feather name="star" size={20} color="white" />)
                    }
                   </View>
               </View>
                <MTLightText style={{fontSize: 6, textAlign: 'right'}}>{itemData.item.timeCreated}</MTLightText>
           </View>
       )
   }

    return ( 
        <View style={styles.screen}>
            <Modal isVisible={modalVisible}>
                    <InitialLoadModal onPress={modalOff} companyName={proUserInfo.companyName}/>
            </Modal>
             <ScrollView style={styles.body}>
            <View style={styles.header}>
                <View style={styles.imageHolder}>
                    <Image source={{uri: proUserInfo.companyProfileImage}} style={{height: '100%', width: "100%", resizeMode: 'stretch'}}/>
                </View>
                <View style={{ height: '100%', width: '70%'}}>
                    <MTBoldText style={styles.headerText}>
                            {proUserInfo.companyName} { proUserInfo.sodalytVerified ? <Feather name="check-circle" size={24} color="white" /> : null} 
                    </MTBoldText>
                  <MTMediumText style={{paddingRight: 5}}>
                      About Me: {proUserInfo.companyDescription}
                  </MTMediumText>
                </View>
            </View>
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Let's get in touch!</MTBoldText>
                        <MTMediumText>{proUserInfo.companyAddress} {proUserInfo.companyZipCode}</MTMediumText>
                        <MTMediumText>Call us at {proUserInfo.companyPhoneNumber}</MTMediumText>
                        <MTMediumText>Or you can find us online at <MTLightText style={{color: Colors.rugged.primary}}>{proUserInfo.companyWebsite}</MTLightText></MTMediumText>
                       <MTMediumText>Want to set up an appointment? Reach us at {proUserInfo.companyEmail} </MTMediumText>
                    </View>
                    <View style={styles.specs}>
                    <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Specialties and Certifications</MTBoldText>
                    {proUserInfo.companyCertifications.map( c => <MTLightText>{c}</MTLightText>)}
                    {proUserInfo.companySpecialties.map( s => <MTLightText>{s}</MTLightText>)}
                    </View>
                    <View style={styles.contact}>
                    <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Meeting Experience</MTBoldText>
                        {proUserInfo.virtualMeetStatus ? <MTMediumText>Offers Virtual Meetings</MTMediumText> : null }
                        {proUserInfo.inPersonMeetStatus ? <MTMediumText>Offers In Person Meetings</MTMediumText> : null }
                    </View>
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>This expert offers {proUserInfo.pricingModel} price deals.</MTBoldText>
                      {  proUserInfo. pricingModel === 'hourly' ? <MTMediumText>Rates from the expert: {proUserInfo.price} $</MTMediumText> : null}
                    </View>
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>You Matched On</MTBoldText>
                            {proUserInfo.spokenLanguages.length > 0 ? <MTBoldText>Languages Offered: {proUserInfo.spokenLanguages.map(lang => <MTLightText>{lang + ", "}</MTLightText>)}</MTBoldText> : null}
                            {proUserInfo.religiousPreference.length > 0 ? <MTBoldText>Religious Preference: <MTLightText>{proUserInfo.religiousPreference}</MTLightText></MTBoldText> : null}
                            {proUserInfo.racialIdentity.length > 0 ? <MTBoldText>Self Identifies as <MTLightText>{proUserInfo.racialIdentity}</MTLightText></MTBoldText> : null}
                            {proUserInfo.lgbtqSupportive ? <MTBoldText>LGBTQ Supportive <Feather name="check-circle" size={12} color="white" /></MTBoldText> : null}
                            {proUserInfo.corporateSustainabilityPolicyVerification ? <MTBoldText>Corporate Sustainability Policy <Feather name="check-circle" size={12} color="white" /></MTBoldText> : null}
                    </View>
                    <View style={styles.review}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Sodalyt Reviews</MTBoldText>
                        <FlatList data={reviews} keyExtractor={(item) => item.reviewId} renderItem={(itemData) => ReviewRenderItem(itemData)} />
                    </View>
                </ScrollView>
            <View style={{backgroundColor: Colors.rugged.primary, height: 60, width: 60, borderRadius: 30, position: "absolute", bottom: 30, right: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome name="gear" size={32} color="white" onPress={() => {
                            props.navigation.navigate({routeName: "EditInfo", params: {...proUserInfo}})
            }} />
            </View>
        </View>
     );
}

ProfessionalDashboard.navigationOptions = navData => {
    const companyName = navData.navigation.getParam('companyName')
    return {
        headerTitle: companyName,
        headerTitleStyle: {
            fontFamily: 'tommy-bold',
            color: Colors.ocean.primary
        },
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title="Chat" 
                iconName="checkbox-marked-circle-outline" 
                onPress={() => {
                    console.log('click')
                }} />
            </HeaderButtons>
        ),
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title="Analytics" 
            iconName="chart-bar" 
            onPress={() => {
                navData.navigation.navigate('Analytics')
            }} />
        </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    review: {
        marginTop: 5,
        padding: 7
    },
    body: {
        backgroundColor: Colors.ocean.primary,
        // height: Dimensions.get('window').height / 6 * 5,
        height: '100%',
        width: '100%'
    },
    contact: {
        marginVertical: 5,
        padding: 7
    },
    specs: {
        marginVertical: 5,
        padding: 7
    },
    header: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 6,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: Colors.ocean.secondary,
    },
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center',
      height: '90%',
      width: '30%',
      marginHorizontal: 10,
      backgroundColor: 'white'
    },
    headerText: {
        fontSize: 24,
        textAlign: 'left'
    },
    card: {
        marginTop: 40,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height / 2.1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10
    }
})
 
export default ProfessionalDashboard;