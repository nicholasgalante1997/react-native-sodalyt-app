import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native'
import DATA from '../constants/data'
import Colors from '../constants/Colors'
import StoryTile from '../components/story/StoryTile'
import MTBoldText from '../components/custom/MTBoldText'
import {useSelector} from 'react-redux'
import MTLightText from '../components/custom/MTLightText';
import { AntDesign } from '@expo/vector-icons'; 

const StoryCardScreen = (props) => {

    const storiesArray = [...DATA["stories"]]
    const currentUser = useSelector(state => state.currentUser)

    const renderGridItem = (itemData) => {
        return (<StoryTile navigation={props.navigation} story={{...itemData.item}} title={itemData.item.story_title} icon={itemData.item.icon} />)
    }

    console.log(currentUser)

    return ( 
        <View style={styles.container}>
            <MTBoldText style={styles.titleText}>
                In order to pair you with the professional that best suits your needs, 
                and better yet your personality, we have to get to know you 
                just a little bit.  
            </MTBoldText>
            <MTBoldText style={styles.titleText}>
                We here at Sodalyt, felt that the best way to get to know you and what you're like, 
                is to see what it's like to be in your shoes. So, we've developed four little Adventure Stories 
                to choose from, each one just 15 questions. 
            </MTBoldText>
            <MTBoldText style={styles.titleText}>
                Choose any one of the stories below to get started.
            </MTBoldText>
            <FlatList 
            keyExtractor={(item, index) => index}
            data={storiesArray} 
            numColumns={2} 
            renderItem={renderGridItem}/>
            <View style={styles.underItem}>
                <MTLightText>
                    Not a fan of stories? That's okay! We thought of you.
                </MTLightText>
            </View>
            <View style={styles.bottomHolder}>
                <MTLightText>
                    Click below for a short survey instead.
                </MTLightText>
                <AntDesign 
                name="form" 
                size={24} 
                color="white" 
                style={{paddingTop: 5}} />
            </View>
            
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        justifyContent: 'center',
        paddingTop: 80
    },
    titleText: {
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    bottomHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 115,
        marginHorizontal: 20,
        textAlign: 'center'
    },
    underItem: {
        justifyContent: 'center',
        alignItems: 'center',  
    }
})
 
export default StoryCardScreen;