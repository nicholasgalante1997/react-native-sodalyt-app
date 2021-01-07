import React from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native'
import CarouselRenderItem from './CarouselRenderItem'

const DEVICE_WIDTH = Dimensions.get('window').width


//only class component
class Carousel extends React.Component {

    //survives state rerenders. 
    ScrollRef = React.createRef()
    // State we only hve one property in. Selected index starts at 0 at beginning of array.
    state = {
        selectedIndex: 0
    }

    //Taking state and either updating to the next element in the array or if last element
    //In array, resetting it to 0
    componentDidMount(){
        setInterval(() => {
            this.setState(prevState => ({selectedIndex: prevState.selectedIndex === this.props.dataArray.length - 1 ? 0 : prevState.selectedIndex + 1}), 
            () => {
                this.ScrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                })
                //Call an anonymous funciton to get access to the current ScrollRef value
                //y and  x is how we move the screen, never adjust the y height, but always moving 
                //the horizontal by one over every 1.5 seconds
                //This is all the services we offer, but on a carousel
            })
        }, 1500)
    }

    //Takes in event, changes the index by one full screen 
    setSelectedIndex = (event) => {
        const viewSize = event.nativeEvent.layoutMeasurement.width
        const content = event.nativeEvent.contentOffset.x 
        //Gives us our next selected Index b/c it is set to changing . content off of x
        // is how much it's moved since the original start, divid that by viewSize to see where we are 
        //Carousel is just being a really long section of the screen that you can't see at once
        // And the items on the screen are moving in a conveyer belt around it.
        // We are taking length of conveyer belt section we are on divided by entire length of 
        // conveyor belt to see what part of the belt we are up to (the index)
        // Then we update the state
        const selectedIndex = Math.floor(content / viewSize)
        this.setState({selectedIndex})
    }

    render(){
        const {dataArray} = this.props;
        const {selectedIndex} = this.state;

        return (
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {/* Everytime finished with scrolling carousel, call  onMomentumScrollEnd to scroll it again  */}
                {/* reference of where the scroll is is the reference we created at top of component which is ref={this.ScrollRef} */}
                {/* Set to horizontal so it goes side to side 
                pagingEnabled so that content knows its part of a page collection while on the screen 
                pagingEnabled prevents trying to view all children at once  */}
                {/* Map through all vertical stuff created, feed CarouselRenderItem, a custom component with icon and text underneath  */}
                <ScrollView horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex} ref={this.ScrollRef}>
                    {dataArray.map((vertical) => <CarouselRenderItem {...vertical} key={vertical.id} style={{width: DEVICE_WIDTH, height: '100%'}}/>)}
                        {/* Using vertical object that we made from models, with data and all different data info we want to map through
                        Gives us all different info about verticals 
                        style customize to fit entire length of parent screen set up with */}
                </ScrollView>
            </View>
        )
    }
}
 
export default Carousel;