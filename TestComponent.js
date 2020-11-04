import React from 'react';
import MainButton from './src/components/custom/MainButton'
import {View, StyleSheet} from 'react-native'
import Colors from './src/constants/Colors'

const TestComp = (props) => {

    // define the callAPI function that takes a first name and last name as parameters
    var callAPI = () => {

        console.log('in the function')
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "text/csv");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({"data": "0,0,0,0,0,0,0,0,0,0,0,0"})
// create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };
        // make API call with parameters and use promises to get response
        fetch("https://c0eezw8cga.execute-api.us-east-2.amazonaws.com/mbti-1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result, "in the fetch"))

        console.log('done in the function')
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