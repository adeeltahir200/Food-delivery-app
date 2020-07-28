import React, { } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';


const Imagebutton = (props) => {

    

    return (
            <TouchableOpacity style={[styles.maincontainer,{...props.containerstyling}]} onPress={props.onpressing}>
                <Image source={{uri:props.sources}} style={[styles.imagestyles,{...props.imagestyling}]} />
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    imagestyles:{
        height:'100%',
        width:'100%',
        borderRadius:30
    }
});

export default Imagebutton;