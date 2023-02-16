export const USER_SKIN_SET = 'USER_SKIN_SET'

const initialState = {
    skin: {}
}

export const reducerUserSkins = (state = initialState, action) => {

    switch (action.type) {
        case USER_SKIN_SET:
            return {
                ...state,
                skin: action.skin
            }
        default:
            return state

    }
}

export function userSkinSet(skin) {
    return {
        type: USER_SKIN_SET,
        skin
    }
}