import {USER_STATS} from "../types";

const initialState = {
    stats: [
        {
            id: 1,
            title: "Аирдроп",
            count: 0,
            greenStats: "0",
        },
        {
            id: 2,
            title: "Схватка",
            count: 0,
            greenStats: "0",
        },
        {
            id: 3,
            title: "Бобовка",
            count: 0,
            greenStats: "",
        },
        {
            id: 4,
            title: "Ипподром",
            count: 0,
            greenStats: "",
        }
    ]
}

export const reducerUserStats = (state = initialState, action) => {

    switch (action.type) {

        case USER_STATS:
            return {
                ...state,
                // data: action.data
            }
        default:
            return state

    }
}