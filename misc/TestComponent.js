import React from 'react';
import MainButton from '../src/components/custom/MainButton'
import {View, StyleSheet} from 'react-native'
import Colors from '../src/constants/Colors'

const TestComp = (props) => {

    const testData = {
        "email": "nicholas.galante@sodalyt.com",
        "password": "sodalyt",
        "kearsey-one": "The Artist/The Explorer",
        "kearsey-two": "The Artist/The Explorer",
        "kearsey-three": "The Guardian/The Sentinel",
        "respect": "Weekly",
        "responsibility": "I made sure we had a plan to keep communications open.",
        "recognition": "An Earthly Token",
        "resilience": "Leave everything where it is and get back to Earth as quickly as possible; help the aliens from a quarantine pod on Earth.",
        "reassurance": "You tell them you are not sure what to do, but that you will help them figure it out together.",
        "E": "2",
        "I": "1",
        "S": "3",
        "N": "0",
        "J": "1",
        "P": "2",
        "T": "2",
        "F": "1",
    }

    const postToSageMakerEndPoint = () => {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify(testData);
        // create a JSON object with parameters for API call and store in a variable
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://c0eezw8cga.execute-api.us-east-2.amazonaws.com/mbti-1/mbti-predictor", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result, "response from the server")

            // props.navigation.navigate({routeName: 'PersonalityResultPage', params: {
            //     personalityResult: result
            // }})

            // setCurrentQuestionOrder(1)
            // setChosenAnswer(null)
            // resetReduxAnswers()
        })
        .catch(error => console.log('error', error))
    }
    
    return (
        <View style={styles.container}>
            <MainButton style={{backgroundColor: 'black'}} onPress={postToSageMakerEndPoint}>
                Click for post
            </MainButton>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default TestComp;