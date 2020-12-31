import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Image, Dimensions} from 'react-native'
import Colors from '../constants/Colors'
import MTLightText from '../components/custom/MTLightText'

const LandingScreen = (props) => {

    return ( 
        <View style={styles.container}>
            <TouchableWithoutFeedback 
            onPress={
                () => {
                    props.navigation.navigate({routeName: 'LandingSearchScreen'})
                }
            }>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.headerImageContainer}>
                        <Image 
                        source={require('../images/box_crest_logo.png')}
                        style={styles.image} 
                        resizeMode='cover' />
                    </View>
                {/* testing */}
                    <View style={styles.imageContainer}>
                        <Image 
                        source={require('../images/logo_w_text.png')}
                        style={styles.image} 
                        resizeMode='cover' />
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <MTLightText style={styles.text}>Click Anywhere to Get Started</MTLightText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
     );
}
 

const styles = StyleSheet.create({
    headerImageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 18,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 18,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginBottom: Dimensions.get('window').height / 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.ocean.primary
    },
    image: {
       height: '100%',
       width: '100%'
    },
    text: {
        color: 'white',
        fontSize: 20,
        paddingTop: 50,
        textAlign: 'center' 
    }
})

export default LandingScreen;