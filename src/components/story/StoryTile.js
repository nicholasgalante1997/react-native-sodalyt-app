import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import MTBoldText from '../custom/MTBoldText'

const StoryTile = (props) => {

    const onPress = () => {
      if (props.story.story_id === 1){  
        props.navigation.navigate({routeName: 'QuestionRenderer', params: {
            storyInfo: {...props.story}
        }})
      } else {
         props.modalOn()
      }
    }

    let conditionalColoring;

    const sortColorSchema = (storyId) => {
        switch(storyId){
            case 1: 
                conditionalColoring = Colors.rugged.primary
                break;
            case 2: 
                conditionalColoring = Colors.ocean.secondary
                break;
            case 3: 
                conditionalColoring =  Colors.vertical.five
                break;
            case 4: 
                conditionalColoring = Colors.vertical.two
                break;
            default:
                break;
        }
    }

    console.log(props.story)
    console.log(conditionalColoring, "before")
    sortColorSchema(props.story.story_id)
    console.log(conditionalColoring, "after")

    return ( 
        <TouchableOpacity 
        style={styles.gridItem} 
        onPress={onPress} 
        >
            <View style={{...styles.container, ...props.style, backgroundColor: conditionalColoring}}>
            <Ionicons 
            name={props.icon} 
            size={56}
            color='white'
            style={styles.icon}
            />
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
        // marginVertical: Dimensions.get('window').width / 5,
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

