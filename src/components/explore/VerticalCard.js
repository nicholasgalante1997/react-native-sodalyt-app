import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather} from '@expo/vector-icons'
import MTBoldText from '../custom/MTBoldText'

const VerticalCard = (props) => {

    let icon;
    const iconSorter = (iconFamily) => {
        switch(iconFamily){
            case 'FontAwesome':
                icon = () => <FontAwesome name={props.icon} size={64} color='white' />
                break;
            case 'FontAwesome5': 
                icon = () => <FontAwesome5 name={props.icon} size={64} color='white' />
                break;
            case 'MaterialCommunityIcons':
                icon = () => <MaterialCommunityIcons name={props.icon} size={64} color='white' />
                break;
            case 'Fontisto':
                icon = () => <Fontisto name={props.icon} size={64} color='white' />
                break;
            case 'Feather':
                icon = () => <Feather name={props.icon} size={64} color='white' />
                break;
            case 'Ionicons':
                icon = () => <Ionicons name={props.icon} size={64} color='white' />
                break;
            default: 
                break;
        }
    }

    iconSorter(props.iconFamily)
    console.log(props)

    return ( 
        <TouchableOpacity style={styles.gridItem} onPress={props.onPress}>
            <View style={{...styles.container, ...props.style}}>
                {icon()}
                <MTBoldText style={styles.title}>
                    {props.prompt}
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
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'white'
    }
})
export default VerticalCard;