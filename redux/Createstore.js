import {createStore} from 'redux';
import {Reducers} from './Reducers';

const initial_state = {
    cart:[],
    favourites:[],
    usercredentials:{
        username:'',
        password:''
    },
    sigupcredentials:{
        firstname:'',
        lastname:'',
        email:'',
        username:'',
        mobile:'',
        password:''
    },
    tokens:{
        refresh:'',
        access:'',
    },
    qty:0,
    price_array:[]
}



export const store = createStore(
    Reducers,
    initial_state
)