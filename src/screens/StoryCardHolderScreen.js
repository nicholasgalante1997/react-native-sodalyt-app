import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native'
//For alert to mention feature isn't there yet
import Modal from 'react-native-modal'
import CustomAlert from '../components/custom/CustomDevelopmentAlert'
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
    const [modalVisible, setModalVisible] = useState(false)

    const modalOn = () => {
        setModalVisible(true)
    }

    const modalOff = () => {
        setModalVisible(false)
    }

    // had to pass down navigation props. only screens receive navigation props 
    // FlatList automatically. 
    // itemData is automatically rendered by Flatilist. itemData.item used for the object passed in for each iteration
    const renderGridItem = (itemData) => {
        console.log(itemData, itemData.item)
        return (<StoryTile modalOn={modalOn} navigation={props.navigation} story={{...itemData.item}} title={itemData.item.story_title} icon={itemData.item.icon} />)
        
    }

    return ( 
        <View style={styles.container}>
             <Modal isVisible={modalVisible}>
                <CustomAlert onPress={modalOff} />
            </Modal>
            {   currentUser.accountType === 'professional' ?
            <MTBoldText style={styles.titleTextTop}>
            Now let’s get started with your personality
            profile. Choose one of the following story
            adventures to play. At the end, you'll get your
            personality results, which will be used to better match customers to you.
            </MTBoldText>  :  
             <MTBoldText style={styles.titleTextTop}>
            Let’s get started with your personality
            preferences. Choose one of the following story
            adventures to play. At the end you'll get your
            personality results and initial matches.
            </MTBoldText>
            }
            <View>
            {/* Preferable choice to list things and optimizes */}
            {/* Has props to fetch more users. Back end primed to receive 10 users at a time  */}
            {/* Every 10 users, they load next 10 */}
            {/* keyExtractor has item as first argument, index as second.  */}
            {/* keyExtractor is for key, but used for id for components so they can be unique */}
            {/* data is what the FlatList is mapping through, data always must be an array     */}
            {/* numColumns defaults to 1, how many columns you want per row  */}
            {/* renderItem is the callback function that is returning inside the map */}
                <FlatList 
                keyExtractor={(item, index) => index}
                data={storiesArray} 
                numColumns={2} 
                renderItem={renderGridItem}/>
            </View>
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
                style={{paddingTop: 5}}  
                onPress={modalOn} />
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
    },
    titleTextTop: {
        paddingHorizontal: 23,
        paddingVertical: 5,
        marginTop: Dimensions.get('window').height < 780 ? 20 : 0
    }
})
 
export default StoryCardScreen;