import {logger} from "../../middleware/logger";

export const USER_BALANCE_SET_COINS = "USER_BALANCE_SET_COINS"
export const USER_BALANCE_ADD_COINS = "USER_BALANCE_ADD_COINS"
export const USER_BALANCE_REMOVE_COINS = "USER_BALANCE_REMOVE_COINS"

const initialState = {
    balance: 0
}

export const reducerUserBalance = (state = initialState, action) => {

    switch(action.type) {

        case USER_BALANCE_SET_COINS:
            return{
                ...state,
                balance: +action.coins
            }
        case USER_BALANCE_ADD_COINS:
            return{
                ...state,
                balance: state.balance + +action.coins
            }
        case USER_BALANCE_REMOVE_COINS:
            return{
                ...state,
                balance: state.balance - +action.coins
            }
        default:
            return state

    }
}

export function userBalanceSetCoins(coins) {
    return {
        type: USER_BALANCE_SET_COINS,
        coins
    }
}
export function userBalanceAddCoins(coins) {
    return {
        type: USER_BALANCE_ADD_COINS,
        coins
    }
}
export function userBalanceRemoveCoins(coins) {
    return {
        type: USER_BALANCE_REMOVE_COINS,
        coins
    }
}