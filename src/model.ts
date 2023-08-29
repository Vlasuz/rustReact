export interface IUserSession {
    "id": string,
    "steam_id": string,
    "name": string,
    "avatar": string,
    "profile": string,
    "status": string,
    "trade_link": string,
    "balance": number,
    "country_code": string,
    "role": string,
    "verify"?: null,
    "ban_chat_permanent": boolean,
    "ban_chat_date"?: string,
    "muted_users"?: IUser[],
    "chosen_skin"?: Object
}

export interface IUser {
    id: string
    photo: string
    username: string
    user_link: string
    steam_url: string
}

export interface IUserHistory {
    date: Date
    sleepers: string
    winner: {
        photo: string
        link: string
    }
    bid: number | string
    bank: number | string
    PF: {
        signature: string
        random: string
        jackpot: number
    }
    is_winner: boolean
}

export interface IUserHistoryAirdrop extends IUserHistory {}

export interface IUserHistoryFight extends IUserHistory {
    sleepers: never
    PF: never
}

export interface IUserStatic {
    title: string
    games: number
    games_winner: number
    static_lines: boolean[]
}

export interface IFightItem {
    user_first: IUser
    user_second: IUser | null
    bank: number
    clothes: IProduct[] | null
    game_status: string
    user_winner: IUser | null
}

export interface ISocialsItem {
    icon: string
    link: string
}

export interface IProduct {
    id?: string | number
    count?: number
    image: string
    cost: number
    rarity: string
}
