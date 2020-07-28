import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native';
//import { render } from 'react-dom';
import Imagebutton from '../components/Imagebutton';
import { NavigationContainer } from '@react-navigation/native';
//import {} from '../images/burger.jpg'
import Cartandfavouritebutton from '../components/Cartbutton';


let the_arrry = [];
let the_complete_array = [];

const Burgerscreen = ({ navigation, route }) => {

    const [isloading, setisloading] = useState(true);
    const { itemId } = route.params;
    const keyExtractor = (item, index) => index.toString()
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        let string_itemId = itemId.toString();
        let url = 'https://mypos.live/menu/' + string_itemId + '/list';
        //console.log(typeof (string_itemId));
        console.log(url)
        //console.log('The key sent is :' + itemId)
        fetch(url).then((response) => {
            if (response.ok) {
                return (response)
            }
            else {
                let error = new Error(response.statusText);
                error.response = response
                throw error
            }
        }).then((response) => { return (response.json()) }).then((value) => {
            //console.log(value.data.length)
            the_arrry = value.data.map((value) => { return (value.image_url) })
            the_complete_array = value.data;
            //console.log(the_arrry);
            //console.log(value);
            setisloading(false);

        }).catch((error) => { console.log(error) })
    }, [])


    if (isloading) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Now downloading the menus!</Text>
        </View>
    }

    return (
        <View style={styles.maincontainer}>
            <View style={styles.bothbuttoncontainer}>
                <View style={styles.favouritebuttoncontainer}>
                    <Cartandfavouritebutton
                        name='heart'
                        onpressing={() => {
                            navigation.navigate('Favouritescreen', {
                                value: 3
                            })
                        }}
                    />
                </View>
                <View style={styles.shoppingcartcontainer}>
                    <Cartandfavouritebutton
                        name='shopping-cart'
                        onpressing={() => {
                            navigation.navigate('Cartscreen', {
                                value: 3
                            })
                        }}
                    />
                </View>
            </View>
            <View style={styles.flatlistcontainer}>
                <FlatList
                    numColumns={2}
                    data={the_complete_array}
                    keyExtractor={keyExtractor}
                    renderItem={({ item }) => (
                        <ListItem
                            title={() =>
                                <Imagebutton
                                    sources={item.image_url}
                                    imagestyling={{ height: '65%' }}
                                    onpressing={() => navigation.navigate('Secondarydatascreen', {
                                        the_url: item.image_url,
                                        the_description: item.description,
                                        the_rate: item.rate
                                    })}
                                />
                            }
                            subtitle={() => {
                                return (
                                    <View>
                                        <Text>{item.description}</Text>
                                        <Text>Rs.{item.rate}</Text>
                                    </View>);
                            }}
                            containerStyle={{ marginLeft: '1%', marginBottom: '1%', width: windowWidth / 2, height: windowHeight / 3 }}
                            //leftAvatar={{ source: { uri: item.avatar_url } }}
                            bottomDivider
                        />
                    )}
                />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    bothbuttoncontainer: {
        flex: 1,
        //backgroundColor: 'green',
        flexDirection: 'row',

    },
    favouritebuttoncontainer: {
        flex: 1
    },
    shoppingcartcontainer: {
        flex: 1
    },
    flatlistcontainer: {
        flex: 10
    }
});

export default Burgerscreen;