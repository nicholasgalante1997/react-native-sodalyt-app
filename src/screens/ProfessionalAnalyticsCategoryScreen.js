import React, {useState} from 'react'
import {View, StyleSheet, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AnalyticsCard from '../components/custom/AnalyticsCard'
import MTBoldText from '../components/custom/MTBoldText'
import MTMediumText from '../components/custom/MTMediumText'
import Colors from '../constants/Colors'
import Modal from 'react-native-modal'

const ProAnalyticsScreen = (props) => {

    const [modal, setModal] = useState(false)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Modal isVisible={modal} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '70%',height: '30%', alignItems: 'center', backgroundColor: Colors.ocean.primary, borderRadius: 15, shadowColor: 'black', shadowOpacity: 0.36, shadowOffset: { width: 0, height: 2}, shadowRadius: 10, elevation: 3, padding: 8}}>
                    <View style={{marginVertical: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}> 
                        <MTBoldText>
                        Not So Fast! 
                    </MTBoldText>
                    <MaterialCommunityIcons name="clock-alert-outline" size={24} color="white" style={{marginLeft: 10}}/>
                    </View>
                    <View style={{marginTop: 5, justifyContent: 'center', alignItems: 'center'}}> 
                        <MTMediumText style={{textAlign: 'center'}}>
                         We are just as excited as you to get our nerd on with this Dashboard!
                        </MTMediumText>
                        <MTMediumText style={{textAlign: 'center', marginVertical: 10}}>
                        As our data scientists and visualization wizards develop these spaces, we will send you a notification when to come back and play. 
                        </MTMediumText>
                    </View>
                    <View style={{width: Dimensions.get('window').width * 0.4, height: '12%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 15, marginTop: 10}}>
                        <TouchableOpacity  onPress={() => {setModal(false)}} >
                            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <MTBoldText style={{color: Colors.rugged.primary}}>
                            Close
                            </MTBoldText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={{height: '90%', width: '90%', justifyContent: 'center', alignItems: 'center',  shadowColor: 'black', shadowOpacity: 0.36, shadowOffset: { width: 0, height: 2}, shadowRadius: 10, elevation: 3,}}>
                <ScrollView contentContainerStyle={{width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <AnalyticsCard style={{backgroundColor: Colors.ocean.secondary}} prompt="Lead Generation Analytics" icon="account-switch" blurb="Here's Looking At You Kid" onPress={() => setModal(true)} />
                    <AnalyticsCard style={{backgroundColor: Colors.rugged.primary}} prompt="Service Analytics" icon="chart-bar-stacked" blurb="What's Trending" onPress={() => setModal(true)} />
                    <AnalyticsCard style={{backgroundColor: Colors.ocean.primary}} prompt="Competitive Intelligence" icon="chart-line-stacked" blurb="How Do You Compare To The Industry" onPress={() => setModal(true)} />
                </ScrollView>
            </View>
        </View>
     );
}
 
export default ProAnalyticsScreen;