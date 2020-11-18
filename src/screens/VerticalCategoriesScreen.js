import React from 'react';
import {View, StyleSheet, FlatList, Platform} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/custom/CustomHeaderButton'
import VerticalData from '../constants/verticalCategoriesData'
import VerticalCard from '../components/explore/VerticalCard'

const VerticalCategoriesScreen = (props) => {

    const verticalArray = VerticalData
    console.log("spec page")
    console.log(verticalArray)
    
    const pushTo = (itemData) => {
        props.navigation.navigate('SpecificServicesPage', {VerticalInformation: itemData })
    }

    const renderItem = (itemData) => {
        return (
            <VerticalCard onPress={() => pushTo(itemData.item)} vertical={itemData.item} prompt={itemData.item.prompt} iconFamily={itemData.item.iconFamily} icon={itemData.item.icon} style={{backgroundColor: itemData.item.backgroundColor}} />
        )
    }

    return ( 
        <View style={styles.screen}>
               <FlatList 
               data={verticalArray} 
               keyExtractor={item => item.id} 
               renderItem={renderItem} 
            />
        </View>
     );
}

VerticalCategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Services',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title="Menu" 
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu' } 
                onPress={() => {
                    console.log('click')
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default VerticalCategoriesScreen;