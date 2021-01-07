import React from 'react';
import {View, StyleSheet} from 'react-native'
import {Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather} from '@expo/vector-icons'

import MTMediumText from './MTMediumText'

//Item in the carousel with props passed down to it. Has no functional purpose .

const CarouselRenderItem = (props) => {
    //cant attach a full icon as an attribute, can only attach strings and numbers. 
    // What Nick does is 
    iconSelector = (iconFamily, name) => {
        switch(iconFamily){
            case 'FontAwesome':
                // Pull in propsk, shows iconFamily and name prop set to name 
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
                {/* Because iconSelector returns valid JS, can call it here and enter props.iconFamily and props.icon  */}
                
                <View style={styles.carouselIcon}>
                    {iconSelector(props.iconFamily, props.icon)}
                </View>
                <MTMediumText style={{marginTop: 15}}>{props.prompt}</MTMediumText>
                {/* Feed in vertical name in our text component  */}
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