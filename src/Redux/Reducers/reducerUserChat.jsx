export const ACTION_BAN = "ACTION_BAN"
export const ACTION_BLOCK = "ACTION_BLOCK"
export const ACTION_MUTED_SET = "ACTION_MUTED_SET"
export const ACTION_MUTED_ADD = "ACTION_MUTED_ADD"
export const ACTION_MUTED_REMOVE = "ACTION_MUTED_REMOVE"

const initialState = {
    ban: false,
    block: false,
    muted_users: []
}

export const reducerUserChat = (state = initialState, action) => {


    switch (action.type) {

        case ACTION_BAN:
            return {
                ...state,
                ban: action.bool,
                block: state.block,
                muted_users: state.muted_users
            }
        case ACTION_BLOCK:
            return {
                ...state,
                ban: state.ban,
                block: action.bool,
                muted_users: state.muted_users
            }
        case ACTION_MUTED_SET:
            return {
                ...state,
                ban: state.ban,
                block: state.block,
                muted_users: action.array
            }
        case ACTION_MUTED_ADD:
            return {
                ...state,
                ban: state.ban,
                block: state.block,
                muted_users: [...state.muted_users, action.person]
            }
        case ACTION_MUTED_REMOVE:
            const newArray = state.muted_users.filter(item => item.id !== action.person.id)

            return {
                ...state,
                ban: state.ban,
                block: state.block,
                muted_users: newArray
            }
        default:
            return state

    }
}

export function actionBan(bool) {
    return {
        type: ACTION_BAN,
        bool
    }
}
export function actionBlock(bool) {
    return {
        type: ACTION_BLOCK,
        bool
    }
}
export function actionMutedSet(array) {
    return {
        type: ACTION_MUTED_SET,
        array
    }
}
export function actionMutedAdd(person) {
    return {
        type: ACTION_MUTED_ADD,
        person
    }
}
export function actionMutedRemove(person) {
    return {
        type: ACTION_MUTED_REMOVE,
        person
    }
}