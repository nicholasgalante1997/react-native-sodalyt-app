import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import SearchBar from '../components/custom/SearchBar'
import Colors from '../constants/Colors'
import VerticalCategories from '../constants/verticalCategoriesData'
import MTMediumText from '../components/custom/MTMediumText'
import MTBoldText from '../components/custom/MTBoldText'
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
                        Who can we help you find?
                </MTMediumText>
                <MTMediumText style={{fontSize: 14}}>
                        Type your search or use our preselected options.
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
        <View style={styles.cardHolder}>
            <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => {}} >
                <View style={styles.container}>
                    <MTBoldText style={styles.title}>
                        Returning Sodalyt User?  Over Here!
                    </MTBoldText>
                </View>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => {}} >
                <View style={styles.container}>
                    <MTBoldText style={styles.title}>
                        Registering as a Professional? Over here!
                    </MTBoldText>
                </View>
        </TouchableOpacity>
        </View>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: 100, marginTop: 20}}> 
                    <Carousel dataArray={VerticalCategories} />
            </View>
            <TouchableOpacity style={Platform.OS === 'ios' ? Dimensions.get('window').height > 750 ? {position: 'absolute', bottom: Dimensions.get('window').height / 2, zIndex: -1} :  {position: 'absolute', bottom: 10, right: 10} : {marginTop: 40}} onPress={handlePush}>
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
    cardHolder: {
        flexDirection: 'row',
        marginTop: 150
    },
    screen: {
        backgroundColor: Colors.ocean.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        marginHorizontal: 3,
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
            backgroundColor: Colors.ocean.secondary,
            marginTop: 8
      },
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
        shadowOpacity: 0.56,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: Colors.rugged.primary
    },
    title: {
        textAlign: 'right',
        fontSize: 20,
        color: 'white'
    } 
})
 
export default LandingCUSearchScreen;

