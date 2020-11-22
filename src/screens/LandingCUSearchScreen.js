import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather} from '@expo/vector-icons'
import SearchBar from '../components/custom/SearchBar'
import Colors from '../constants/Colors'
import VerticalCategories from '../constants/verticalCategoriesData'
import MTMediumText from '../components/custom/MTMediumText'
import DropDownPicker from 'react-native-dropdown-picker';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get('window').width
const CAROUSEL_VERTICAL_OUTPUT = 56;
const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;

const LandingCUSearchScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [activeSlide, setActiveSlide] = useState(0)

    const iconSelector = (iconFamily, name) => {
        switch(iconFamily){
            case 'FontAwesome':
                return <FontAwesome name={name} size={64} color='white' />
            case 'FontAwesome5': 
                return <FontAwesome5 name={name} size={64} color='white' />
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons name={name} size={64} color='white' />
            case 'Fontisto':
                return <Fontisto name={name} size={64} color='white' />
            case 'Feather':
                return <Feather name={name} size={64} color='white' />
            case 'Ionicons':
                return <Ionicons name={name} size={64} color='white' />
            default: 
                break;
        }
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.carouselItem}>
                <View style={styles.carouselIcon}>
                    {iconSelector(item.iconFamily, item.icon)}
                </View>
                <MTMediumText style={{marginTop: 15}}>{item.prompt}</MTMediumText>
            </View>
        )
    }

    const handleSearchInput = (textInput) => {
        setSearchTerm(textInput)
    }

    console.log(searchTerm, "Searched Term")
    console.log(VerticalCategories, "Vertical Categories")

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
            <View style={styles.dropdownPicker}>
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
            </View>
            {/* <View style={{justifyContent: 'center', alignItems: 'center'}}> */}
                <View style={styles.carouselHolder}>
                        <Carousel
                            data={VerticalCategories}
                            renderItem={renderItem}
                            onSnapToItem={(index) => setActiveSlide(index)} // we will update active slide index
                            sliderWidth={SCREEN_WIDTH}
                            itemWidth={CAROUSEL_ITEM_WIDTH}
                            style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}
                    />
                </View>
            {/* </View> */}
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
    }
})
 
export default LandingCUSearchScreen;