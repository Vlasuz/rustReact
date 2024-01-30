import {useDispatch, useSelector} from "react-redux"
import {IUser, IUserGames, IUserHistory, IUserHistoryAirdrop} from "../model"
import {useEffect} from "react"
import {getUserGames} from "../api/getUserGames"

interface useUserDataProps {
    user: string | any
}

export const useUserGames = ({user}: useUserDataProps) => {
    const userGames: IUserHistory = useSelector((state: any) => state.toolkit.userGames)

    const games: IUserGames[] = [
        {
            title: "Аирдроп",
            slug: "airdrop",
            data: userGames.airdrop_games
        },
        {
            title: "Схватка",
            slug: "fight",
            data: userGames.fight_games
        },
        {
            title: "Крейты",
            slug: "crates",
            data: userGames.fight_games
        },
        {
            title: "Батлы",
            slug: "battle",
            data: userGames.fight_games
        }
    ]

    return {games};
}