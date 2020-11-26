import React from 'react';
import MainButton from '../src/components/custom/MainButton'
import {View, StyleSheet} from 'react-native'
import Colors from '../src/constants/Colors'

const TestComp = (props) => {

    const firstPostTestData = {
    "name": "demo nick",
    "email": "demoNick@example.",
    "password": "password",
    "sodalytPreference": "The Builder",
    "respect": "Monthly",
    "responsibility": "I waited for the alien to open communications when they saw fit.",
    "recognition": "An Earthly Token",
    "resilience": "You set up labs and help the alien’s get through the virus; after-all you would not have survived if it were not for their help.",
    "reassurance": "You tell them you are not sure what to do, but that you will help them figure it out together.",
    "E": "0",
    "I": "3",
    "S": "2",
    "N": "1",
    "J": "0",
    "P": "3",
    "T": "1",
    "F": "2"
    }

    const secondPostData = {
        "searchTerm": "personal trainer",
        "currentUserMbti": "ENFJ",
        "currentUserSodalytPref": "Builder" 
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
        fetch("https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/demo1/getmbti", requestOptions)
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
        fetch("https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/demo1/getprofessionals", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result, "response from the server from the first post")
        })
        .catch(error => console.log('error', error))
    }
    
    return (
        <View style={styles.container}>
           <MainButton onPress={postToFirstEndpoint}>
               First Post
           </MainButton>
           <MainButton onPress={postToSecondEndpoint}>
               Second Post 
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