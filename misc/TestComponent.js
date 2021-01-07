import React from 'react';
import MainButton from '../src/components/custom/MainButton'
import {View, StyleSheet} from 'react-native'
import Colors from '../src/constants/Colors'

// Running faker dummy data for front end. Was used before endpoints set up. Obsolete
// When new endpoint, before trying out, we throw this TestComponent as its own screen. T
// hrow in this endpoint and post and gets and I test it out from this screen. Has a console.log set up from it. Just add another one 
const TestComp = (props) => {

    const firstPostTestData = {
        "professionalId":"5308526114884096491"
    }

    const secondPostData = {
        "customerId":"5308514174875013611",
        "professionalId": "5308526114884096491",
        "rating": 4,
        "review": "making new review test"
    }

    const postToFirstEndpoint = () => {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify(firstPostTestData);
        // create a JSON object with parameters for API call and store in a variable
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/getreviews/getprofessionalreviews", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result, "response from the server from the first post")
        })
        .catch(error => console.log('error', error))
    }

    const postToSecondEndpoint = () => {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify(secondPostData);
        // create a JSON object with parameters for API call and store in a variable
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/getreviews/makereview", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result, "response from the server from the second post")
        })
        .catch(error => console.log('error', error))
    }

    //If I am making a new test
    //Copy this, rewrite return statement with changing the onPress proop to whatever
    //Function i want to fire
    const postToThirdEndpoint = () => {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        let raw = JSON.stringify({
            "accountType": "professional",
            "email": "mlee@synthmail.com",
            "password": "andradestreets"
          });
        // create a JSON object with parameters for API call and store in a variable
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://08o65vjga3.execute-api.us-east-2.amazonaws.com/alpha/returninguser", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result, "response from the server from the third post")
        })
        .catch(error => console.log('error', error))
    }
    
    //If testing, change this onPress to whatever function I want to test
    //in code above
    //jest and enzyme for testing 
    return (
        <View style={styles.container}>
           <MainButton onPress={postToThirdEndpoint}>
               third
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