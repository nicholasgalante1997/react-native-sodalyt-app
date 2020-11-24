import React, { useState } from 'react';
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Button, Image, Switch, FlatList} from 'react-native'
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
    const [sodalytVerified, setSodalytVerified] = useState(false)

    const handleNewSearchInput = (textInput) => {
        setNewSearchValue(textInput)
    }

    const renderItem = (itemData) => {
        console.log('renderItem', itemData.item.companyProfileImage)
        return (
            <View style={styles.profRow}>
                <View style={{height: 80, width: 80, backgroundColor: 'white'}} >
                    
                </View>
                <View style={styles.moreInfo}>
                    <MTMediumText>
                        {itemData.item.companyName}
                    </MTMediumText>
                    <MTMediumText style={{fontSize: 8}}>
                        {itemData.item.companyDescription}
                    </MTMediumText>
                    <MTMediumText style={{fontSize: 8, marginTop: 3}}>
                        {itemData.item.companySpecialties.map(spec => spec)}
                    </MTMediumText>
                </View>
            </View>
        )
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
                    <View style={{marginLeft: 8, justifyContent: 'center', marginTop: 3}}> 
                        <MTMediumText style={{fontSize: 14, color: Colors.ocean.primary}}>
                        Sodalyt 
                        </MTMediumText>
                        <MTMediumText style={{fontSize: 14, color: Colors.ocean.primary}}>
                        Verified
                        </MTMediumText>
                        <Switch value={sodalytVerified} onValueChange={newState => setSodalytVerified(newState)} trackColor={{true: Colors.ocean.primary}}/>
                    </View>
                <ScrollView contentContainerStyle={styles.scrollFilters} style={{ marginLeft: 10, flexDirection: 'row', height: 50}}>
                  <TouchableOpacity>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Cultural</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Social</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Psychological</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Cost</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Location</MTMediumText>
                      </View>
                  </TouchableOpacity>
                </ScrollView>
                </View>
                <MTMediumText style={styles.searchInfoText}>
                        Showing results for the term "{searchedTerm}"
                </MTMediumText>
            </View>
            <ScrollView>
                <FlatList data={ProfessionalUserData} keyExtractor={p => p.id} renderItem={renderItem} style={styles.flatList} />
            </ScrollView>
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
        height: 90,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
    },
    searchInfoText: {
        color: Colors.ocean.primary,
        textAlign: 'right'
    },
    scrollFilters: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatList: {
        width: Dimensions.get('window').width
    },
    profRow: {
        width: '100%',
        height: 100,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        height: 80,
        width: 80
    },
    moreInfo: {
        marginHorizontal: 10,
        width: '75%'
    }
})
 
export default SearchResultScreen;