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

    const dispatch = useDispatch();
    const newProfInfo = useSelector(state => state.newProfInfo)
    const dispatchObject = {
       
    }

    const verifyObjectValues = () => {
        
    }

    const verifyAndDispatchObject = () => {
        if (verifyObjectValues()){
            dispatch(actions.addToProfInfo(dispatchObject))
            props.navigation.navigate('ProfessionalSurveyScreenThree')
        } else {
            Alert.alert('Wait!', "It appears one or more of your sections have been filled in incorrectly. Double check your info before moving to the next form.", [{style: 'default', text: 'Ok'}])
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
                    We know times have changed, how do you offer your service now?
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
                  Do you charge by the hour or offer package deals?
                </MTLightText>
                <View style={{flexDirection: 'row', width: '90%',  justifyContent: 'space-between', alignItems: 'center'}}>
                    <MTBoldText style={{color: 'black'}}>Hourly</MTBoldText>
                    <CheckBox 
                        checked={hourly} 
                        onPress={() => {
                            const currValue = hourly
                            setHourly(!currValue)
                        }}
                        checkedColor={Colors.rugged.primary}
                    />
                    <MTBoldText style={{color: 'black'}}>Package</MTBoldText>
                    <CheckBox 
                        checked={packageDeals} 
                        onPress={() => {
                            const currValue = packageDeals;
                            setPackageDeals(!currValue)
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
        width: Dimensions.get('window').width * 0.6,
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