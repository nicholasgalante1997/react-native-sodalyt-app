import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import AnalyticsCard from '../components/custom/AnalyticsCard'
import Colors from '../constants/Colors'

const ProAnalyticsScreen = (props) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: '90%', width: '90%', justifyContent: 'center', alignItems: 'center',  shadowColor: 'black', shadowOpacity: 0.36, shadowOffset: { width: 0, height: 2}, shadowRadius: 10, elevation: 3,}}>
                <ScrollView contentContainerStyle={{width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <AnalyticsCard style={{backgroundColor: Colors.vertical.three}} prompt="User Analytics" icon="account-switch" blurb="Find out what's hot right now on our platform, which services are growing the fastest, and what our customers are searching for right now." />
                    <AnalyticsCard style={{backgroundColor: Colors.vertical.five}} prompt="Service Analytics" icon="chart-bar-stacked" blurb="Get inside access to what professionals are doing within your field that works. What specialties are hot right now? What are my competitors doing to get ahead. Come find out." />
                    <AnalyticsCard style={{backgroundColor: Colors.vertical.seven}} prompt="Personal Analytics" icon="chart-line-stacked" blurb="Discover how effective your marketing is! Get insights on how your Sodalyt profile is doing, in terms of page visits, customer conversions, and many more. " />
                </ScrollView>
            </View>
        </View>
     );
}
 
export default ProAnalyticsScreen;