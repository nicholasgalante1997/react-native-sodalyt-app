import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import MTBoldText from '../components/custom/MTBoldText';

const SpecificServicesPage = (props) => {

    const verticalInfo = props.navigation.getParam('VerticalInformation');
    console.log(verticalInfo)
    
    return ( 
        <View>
            <MTBoldText style={styles.text}>Specific Services Page</MTBoldText>
        </View>
     );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 20
    }
})
 
export default SpecificServicesPage;