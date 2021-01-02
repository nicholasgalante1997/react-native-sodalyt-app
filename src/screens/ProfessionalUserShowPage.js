import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions, ScrollView, Platform, FlatList, TouchableOpacity, Alert, Linking} from 'react-native'
import callNumber from '../utilities/callNumberFunction'
// import * as Linking from 'expo-linking';
import MTBoldText from '../components/custom/MTBoldText';
import MTMediumText from '../components/custom/MTMediumText';
import MTLightText from '../components/custom/MTLightText'
import Colors from '../constants/Colors'
import Modal from 'react-native-modal'
import { Entypo, Feather, FontAwesome5, AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, Octicons} from '@expo/vector-icons'; 
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'
import CustomAlert from '../components/custom/CustomDevelopmentAlert'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions/actionCreator'

// From this screen, I can leave a review, which is ReviewFormScreen
const ProfessionalUserShowPage = (props) => {

    // When you click on image of company, you pass a navigation param that is alled this expert. Retrieved here
    // Single source of truth, user only knows about one professional show page at a time. For the expert
    const thisExpert = props.navigation.getParam('thisExpert')
    //Need currentUsers details to give a rating. 
    // We also give an opportunity for user to give a review and need currentUser's ID to do so 
    const currentUser = useSelector(state => state.userDetails)
    // Pull in the filters because in Professional show page has a matched on 
    // Can see i.e. Professional that matches the certifications you requested while entering search
    const filters = useSelector(state => state.filters)
    const [modalVisible, setModalVisible] = useState(false)
    // const [reviews, setReviews] = useState([])'

    // Reviews belong to a professional user 
    // On component load of professional user 
    // Professional user ID is the only requirement for the fetch 
    // That fetch is in fetch Reviews a couple of lines below
    const reviews = useSelector(state => state.reviews)

    const dispatch = useDispatch();

    // console.log(thisExpert)

    const fetchReviews = async function () {
        try {

            let myHeaders = new Headers();
            myHeaders.append ('Content-Type', 'application/json');

            // JSON being sent to post
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

      // State only handles one professionals reviews at a time 
    useEffect(() => {
        fetchReviews().then(reviews => dispatch(actions.setReviews(reviews)))
    }, [])

    const modalOn = () => {
        setModalVisible(true)
    }

    const modalOff = () => {
        setModalVisible(false)
    }

    // This is how we determine what filters we're on in redux state and what the customer user 
    // and the professional user matched on
    // A ton of conditional checks to see what matches are on and off
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

    // Generates stars for reviews
    const starGenerator = (itemData, returnIcon) => {
        let a = []
        for (let i=1; i < parseInt(itemData.item.rating); i++){
            a.push(returnIcon)
        }
        return a
    }

    // matchedOn handles filters on creation and returns an object, we use this matchedOn() to return 

   const matchedOnObject = matchedOn()

   const phoneCall = () => {
       const phoneNumber = thisExpert.companyPhoneNumber
       Linking.openURL(`tel:${phoneNumber}`)
   }

   const textMessage = () => {
    const phoneNumber = thisExpert.companyPhoneNumber
    const defaultMessage = `Hello! We matched on Sodalyt! I'm looking for an expert in...`
    Linking.openURL(`sms:${phoneNumber}&body=${defaultMessage}`)
    //   Linking.openURL(`sms:${phoneNumber}?body=${defaultMessage}`) For Android
   }

   const sendEmail = () => {
       const email = thisExpert.companyEmail;
        Linking.openURL(`mailto:${email}`)
    }

    const visitWebpage = () => {
        const onlineAddress = thisExpert.websiteAddress
        Linking.openURL(`https:${onlineAddress}`)
    }


    // Use a FlatList to render reviews. This is the renderItem for that FlatList
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

//    console.log(thisExpert)
//    console.log(reviews)

    return ( 
        <View style={styles.screen}>
            <Modal isVisible={modalVisible}>
                <CustomAlert onPress={modalOff} />
            </Modal>
             <ScrollView style={styles.body}>
             {/* Header with image, company name, little description and option to favorite the app. All in the top and in different color */}
            <View style={styles.header}>
                <View style={styles.imageHolder}>
                    <Image source={{uri: thisExpert.companyProfileImage}} style={{height: '100%', width: "100%", resizeMode: 'stretch'}}/>
                </View>
                <View style={{ height: '100%', width: '70%'}}>
                    <MTBoldText style={styles.headerText}>
                            {thisExpert.companyName} {thisExpert.sodalytVerified ? <Feather name="check-circle" size={24} color="white" /> : null} 
                    </MTBoldText>
                    <View style={{justifyContent: 'flex-start', alignItems: 'center', borderRadius: 15, flexDirection: 'row'}}>
                        <View  style={{justifyContent: 'center', width: '70%'}}>
                            <MTBoldText>{thisExpert.companyDescription}</MTBoldText>
                        </View>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}} onPress={() => Alert.alert("Great!", "You've added this professional to your favorites!", [{style: 'default', text: 'Ok'}])}>
                            <AntDesign name="heart" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
                {/* Contact for phone, email, text, etc. */}
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Let's get in touch!</MTBoldText>
                        <View style={{width: '90%', height: 70, backgroundColor: Colors.rugged.primary, alignSelf: 'center', borderRadius: 20, shadowColor: 'black', shadowOpacity: 0.36, shadowOffset: { width: 0, height: 2}, shadowRadius: 10, elevation: 3, marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: 'white'}}>
                                <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={phoneCall}>
                                <Entypo name="phone" size={28} color={Colors.ocean.primary} />
                                </TouchableOpacity>
                            </View>
                            <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: 'white'}}>
                                <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={textMessage}>
                                    <MaterialIcons name="textsms" size={28} color={Colors.ocean.primary}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: 'white'}}>
                                <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={sendEmail}>
                                <MaterialCommunityIcons name="email-check" size={24} color={Colors.ocean.primary} />
                                </TouchableOpacity>
                            </View>
                            <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: 'white'}}>
                                <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={visitWebpage}>
                           <Octicons name="browser" size={24} color={Colors.ocean.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                {/* Specs are specialties and certifications */}
                    <View style={styles.specs}>
                    <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Specialties and Certifications</MTBoldText>
                    {thisExpert.companyCertifications.map( c => <MTLightText>{c}</MTLightText>)}
                    {thisExpert.companySpecialties.map( s => <MTLightText>{s}</MTLightText>)}
                    </View>
                Rules for contacting people in person or social distancing rules
                    <View style={styles.contact}>
                    <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Meeting Experience</MTBoldText>
                        {thisExpert.virtualMeetStatus ? <MTMediumText>Offers Virtual Meetings</MTMediumText> : null }
                        {thisExpert.inPersonMeetStatus ? <MTMediumText>Offers In Person Meetings</MTMediumText> : null }
                    </View>
                    <View style={styles.contact}>
                    <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Company Location</MTBoldText>
                        <MTMediumText>
                            {thisExpert.companyAddress}, {thisExpert.companyZipCode}
                        </MTMediumText>
                    </View>
                    {/* Hourly rates */}
                    <View style={styles.contact}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>This expert offers {thisExpert.pricingModel} price deals.</MTBoldText>
                        <MTMediumText>Rates from the expert: {thisExpert.price} $</MTMediumText>
                    </View>
                    <View style={styles.contact}>
                    {/* Using matchOn() object in this view to determine what the customer and professional users matched 
                    Based on certain qualities of that matchedOn() object can let us know if its language filter, religious Pref
                    other categories noted below. i.e. Corporate Sustainability Responsibilites 
                    This is why we have matchedOn() object */}
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>You Matched On</MTBoldText>
                            <MTBoldText>You had a match percentage of {thisExpert.dynamicMeyersBriggsPercentage}%</MTBoldText>
                            {matchedOnObject.langs.length > 0 ? <MTBoldText>Languages Offered: {matchedOnObject.langs.map(lang => <MTLightText>{lang + ", "}</MTLightText>)}</MTBoldText> : null}
                            {matchedOnObject.religiousPref.length > 0 ? <MTBoldText>Religious Preference: <MTLightText>{matchedOnObject.religiousPref}</MTLightText></MTBoldText> : null}
                            {matchedOnObject.race.length > 0 ? <MTBoldText>Self Identifies as <MTLightText>{matchedOnObject.race}</MTLightText></MTBoldText> : null}
                            {matchedOnObject.lgbtqSupportive ? <MTBoldText>LGBTQ Supportive <Feather name="check-circle" size={12} color="white" /></MTBoldText> : null}
                            {matchedOnObject.CSR ? <MTBoldText>Corporate Sustainability Policy <Feather name="check-circle" size={12} color="white" /></MTBoldText> : null}
                    </View>
                    {/* The reviews and we use a FlatList to render all the reviews  */}
                    <View style={styles.review}>
                        <MTBoldText style={{fontSize: 20, marginBottom: 5}}>Sodalyt Reviews</MTBoldText>
                        <FlatList data={reviews} keyExtractor={(item) => item.reviewId} renderItem={(itemData) => ReviewRenderItem(itemData)} />
                    </View>
                </ScrollView>
            <View style={{backgroundColor: Colors.rugged.primary, height: 60, width: 60, borderRadius: 30, position: "absolute", bottom: 30, right: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 name="pen-alt" size={32} color="white" onPress={() => {
                            props.navigation.navigate ({
                                routeName: 'ReviewScreen',
                                params: {
                                  professionalId: thisExpert.id
                                },
                              });
                        }}/>
            </View>
        </View>
     );
}

// Dynamically set a header 
// Want to set a professional show page header to the company name 
// Do that by passing a param from our component outside of our component
// All the way from the top of our component
// We picked up the expert on the first line that was passed to this component
// Doing something similar here where we want to set dynamic headers or dynamic navigation options 
// Have to do it in the same place we assigned new values before it gets to the object 
ProfessionalUserShowPage.navigationOptions = navData => {

    // similar to props.navigation, we have navData.navigation, which gets the Param of the Expert 
    const thisExpert = navData.navigation.getParam('thisExpert') 

    // We return the object we want to correlate for this specific component
    // This is dynamic now based on each .companyName
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
        height: Dimensions.get('window').height / 10,
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