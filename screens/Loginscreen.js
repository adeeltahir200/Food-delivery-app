import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity, Alert } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { add_user,add_tokens } from '../redux/Action';
import { useSelector, useDispatch } from 'react-redux';
//import { add_tokens } from '../redux/Action';


const Loginscreen = ({ navigation,route }) => {
    const usercredentials = useSelector((state) => state.usercredentials);
    const the_tokens  = useSelector((state) =>(state.tokens));
    const dispatch = useDispatch();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [accesstoken,setaccesstoken] = useState('');
    const [refreshtoken,setrefreshtoken] = useState('');
    const [checklogin,setchecklogin] = useState(false);
    let hello = "hello world!";
    if(checklogin){
        dispatch(add_tokens(refreshtoken, accesstoken));
        setchecklogin(false);
        navigation.navigate('Cartscreen',{
            value:3
        })
    }
    const proceed = () => {
        console.log('The async function was called!')
        dispatch(add_user(username, password));
        /*fetch('http://192.168.8.100:8001/api/token/', {
            method: 'POST',
            body: {
                "username":"aliraza",
                "password":"ali786#$"
            },
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => {
            if (response.ok) {
                return (response);
            }
            else {
                console.log("AN error occured")
                let error = new Error(response.statusText);
                error.response = response
                throw error
            }
        }).then((response) => { return (response.json()) }).then((value) => {
            Alert.alert(
                "Alert Title",
                JSON.stringify(value),
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

        }).catch((error)=>{
            console.log('The error is : '+error );
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

        })*/
        //console.log(username)
        //console.log(password)
        //console.log(usercredentials.username)
        //console.log(usercredentials.password)
        fetch('http://192.168.1.105:8001/api/token/', {
            method: 'POST',
            body: JSON.stringify({
                username: "aliraza",
                password: "ali786#$"
            }),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => {
            if (response.ok) {
                /*console.log("Response was ok")
                console.log(JSON.stringify(response))*/
                return response;
            } else {
                let error = new Error;
                error.response = error
                throw error
            }
        }).then((response) => response.json()).then((value) => {
            
            setaccesstoken(value.access);
            setrefreshtoken(value.refresh);
            console.log(accesstoken);
            console.log(refreshtoken);
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
                    { text: "OK", onPress: () => {
                        //dispatch(add_tokens(refreshtoken, accesstoken));
                        setchecklogin(true);
                        console.log("OK Pressed");
                    } }
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
            <Card title='Login' >
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder='Username'
                        containerStyle={{ width: windowHeight / 2 }}
                        onChangeText={(value) => { setusername(value) }}
                        label='Your Username comes here!'
                        leftIcon={() => (
                            <Icon
                                name='user'
                                type='font-awesome'

                            />
                        )}
                    />
                    <Input
                        placeholder='Password'
                        containerStyle={{ width: windowHeight / 2 }}
                        onChangeText={(value) => { setpassword(value) }}
                        label='Your Password comes here!'
                        leftIcon={() => (
                            <Icon
                                name='lock'
                                type='font-awesome'

                            />
                        )}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', width: '100%', height: '30%' }}>
                        <TouchableOpacity style={{ width: '50%', height: '100%', backgroundColor: '#d33b33', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }} onPress={() => { navigation.navigate('Signupscreen') }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                            >Signup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                
                                proceed()
                            }}
                            style={{ width: '50%', height: '100%', backgroundColor: '#d33b33', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                            >Proceed</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        //height:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

});


export default Loginscreen;