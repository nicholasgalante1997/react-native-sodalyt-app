import React from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native'
import CarouselRenderItem from './CarouselRenderItem'

const DEVICE_WIDTH = Dimensions.get('window').width

class Carousel extends React.Component {

    ScrollRef = React.createRef()

    state = {
        selectedIndex: 0
    }

    componentDidMount(){
        setInterval(() => {
            this.setState(prevState => ({selectedIndex: prevState.selectedIndex === this.props.dataArray.length - 1 ? 0 : prevState.selectedIndex + 1}), 
            () => {
                this.ScrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                })
            })
        }, 3000)
    }

    setSelectedIndex = (event) => {
        const viewSize = event.nativeEvent.layoutMeasurement.width
        const content = event.nativeEvent.contentOffset.x 
        const selectedIndex = Math.floor(content / viewSize)
        this.setState({selectedIndex})
    }

    render(){
        const {dataArray} = this.props;
        const {selectedIndex} = this.state;
        // console.log(dataArray)
        return (
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex} ref={this.ScrollRef}>
                    {dataArray.map((vertical) => <CarouselRenderItem {...vertical} key={vertical.id} style={{width: DEVICE_WIDTH, height: '100%'}}/>)}
                </ScrollView>
                {/* <View style={styles.circleDiv}>
                    {dataArray.map((vert, ind) => (
                        <View style={styles.whiteDot}/>
                    ))}
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    circleDiv: {
        position: "absolute",
        bottom: 10,
        height: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    whiteDot: {
        width: 6,
        height: 6,
        margin: 5,
        borderRadius: 3,
        backgroundColor: '#fff'
    }
})
 
export default Carousel;