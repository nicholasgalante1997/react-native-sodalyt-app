import React, { useState } from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Colors from '../constants/Colors'
import MTBoldText from '../components/custom/MTBoldText';
import VerticalCard from '../components/explore/VerticalCard'
import SubVerticalInfo from '../constants/subverticalCategoriesData'
import SearchBar from '../components/custom/SearchBar'

const SpecificServicesPage = (props) => {

    const verticalInfo = props.navigation.getParam('VerticalInformation');
    const parentId = verticalInfo.id 
    const [subverticalCategories, setSubverticalCatgeories] = useState(SubVerticalInfo.filter(cat => cat.parentVerticalId === parentId))
    console.log(subverticalCategories)

    console.log('spec page')
    console.log(verticalInfo)
    console.log(parentId)

    const renderItem = (itemData) => {
        return (
            <VerticalCard onPress={() => pushTo(itemData.item)} vertical={itemData.item} prompt={itemData.item.prompt} iconFamily={itemData.item.iconFamily} icon={itemData.item.icon} style={{backgroundColor: itemData.item.backgroundColor}} />
        )
    }

    return ( 
        <View>
            <SearchBar />
            <FlatList 
            data={subverticalCategories} 
            keyExtractor={item => item.id}
            renderItem={renderItem} />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginVertical: 20,
        color: Colors.ocean.primary
    }
})
 
export default SpecificServicesPage;