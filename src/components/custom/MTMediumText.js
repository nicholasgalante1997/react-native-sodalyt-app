import React from 'react';
import {Text, StyleSheet} from 'react-native'

const MTMediumText = (props) => {
    return ( 
        <Text onPress={props.onPress} style={{...styles.text, ...props.style}}>{props.children}</Text>
     );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'tommy-medium',
        color: 'white'
    }
})
 
export default MTMediumText;