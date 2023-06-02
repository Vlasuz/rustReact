import {
    USER_INVENTORY_ADD,
    USER_INVENTORY_CHECK,
    USER_INVENTORY_DELETE,
    USER_INVENTORY_REMOVE,
    USER_INVENTORY_UNCHECK
} from "../types";

const initialState = {
    list: []
}

export const reducerUserInventory = (state = initialState, action) => {

    switch (action.type) {

        case USER_INVENTORY_ADD:
            return {
                ...state,
                list: [...state.list, ...action.list]
            }
        case USER_INVENTORY_REMOVE:

            const newArray = action.item !== 'all' ? state.list.filter(item => {
                if(!action.item.some(oldItem => oldItem.id === item.id)){
                    return item
                }
            }) : []


            return {
                ...state,
                list: newArray
            }
        case USER_INVENTORY_CHECK:
            let index = state.list.indexOf(action.item)
            state.list[index].isCheck = !state.list[index].isCheck

            return {
                ...state,
                list: [...state.list]
            }
        case USER_INVENTORY_UNCHECK:
            state.list.map(it => {
                it.isCheck = false
            })
            return {
                ...state,
                list: [...state.list]
            }
        case USER_INVENTORY_DELETE:
            return {
                ...state,
                list: action.list
            }
        default:
            return state

    }
}