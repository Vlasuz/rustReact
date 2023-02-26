import {AIRDROP_MEMBERS_ADD} from "../types";

const initialState = {
    list: []
}

export const reducerAirdropMembers = (state = initialState, action) => {

    switch (action.type) {

        case AIRDROP_MEMBERS_ADD:
            return {
                ...state,
                list: action.data
            }
        default:
            return state

    }
}