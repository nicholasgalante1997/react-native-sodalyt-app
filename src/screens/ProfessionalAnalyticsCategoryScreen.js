import React, {useState} from 'react'
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
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
                <View style={{height: '45%', width: '50%', alignItems: 'center', backgroundColor: Colors.ocean.primary, borderRadius: 15, shadowColor: 'black', shadowOpacity: 0.36, shadowOffset: { width: 0, height: 2}, shadowRadius: 10, elevation: 3}}>
                    <View style={{marginVertical: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}> 
                        <MTBoldText>
                        Not So Fast! 
                    </MTBoldText>
                    <MaterialCommunityIcons name="clock-alert-outline" size={24} color="white" style={{marginLeft: 10}}/>
                    </View>
                    <View style={{marginVertical: 5, justifyContent: 'center', alignItems: 'center'}}> 
                        <MTMediumText style={{textAlign: 'center'}}>
                            The Sodalyt Professional Analytics Platform is something we're very excited to offer to our premium users.
                        </MTMediumText>
                        <MTMediumText style={{textAlign: 'center', marginVertical: 10}}>
                            Right now, we have an entire team of data scientists working hard to provide you with data you can use to better your business.
                        </MTMediumText>
                        <MTMediumText style={{textAlign: 'center'}}>
                            Check back in soon for updates on when the Analytics platform will be live. 
                        </MTMediumText>
                    </View>
                    <TouchableOpacity onPress={() => {setModal(false)}} style={{marginTop: 10}}>
                        <MTBoldText style={{color: Colors.rugged.primary}}>
                            Close
                        </MTBoldText>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={{height: '90%', width: '90%', justifyContent: 'center', alignItems: 'center',  shadowColor: 'black', shadowOpacity: 0.36, shadowOffset: { width: 0, height: 2}, shadowRadius: 10, elevation: 3,}}>
                <ScrollView contentContainerStyle={{width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <AnalyticsCard style={{backgroundColor: Colors.vertical.three}} prompt="User Analytics" icon="account-switch" blurb="Find out what's hot right now on our platform, which services are growing the fastest, and what our customers are searching for right now." onPress={() => setModal(true)} />
                    <AnalyticsCard style={{backgroundColor: Colors.vertical.five}} prompt="Service Analytics" icon="chart-bar-stacked" blurb="Get inside access to what professionals are doing within your field that works. What specialties are hot right now? What are my competitors doing to get ahead. Come find out." onPress={() => setModal(true)} />
                    <AnalyticsCard style={{backgroundColor: Colors.vertical.seven}} prompt="Personal Analytics" icon="chart-line-stacked" blurb="Discover how effective your marketing is! Get insights on how your Sodalyt profile is doing, in terms of page visits, customer conversions, and many more. " onPress={() => setModal(true)} />
                </ScrollView>
            </View>
        </View>
     );
}
 
export default ProAnalyticsScreen;