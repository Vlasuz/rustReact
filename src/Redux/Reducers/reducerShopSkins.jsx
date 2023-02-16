export const SHOP_SKINS = 'SHOP_SKINS'

const initialState = {
    skins: []
}

export const reducerShopSkins = (state = initialState, action) => {

    switch (action.type) {
        case SHOP_SKINS:
            return {
                ...state,
                skins: action.skin
            }
        default:
            return state

    }
}

export function skinsShop(skin) {
    return {
        type: SHOP_SKINS,
        skin
    }
}