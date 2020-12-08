import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions, ScrollView, Platform, FlatList} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText';
import MTMediumText from '../components/custom/MTMediumText';
import MTLightText from '../components/custom/MTLightText'
import Colors from '../constants/Colors'
import Modal from 'react-native-modal'
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'
import CustomAlert from '../components/custom/CustomDevelopmentAlert'
import {useSelector} from 'react-redux'

const ProfessionalUserShowPage = (props) => {

    const thisExpert = props.navigation.getParam('thisExpert')
    const currentUser = useSelector(state => state.userDetails)
    const filters = useSelector(state => state.filters)
    const [modalVisible, setModalVisible] = useState(false)
    const [reviews, setReviews] = useState([])

    const fetchReviews = async function () {
        try {

            let myHeaders = new Headers ();
            myHeaders.append ('Content-Type', 'application/json');

            const content = { 
                "professionalId": thisExpert.id.toString()
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
        fetchReviews().then(reviews => setReviews(reviews))
    }, [])

    const modalOn = () => {
        setModalVisible(true)
    }

    const modalOff = () => {
        setModalVisible(false)
    }

    const matchedOn = () => {
        let obj = {
            langs: [],
            religiousPref: "",
            race: "",
            lgbtqSupportive: false,
            CSR: false
        }

        for (const lang in filters.cultural.language){
            if (filters.cultural.language[lang]){
                obj.langs.push(lang)
            }
        }

        for (const relig in filters.cultural.religion){
            if (filters.cultural.religion[relig]){
                obj.religiousPref = `${relig}`
            }
        }
        
        for (const race in filters.cultural.race){
            if (filters.cultural.race[race]){
                obj.race = `${race}`
            }
        }

        if (filters.cultural.lgbtq.supportive){
            obj.lgbtqSupportive = true;
        }

        if (filters.service.corporateSustainabilityPolicy){
            obj.CSR = true;
        }

        return obj;
    }

   const matchedOnObject = matchedOn()

   console.log(thisExpert)
   console.log(reviews)

    return ( 
        <View style={styles.screen}>
            <Modal isVisible={modalVisible}>
                <CustomAlert onPress={modalOff} />
            </Modal>
             <ScrollView style={styles.body}>
            <View style={styles.header}>
                <View style={styles.imageHolder}>
                    <Image source={{uri: thisExpert.companyProfileImage}} style={{height: '100%', width: "100%", resizeMode: 'stretch'}}/>
                </View>
                <View style={{ height: '100%', width: '70%'}}>
                    <MTBoldText style={styles.headerText}>
                            {thisExpert.companyName} {thisExpert.sodalytVerified ? <Feather name="check-circle" size={24} color="white" /> : null} 
                    </MTBoldText>
                    <MTBoldText style={{color: Colors.rugged.primary}}>
                        {thisExpert.dynamicMeyersBriggsPercentage} % Match
                    </MTBoldText>
                  <MTMediumText style={{paddingRight: 5}}>
                      About Me: {thisExpert.companyDescription}
                  </MTMediumText>
                </View>
            </View>
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Let's get in touch!</MTBoldText>
                        <MTMediumText>{thisExpert.companyAddress} {thisExpert.companyZipCode}</MTMediumText>
                        <MTMediumText>Call us at {thisExpert.companyPhoneNumber}</MTMediumText>
                        <MTMediumText>Or you can find us online at <MTLightText style={{color: Colors.rugged.primary}}>{thisExpert.websiteAddress}</MTLightText></MTMediumText>
                       <MTMediumText>Want to set up an appointment? Reach us at {thisExpert.companyEmail} </MTMediumText>
                    </View>
                    <View style={styles.specs}>
                    <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Specialties and Certifications</MTBoldText>
                    {thisExpert.companyCertifications.map( c => <MTLightText>{c}</MTLightText>)}
                    {thisExpert.companySpecialties.map( s => <MTLightText>{s}</MTLightText>)}
                    </View>
                    <View style={styles.contact}>
                    <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Meeting Experience</MTBoldText>
                        {thisExpert.virtualMeetStatus ? <MTMediumText>Offers Virtual Meetings</MTMediumText> : null }
                        {thisExpert.inPersonMeetStatus ? <MTMediumText>Offers In Person Meetings</MTMediumText> : null }
                    </View>
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>This expert offers {thisExpert.pricingModel} price deals.</MTBoldText>
                        <MTMediumText>Rates from the expert: {thisExpert.price} $</MTMediumText>
                    </View>
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>You Matched On</MTBoldText>
                            {matchedOnObject.langs.length > 0 ? <MTBoldText>Languages Offered: {matchedOnObject.langs.map(lang => <MTLightText>{lang + ", "}</MTLightText>)}</MTBoldText> : null}
                            {matchedOnObject.religiousPref.length > 0 ? <MTBoldText>Religious Preference: <MTLightText>{matchedOnObject.religiousPref}</MTLightText></MTBoldText> : null}
                            {matchedOnObject.race.length > 0 ? <MTBoldText>Self Identifies as <MTLightText>{matchedOnObject.race}</MTLightText></MTBoldText> : null}
                            {matchedOnObject.lgbtqSupportive ? <MTBoldText>LGBTQ Supportive <Feather name="check-circle" size={12} color="white" /></MTBoldText> : null}
                            {matchedOnObject.CSR ? <MTBoldText>Corporate Sustainability Policy <Feather name="check-circle" size={12} color="white" /></MTBoldText> : null}
                    </View>
                    <View style={styles.review}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Sodalyt Reviews</MTBoldText>
                        <FlatList data={reviews} keyExtractor={(item) => item.reviewId} renderItem={(itemData) => <MTLightText>{itemData.item.review}</MTLightText>} />
                    </View>
                </ScrollView>
            <View style={{backgroundColor: Colors.rugged.primary, height: 60, width: 60, borderRadius: 30, position: "absolute", bottom: 30, right: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 name="pen-alt" size={32} color="white" onPress={() => {
                            props.navigation.navigate('ReviewScreen')
                        }}/>
            </View>
        </View>
     );
}

ProfessionalUserShowPage.navigationOptions = navData => {

    const thisExpert = navData.navigation.getParam('thisExpert') 

    return {
        headerTitle: thisExpert.companyName,
        headerTitleStyle: {
            fontFamily: 'tommy-bold',
            color: Colors.ocean.primary
        },
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title="Chat" 
                iconName="message-reply-text" 
                onPress={() => {
                    console.log('click')
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
    }
})
 
export default ProfessionalUserShowPage;