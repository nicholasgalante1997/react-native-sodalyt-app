import React from 'react';
import {Text, StyleSheet} from 'react-native'

const MTRegularText = (props) => {
    return ( 
        <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
     );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'tommy-regular'
    }
})
 
export default MTRegularText;