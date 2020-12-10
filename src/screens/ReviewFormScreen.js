import React , {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors'
import {AntDesign} from '@expo/vector-icons'
import Input from '../components/custom/Input';
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions/actionCreator'
import Modal from 'react-native-modal'
import SuccessfulPostModal from '../components/explore/SuccessfulPostModal'

const ReviewFormScreen = (props) => {

    const [firstStar, setFirstStar] = useState(false)
    const [secondStar, setSecondStar] = useState(false)
    const [thirdStar, setThirdStar] = useState(false)
    const [fourthStar, setFourthStar] = useState(false)
    const [fifthStar, setFifthStar] = useState(false)

    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState(0)
    const [submittedReviewStatusObject, setSubmittedReviewStatusObject] = useState({})
    const [successfulPost, setSuccessfulPost] = useState(false)

    const dispatch = useDispatch();

    const modalOff = () => {
        setSuccessfulPost(false)
    }

    const resetState = () => {
        setFirstStar(false)
        setSecondStar(false)
        setThirdStar(false)
        setFourthStar(false)
        setFifthStar(false)
        setReviewText("")
        setRating("")
    }
    
    console.log(submittedReviewStatusObject)

    const currentUser = useSelector(state => state.userDetails)
    const professionalId = props.navigation.getParam('professionalId')

    const postObject = {
        "customerId": currentUser.id,
        "professionalId": professionalId,
        "rating": rating,
        "review": reviewText
    }

    const tryCatchReviewPost = async function () {
        try {
            const ENDPOINT = "https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/getreviews/makereview"
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            const payload = JSON.stringify(postObject)

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: payload,
                redirect: 'follow'
            }
            const response = await fetch(ENDPOINT, requestOptions);
            const responseObject = response.json();
            return responseObject;
        } catch (err) {
            console.log(err)
        }
    }

    const handlePress = async function () {
        try {
            const returnedReview = await tryCatchReviewPost();
            dispatch(actions.addReview(returnedReview))
            resetState();
            setSuccessfulPost(true)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangeText = (textInput) => {
        setReviewText(textInput)
    }

    const toggleFirstStar = () => {
        if (secondStar){
            return
        } else if (firstStar){
            setFirstStar(false)
            setRating(0)
        } else {
            setFirstStar(true)
            setRating(1)
        }
    }

    const toggleSecondStar = () => {
        if (thirdStar){
            return
        } else {
       if (secondStar){
            setSecondStar(false)
            setFirstStar(false)
            setRating(0)
       } else {
           setSecondStar(true)
           setFirstStar(true)
           setRating(2)
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
            setRating(0)
        } else {
            setFirstStar(true)
            setSecondStar(true)
            setThirdStar(true)
            setRating(3)
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
                setRating(0)
            } else {
                setFourthStar(true)
                setFirstStar(true)
                setSecondStar(true)
                setThirdStar(true)
                setRating(4)
            }}
    }

    const toggleFifthStar = () => {
        if (fifthStar){
            setFifthStar(false)
            setFourthStar(false)
            setThirdStar(false)
            setSecondStar(false)
            setFirstStar(false)
            setRating(0)
        } else {
            setFifthStar(true)
            setFourthStar(true)
            setFirstStar(true)
            setSecondStar(true)
            setThirdStar(true)
            setRating(5)
        }
    } 

    return (  
    
    <TouchableWithoutFeedback style={{flex: 1, alignItems: 'center'}} onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
            <Modal isVisible={successfulPost}>
                <SuccessfulPostModal onPress={modalOff} />
            </Modal>
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
                placeholder="leave a review" 
                value={reviewText} 
                onChangeText={handleChangeText}/>
            </View>

            <View style={styles.submitHolder}>
                <TouchableOpacity style={{height: '100%', width: '100%'}} onPress={handlePress} >
                    <View style={styles.button}>
                    <MTBoldText>Submit</MTBoldText>
                </View>
                </TouchableOpacity>
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