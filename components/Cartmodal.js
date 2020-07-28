import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Modal } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import Cartitem from './Cartitem';

let cart_array = [];
let memmory_variable = 0;
let temp_array = [];
let checker = 'notfound'
const Cartmodal = (props) => {
    const [qty, setqty] = useState(0);
    const [refresh, setrefresh] = useState(0);
    
    //const [ismodal,setismodal] = useState(false);

    //console.log(cart_array)
    return (
        <View style={styles.maincontainer}>
            <Modal
                animationType="slide"
                //transparent={true}
                visible={props.ismodal}
            >
                <Text>The modal fro shopping cart!</Text>
                <Button
                    title='Cancel'
                    onPress={props.oncancel}
                    color='red'
                />
            </Modal>
        </View>
    );

}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center'
    }
});

export default Cartmodal;