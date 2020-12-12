import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView, Alert} from 'react-native'
import VerticalCategories from '../constants/verticalCategoriesData'
import MTBoldText from '../components/custom/MTBoldText'
import MTMediumText from '../components/custom/MTMediumText'
import MTLightText from '../components/custom/MTLightText'
import Input from '../components/custom/Input'
import Colors from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../store/actions/actionCreator'
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';

const ProfessionalSurveyScreenTwo = (props) => {

    const [verticalId, setVerticalId] = useState("")
    const [virtual, setVirtual] = useState(false)
    const [inPerson, setInPerson] = useState(false)
   
    const [hourly, setHourly] = useState(false)
    const [packageDeals, setPackageDeals] = useState(false)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [averageRate, setAverageRate] = useState(0)
   
    const [hasCSRP, setHasCSRP] = useState(false)
    const [lacksCSRP, setLacksCSRP] = useState(false)

    const [nsca, setNSCA] = useState(false)
    const [nasm, setNASM] = useState(false)
    const [acsm, setACSM] = useState(false)
    const [ace, setACE] = useState(false)
    const [crossfit, setCROSSFIT] = useState(false)
    const [cnc, setCNC] = useState(false)
    const [issa, setISSA] = useState(false)
    const [pn1, setPN1] = useState(false)
    const [nesta, setNESTA] = useState(false)
    const [afpa, setAFPA] = useState(false)

    const [athPerformance, setAthPerformance] = useState(false)
    const [strengthProgram, setStrengthProgram] = useState(false)
    const [injuryRelated, setInjuryRelated] = useState(false)
    const [genFitness, setGenFitness] = useState(false)
    const [nutrition, setNutrition] = useState(false)
    const [restorative, setRestorative] = useState(false)
    const [traumaIP, setTraumaIP] = useState(false)

    const dispatch = useDispatch();
    
    const dispatchObject = {
        verticalId: verticalId,
        inPersonMeetStatus: inPerson,
        virtualMeetStatus: virtual,
        pricingModel: hourly ? "hourly" : "package",
        price: averageRate,
        traumaIP: traumaIP,
        corporateSustainabilityPolicyVerification: hasCSRP,
        companyCertifications: [],
        companySpecialties: []
    }

    const generateDispatchObject = () => {
        if (nsca){
            dispatchObject.companyCertifications.push('NSCA')
        }
        if (nasm){
            dispatchObject.companyCertifications.push('NASM')
        }
        if (acsm){
            dispatchObject.companyCertifications.push('ACSM')
        }
        if (ace){
            dispatchObject.companyCertifications.push('ACE')
        }
        if (crossfit){
            dispatchObject.companyCertifications.push('Cross-Fit')
        }
        if (cnc){
            dispatchObject.companyCertifications.push('NASM CNC')
        }
        if (issa){
            dispatchObject.companyCertifications.push('ISSA')
        }
        if (pn1){
            dispatchObject.companyCertifications.push('PN1')
        }
        if (nesta){
            dispatchObject.companyCertifications.push('NESTA')
        }
        if (afpa){
            dispatchObject.companyCertifications.push('AFPA')
        }
        if (athPerformance){
            dispatchObject.companySpecialties.push('Atheltic Performance')
        }
        if (strengthProgram){
            dispatchObject.companySpecialties.push('Strength Training')
        }
        if (injuryRelated){
            dispatchObject.companySpecialties.push('Injury Related')
        }
        if (nutrition){
            dispatchObject.companySpecialties.push('Nutrition')
        }
        if (restorative){
            dispatchObject.companySpecialties.push('Restorative and Holistic')
        }
        if (genFitness){
            dispatchObject.companySpecialties.push('General Fitness')
        }
    }

    const verifyBasicObjectValues = () => {
        if (!virtual && !inPerson){
            return false
        } else if (!hourly && !packageDeals){
            return false
        } else if (!hasCSRP && !lacksCSRP){
            return false
        } else {
            return true
        }
    }

    const verifyAndDispatchObject = () => {
        if (verifyBasicObjectValues()){
            generateDispatchObject()
            dispatch(actions.addToProfInfo(dispatchObject))
            props.navigation.navigate('ProfessionalSurveyScreenThree')
        } else {
            Alert.alert('Wait!', "It appears one or more of your mandatory sections has been left blank. Double check your info before moving to the next form.", [{style: 'default', text: 'Ok'}])
        }
    }

    console.log(verticalId)
    return (
        <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
        <TouchableWithoutFeedback style={{alignItems: 'center'}} onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
            <View style={styles.banner}>
                <MTBoldText style={{color: Colors.ocean.primary, fontSize: 24}}>
                    Next, we gather information about the service you provide.
                </MTBoldText>
                <MTMediumText>
                  Service preferences will vary across different professions. If you do not see your profession listed, we are working on expanding this platform every day to encapsulate every field. You can help us expedite this process by emailing any questions or concerns to info@sodalyt.com.
                </MTMediumText>
            </View>
          {    verticalId.length > 0 ?
          <View style={styles.card}>
              <ScrollView>
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
                    verticalId === "1" ? 
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
            </View> : 
            <View style={{height: Dimensions.get('window').height / 2.1, justifyContent: 'center', alignItems: 'center'}}>
                  <DropDownPicker 
                    items={VerticalCategories.map(cat => {
                        return {label: cat.prompt, value: cat.id}
                    })}
                    placeholder="Select a category below"
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    containerStyle={{
                        height: 40, 
                        width: Dimensions.get('window').width / 1.5,
                        fontFamily: 'tommy-medium'
                    }}
                    onChangeItem={(item) => setVerticalId(item.value.toString())}
                />
            </View>
            }
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
        height: Dimensions.get('window').height / 5,
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
 
export default ProfessionalSurveyScreenTwo;