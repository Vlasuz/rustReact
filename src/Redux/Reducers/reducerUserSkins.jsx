export const USER_SKIN_SET = 'USER_SKIN_SET'
export const USER_SKIN_BOUGHT = 'USER_SKIN_BOUGHT'

const initialState = {
    skin: {},
    bought_skins: []
}

export const reducerUserSkins = (state = initialState, action) => {

    switch (action.type) {
        case USER_SKIN_SET:
            return {
                ...state,
                skin: action.skin
            }
        case USER_SKIN_BOUGHT:
            return {
                ...state,
                bought_skins: [...state.bought_skins, action.skin]
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
export function userSkinBought(skin) {
    return {
        type: USER_SKIN_BOUGHT,
        skin
    }
}