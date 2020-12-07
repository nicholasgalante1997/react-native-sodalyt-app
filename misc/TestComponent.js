import React from 'react';
import MainButton from '../src/components/custom/MainButton'
import {View, StyleSheet} from 'react-native'
import Colors from '../src/constants/Colors'

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