import { IFightItem } from "../model";
import weapon from "./../assets/images/weapon.png"
import user from './../assets/images/user.jpeg'

export const fightsList: IFightItem[] = [
    {
        user_first: {
            id: "12312123",
            avatar: user,
            name: "asd",
            profile: "qe12",
            steam_id: "",
            status: ""
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
            avatar: user,
            name: "asd",
            profile: "qe12",
            steam_id: "",
            status: ""
        },
        clothes: [
            {
                image: weapon,
                id: '123',
                cost: 123,
                title: '123',
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
            id: "1231233213asd",
            avatar: user,
            name: "asd",
            profile: "qe12",
            steam_id: "",
            status: ""
        },
        clothes: [
            {
                image: weapon,
                id: '123',
                title: 'ds',
                cost: 123,
                rarity: 'red',
            }
        ],
        user_second: {
            id: "1231233asd21",
            avatar: user,
            name: "asd",
            profile: "qe12",
            steam_id: "",
            status: ""
        },
        bank: 1234,
        game_status: "process",
        user_winner: null,
    },
    {
        user_first: {
            id: "1231zxcasd23",
            avatar: user,
            name: "asd",
            profile: "qe12",
            steam_id: "",
            status: ""
        },
        clothes: [
            {
                image: weapon,
                cost: 123,
                id: '123',
                title: 'ds',
                rarity: 'red',
            }
        ],
        user_second: {
            id: '32123sad13',
            avatar: user,
            name: "asd",
            profile: "qe12",
            steam_id: "",
            status: ""
        },
        bank: 134,
        game_status: "finish",
        user_winner: {
            id: "32123sad13",
            avatar: user,
            name: "asd",
            profile: "qe12",
            steam_id: "",
            status: ""
        },
    }
]