import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Burgerscreen from '../tab-screens/Burgerscreen';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Secondarydatascreen from './Secondarydatascreen';
import Cartscreen from '../screens/Cartscreen';
import Favouritescreen from '../screens/Favouritescreen';
import { Icon } from 'react-native-elements';
import Loginscreen from '../screens/Loginscreen';
import Signupscreen from '../screens/Signupscreen';
import Totalscreen from './Totalscreen';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let First_screen_key;
let Second_screen_key;
let Third_screen_key;
let Fourth_screen_key;
let Fifth_screen_key;
let Sixth_screen_key;
let Seventh_screen_key;
let Eigth_screen_key;
let Ninth_screen_key;
let Tenth_screen_key;
let Eleventh_screen_key;
let Twelveth_screen_key;
let the_description_array = []
let the_id_from_recieved_array = []

const Maindatascreen = () => {
    const [isloading, setisloading] = useState(true);
    const [first_screen_key, setfirst_screen_key] = useState(0);
    const [second_screen_key, setsecond_screen_key] = useState(0);
    const [third_screen_key, setthird_screen_key] = useState(0);
    const [fourth_screen_key, setfourth_screen_key] = useState(0);
    const [fifth_screen_key, setfifth_screen_key] = useState(0);
    const [sixth_screen_key, setsixth_screen_key] = useState(0);
    const [seventh_screen_key, setseventh_screen_key] = useState(0);
    const [eighth_screen_key, seteighth_screen_key] = useState(0);
    const [nineth_screen_key, setnineth_screen_key] = useState(0);
    const [tenth_screen_key, settenth_screen_key] = useState(0);
    const [eleventh_screen_key, seteleventh_screen_key] = useState(0);
    const [twlveth_screen_key, settwlveth_screen_key] = useState(0);

    const retrying_fetch = () => {
        fetch('https://mypos.live/categories/7/list').then((response) => {
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
            the_description_array = value.data.map((value) => { return (value.description) })
            //console.log(the_description_array)
            the_id_from_recieved_array = value.data.map((value) => { return (value.pk) })
            //console.log(the_id_from_recieved_array);
            First_screen_key = the_id_from_recieved_array[0];
            Second_screen_key = the_id_from_recieved_array[1];
            Third_screen_key = the_id_from_recieved_array[2];
            Fourth_screen_key = the_id_from_recieved_array[3];
            Fifth_screen_key = the_id_from_recieved_array[4];
            Sixth_screen_key = the_id_from_recieved_array[5];
            Seventh_screen_key = the_id_from_recieved_array[6];
            Eigth_screen_key = the_id_from_recieved_array[7];
            Ninth_screen_key = the_id_from_recieved_array[8];
            Tenth_screen_key = the_id_from_recieved_array[9];
            Eleventh_screen_key = the_id_from_recieved_array[10];
            Twelveth_screen_key = the_id_from_recieved_array[11];

            //console.log('The twelveth key value is :'+Twelveth_screen_key);

            setfirst_screen_key(First_screen_key);
            setsecond_screen_key(Second_screen_key);
            setthird_screen_key(Third_screen_key);
            setfourth_screen_key(Fourth_screen_key);
            setfifth_screen_key(Fifth_screen_key);
            setsixth_screen_key(Sixth_screen_key);
            setseventh_screen_key(Seventh_screen_key);
            seteighth_screen_key(Eigth_screen_key);
            setnineth_screen_key(Ninth_screen_key);
            settenth_screen_key(Tenth_screen_key);
            seteleventh_screen_key(Eleventh_screen_key);
            //settwlveth_screen_key(Twelveth_screen_key);
            setisloading(false);

        }).catch((error) => {
            console.log(error);
            Alert.alert('Error', 'Network request failed!'
            [
                { text: "Retry", onPress: retrying_fetch }
            ]
            )
        })
    }

    useEffect(() => {
        fetch('https://mypos.live/categories/7/list').then((response) => {
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
            the_description_array = value.data.map((value) => { return (value.description) })
            //console.log(the_description_array)
            the_id_from_recieved_array = value.data.map((value) => { return (value.pk) })
            //console.log(the_id_from_recieved_array);
            First_screen_key = the_id_from_recieved_array[0];
            Second_screen_key = the_id_from_recieved_array[1];
            Third_screen_key = the_id_from_recieved_array[2];
            Fourth_screen_key = the_id_from_recieved_array[3];
            Fifth_screen_key = the_id_from_recieved_array[4];
            Sixth_screen_key = the_id_from_recieved_array[5];
            Seventh_screen_key = the_id_from_recieved_array[6];
            Eigth_screen_key = the_id_from_recieved_array[7];
            Ninth_screen_key = the_id_from_recieved_array[8];
            Tenth_screen_key = the_id_from_recieved_array[9];
            Eleventh_screen_key = the_id_from_recieved_array[10];
            Twelveth_screen_key = the_id_from_recieved_array[11];

            setfirst_screen_key(First_screen_key);
            setsecond_screen_key(Second_screen_key);
            setthird_screen_key(Third_screen_key);
            setfourth_screen_key(Fourth_screen_key);
            setfifth_screen_key(Fifth_screen_key);
            setsixth_screen_key(Sixth_screen_key);
            setseventh_screen_key(Seventh_screen_key);
            seteighth_screen_key(Eigth_screen_key);
            setnineth_screen_key(Ninth_screen_key);
            settenth_screen_key(Tenth_screen_key);
            seteleventh_screen_key(Eleventh_screen_key);
            settwlveth_screen_key(Twelveth_screen_key);
            setisloading(false);

        }).catch((error) => {
            //console.log(error);
            Alert.alert('Error', 'Network request failed!',
                [
                    { text: "Retry", onPress: retrying_fetch }
                ]
            )
        })
    }, []);
    if (isloading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={100} color="red" />
            </View>);
    }



    return (
        <Tab.Navigator tabBarOptions={{ scrollEnabled: true, }} >
            <Tab.Screen name={the_description_array[0]} initialParams={{ itemId: first_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[1]} initialParams={{ itemId: second_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[2]} initialParams={{ itemId: third_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[3]} initialParams={{ itemId: fourth_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[4]} initialParams={{ itemId: fifth_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[5]} initialParams={{ itemId: sixth_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[6]} initialParams={{ itemId: seventh_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[7]} initialParams={{ itemId: eighth_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[8]} initialParams={{ itemId: nineth_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[9]} initialParams={{ itemId: tenth_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[10]} initialParams={{ itemId: eleventh_screen_key }} component={Burgerscreen} />
            <Tab.Screen name={the_description_array[11]} initialParams={{ itemId: twlveth_screen_key }} component={Burgerscreen} />

        </Tab.Navigator>)


}

const MyStack = ({ navigation }) => {

    return (
       
            <Stack.Navigator initialRouteName='Maindatascreen'>
                <Stack.Screen name="Maindatascreen" component={Maindatascreen}
                    options={{
                        title: 'Home',
                        headerLeft:()=>(
                            <Icon type='font-awesome' name='bars' color='white' size={40} style={{ marginLeft: 150 }} onPress={() => { navigation.toggleDrawer() }}/>
                        ),
                        headerRight: () => (
                            <Icon type='material' name='face' color='white' size={40} style={{ marginRight: 50 }} onPress={() => { navigation.navigate('Loginscreen') }} />
                        ),
                        headerStyle: { backgroundColor: '#d33b33' },
                        headerTintColor: '#fff',
                    }} />
                <Stack.Screen name="Secondarydatascreen" options={{ title: 'Item', headerStyle: { backgroundColor: '#d33b33' }, headerTintColor: '#fff', }} component={Secondarydatascreen} />
                <Stack.Screen name="Cartscreen" options={{ title: 'Cart', headerStyle: { backgroundColor: '#d33b33' }, headerTintColor: '#fff', }} component={Cartscreen} />
                <Stack.Screen name='Favouritescreen' options={{ title: 'Favourites', headerStyle: { backgroundColor: '#d33b33' }, headerTintColor: '#fff', }} component={Favouritescreen} />
                <Stack.Screen name='Loginscreen' options={{ title: 'Login', headerStyle: { backgroundColor: '#d33b33' }, headerTintColor: '#fff', }} component={Loginscreen} />
                <Stack.Screen name='Signupscreen' options={{ title: 'Sign up', headerStyle: { backgroundColor: '#d33b33' }, headerTintColor: '#fff', }} component={Signupscreen}/>
                <Stack.Screen name='Totalscreen' options={{ title: 'Total screen', headerStyle: { backgroundColor: '#d33b33' }, headerTintColor: '#fff', }} component={Totalscreen}/>
            </Stack.Navigator>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyStack;