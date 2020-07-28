import React, { Component, useState, useRef } from 'react';
import { View, Text, StyleSheet, Modal, FlatList, Dimensions, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import { Input, ListItem, Button, Rating } from 'react-native-elements';
import Imagebutton from '../components/Imagebutton';
import Cartitem from '../components/Cartitem';
import Addcartbutton from '../components/Addcartbutton';
import Cartmodal from '../components/Cartmodal';
import { useSelector, useDispatch } from 'react-redux';
import { add_item_to_cart, remove_item_from_cart, add_item_to_favourites, remove_item_from_favourites } from '../redux/Action';



const comments = [
    {
        name: 'Adeel Tahir',
        comment: 'sjbaksjbfkasjbfajbfkjab',
        rating: 3
    },
    {
        name: 'sd s,m f,s',
        comment: '121elkw dld',
        rating: 4
    },
    {
        name: 'Adeel Tahir',
        comment: 'sjbaksjbfkfsdf sfkjab',
        rating: 5
    },
    {
        name: 'Adeel Tahir',
        comment: 'sjbaksadfadsgab jbfkjab',
        rating: 2
    },
    {
        name: 'Adeel Tahir',
        comment: 'sjbaksj454egdfzjab',
        rating: 4
    },
    {
        name: 'Adeel Tahir',
        comment: 'sjbaksds fsdg sdsfajbfkjab',
        rating: 5
    },
    {
        name: 'Adeel Tahir',
        comment: 'sjbaksjsd fsd fgsd gs ab',
        rating: 3
    },
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let cart_array = [];
let fav_array = [];
let temp_array = [];
let found;
const Secondarydatascreen = ({ navigation, route }) => {
    const texty = useRef(null);
    const favourites = useSelector((state) => (state.favourites));
    const cart = useSelector((state) => (state.cart));
    const dispatch = useDispatch();
    const [ismodal, setismodal] = useState(false);
    const [secondaryscreen_qty, set_secondaryscreen_qty] = useState(0);
    const { the_url } = route.params;
    const { the_description } = route.params;
    const { the_rate } = route.params;
    const [refresh, setrefresh] = useState(false);
    const [cart_fav_state, set_cart_fav_state] = useState('')
    const [id, setid] = useState(0);
    const [addcomment, setaddcomment] = useState('');
    const [addrating, setaddrating] = useState(0);
    

    return (
        <View style={styles.maincontainer}>
            <Modal animationType='slide' visible={ismodal}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.modalbuttonstyles} onPress={() => { setismodal(false) }}>
                            <Text
                                style={styles.textstylingforbuttons}
                            >Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalbuttonstyles} onPress={() => { navigation.navigate('Loginscreen'); setismodal(false) }}>
                            <Text
                                style={styles.textstylingforbuttons}
                            >Proceed</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 9, }}>
                        <FlatList
                            data={cart_array}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                                ({ item }) => {

                                    return (
                                        <Cartitem
                                            the_url={item.the_url}
                                            the_description={item.the_description}
                                            the_rate={item.the_rate}
                                            theqty={secondaryscreen_qty}
                                            onlongpressing={() => {
                                                cart_array = cart_array.filter(value => value.the_description !== item.the_description)
                                                setrefresh(!refresh)
                                            }}
                                        />)
                                }}
                        />
                    </View>
                </View>
            </Modal>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: the_url }}
                    style={{ height: '50%', width: '50%' }}
                />
                <Text>{the_description}</Text>
                <Text>{the_rate}</Text>
            </View>
            <View style={{ flex: 2 }}>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>

                    <Addcartbutton
                        name='heart'
                        onpressing={() => {
                            found = fav_array.some((value) => value.the_description == the_description);
                            let found1 = favourites.some((value) => value.the_description == the_description);
                            if (!found1) {
                                //fav_array.push({ id: setid((id) => id + 1), the_url: the_url, the_rate: the_rate, the_description: the_description })
                                dispatch(add_item_to_favourites({ the_url: the_url, the_description: the_description, the_rate: the_rate }))
                            }
                            ToastAndroid.show("Item has been added in the favourites!", ToastAndroid.SHORT);
                            //setismodal(!ismodal)
                        }}
                    />
                    <Addcartbutton
                        name='cart-plus'
                        onpressing={() => {
                            found = cart_array.some((value) => value.the_description == the_description)
                            let found1 = cart.some((value) => value.the_description == the_description)
                            if (!found1) {
                                //cart_array.push({ id: setid((id) => id + 1), the_url: the_url, the_rate: the_rate, the_description: the_description })
                                dispatch(add_item_to_cart({ the_url: the_url, the_description: the_description, the_rate: the_rate, the_qty: 1 }))
                            }
                            ToastAndroid.show("Item has been added in the cart!", ToastAndroid.SHORT);
                            //setismodal(!ismodal)
                        }}
                    />
                </View>
                <View style={{ flex: 6, }}>
                    <View >
                        <Rating
                            type='star'
                            showRating
                            imageSize={50}
                            onFinishRating={(rating) => { setaddrating(rating) }}
                        />
                        <Input
                            placeholder='Add your comment'
                            ref={texty}
                            onChangeText={(value) => { setaddcomment(value) }}
                            onSubmitEditing = { e => { texty.current.clear() } } 
                        />
                        <Button
                            title='Submit'
                            buttonStyle={{ backgroundColor: '#d33b33' }}
                            onPress={() => {
                                console.log('The rating value is: ' + addrating);
                                console.log('The comment value is: ' + addcomment);
                                comments.push({ name: 'Adeel Tahir', comment: addcomment, rating: addrating });
                                //setaddcomment('')
                                //setaddrating(0)
                            }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={comments}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <ListItem
                                    title='Adeel'
                                    subtitle={item.comment}
                                    rightTitle={item.rating.toString()}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,

    },
    mainmodalcontainerstyles: {
        height: windowHeight,
        width: windowWidth
    },
    modalbuttonstyles: {
        width: '50%',
        height: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textstylingforbuttons: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Secondarydatascreen;