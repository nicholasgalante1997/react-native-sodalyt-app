import React from 'react';
import {Text, StyleSheet} from 'react-native'

const MTBoldText = (props) => {
    return ( 
        <Text onPress={props.onPress} style={{...styles.text, ...props.style}}>{props.children}</Text>
     );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'tommy-bold',
        color: 'white'
    }
})
 
export default MTBoldText;