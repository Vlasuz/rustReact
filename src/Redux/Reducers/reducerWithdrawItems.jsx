export const ADD_ITEMS = 'ADD_ITEMS'
export const REMOVE_ITEMS = 'REMOVE_ITEMS'

const initialState = {
    items: [],
}

export const reducerWithdrawItems = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEMS:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case REMOVE_ITEMS:
            // const newArray = state.
            return {
                ...state,
                items: [...state.items, action.item]
            }
        default:
            return state

    }
}


export function addItem(item) {
    return {
        type: ADD_ITEMS,
        item
    }
}
export function removeItem(item) {
    return {
        type: REMOVE_ITEMS,
        item
    }
}