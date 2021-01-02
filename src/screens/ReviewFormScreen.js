import React , {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import Colors from '../constants/Colors'
import {AntDesign} from '@expo/vector-icons'
import Input from '../components/custom/Input';
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions/actionCreator'
import Modal from 'react-native-modal'
import SuccessfulPostModal from '../components/explore/SuccessfulPostModal'

const ReviewFormScreen = (props) => {

    // If you tap a star, gives an ability to turn rating off and tap another star will change the star for the new rating 
    // Manages each individual star
    const [firstStar, setFirstStar] = useState(false)
    const [secondStar, setSecondStar] = useState(false)
    const [thirdStar, setThirdStar] = useState(false)
    const [fourthStar, setFourthStar] = useState(false)
    const [fifthStar, setFifthStar] = useState(false)

    // Text of review
    const [reviewText, setReviewText] = useState("")
    // Rating set for post object
    const [rating, setRating] = useState(0)
    // const [submittedReviewStatusObject, setSubmittedReviewStatusObject] = useState({})
    const [successfulPost, setSuccessfulPost] = useState(false)

    const dispatch = useDispatch();

    const modalOff = () => {
        setSuccessfulPost(false)
    }

    // Called after successfully posting a review and resetting the inputs
    const resetState = () => {
        setFirstStar(false)
        setSecondStar(false)
        setThirdStar(false)
        setFourthStar(false)
        setFifthStar(false)
        setReviewText("")
        setRating("")
    }

    // Use the user's ID for review
    const currentUser = useSelector(state => state.userDetails)
    // Get the professional ID for the review from navigation param
    const professionalId = props.navigation.getParam('professionalId')

    //4 things back end needs for post for a review
    const postObject = {
        "customerId": currentUser.id,
        "professionalId": professionalId,
        "rating": rating,
        "review": reviewText
    }

    // Posting a review 
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

    // Click listener for submitting the review
    const handlePress = async function () {
        try {
            const returnedReview = await tryCatchReviewPost();
            // Changing state
            dispatch(actions.addReview(returnedReview))
            resetState();
            // alert that review has been posted
            setSuccessfulPost(true)
        } catch (err) {
            console.log(err)
        }
    }


    const handleChangeText = (textInput) => {
        setReviewText(textInput)
    }

    // Set up that when you click on a star, it is the new rating and stars are illuminated
    // Second tap will remove the star being selected

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

    // Makes sure review is the correct size and is not empty
    const verifyReview = () => {
        if (rating === 0){
            return false
        } else if (reviewText.length < 5){
            return false
        } else if (reviewText.length > 150){
            return false
        } else {
            return true
        }
    }

    const verifyAndHandlePost = () => {
        if (verifyReview()){
            // if verified, handle the click, if not send the alert
            handlePress()
        } else {
            Alert.alert("Oops!", "Reviews must have a rating, and must be more than 5 characters, and less than 150.", [{style: 'default', text: "Got it!"}])
        }
    }

    return (  
    
    <TouchableWithoutFeedback style={{flex: 1, alignItems: 'center'}} onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
        {/* For the successful post */}
            <Modal isVisible={successfulPost}>
                <SuccessfulPostModal onPress={modalOff} />
            </Modal>
            {/* topHolder has to do with stars. Each star is touchableOpacity with an icon on it
            Filled in versus empty star */}
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
            {/* Editable means you can drag, copy, cut, paste text 
            maxLength of 40 is not a max character it's a max characters per line
            multiline so it doesnt just keep expanding and using ellipses to the right, it goes down
            Max number of lines is 4 so ellipses doesnt go up 
            value and onChangeText to control this textInput form */}
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

            {/* Submit button for the review */}
            <View style={styles.submitHolder}>
                <TouchableOpacity style={{height: '100%', width: '100%'}} onPress={verifyAndHandlePost} >
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