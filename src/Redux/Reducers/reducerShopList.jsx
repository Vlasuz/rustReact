import {SHOP_LIST} from "../types";

const initialState = {
    list: []
}

export const reducerShopList = (state = initialState, action) => {

    switch (action.type) {

        case SHOP_LIST:
            return {
                ...state,
                list: action.list
            }
        default:
            return state

    }
}