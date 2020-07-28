import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import Cartitem from '../components/Cartitem';
import {add_item_to_cart,remove_item_from_cart,add_item_to_favourites,remove_item_from_favourites} from '../redux/Action';
import {useSelector,useDispatch} from 'react-redux';
import Favouritesitem from '../components/Favouritesitem';



const Favouritescreen = ({ navigation, route }) => {
    const cart = useSelector((state)=>(state.cart));
    const favourites = useSelector((state)=>(state.favourites));
    const dispatch = useDispatch();
    const [qty, setqty] = useState(0);
    const [refresh,setrefresh] = useState(0); 
    const { the_url } = route.params;
    const { the_description } = route.params;
    const { the_rate } = route.params;
    
    //console.log(cart_array)
    return (
        <View style={styles.maincontainer}>
            <FlatList
                data={favourites}
                keyExtractor={(item, index) => index.toString()}
                renderItem={
                    ({item}) => {
                        console.log(item)
                        return (
                            <Favouritesitem
                                the_url={item.the_url}
                                the_description={item.the_description}
                                the_rate={item.the_rate}
                                onlongpressing = {()=>dispatch(remove_item_from_favourites(item.the_description))}
                            />
                        )
                    }}
            />
            <Button
                title='Refresh'
                onPress={() => { setrefresh(refresh+1) }}

                color='#d33b33'
            />
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
export default Favouritescreen;