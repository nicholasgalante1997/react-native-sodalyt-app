import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Platform, Alert, Image} from 'react-native'
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.screen}>
        {/* Need this for keyboard inputs to dismiss the Keyboard.dismiss onPress to remove keyboard */}
        <View style={styles.screen}>
            <View style={styles.message}>
                <MTMediumText style={styles.helpFindText}>
                        Who can we help you find?
                </MTMediumText>
                <MTMediumText style={styles.typeSearchText}>
                        Type your search or use our preselected options.
                </MTMediumText>
            </View>
            <View style={styles.searchContainer} >
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
        {/* for two circles for current user and professional  */}
        <View style={styles.cardHolder}>
            <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => {
                if (searchTerm.length > 0){
                dispatch(searchActions.setSearchedTerm(searchTerm))
                props.navigation.navigate('ReturningUserScreen')
                } else {
                    Alert.alert("Wait", "If you're a returning customer, make sure to set a searched term before signing in. If you're a professional user, click continue.", [{style: 'default', text: 'Back'}, {text: 'Continue', onPress: () =>{  props.navigation.navigate('ReturningUserScreen') }}])
                }
            }} >
                <View style={{...styles.container, backgroundColor: Colors.rugged.primary}}>
                {/* <View style={{height: 60, width: 60, overflow: 'hidden', borderRadius: 30, marginBottom: 10}}>
                    <Image source={ require('../../assets/orange_icon.png')} style={{height: '100%', width: '100%', resizeMode: 'contain'}} />
                </View> */}
                <MTBoldText style={styles.title}>
                    Current User
                </MTBoldText>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => {
                props.navigation.navigate({routeName: 'WhySodalyt', params: {
                    isProfessional: true
                }})
            }} >
                <View style={styles.container}>
                {/* <View style={{height: 60, width: 60, overflow: 'hidden', borderRadius: 30, marginBottom: 10}}>
                <Image source={ require('../../assets/orange_icon.png')} style={{height: '100%', width: '100%', resizeMode: 'contain'}} />
                </View> */}
                    <MTBoldText style={styles.title}>
                        Professional
                    </MTBoldText>
                </View>
        </TouchableOpacity>
        </View>
            <View style={styles.carouselContainer}> 
                    <Carousel dataArray={VerticalCategories} />
            </View>
            {/* first terniary for ios, second ternary of the size of the screen
            if the size of the screen is greater than 750, it is the first style object
            If it's an iphone that's less than 750px, it's the second style object.
            If it's an android, 3rd style object. */}
            {/* zIndex when you set implicit zIndex, use negative or positive numbers so things can show up on top or behind each other
            Higher zIndex means shows up, stacks on top. Lower zIndex falls behind views with a higher zIndex */}
            <TouchableOpacity style={Platform.OS === 'ios' ? Dimensions.get('window').height > 750 ? {position: 'absolute', bottom: Dimensions.get('window').height / 2, zIndex: -1} :  {position: 'absolute', bottom: Dimensions.get('window').height / 2} : {marginTop: 40}} onPress={handlePush}>
                    {searchTerm.length > 0 ? <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={styles.searchIconButton}>
                        <Ionicons name="md-search" size={38} color='white' />
                        </View>
                        <View style={styles.firstTimeUserTextContainer}>
                            <MTBoldText style={styles.firstTimeUserText}>
                                If youre a first time user, select the search icon to move forward.
                            </MTBoldText>
                        </View>
                    </View> : null}
                </TouchableOpacity>
        </View> 
    </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    firstTimeUserText: {
        textAlign: 'center'
    },
    firstTimeUserTextContainer: {
        width: '75%', 
        marginTop: 10
    },
    carouselContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: 100, 
        marginTop: 20
    },
    searchContainer: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    helpSearchText: {
        fontSize: 14, 
        textAlign: 'center'
    },
    helpFindText: {
        fontSize: 28,
        marginBottom: 15,  
        textAlign: 'center'
    },
    cardHolder: {
        flexDirection: 'row',
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center'
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
        width: 150,
        borderRadius: 75,
        // marginVertical: Dimensions.get('window').width / 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: 150,
        width: 150,
        borderRadius: 75,
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.56,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.ocean.secondary
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    } 
})
 
export default LandingCUSearchScreen;

