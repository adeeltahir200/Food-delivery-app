import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Modal } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import Cartitem from '../components/Cartitem';
import { add_item_to_cart, remove_item_from_cart, add_item_to_favourites, remove_item_from_favourites, add_tokens } from '../redux/Action';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'react-native-gesture-handler';
import { signup_credentials_added } from '../redux/Actiontypes';
//import { acc } from 'react-native-reanimated';

let totaling_rate = 0;

const Cartscreen = ({ navigation, route }) => {
    const signupcredentials = useSelector((state) => (state.sigupcredentials));
    const state = useSelector((state) => state);
    const the_tokens = useSelector((state) => (state.tokens));
    const quantity = useSelector((state) => (state.qty))
    const cart = useSelector((state) => (state.cart));
    const dispatch = useDispatch();
    const [qty, setqty] = useState(0);
    const [refresh1, setrefresh1] = useState(true);
    const { the_url } = route.params;
    const { the_description } = route.params;
    const { the_rate } = route.params;
    const { refresh } = route.params;
    const { access } = route.params;
    //const [ismodal,setismodal] = useState(false);
    const [totalprice, settotalprice] = useState(0)
    console.log('The refresh key is ' + refresh)
    console.log('The access key is ' + access)
    console.log("the token access from redux is:" + JSON.stringify(the_tokens))
    //console.log('The credentials received at cart screen are : '+signupcredentials)


    //const [refresh,setrefresh] = useState(true);

    //console.log('The access_token is: ');
    return (
        <View style={styles.maincontainer}>
            <FlatList
                data={cart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={
                    ({ item, index }) => {

                        return (
                            <Cartitem
                                indexing={index}
                                rating={item.the_rate}
                                the_url={item.the_url}
                                the_description={item.the_description}
                                the_rate={item.the_rate}
                                theqty={item.the_qty}
                                onlongpressing={() => { dispatch(remove_item_from_cart(item.the_description)) }}
                            />
                        )
                    }}
            />
            <TouchableOpacity
                onPress={() => {
                    //console.log('The tokens are:'+JSON.stringify(the_tokens));
                    let price_array = cart.map((value) => {
                        return (parseInt(value.the_rate))
                    });
                    let sum = price_array.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    console.log('The quantity is : ' + quantity)
                    navigation.navigate('Totalscreen', {
                        total_no_of_items: cart.length,
                        total_price: sum.toString(),
                        access: access
                    })
                }}
                style={{ height: '10%', width: '100%', backgroundColor: '#d33b33', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                <Text
                    style={{ color: 'white' }}
                >PROCEED</Text>
            </TouchableOpacity>
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

export default Cartscreen;