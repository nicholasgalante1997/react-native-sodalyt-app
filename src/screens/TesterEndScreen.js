import React from 'react';
import {View, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors'
import MTBoldText from '../components/custom/MTBoldText'
import MTMediumText from '../components/custom/MTMediumText';

const TesterEndScreen = (props) => {
    return ( 
        <View style={styles.screen}>
            <View style={styles.iconHolder}>
                    <AntDesign name="pushpino" size={48} color="white" />
            </View>
            <View style={styles.title}>
                <MTBoldText style={styles.titleText}>Let's Put A Pin In It!</MTBoldText>
            </View>
            <View style={styles.blurb}>
                <MTMediumText style={styles.blurbText}>We hope you enjoyed the Sodalyt Personality Test Beta! We really appreciate you taking the time to help make our test model more accurate! We think you rock for that!</MTMediumText>
            </View>
            <View style={styles.blurb}>
                <MTMediumText style={styles.blurbText}>Although that's it for now, check back in shortly! We here at Sodalyt are hard at work on the secret recipe for successful customer-professional relationships, and for helping us do that better, you'll have first access to all the convenient and cool features that we roll out right here on the Sodalyt Beta.</MTMediumText>
            </View>
            <View style={styles.homeIcon}>
                    <AntDesign name="home" size={32} color="white" onPress={() => {
                        props.navigation.navigate('Welcome')
                    }}/>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconHolder: {
        height: 84,
        width: 84,
        borderRadius: 42,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    title: {
        paddingTop: 20
    },
    titleText: {
        fontSize: 24
    },
    blurb: {
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    blurbText: {
        textAlign:  'center'
    },
    homeIcon: {
        height: 56,
        width: 56,
        borderRadius: 28,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.rugged.primary,
        marginTop: 8
    }
})
export default TesterEndScreen;