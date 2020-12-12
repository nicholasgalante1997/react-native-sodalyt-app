import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView, Alert} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import MTMediumText from '../components/custom/MTMediumText'
import MTLightText from '../components/custom/MTLightText'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../store/actions/actionCreator'
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';

const ProfessionalSurveyScreenThree = (props) => {

    const [lgbtqSupportive, setLGBTQSupportive] = useState(false)
    const [sansLQGBT, setSansLGBTQ] = useState(false)
   
    const [male, setMale] = useState(false)
    const [female, setFemale] = useState(false)

    const [racialIdentity, setRacialIdentity] = useState("")
    const [religiousPreference, setReligiousPreference] = useState("")

    const [spanish, setSpanish] = useState(false)
    const [chineseMandarin, setChineseMandarin] = useState(false)
    const [french, setFrench] = useState(false)
    const [arabic, setArabic] = useState(false)
    const [hindi, setHindi] = useState(false)
    const [portuguese, setPortuguese] = useState(false)
    const [banglaBengali, setBanglaBengali] = useState(false)
    const [russian, setRussian] = useState(false)
    const [japanese, setJapanese] = useState(false)
    const [punjabi, setPunjabi] = useState(false)

    const dispatch = useDispatch();
    
    const dispatchObject = {
       genderIdentity: male ? 'Male' : 'Female',
       lgbtqSupportive: lgbtqSupportive,
       religiousPreference: religiousPreference,
       religiousPreferenceOpted: false,
       racialIdentity: racialIdentity,
       spokenLanguages: []
    }

    const generateDispatchObject = () => {
        if (spanish){
            dispatchObject.spokenLanguages.push('Spanish')
        }
        if (chineseMandarin){
            dispatchObject.spokenLanguages.push('Chinese-Mandarin')
        }
        if (french){
            dispatchObject.spokenLanguages.push('French')
        }
        if (arabic){
            dispatchObject.spokenLanguages.push('Arabic')
        }
        if (hindi){
            dispatchObject.spokenLanguages.push('Hindi')
        }
        if (portuguese){
            dispatchObject.spokenLanguages.push('Portuguese')
        }
        if (banglaBengali){
            dispatchObject.spokenLanguages.push('Bangla/Bengali')
        }
        if (russian){
            dispatchObject.spokenLanguages.push('Russian')
        }
        if (japanese){
            dispatchObject.spokenLanguages.push('Japanese')
        }
        if (punjabi){
            dispatchObject.spokenLanguages.push('Punjabi')
        }
    }

    const verifyBasicObjectValues = () => {
        if (!male && !female){
            return false
        } else if (!lgbtqSupportive && !sansLQGBT){
            return false
        } else if (racialIdentity.length < 1){
            return false
        } else if (religiousPreference.length < 1){
            return false
        } else {
            return true
        }
    }

    const verifyAndDispatchObject = () => {
        if (verifyBasicObjectValues()){
            generateDispatchObject()
            dispatch(actions.addToProfInfo(dispatchObject))
            props.navigation.navigate('StoryCardPage')
        } else {
            Alert.alert('Wait!', "It appears one or more of your mandatory sections has been left blank. Double check your info before moving to the next form.", [{style: 'default', text: 'Ok'}])
        }
    }

    const newProfInfo = useSelector(state => state.newProfInfo)

    return ( 
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex: 1}}
      >
          <TouchableWithoutFeedback style={{alignItems: 'center'}} onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
              <View style={styles.banner}>
                  <MTBoldText style={{color: Colors.ocean.primary, fontSize: 24}}>
                      Now, we'd like to ask you about your company culture.
                  </MTBoldText>
                  <MTMediumText>
                      We absolutely understand that some questions are personal, but we still ask because it could be important to you. And it also might be important to your customer.
                  </MTMediumText>
              </View>
            <View style={styles.card}>
                <MTBoldText style={{color: 'black'}}>
                    How do you self-identify?
                </MTBoldText>
                <ScrollView style={{height: '110%'}}>
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
              </ScrollView>
              </View>
              <View style={{height: 150, width: Dimensions.get('window').width, justifyContent: 'center', alignItems:'center'}}> 
                    <TouchableWithoutFeedback onPress={verifyAndDispatchObject} style={{backgroundColor: Colors.ocean.secondary, height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{backgroundColor: Colors.ocean.secondary, height: 60, width: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                          <MTBoldText>
                              Next
                          </MTBoldText>
                      </View> 
                       </TouchableWithoutFeedback>
              </View>
          </View>   
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
     );
}
 
export default ProfessionalSurveyScreenThree;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    banner: {
        // marginTop: 20,
        alignItems: 'flex-start',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height / 6,
        backgroundColor: Colors.rugged.primary,
        padding: 10,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
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
 