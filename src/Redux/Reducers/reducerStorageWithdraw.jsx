import {STORAGE_WITHDRAW_DELETE, STORAGE_WITHDRAW_TOGGLE} from "../types";

const initialState = {
    list: [],
}

export const reducerStorageWithdraw = (state = initialState, action) => {

    switch (action.type) {

        case STORAGE_WITHDRAW_TOGGLE:
            let newArray = state.list.filter(item => item.id !== action.item.id)

            return {
                ...state,
                list: action.item.isCheck ? [...state.list, action.item] : newArray
            }
        case STORAGE_WITHDRAW_DELETE:
            return {
                ...state,
                list: []
            }
        default:
            return state

    }
}