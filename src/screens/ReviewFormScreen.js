import React , {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors'
import {AntDesign} from '@expo/vector-icons'
import Input from '../components/custom/Input';

const ReviewFormScreen = (props) => {

    const [firstStar, setFirstStar] = useState(false)
    const [secondStar, setSecondStar] = useState(false)
    const [thirdStar, setThirdStar] = useState(false)
    const [fourthStar, setFourthStar] = useState(false)
    const [fifthStar, setFifthStar] = useState(false)

    const toggleFirstStar = () => {
        if (secondStar){
            return
        } else {
        const currValue = firstStar
        setFirstStar(!currValue)
        }
    }

    const toggleSecondStar = () => {
        if (thirdStar){
            return
        } else {
       if (secondStar){
            setSecondStar(false)
            setFirstStar(false)
       } else {
           setSecondStar(true)
           setFirstStar(true)
       }
        }
    }

    const toggleThirdStar = () => {
        if (fourthStar){
            return 
        } else {
        if (thirdStar){
            setThirdStar(false)
            setSecondStar(false)
            setFirstStar(false)
        } else {
            setFirstStar(true)
            setSecondStar(true)
            setThirdStar(true)
        }}
    }

    const toggleFourthStar = () => {
        if (fifthStar){
            return
        } else {
            if (fourthStar){
                setFourthStar(false)
                setThirdStar(false)
                setSecondStar(false)
                setFirstStar(false)
            } else {
                setFourthStar(true)
                setFirstStar(true)
                setSecondStar(true)
                setThirdStar(true)
            }}
    }

    const toggleFifthStar = () => {
        if (fifthStar){
            setFifthStar(false)
            setFourthStar(false)
            setThirdStar(false)
            setSecondStar(false)
            setFirstStar(false)
        } else {
            setFifthStar(true)
            setFourthStar(true)
            setFirstStar(true)
            setSecondStar(true)
            setThirdStar(true)
        }
    }



    return (  
    
    <TouchableWithoutFeedback style={{flex: 1, alignItems: 'center'}} onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
            <View style={styles.topHolder}>
            <MTBoldText style={{marginBottom: 20}}>Leave a review for {props.prof}</MTBoldText>
            <View style={styles.starHolder}>
                <TouchableOpacity onPress={toggleFirstStar}>
                        { firstStar ?  <AntDesign name="star" size={48} color={Colors.ocean.primary} /> : <AntDesign name="staro" size={48} color={Colors.ocean.primary} /> }
                    </TouchableOpacity>
                <TouchableOpacity onPress={toggleSecondStar}>
                    { secondStar ?  <AntDesign name="star" size={48} color={Colors.ocean.primary} /> : <AntDesign name="staro" size={48} color={Colors.ocean.primary} /> }
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleThirdStar}>
                    { thirdStar ?  <AntDesign name="star" size={48} color={Colors.ocean.primary} /> : <AntDesign name="staro" size={48} color={Colors.ocean.primary} /> }
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleFourthStar}>
                    { fourthStar ?  <AntDesign name="star" size={48} color={Colors.ocean.primary} /> : <AntDesign name="staro" size={48} color={Colors.ocean.primary} /> }
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleFifthStar}>
                    { fifthStar ?  <AntDesign name="star" size={48} color={Colors.ocean.primary} /> : <AntDesign name="staro" size={48} color={Colors.ocean.primary} /> }
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.reviewHolder}>
                <TextInput 
                editable
                maxLength={40}
                multiline
                numberOfLines={4}
                placeholder="leave a review" />
            </View>
            <View style={styles.submitHolder}>
                <View style={styles.button}>
                    <MTBoldText>Submit</MTBoldText>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.ocean.primary
    },
    topHolder: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginTop: 80
    },
    starHolder: {
        flexDirection: 'row',
        width: '90%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reviewHolder: {
        width: Dimensions.get('window').width * 0.95,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 40,
        height: 100,
        padding: 10
    },
    submitHolder: {
        marginTop: 50
    },
    button: {
        backgroundColor: Colors.rugged.primary,
        width: 90,
        height: 90,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default ReviewFormScreen;