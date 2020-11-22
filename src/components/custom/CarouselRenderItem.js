import React from 'react';
import {View, StyleSheet} from 'react-native'
import {Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather} from '@expo/vector-icons'
import MTMediumText from './MTMediumText'

const CarouselRenderItem = (props) => {
    iconSelector = (iconFamily, name) => {
        switch(iconFamily){
            case 'FontAwesome':
                return <FontAwesome name={name} size={64} color='white' />
            case 'FontAwesome5': 
                return <FontAwesome5 name={name} size={64} color='white' />
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons name={name} size={64} color='white' />
            case 'Fontisto':
                return <Fontisto name={name} size={64} color='white' />
            case 'Feather':
                return <Feather name={name} size={64} color='white' />
            case 'Ionicons':
                return <Ionicons name={name} size={64} color='white' />
            default: 
                break;
        }
    }

        return (
            <View style={{...styles.carouselItem, ...props.style}}>
                <View style={styles.carouselIcon}>
                    {iconSelector(props.iconFamily, props.icon)}
                </View>
                <MTMediumText style={{marginTop: 15}}>{props.prompt}</MTMediumText>
            </View>
        )
}

const styles = StyleSheet.create({
    carouselHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop: 30,
        alignSelf: 'center'
    },
    carouselItem: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default CarouselRenderItem;