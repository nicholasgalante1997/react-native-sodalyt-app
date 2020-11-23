import React, { useState } from 'react';
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity} from 'react-native'
import Colors from '../constants/Colors';
import ProfessionalUserData from '../constants/professionalUserDummyData'
import {Feather, Ionicons} from '@expo/vector-icons'
import Input from '../components/custom/Input'
import MTMediumText from '../components/custom/MTMediumText';
import {useSelector} from 'react-redux' 


const SearchResultScreen = (props) => {

    const [newSearchValue, setNewSearchValue] = useState("")
    const searchedTerm = useSelector(state => state.search)
    const currentUserDetails = useSelector(state => state.userDetails)

    const handleNewSearchInput = (textInput) => {
        setNewSearchValue(textInput)
    }

    console.log(ProfessionalUserData, newSearchValue, currentUserDetails)
    return ( 
        <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <View style={styles.searchBarCont}>
                <View style={styles.inputHolder}>
                    <Input style={styles.input} placeholder="Try searching for another professional service" value={newSearchValue} onChangeText={handleNewSearchInput}/>
                </View>
                <View style={styles.iconHolder}>
                    <Ionicons name="md-search" color="white" size={32} />
                </View>
            </View>
            <View style={styles.filterContainer}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{height: 60}}> 
                        <Feather name="filter" color={Colors.ocean.primary} size={32} style={{marginRight: 10}} />
                         <MTMediumText style={{color: 'black'}}>Filters</MTMediumText>
                    </View>
                <ScrollView contentContainerStyle={styles.scrollFilters} style={{marginTop: 10, marginLeft: 5}}>
                  <TouchableOpacity style={{height: 38, width: Dimensions.get('window').width / 4}}>
                      <View style={{height: '100%', width: '100%', backgroundColor: "#fff", borderRadius: 15, borderColor: 'black', borderWidth: 1}}>
                          </View>
                    </TouchableOpacity>  
                </ScrollView>
                </View>
                <MTMediumText style={styles.searchInfoText}>
                    Showing results for the term ""
                </MTMediumText>
            </View>
        </View>
        </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center'
    },
    searchBarCont: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.ocean.secondary,
        width: Dimensions.get('window').width,
        height: 50
    },
    inputHolder: {
        width: "80%",
        height: "75%",
        backgroundColor: "white",
        borderRadius: 15,
        justifyContent: 'center'
    },
    iconHolder: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: Colors.ocean.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 0,
        marginLeft: 5,
        fontFamily: 'tommy-reg'
    },
    filterContainer: {
        height: 80,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
    },
    searchInfoText: {
        color: Colors.ocean.primary
    },
    scrollFilters: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
 
export default SearchResultScreen;