export const BEGIN_MEMBER_AIRDROP = "BEGIN_MEMBER_AIRDROP"

const initialState = {
    data: false
}

export const reducerSubmitAirdrop = (state = initialState, action) => {

    switch (action.type) {

        case BEGIN_MEMBER_AIRDROP:
            return {
                ...state,
                data: action.data
            }
        default:
            return state

    }
}

export function handleSubmitAirdrop(data) {
    return {
        type: BEGIN_MEMBER_AIRDROP,
        data
    }
}