import React, { } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Addcartbutton = (props) => {
    return (
        <TouchableOpacity style={styles.maincontainer} onPress={props.onpressing}>
            <Icon
                type='font-awesome'
                name={props.name}
                color='white'
                size={50}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        height: '100%',
        width:'50%',
        //borderRadius: 100,
        backgroundColor:'#d33b33',
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Addcartbutton;