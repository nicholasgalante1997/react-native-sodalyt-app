import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import SearchBar from '../components/custom/SearchBar'
import Colors from '../constants/Colors'
import VerticalCategories from '../constants/verticalCategoriesData'
import MTMediumText from '../components/custom/MTMediumText'
import DropDownPicker from 'react-native-dropdown-picker';
import Carousel from '../components/custom/Carousel'
import {useDispatch} from 'react-redux'
import * as searchActions from '../store/actions/actionCreator'

const LandingCUSearchScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch()
   
    const handleSearchInput = (textInput) => {
        setSearchTerm(textInput)
    }

    const handlePush = () => {
        dispatch(searchActions.setSearchedTerm(searchTerm))
        props.navigation.navigate('Email')
    }

    return ( 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.screen}>
            <View style={styles.message}>
                <MTMediumText style={{fontSize: 32, marginBottom: 15}}>
                        Give us an idea of what you're looking for.
                </MTMediumText>
                <MTMediumText style={{fontSize: 14}}>
                        You can search for a specific service, or take a look through some of the services our experts offer by selecting the dropdown below.
                </MTMediumText>
            </View>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
            <View style={styles.search}>
                <SearchBar 
                    inputSpecific={
                        {
                        onChangeText: (textInput) => handleSearchInput(textInput),
                        value: searchTerm,
                        blurOnSubmit: true,
                        placeholder: "e.g. 'Personal Trainer' ",
                        style: {
                            marginLeft: 5
                        }
                    }
                    }
                />
                </View>
            </View>
          {  Platform.OS === 'ios' ? <View style={styles.dropdownPicker}>
                <DropDownPicker 
                    items={VerticalCategories.map(cat => {
                        return {label: cat.prompt, value: cat.prompt}
                    })}
                    placeholder="Select a category below"
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    containerStyle={{
                        height: 40, 
                        width: Dimensions.get('window').width / 1.5,
                        fontFamily: 'tommy-medium'
                    }}
                    onChangeItem={(item) => setSearchTerm(item.value)}
                />
            </View> : null
        }
            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: 100, marginTop: Dimensions.get('window').height / 5}}> 
                    <Carousel dataArray={VerticalCategories} />
            </View>
            <TouchableOpacity style={Platform.OS === 'ios' ? {position: 'absolute', bottom: 75} : {marginTop: 40}} onPress={handlePush}>
                    {searchTerm.length > 0 ? <View>
                        <View style={styles.searchIconButton}>
                        <Ionicons name="md-search" size={38} color='white' />
                        </View>
                    </View> : null}
                </TouchableOpacity>
        </View> 
    </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.ocean.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        marginHorizontal: 8,
        marginBottom: 20
    },
    search: {
        width: '70%',
        borderColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        marginBottom: 20
    },
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
    },
    dotStyle: {
        backgroundColor: 'white',
      },
      paginationContainer: {
        paddingVertical: 4,
      },
      searchIconButton: {
            height: 56,
            width: 56,
            borderRadius: 28,
            borderColor: 'white',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.rugged.primary,
            marginTop: 8
      }
})
 
export default LandingCUSearchScreen;

