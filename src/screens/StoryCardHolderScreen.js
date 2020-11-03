import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native'
import DATA from '../constants/data'
import Colors from '../constants/Colors'
import StoryTile from '../components/story/StoryTile'
import MTRegularText from '../components/custom/MTRegText'
import {useSelector} from 'react-redux'

const StoryCardScreen = (props) => {

    const storiesArray = [...DATA["stories"]]
    const currentUser = useSelector(state => state.currentUser)
    console.log(currentUser, storiesArray)

    const renderGridItem = (itemData) => {
        return (<StoryTile title={itemData.item.story_title} />)
    }

    return ( 
        <View style={styles.container}>
            <FlatList 
            keyExtractor={(item, index) => index}
            data={storiesArray} 
            numColumns={2} 
            renderItem={renderGridItem}/>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ocean.primary
    }
})
 
export default StoryCardScreen;