import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import Input from './Input'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../../constants/Colors'

const SearchBar = (props) => {
    return (  
        <View style={styles.bar}>
            <Ionicons name="md-search" size={24} color='white' style={{marginLeft: 7}}/>
            <Input style={{marginRight: 15, backgroundColor: 'white', width: '86%', borderRadius: 15, alignSelf: 'flex-end'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        width: '90%',
        backgroundColor: Colors.ocean.primary,
        borderRadius: 15
    }
})
 
export default SearchBar;