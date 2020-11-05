import React from 'react';
import MainButton from './src/components/custom/MainButton'
import {View, StyleSheet} from 'react-native'
import Colors from './src/constants/Colors'

const TestComp = (props) => {

    // define the callAPI function that takes a first name and last name as parameters
    const postToSageMakerEndPoint = () => {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify({"data":"0,0,0,0,0,0,0,0,0,0,0,0"});
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
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
    
    return (
        <View style={styles.container}>
            <MainButton style={{backgroundColor: 'black'}} onPress={callAPI}>
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