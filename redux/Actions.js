import { item_added_to_cart, item_removed_from_cart, item_added_to_favourites, item_removed_from_favourites, user_added, tokens_added, qty_added, signup_credentials_added,qty_the_added,price_added,price_removed } from './Actiontypes';
//import { useEffect } from 'react';

export const add_item_to_cart = (item) => ({
    type: item_added_to_cart,
    payload: item
});

export const remove_item_from_cart = (itemid) => ({
    type: item_removed_from_cart,
    payload: itemid
});

export const add_item_to_favourites = (item) => ({
    type: item_added_to_favourites,
    payload: item
});

export const remove_item_from_favourites = (itemid) => ({
    type: item_removed_from_favourites,
    payload: itemid
});

export const add_user = (username, password) => ({
    type: user_added,
    payload: {
        username: username,
        password: password
    }
})

export const add_tokens = (refresh_token, access_token) => ({
    type: tokens_added,
    payload: {
        refresh: refresh_token,
        access: access_token,
    }
})

export const add_qty = (qty, indexing) => {

    

    return ({
        type: qty_added,
        payload: {
            qty: qty,
            index: indexing
        }
    })
}

export const add_signup_credentials = (firstname, lastname, email, username, mobile, password) => {
    console.log(firstname, lastname, email, username, mobile, password)
    return ({
        type: signup_credentials_added,
        payload: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: username,
            mobile: mobile,
            password: password
        }
    })
}

export const add_the_qty = (qty,indexing)=>{
    console.log('The qyantity is:'+qty+' The index is: '+indexing);
    return({
        type:qty_the_added,
        payload:{
            qty:qty,
            indexing:indexing
        }
    })
}

export const add_the_price = (price,indexing) =>{
    return({
        type:price_added,
        payload:{
            price:price,
            index:indexing
        }
    })
}

export const remove_the_price = (index) =>{
    return({
        type:price_removed,
        payload:index
    })
}