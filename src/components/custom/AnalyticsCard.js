import { MaterialCommunityIcons } from '@expo/vector-icons'
import { internet } from 'faker'
import React from 'react'
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import MTBoldText from './MTBoldText'
import MTMediumText from './MTMediumText'

// Professional analytics screen. This is a container for analytics, looks like a 
// Big rectangular button with a name on internet. 
const AnalyticsCard = (props) => {
    return ( 
        <TouchableOpacity style={styles.gridItem} onPress={props.onPress}>
            {/* Made with touchableOpacity so it can be clicked one
            TouchableOpacity can be clicked on so gets onPress prop from parent 
            navigation function passed down through props instead of passing navigation down 
            to this component */}
        <View style={{...styles.container, ...props.style}}>
            {/* Style prop to change style if want to be in line with parent container 
            Overwrites any styles in this initial styles.container */}
            <MaterialCommunityIcons color="white" size={24} name={props.icon} />
            <MTBoldText style={styles.title}>
                {props.prompt}
            </MTBoldText>
            {/* //props.prompt what you want it to say as a heading, props.blurb is text underneath it */}
            <MTMediumText style={{textAlign: 'center', fontSize: 12}}>
            {props.blurb}
            </MTMediumText>
        </View>
    </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        width: Dimensions.get('window').width * 0.8,
        marginVertical: 20
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 20,
        color: 'white'
    }
})
 
export default AnalyticsCard;