import { IFightItem } from "../model";
import weapon from "./../assets/images/weapon.png"
import user from './../assets/images/user.jpeg'

export const fightsList: IFightItem[] = [
    {
        user_first: {
            id: "123123",
            photo: user,
            username: "asd",
            user_link: "qe12",
            steam_url: "asdasd",
        },
        clothes: null,
        user_second: null,
        bank: 123,
        game_status: "waiting",
        user_winner: null,
    },
    {
        user_first: {
            id: "123123",
            photo: user,
            username: "asd",
            user_link: "qe12",
            steam_url: "asdasd",
        },
        clothes: [
            {
                image: weapon,
                cost: 123,
                rarity: 'red',
            }
        ],
        user_second: null,
        bank: 134,
        game_status: "waiting",
        user_winner: null,
    },
    {
        user_first: {
            id: "123123",
            photo: user,
            username: "xcz312",
            user_link: "qe12",
            steam_url: "asdasd",
        },
        clothes: [
            {
                image: weapon,
                cost: 123,
                rarity: 'red',
            }
        ],
        user_second: {
            id: "123123321",
            photo: user,
            username: "112asc",
            user_link: "qe12",
            steam_url: "asdasd",
        },
        bank: 134,
        game_status: "process",
        user_winner: null,
    },
    {
        user_first: {
            id: "123123",
            photo: user,
            username: "xcz312",
            user_link: "qe12",
            steam_url: "asdasd",
        },
        clothes: [
            {
                image: weapon,
                cost: 123,
                rarity: 'red',
            }
        ],
        user_second: {
            id: '3213',
            photo: user,
            username: "112asc",
            user_link: "qe12",
            steam_url: "asdasd",
        },
        bank: 134,
        game_status: "finish",
        user_winner: {
            id: "3213",
            photo: user,
            username: "112asc",
            user_link: "qe12",
            steam_url: "asdasd",
        },
    }
]