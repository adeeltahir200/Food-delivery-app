import { item_added_to_cart, item_removed_from_cart, item_added_to_favourites, item_removed_from_favourites, user_added, tokens_added, qty_added, signup_credentials_added, qty_the_added, price_added } from './Actiontypes';

export const Reducers = (state, action) => {

    switch (action.type) {
        case (item_added_to_cart):
            console.log('Item added to cart from reducers')
            return ({ ...state, cart: [...state.cart, action.payload] })
        case (item_removed_from_cart):
            return ({ ...state, cart: state.cart.filter((value) => (value.the_description != action.payload)) })
        case (item_added_to_favourites):
            return ({ ...state, favourites: [...state.favourites, action.payload] })
        case (item_removed_from_favourites):
            return ({ ...state, favourites: state.favourites.filter((value) => (value.the_description != action.payload)) })
        case (user_added):
            return ({ ...state, usercredentials: action.payload })
        case (tokens_added):
            return ({ ...state, tokens: action.payload })
        case (qty_added):
            //state.cart[0]={...state.cart[action.payload.indexing],the_qty:action.payload.qty}
            return (state)
        case (signup_credentials_added):
            console.log('The action payload recieved is : ' + JSON.stringify(action.payload))
            return ({ ...state, sigupcredentials: action.payload })
        case (qty_the_added):
            var j = 0
            state.cart.map((value) => {
                if (j == action.payload.indexing) {
                    value.the_qty = action.payload.qty
                    j = j + 1
                }
                j = j + 1;
            })
            //console.log(state.cart)
            return (state)
        default:
            return (state);
    }
}