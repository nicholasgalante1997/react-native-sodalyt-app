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
import Input from '../components/custom/Input'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../store/actions/actionCreator'
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';

const ProfessionalDashboard = (props) => {


    const [modalVisible, setModalVisible] = useState(false)
    const proUserInfo = useSelector(state => state.newProfInfo)
    const reviews = useSelector(state => state.reviews)

    // Survey One
    const [companyName, setCompanyName] = useState(proUserInfo.companyName)
    const [companyAddress, setCompanyAddress] = useState(proUserInfo.companyAddress)
    const [companyZipCode, setCompanyZipCode] = useState(proUserInfo.companyZipCode)
    const [compState, setCompState] = useState('TX')
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState(proUserInfo.companyPhoneNumber)
    const [companyWebsite, setCompanyWebsite] = useState(proUserInfo.companyWebsite)
    const [companyProfilePhotoLink, setCompanyProfilePhotoLink] = useState(proUserInfo.companyProfileImage)
    const [companyDesc, setCompanyDesc] = useState(proUserInfo.companyDescription)

    // Survey Two
    const [virtual, setVirtual] = useState(proUserInfo.virtualMeetStatus)
    const [inPerson, setInPerson] = useState(proUserInfo.inPersonMeetStatus)
   
    const [hourly, setHourly] = useState(proUserInfo.pricingModel === 'hourly' ? true : false)
    const [packageDeals, setPackageDeals] = useState(proUserInfo.pricingModel === 'package' ? true : false)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [averageRate, setAverageRate] = useState(proUserInfo.price)
   
    const [hasCSRP, setHasCSRP] = useState(proUserInfo.corporateSustainabilityPolicyVerification ? true : false)
    const [lacksCSRP, setLacksCSRP] = useState(proUserInfo.corporateSustainabilityPolicyVerification ? false : true)

    const [nsca, setNSCA] = useState(proUserInfo.companyCertifications.includes('NSCA'))
    const [nasm, setNASM] = useState(proUserInfo.companyCertifications.includes('NASM'))
    const [acsm, setACSM] = useState(proUserInfo.companyCertifications.includes('ACSM'))
    const [ace, setACE] = useState(proUserInfo.companyCertifications.includes('ACE'))
    const [crossfit, setCROSSFIT] = useState(proUserInfo.companyCertifications.includes('Cross-Fit'))
    const [cnc, setCNC] = useState(proUserInfo.companyCertifications.includes('NASM-CNC'))
    const [issa, setISSA] = useState(proUserInfo.companyCertifications.includes('ISSA'))
    const [pn1, setPN1] = useState(proUserInfo.companyCertifications.includes('PN1'))
    const [nesta, setNESTA] = useState(proUserInfo.companyCertifications.includes('NESTA'))
    const [afpa, setAFPA] = useState(proUserInfo.companyCertifications.includes('AFPA'))

    const [athPerformance, setAthPerformance] = useState(proUserInfo.companySpecialties.includes('Athletic Performance'))
    const [strengthProgram, setStrengthProgram] = useState(proUserInfo.companySpecialties.includes('Strength Training'))
    const [injuryRelated, setInjuryRelated] = useState(proUserInfo.companySpecialties.includes('Injury Related'))
    const [genFitness, setGenFitness] = useState(proUserInfo.companySpecialties.includes('General Fitness'))
    const [nutrition, setNutrition] = useState(proUserInfo.companySpecialties.includes('Nutrition'))
    const [restorative, setRestorative] = useState(proUserInfo.companySpecialties.includes('Restorative and Holistic'))
    const [traumaIP, setTraumaIP] = useState(proUserInfo.traumaIP)

    // Survey Three 
    const [lgbtqSupportive, setLGBTQSupportive] = useState(proUserInfo.lgbtqSupportive)
    const [sansLQGBT, setSansLGBTQ] = useState(proUserInfo.lgbtqSupportive ? false : true)
   
    const [male, setMale] = useState(proUserInfo.genderIdentity === 'Male' ? true : false)
    const [female, setFemale] = useState(proUserInfo.genderIdentity === 'Female' ? true : false)

    const [racialIdentity, setRacialIdentity] = useState(proUserInfo.racialIdentity)
    const [religiousPreference, setReligiousPreference] = useState(proUserInfo.religiousPreference)

    const [spanish, setSpanish] = useState(proUserInfo.spokenLanguages.includes('Spanish'))
    const [chineseMandarin, setChineseMandarin] = useState(proUserInfo.spokenLanguages.includes('Chinese-Mandarin'))
    const [french, setFrench] = useState(proUserInfo.spokenLanguages.includes('French'))
    const [arabic, setArabic] = useState(proUserInfo.spokenLanguages.includes('Arabic'))
    const [hindi, setHindi] = useState(proUserInfo.spokenLanguages.includes('Hindi'))
    const [portuguese, setPortuguese] = useState(proUserInfo.spokenLanguages.includes('Portuguese'))
    const [banglaBengali, setBanglaBengali] = useState(proUserInfo.spokenLanguages.includes('Bangla/Bengali'))
    const [russian, setRussian] = useState(proUserInfo.spokenLanguages.includes('Russian'))
    const [japanese, setJapanese] = useState(proUserInfo.spokenLanguages.includes('Japanese'))
    const [punjabi, setPunjabi] = useState(proUserInfo.spokenLanguages.includes('Punjabi'))

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

   const EditCompanyInfoModal = (props) => {
       return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex: 1}}
      >
          <TouchableWithoutFeedback style={{alignItems: 'center'}} onPress={Keyboard.dismiss}>
           <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <View style={styles.card}>
                    <View style={{borderRadius: 15, width: '100%', height: '5%', justifyContent: 'center', alignItems: 'center'}}>
                        <MTBoldText style={{color: Colors.ocean.primary}}>Edit Info</MTBoldText>
                    </View>
                    <ScrollView>
                        {/* General Info */}
                        <MTMediumText style={{color: 'black'}}>
                            Company Name*
                        </MTMediumText>
                            <Input 
                            style={{
                                    width: '90%',
                                    fontFamily: 'tommy-light'
                                }}
                            blurOnSubmit 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            keyboardType="default" 
                            value={companyName}
                            onChangeText={(text) => setCompanyName(text)}
                            placeholder="The Best Company Inc."
                            placeholderTextColor='#C7CBCE'
                            />
                 <MTMediumText style={{color: 'black'}}>
                    Company Address*
                </MTMediumText>
                        <Input 
                        style={{
                                width: '90%',
                                fontFamily: 'tommy-light'
                            }}
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="default" 
                        value={companyAddress}
                        onChangeText={(text) => setCompanyAddress(text)}
                        placeholder="123 Best Street"
                        placeholderTextColor='#C7CBCE'
                        />
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <MTMediumText style={{color: 'black', marginRight: 5}}>
                    State*
                </MTMediumText>
                        <Input 
                        style={{
                                width: '10%',
                                fontFamily: 'tommy-light'
                            }}
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="default" 
                        value={compState}
                        onChangeText={(text) => setCompState(text)}
                        placeholder="TX"
                        placeholderTextColor='#C7CBCE'
                        />
                <MTMediumText style={{color: 'black', marginRight: 5}}>
                    Zip Code*
                </MTMediumText>
                        <Input 
                        style={{
                                width: '30%',
                                fontFamily: 'tommy-light',
                                textAlign: 'center'
                            }}
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="numeric" 
                        value={companyZipCode}
                        onChangeText={(text) => setCompanyZipCode(text)}
                        placeholder="00000"
                        placeholderTextColor='#C7CBCE'
                        />
                </View>
                <MTMediumText style={{color: 'black'}}>
                    Phone Number*
                </MTMediumText>
                        <Input 
                        style={{
                                width: '90%',
                                fontFamily: 'tommy-light'
                            }}
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="default" 
                        value={companyPhoneNumber}
                        onChangeText={(text) => setCompanyPhoneNumber(text)}
                        placeholder="(xxx) xxx-xxxx"
                        placeholderTextColor='#C7CBCE'
                        />
                <MTMediumText style={{color: 'black'}}>
                    Company Website*
                </MTMediumText>
                        <Input 
                        style={{
                                width: '90%',
                                fontFamily: 'tommy-light'
                            }}
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="default" 
                        value={companyWebsite}
                        onChangeText={(text) => setCompanyWebsite(text)}
                        placeholder="www.thebestcompany.com"
                        placeholderTextColor='#C7CBCE'
                        />
                  <MTMediumText style={{color: 'black'}}>
                    Company Profile Photo URL*
                </MTMediumText>
                        <Input 
                        style={{
                                width: '90%',
                                fontFamily: 'tommy-light'
                            }}
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="default" 
                        value={companyProfilePhotoLink}
                        onChangeText={(text) => setCompanyProfilePhotoLink(text)}
                        placeholder="https://images.unsplash.com/photo-1607637433813-9e3c41861836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
                        placeholderTextColor='#C7CBCE'
                        />
                  <MTMediumText style={{color: 'black'}}>
                    Company Blurb*
                </MTMediumText>
                    <Input 
                    style={{
                            width: '90%',
                            fontFamily: 'tommy-light'
                        }}
                    ellipsizeMode="tail"
                    blurOnSubmit 
                    autoCapitalize="none" 
                    multiline={true}
                    editable={true}
                    autoCorrect={false} 
                    keyboardType="default" 
                    value={companyDesc}
                    onChangeText={(text) => setCompanyDesc(text)}
                    placeholder="A little about you..."
                    placeholderTextColor='#C7CBCE'
                    />

                    {/* Culture  */}
                    <MTBoldText style={{color: 'black', marginTop: 10}}>
                    Gender*
                </MTBoldText>
                  <View style={{flexDirection: 'row', width: '90%',  justifyContent: 'space-between', alignItems: 'center'}}>
                      <MTBoldText style={{color: 'black'}}>Male</MTBoldText>
                      <CheckBox 
                          checked={male} 
                          onPress={() => {
                              const currValue = male
                              setMale(!currValue)
                              if (!male && female){
                                  setFemale(false)
                              }
                          }}
                          checkedColor={Colors.rugged.primary}
                      />
                      <MTBoldText style={{color: 'black'}}>Female</MTBoldText>
                      <CheckBox 
                          checked={female} 
                          onPress={() => {
                              const currValue = female;
                              setFemale(!currValue)
                              if (!female && male){
                                  setMale(false)
                              }
                          }}
                          checkedColor={Colors.rugged.primary}
                      />
                  </View>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '20%'}}>
                            <MTBoldText style={{color: 'black'}}>
                                Race*
                            </MTBoldText>
                        </View>
                        <View style={{width: '80%'}}>
                            <DropDownPicker 
                                style={{zIndex: 10}}
                                items={[
                                   {label: "Hispanic", value: "Hispanic"},
                                    {label: "White", value: "White"},
                                    {label: "Black", value: "Black"},
                                    {label: 'Asian', value: "Asian" },
                                    {label: "Native American", value: "Native American"},
                                   {label: "Pacific Islander", value: "Pacific Islander"},
                                   {label: "Asian-Subcontinent", value: "Asian-Subcontinent"}
                                ]}
                                placeholder="Select a category below"
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                containerStyle={{
                                    height: 40, 
                                    fontFamily: 'tommy-medium',
                                }}
                                onChangeItem={(item) => setRacialIdentity(item.value)}
                            />
                    </View>
                </View>
                <View style={{zIndex: -1, marginTop: 10}}>
                            <MTBoldText style={{color: 'black'}}>
                                What languages do you offer?
                            </MTBoldText>
                            <CheckBox
                                checked={spanish}
                                title="Spanish"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = spanish
                                    setSpanish(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                            <CheckBox
                                checked={chineseMandarin}
                                title="Chinese-Mandarin"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = chineseMandarin
                                    setChineseMandarin(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={french}
                                title="French"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = french
                                    setFrench(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={arabic}
                                title="Arabic"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = arabic
                                    setArabic(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={hindi}
                                title="Hindi"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = hindi
                                    setHindi(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={portuguese}
                                title="Portuguese"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = portuguese
                                    setPortuguese(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={banglaBengali}
                                title="Bangla/Bengali"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = banglaBengali
                                    setBanglaBengali(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={russian}
                                title="Russian"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = russian
                                    setRussian(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={japanese}
                                title="Japanese"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = japanese
                                    setJapanese(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                             <CheckBox
                                checked={punjabi}
                                title="Punjabi"
                                textStyle={{fontFamily: 'tommy-reg'}}
                                onPress={() => {
                                    const currValue = punjabi
                                    setPunjabi(!currValue)
                                }}
                                checkedColor={Colors.ocean.primary}
                            />
                        </View>
                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '60%'}}>
                            <MTBoldText style={{color: 'black', zIndex: 0}}>
                                Religious Preference*
                            </MTBoldText>
                        </View>
                        <View style={{width: '40%'}}>
                            <DropDownPicker 
                                style={{zIndex: 10}}
                                items={[
                                   {label: "Christianity", value: "Christianity"},
                                    {label: "Judaism", value: "Judaism"},
                                    {label: "Islam", value: "Islam"},
                                    {label: 'Other', value: "Other" },
                                    {label: "No Preference", value: "No Preference"}
                                ]}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                placeholder="Select"
                                dropDownMaxHeight={85}
                                containerStyle={{
                                    height: 40, 
                                    fontFamily: 'tommy-medium'
                                }}
                                onChangeItem={(item) => setReligiousPreference(item.value)}
                            />
                    </View>
                </View>
                <View style={{zIndex: -1, marginTop: 10}}>
                <MTLightText style={{color: 'black'}}>
                    Is your company an LGBTQ Supportive Company?*
                  </MTLightText>
                  <View style={{flexDirection: 'row', width: '90%',  justifyContent: 'space-between', alignItems: 'center'}}>
                      <MTBoldText style={{color: 'black'}}>Yes</MTBoldText>
                      <CheckBox 
                          checked={lgbtqSupportive} 
                          onPress={() => {
                              const currValue = lgbtqSupportive
                              setLGBTQSupportive(!currValue)
                              if (!lgbtqSupportive && sansLQGBT){
                                  setSansLGBTQ(false)
                              }
                          }}
                          checkedColor={Colors.rugged.primary}
                        />
                      <MTBoldText style={{color: 'black'}}>No</MTBoldText>
                      <CheckBox 
                          checked={sansLQGBT} 
                          onPress={() => {
                              const currValue = sansLQGBT
                              setSansLGBTQ(!currValue)
                              if (!sansLQGBT && lgbtqSupportive){
                                  setLGBTQSupportive(false)
                              }
                          }}
                          checkedColor={Colors.rugged.primary}
                        />
                    </View> 
                </View>

                    {/* Service Info */}    
                    
                    <MTLightText style={{color: 'black'}}>
                    We know times have changed, how do you offer your service now?*
                </MTLightText>
                <MTLightText style={{color: 'black'}}>
                 (You can select both)
                </MTLightText>
                <View style={{flexDirection: 'row', width: '90%',  justifyContent: 'space-between', alignItems: 'center'}}>
                    <MTBoldText style={{color: 'black'}}>Virtual</MTBoldText>
                    <CheckBox 
                        checked={virtual} 
                        onPress={() => {
                            const currValue = virtual
                            setVirtual(!currValue)
                        }}
                        checkedColor={Colors.rugged.primary}
                    />
                    <MTBoldText style={{color: 'black'}}>In Person</MTBoldText>
                    <CheckBox 
                        checked={inPerson} 
                        onPress={() => {
                            const currValue = inPerson;
                            setInPerson(!currValue)
                        }}
                        checkedColor={Colors.rugged.primary}
                    />
                </View>
                <MTLightText style={{color: 'black'}}>
                  Do you charge by the hour or offer package deals?*
                </MTLightText>
                <View style={{flexDirection: 'row', width: '90%',  justifyContent: 'space-between', alignItems: 'center'}}>
                    <MTBoldText style={{color: 'black'}}>Hourly</MTBoldText>
                    <CheckBox 
                        checked={hourly} 
                        onPress={() => {
                            const currValue = hourly
                            setHourly(!currValue)
                            if (!hourly && packageDeals){
                                setPackageDeals(false)
                            }
                        }}
                        checkedColor={Colors.rugged.primary}
                    />
                    <MTBoldText style={{color: 'black'}}>Package</MTBoldText>
                    <CheckBox 
                        checked={packageDeals} 
                        onPress={() => {
                            const currValue = packageDeals;
                            setPackageDeals(!currValue)
                            if (hourly && !packageDeals){
                                setHourly(false)
                            }
                        }}
                        checkedColor={Colors.rugged.primary}
                    />
                </View>
                {
                    hourly ? 
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 20}}>
                        <MTLightText style={{color: 'black'}}>
                            Min $
                        </MTLightText>
                        <Input 
                            style={{
                                    width: '15%',
                                    fontFamily: 'tommy-light',
                                    textAlign: 'center'
                                }}
                            blurOnSubmit 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            keyboardType="numeric" 
                            value={minPrice}
                            onChangeText={(text) => setMinPrice(text.toString())}
                            placeholder="25"
                            placeholderTextColor='#C7CBCE'
                            />
                            <MTLightText style={{color: 'black'}}>
                            Max $
                        </MTLightText>
                        <Input 
                            style={{
                                    width: '15%',
                                    fontFamily: 'tommy-light',
                                    textAlign: 'center'
                                }}
                            blurOnSubmit 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            keyboardType="numeric" 
                            value={maxPrice}
                            onChangeText={(text) => setMaxPrice(text.toString())}
                            placeholder="500"
                            placeholderTextColor='#C7CBCE'
                            />
                            <MTLightText style={{color: 'black'}}>
                            Avg. Rate
                        </MTLightText>
                        <Input 
                            style={{
                                    width: '15%',
                                    fontFamily: 'tommy-light',
                                    textAlign: 'center'
                                }}
                            blurOnSubmit 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            keyboardType="numeric" 
                            value={averageRate}
                            onChangeText={(text) => setAverageRate(text.toString())}
                            placeholder="100$"
                            placeholderTextColor='#C7CBCE'
                            />
                    </View> : null
                }
                <MTLightText style={{color: 'black', marginTop: 10}}>
                    Does your company have a Corporate Sustainability and Responsibility Policy?*
                </MTLightText>
                <View style={{flexDirection: 'row', width: '90%',  justifyContent: 'space-between', alignItems: 'center'}}>
                    <MTBoldText style={{color: 'black'}}>Yes</MTBoldText>
                    <CheckBox 
                        checked={hasCSRP} 
                        onPress={() => {
                            const currValue = hasCSRP
                            setHasCSRP(!currValue)
                            if (!hasCSRP && lacksCSRP){
                                setLacksCSRP(false)
                            }
                        }}
                        checkedColor={Colors.rugged.primary}
                    />
                    <MTBoldText style={{color: 'black'}}>No</MTBoldText>
                    <CheckBox 
                        checked={lacksCSRP} 
                        onPress={() => {
                            const currValue = lacksCSRP;
                            setLacksCSRP(!currValue)
                            if (!lacksCSRP && hasCSRP){
                                setHasCSRP(false)
                            }
                        }}
                        checkedColor={Colors.rugged.primary}
                    />
                </View>
                    {
                        proUserInfo.verticalId === "1" ? 
                    <View>
                        <MTBoldText style={{color: 'black'}}>
                            Licensing and Certifications
                        </MTBoldText>
                        <MTLightText style={{color: 'black'}}>
                            Select All That Apply
                        </MTLightText>
                        <CheckBox 
                            title="Trauma Informed Practitioner"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={traumaIP} 
                            onPress={() => {
                                const currValue = traumaIP
                                setTraumaIP(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                        <CheckBox 
                            title="NSCA"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={nsca} 
                            onPress={() => {
                                const currValue = nsca
                                setNSCA(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="NASM"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={nasm} 
                            onPress={() => {
                                const currValue = nasm
                                setNASM(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="ACSM"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={acsm} 
                            onPress={() => {
                                const currValue = acsm
                                setACSM(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="ACE"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={ace} 
                            onPress={() => {
                                const currValue = ace
                                setACE(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="Cross-Fit"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={crossfit} 
                            onPress={() => {
                                const currValue = crossfit
                                setCROSSFIT(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="NASM-CNC"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={cnc} 
                            onPress={() => {
                                const currValue = cnc
                                setCNC(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="ISSA"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={issa} 
                            onPress={() => {
                                const currValue = issa
                                setISSA(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="PN1"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={pn1} 
                            onPress={() => {
                                const currValue = pn1
                                setPN1(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="NESTA"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={nesta} 
                            onPress={() => {
                                const currValue = nesta
                                setNESTA(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="AFPA"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={afpa} 
                            onPress={() => {
                                const currValue = afpa
                                setAFPA(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                        <MTBoldText style={{color: 'black'}}>
                            Do you provide any specialty services?
                        </MTBoldText>
                        <MTLightText style={{color: 'black'}}>
                            Select All That Apply
                        </MTLightText>
                        <CheckBox 
                            title="Athletic Performance Training"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={athPerformance} 
                            onPress={() => {
                                const currValue = athPerformance
                                setAthPerformance(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="Strength Program"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={strengthProgram} 
                            onPress={() => {
                                const currValue = strengthProgram
                                setStrengthProgram(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="Injury Related"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={injuryRelated} 
                            onPress={() => {
                                const currValue = injuryRelated
                                setInjuryRelated(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="General Fitness"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={genFitness} 
                            onPress={() => {
                                const currValue = genFitness
                                setGenFitness(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="Nutrition Specialist"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={nutrition} 
                            onPress={() => {
                                const currValue = nutrition
                                setNutrition(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                         <CheckBox 
                            title="Restorative and Holistic"
                            textStyle={{fontFamily: 'tommy-light'}}
                            checked={restorative} 
                            onPress={() => {
                                const currValue = restorative
                                setRestorative(!currValue)
                            }}
                            checkedColor={Colors.rugged.primary}
                        />
                    </View> : null
                    }
                    </ScrollView>  
                    <TouchableWithoutFeedback style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => setModalVisible(false)}>
                    <View style={{borderRadius: 15, width: '100%', height: '10%', borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
                        <MTBoldText style={{color: 'black'}}>
                            Save
                        </MTBoldText>
                    </View>   
                    </TouchableWithoutFeedback>
               </View>
           </View>
           </TouchableWithoutFeedback>
           </KeyboardAvoidingView>
       )
   }

    return ( 
        <View style={styles.screen}>
            <Modal isVisible={modalVisible}>
                <EditCompanyInfoModal onPress={modalOff} />
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
                        <FontAwesome name="gear" size={32} color="white" onPress={() => setModalVisible(true)} />
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