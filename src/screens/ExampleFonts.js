import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import MainButton from '../components/custom/MainButton'
import Colors from '../constants/Colors'

const ExampleFonts = (props) => {
    return ( 
        <View style={styles.fontContainer}>
            <Text style={{fontFamily: 'tommy-reg', color: 'white', fontSize: 36}}>Tommy Regular</Text>
            <Text style={{fontFamily: 'tommy-reg-outline', color: 'white', fontSize: 36}}>Tommy Regular Outline</Text>
            <Text style={{fontFamily: 'tommy-light', color: 'white', fontSize: 36}}>Tommy Light</Text>
            <Text style={{fontFamily: 'tommy-light-outline', color: 'white', fontSize: 36}}>Tommy Light Outline</Text>
            <Text style={{fontFamily: 'tommy-bold', color: 'white', fontSize: 36}}>Tommy Bold</Text>
            <Text style={{fontFamily: 'tommy-bold-outline', color: 'white', fontSize: 36}}>Tommy Bold Outline</Text>
            <Text style={{fontFamily: 'tommy-extra-bold', color: 'white', fontSize: 36}}>Tommy Extra Bold</Text>
            <Text style={{fontFamily: 'tommy-extra-bold-outline', color: 'white', fontSize: 36}}>Tommy XB Outline</Text>
            <Text style={{fontFamily: 'tommy-medium', color: 'white', fontSize: 36}}>Tommy Medium</Text>
            <Text style={{fontFamily: 'tommy-medium-outline', color: 'white', fontSize: 36}}>Tommy Medium Outline</Text>
            <Text style={{fontFamily: 'tommy-thin', color: 'white', fontSize: 36}}>Tommy Thin</Text>
            <Text style={{fontFamily: 'tommy-thin-outline', color: 'white', fontSize: 36}}>Tommy Thin Outline</Text>
            <View style={styles.buttonHolder}>
                <MainButton onPress={props.onPress}>Toggle Screen</MainButton>
            </View>
        </View>
     );
}
 
styles = StyleSheet.create({
    fontContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: Colors.primary
    },
    buttonHolder: {
        paddingVertical: 10
    }
})

export default ExampleFonts;