import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../constants/Colors'
import MTBoldText from '../custom/MTBoldText'

const StoryTile = (props) => {
    return ( 
        <TouchableOpacity 
        style={styles.gridItem} 
        onPress={props.onPress} 
        >
            <View style={{...styles.container, ...props.style}}>
                <MTBoldText style={styles.title}>
                    {props.title}
                </MTBoldText>
            </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        marginVertical: Dimensions.get('window').width / 5,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: Colors.ocean.secondary
    },
    title: {
        textAlign: 'right',
        fontSize: 20,
        color: 'white'
    } 
})
export default StoryTile;

