import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {ListItem,Icon} from 'react-native-elements';
import {add_qty,add_the_qty} from '../redux/Action';
import {useSelector,useDispatch} from 'react-redux';

let rate_array = [];

const Cartitem = (props) => {
    const [qty, setqty] = useState(0+props.theqty);
    const disptach = useDispatch();
    return (
        <ListItem
            leftAvatar={{ source: { uri: props.the_url }, size: 'large', rounded: true }}
            containerStyle={{ width: '100%' }}
            onLongPress={props.onlongpressing}
            title={() => {
                return (
                    <View >
                        <Text>Name:{props.the_description}</Text>
                        <Text>Price:Rs.{props.the_rate} {props.indexing}</Text>
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
                        <TouchableOpacity onPress={() => {
                            if (qty > 0) {
                                setqty(qty - 1)
                                //disptach(add_qty(qty,props.indexing))
                                rate_array[props.indexing] = props.rating*qty-1
                                console.log('The rate is'+rate_array)
                                disptach(add_the_qty(qty-1,props.indexing));
                            }

                        }}>
                            <Icon
                                type='font-awesome'
                                name='caret-left'
                                style={{ marginLeft: '40%' }}
                                size={40}

                            />
                        </TouchableOpacity>
                        <Text
                            style={{marginTop:'7.5%',marginLeft:'15%'}}
                        >{qty}</Text>
                        <TouchableOpacity onPress={() => {

                            setqty(qty + 1)
                            //disptach(add_qty(qty,props.indexing))
                            rate_array[props.indexing] = props.rating*qty+1
                            console.log('The rate is'+rate_array)
                            disptach(add_the_qty(qty+1,props.indexing));
                        }}>
                            <Icon
                                type='font-awesome'
                                name='caret-right'
                                style={{ marginLeft: '40%' }}
                                size={40}

                            />
                        </TouchableOpacity>

                    </View>
                )
            }}
        />
    );
}


const styles = StyleSheet.create({
    maincontainer:{
        flex:1
    }
});

export default Cartitem;