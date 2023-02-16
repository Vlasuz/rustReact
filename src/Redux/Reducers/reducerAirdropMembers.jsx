import {AIRDROP_MEMBERS_ADD} from "../types";

const initialState = {
    list: [
        {
            id: 1,
            photo: "../images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 2,
            photo: "../images/user.jpeg",
            name: "Vasya",
            coins: 128
        },
        // {
        //     id: 3,
        //     photo: "../images/user.jpeg",
        //     name: "Lena",
        //     coins: 100
        // },
        // {
        //     id: 4,
        //     photo: "../images/user.jpeg",
        //     name: "Vasya",
        //     coins: 128
        // },
        // {
        //     id: 5,
        //     photo: "../images/user.jpeg",
        //     name: "Lena",
        //     coins: 100
        // },
        // {
        //     id: 6,
        //     photo: "../images/user.jpeg",
        //     name: "Vasya",
        //     coins: 128
        // },
        // {
        //     id: 7,
        //     photo: "../images/user.jpeg",
        //     name: "Lena",
        //     coins: 100
        // },
        // {
        //     id: 8,
        //     photo: "../images/user.jpeg",
        //     name: "Vasya",
        //     coins: 128
        // }
    ]
}

export const reducerAirdropMembers = (state = initialState, action) => {

    switch (action.type) {

        case AIRDROP_MEMBERS_ADD:
            return {
                ...state,
                // seconds: state.seconds - action.seconds
            }
        default:
            return state

    }
}