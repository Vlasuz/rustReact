import {SHOP_LIST_ADD, SHOP_LIST_REMOVE} from "../types";

const initialState = {
    list: [],
    summary: 0
}
export const reducerShopListAdded = (state = initialState, action) => {

    switch (action.type) {

        case SHOP_LIST_ADD:
            let sum = 0
            action.item.items.forEach(item => sum += item.price.value)

            return {
                ...state,
                list: action.item.items,
                summary: sum
            }
        case SHOP_LIST_REMOVE:
            let newArray = state.list.filter(item => item.id !== action.item.id);
            let newSum = state.summary - action.item.cost;

            return {
                ...state,
                list: action.item === 'all' ? [] : newArray,
                summary: action.item === 'all' ? 0 : newSum
            }
        default:
            return state

    }
}