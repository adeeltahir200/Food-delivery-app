import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions, Alert, ScrollView } from 'react-native';
import { Card, Input } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Totalscreen = ({ navigation, route }) => {
    const cart = useSelector((state) => state.cart)
    const [ismodal, setismodal] = useState(false);
    const the_tokens = useSelector((state) => (state.tokens));
    const signupcredentials = useSelector((state) => (state.sigupcredentials));
    const [shippingaddress, setshippingaddress] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState('');
    const { total_no_of_items } = route.params;
    const { total_price } = route.params;
    const { access } = route.params;
    let sum = 0;
    cart.map((value) => {
        sum = sum + value.the_rate * value.the_qty
    })

    let authentication_header = 'Bearer ' + the_tokens.access;
    console.log('The access token is ' + authentication_header)
    const sendcartdata = async () => {
        fetch('http://192.168.1.105:8001/api/cart', {
            method: 'POST',
            body: JSON.stringify({
                first_name: signupcredentials.firstname,
                last_name: signupcredentials.lastname,
                mobile: signupcredentials.mobile,
                email: signupcredentials.email,
                amount: sum,
                discount: '0',
                discount_percent: '0',
                delivery_charges: '0',
                shipping_address: shippingaddress,
                city: city,
                state: 1,
                country: 1
            }),
            headers: {
                'Authorization': authentication_header,
                'content-Type': 'application/json'
            },
            //credentials: 'same-origin'
        }).then((response) => response.json()).then((value) => {
            //console.log(value)
            Alert.alert(
                "Alert Title",
                JSON.stringify(value),
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "OK", onPress: () => {
                            console.log("OK Pressed");
                        }
                    }
                ],
                { cancelable: false }
            );

        }).catch((error) => {
            console.log('The errrrrrrror!')
            Alert.alert(
                "Alert Title",
                JSON.stringify(error),
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        })
    }





    return (
        <View style={styles.maincontainer}>
            <Card title='Total' containerStyle={{ width: '100%', height: '100%' }} titleStyle={{ fontSize: 26 }}>
                <ScrollView>
                    <Input
                        placeholder='Name'
                        //containerStyle={{ width: windowWidth }}
                        defaultValue={signupcredentials.firstname+' '+signupcredentials.lastname}
                        label='Your name comes here'
                        onChangeText={(value) => { setshippingaddress(value) }}
                    />
                    <Input
                        placeholder='Mobile'
                        //containerStyle={{ width: windowWidth }}
                        keyboardType='phone-pad'
                        defaultValue={signupcredentials.mobile}
                        label='Your mobile comes here'
                        onChangeText={(value) => { setshippingaddress(value) }}
                    />
                    <Input
                        placeholder='email'
                        keyboardType='email-address'
                        //containerStyle={{ width: windowWidth }}
                        defaultValue={signupcredentials.email}
                        label='Your email comes here'
                        onChangeText={(value) => { setshippingaddress(value) }}
                    />
                    <Input
                        placeholder='Shipping address'
                        //containerStyle={{ width: windowWidth }}
                        label='Your shipping address comes here!'
                        onChangeText={(value) => { setshippingaddress(value) }}
                    />
                    <Input
                        placeholder='City'
                        //containerStyle={{ width: windowWidth }}
                        label='Your city comes here!'
                        onChangeText={(value) => { setcity(value) }}
                    />
                    <Input
                        placeholder='State'
                        //containerStyle={{ width: windowWidth }}
                        label='Your state comes here!'
                        onChangeText={(value) => { setstate(value) }}
                    />
                    <Input
                        placeholder='Country'
                        //containerStyle={{ width: windowWidth }}
                        label='Your country comes here!'
                        onChangeText={(value) => { setcountry(value) }}
                    />
                    <Text style={styles.textstyle}>Your total number of items are: {total_no_of_items}</Text>
                    <Text style={styles.textstyle}>Discounts: 0%</Text>
                    <Text style={styles.textstyle}>Delivery charges: 0</Text>
                    <Text style={styles.textstyle}>Your total price: Rs.{sum}</Text>
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.buttonstylesleft} onPress={() => { navigation.navigate('Cartscreen') }}>
                            <Text style={{ color: 'white' }}>BACK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                sendcartdata();
                            }}
                            style={styles.buttonstylesright}>
                            <Text style={{ color: 'white' }}>CONTINUE PAYING</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Card>

        </View>
    )

}

const styles = StyleSheet.create({

    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'red'
    },
    textstyle: {
        fontSize: 20
    },
    buttoncontainer: {
        //flex:1,
        flexDirection: 'row',
        marginTop:'10%',
        marginBottom: '30%',
        //backgroundColor:'green'
        //justifyContent: 'space-between',
        //backgroundColor: 'green',
        //alignItems: 'flex-end',
        //marginRight:100
        //height: '50%',
        //width: '100%'
        //alignItems:'center'
    },
    buttonstylesleft: {
        backgroundColor: '#d33b33',
        width: windowWidth * 45 / 100,
        height: windowHeight * 9 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
        //justifyContent:'flex-end'
        //color:'#d33b33'
    },
    buttonstylesright: {
        backgroundColor: '#d33b33',
        width: windowWidth * 47 / 100,
        height: windowHeight * 9 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    }
});


export default Totalscreen;
