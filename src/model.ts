export interface IUser {
    id: string
    steam_id: string
    name: string
    avatar: string
    profile: string
    status: string
    trade_link?: string
    balance?: number
    country_code?: string
    role?: string
    verify?: null
    ban_chat_permanent?: boolean
    ban_chat_date?: string
    muted_users?: IUser[]
    chosen_skin?: Object
}

export interface IAirdropBag {
    map_pos: string
    x_pos: number
    y_pos: number
}

export interface IFaqList {
    id: string
    title: string
    en_title: string
    ua_title: string
    image: string
    faqs: IFaqItem[]
}

export interface IFaqItem {
    id: string
    title: string
    en_title: string
    ua_title: string
    text: string
    en_text: string
    ua_text: string
}

export interface IAirdropPlayers {
    user: IUser
    bags: IAirdropBag[]
}

export interface IUserHistory {
    airdrop_games: IUserHistoryAirdrop[]
    fight_games: IUserHistoryFight[]
}

export interface IUserGames {
    title: string
    slug: string
    data: IUserHistoryFight[] | IUserHistoryAirdrop[]
}

export interface IUserHistoryFightPlayer {
    id: string
    attack: string
    defense: string
    hit: boolean
    user: IUser
    coins: number
    items: IProduct[] | null
}

export interface IUserHistoryFight {
    id: string
    game_state: string
    created_at: string
    first_player: IUserHistoryFightPlayer
    second_player: IUserHistoryFightPlayer
    winner: IUserHistoryFightPlayer
}

export interface IUserHistoryAirdrop {
    id: string
    game_id: number
    game_state: string
    created_at: string
    random_hash: string
    random_data: string
    players: IAirdropPlayers[]
    degree: number
    bank: number
    x_pos: number
    y_pos: number
    winner: IAirdropPlayers
    win_bag: IAirdropBag
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
    game: string
    id: string
    image: string
    price: {
        steam_price: number
        value: number
    }
    rarity: {
        title: string
        color: string
    }
    steam_id: string
    title: string
    trade_ban: null | string
}

export interface IFilterData {
    sortBy: string
    sort: boolean
}

export interface IRarity {
    [rarity: string]: number
}

export interface IChatItem {
    id: string
    user: IUser
    text: string
    created_at: string
}

export interface IAsideButtonToRight {
    icon: string
    title: string
    slug: string
    sound: string
}

export interface ITrigger {
    type: string
    status: boolean
}

export interface ISkin {
    id: string
    title: string
    sub_title: string
    image: string
    price: number
    sale: null | number
    active: boolean
    gallery: {
        iii: string
        iix: string
        ixi: string
        xii: string
        xix: string
        xxi: string
        ixx: string
        xxx: string
    }
}

export interface IUserHistoryBalance {
    id: string
    created_at: string
    type: string
    value: number
    price: number
    status: string
    pay_type: string
    pin_code: string
    items: [
        {
            id: string
            steam_id: string
            game: string
            title: string
            trade_ban: string
            image: string
            rarity: {
                title: string
                color: string
            }
            price: {
                steam_price: number
                value: number
            }
        }
    ]
}

export interface ISiteSettings {

    vkontakte: string
    telegram: string
    discord: string
    technical_break: boolean
    technical_break_date: null
    default_fight_skin: ISkin
    airdrop_bag_price: number
    chat_rules_page: {
        id: string
        title: string
        en_title: string
        ua_title: string
        text: string
        en_text: string
        ua_text: string
        is_main: boolean
    }
    usd_to_coins: number
    uah_to_coins: number
    kzt_to_coins: number
    rub_to_coins: number
    sell_skin_commission: number
    pay_skin_commission: number
    fight_commission: number
    airdrop_commission: number
    withdraw_enable: boolean
    pay_enable: boolean
    airdrop_enable: boolean
    fight_enable: boolean

}

export interface INotice {
    slug: string
    text: string
    icon: string
}

export interface ISmilesSticker {
    id: string
    code: string
    image: string
}

export interface ISmilesList {
    id: string
    title: string
    en_title: string
    ua_title: string
    stickers: ISmilesSticker[]
}
