import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Card, Input, Icon, Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { add_signup_credentials } from '../redux/Action';
import { useSelector, useDispatch } from 'react-redux';


const Signupscreen = ({ navigation, route }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [firstname, setfirstname] = useState('Adeel');
    const [lastname, setlastname] = useState('Tahir');
    const [email, setemail] = useState('adeeltahir200@gmail.com');
    const [username, setusername] = useState('adeeltahir200');
    const [phonenumber, setphonenumber] = useState('0304-0637697');
    const [password, setpassword] = useState('esasoft');
    const dispatch = useDispatch();
    return (

        <View style={styles.maincontainer}>

            <Card title='SIGN UP' style={{ height: windowHeight }} >
                <ScrollView>
                    <Input
                        placeholder='First name'
                        onChangeText={(value) => { setfirstname(value) }}
                        containerStyle={{ width: windowWidth }}
                        label='Your First name comes here!'
                        leftIcon={() => (
                            <Icon
                                name='user'
                                type='font-awesome'

                            />
                        )}
                    />
                    <Input
                        placeholder='Last name'
                        onChangeText={(value) => { setlastname(value) }}
                        containerStyle={{ width: windowWidth }}
                        label='Your Last name comes here!'
                        leftIcon={() => (
                            <Icon
                                name='user'
                                type='font-awesome'

                            />
                        )}
                    />
                    <Input
                        placeholder='Email'
                        onChangeText={(value) => { setemail(value) }}
                        containerStyle={{ width: windowWidth }}
                        keyboardType='email-address'
                        label='Your Email address comes here!'
                        leftIcon={() => (
                            <Icon
                                name='envelope'
                                type='font-awesome'

                            />
                        )}
                    />
                    <Input
                        placeholder='Username'
                        onChangeText={(value) => { setusername(value) }}
                        containerStyle={{ width: windowWidth }}
                        label='Your username comes here!'
                        leftIcon={() => (
                            <Icon
                                name='user-circle-o'
                                type='font-awesome'

                            />
                        )}
                    />
                    <Input
                        placeholder='Phone number'
                        onChangeText={(value) => { setphonenumber(value) }}
                        containerStyle={{ width: windowHeight / 2 }}
                        keyboardType='phone-pad'
                        label='Your phone number comes here!'
                        leftIcon={() => (
                            <Icon
                                name='phone'
                                type='font-awesome'

                            />
                        )}
                    />
                    <Input
                        placeholder='Password'
                        onChangeText={(value) => { setpassword(value) }}
                        containerStyle={{ width: windowHeight / 2 }}
                        secureTextEntry={true}
                        label='Your password comes here!'
                        leftIcon={() => (
                            <Icon
                                name='lock'
                                type='font-awesome'

                            />
                        )}
                    />
                    <Input
                        placeholder='Retype-Password'
                        containerStyle={{ width: windowHeight / 2 }}
                        secureTextEntry={true}
                        label='Please retypr your password here!'
                        leftIcon={() => (
                            <Icon
                                name='lock'
                                type='font-awesome'

                            />
                        )}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Sign up button was pressed!' + firstname + lastname + email + username + phonenumber);
                            dispatch(add_signup_credentials(firstname, lastname, email, username, phonenumber, password));
                            navigation.navigate('Cartscreen', {
                                value: 3
                            })
                        }}
                        style={{ height: '10%', width: '100%', backgroundColor: '#d33b33', justifyContent: 'center', alignItems: 'center', borderRadius: 30,marginBottom:'30%' }}>
                        <Text
                            style={{ color: 'white' }}
                        >SIGNUP</Text>
                    </TouchableOpacity>

                </ScrollView>
            </Card>

        </View>

    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});


export default Signupscreen;