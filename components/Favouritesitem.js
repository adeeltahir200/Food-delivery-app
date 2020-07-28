import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'


const Favouritesitem = (props) => {
    //const [qty, setqty] = useState(0+props.theqty);
    return (
        <ListItem
            leftAvatar={{ source: { uri: props.the_url }, size: 'large', rounded: true }}
            containerStyle={{ width: '100%' }}
            onLongPress={props.onlongpressing}
            title={() => {
                return (
                    <View >
                        <Text>Name:{props.the_description}</Text>
                        <Text>Price:Rs.{props.the_rate}</Text>
                    </View>
                );
            }}
            /*subtitle={() => {
                return (<View>
                    <Text>Qty:{qty}</Text>
                </View>)
            }}*/
            rightSubtitle={() => {
                return (
                    <View style={{ flexDirection: 'row', }}>
                        <Icon
                            name='heart'
                            type='font-awesome'
                            color='red'
                            size={30}
                        />
                    </View>
                )
            }}
        />
    );
}


const styles = StyleSheet.create({
    maincontainer: {
        flex: 1
    }
});

export default Favouritesitem;