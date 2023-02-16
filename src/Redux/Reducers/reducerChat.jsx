import {a} from "@react-spring/web";

export const CHAT_ADD_MESSAGE = 'CHAT_ADD_MESSAGE'
export const CHAT_DELETE_MESSAGE = 'CHAT_DELETE_MESSAGE'
export const CHAT_ADD_ONLINE = 'CHAT_ADD_ONLINE'

const initialState = {
    messages: [],
    online: 0
}

export const reducerChat = (state = initialState, action) => {

    switch (action.type) {
        case CHAT_ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, ...action.message]
            }
        case CHAT_DELETE_MESSAGE:
            let newArray = state.messages.filter(item => item.id !== action.message)

            return {
                ...state,
                messages: newArray
            }
        case CHAT_ADD_ONLINE:
            return {
                ...state,
                online: action.online ? action.online : 0
            }
        default:
            return state

    }
}


export function chatAddMessages(message) {
    return {
        type: CHAT_ADD_MESSAGE,
        message
    }
}
export function chatDeleteMessages(message) {
    return {
        type: CHAT_DELETE_MESSAGE,
        message
    }
}
export function chatAddOnline(online) {
    return {
        type: CHAT_ADD_ONLINE,
        online
    }
}
