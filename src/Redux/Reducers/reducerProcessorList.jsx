import {PROCESSOR_LIST_ADD, PROCESSOR_LIST_DELETE, PROCESSOR_LIST_REMOVE} from "../types";

const initialState = {
    list: [],
    summary: 0
}

export const reducerProcessorList = (state = initialState, action) => {

    switch (action.type) {

        case PROCESSOR_LIST_ADD:
            return {
                ...state,
                list: [...state.list, ...action.item],
                summary: action.item.map(item => +state.summary + +item.price.value)
            }
        case PROCESSOR_LIST_REMOVE:
            let newArray = state.list.filter(item => item.id !== action.item[0].id)

            return {
                ...state,
                list: newArray,
                summary: action.item.map(item => +state.summary - +item.price.value)
            }
        case PROCESSOR_LIST_DELETE:
            return {
                ...state,
                list: [],
                summary: 0
            }
        default:
            return state

    }
}