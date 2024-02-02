import {useDispatch, useSelector} from "react-redux"
import {IUser, IUserGames, IUserHistory, IUserHistoryAirdrop} from "../model"
import {useEffect} from "react"
import {getUserGames} from "../api/getUserGames"

interface useUserDataProps {
    user: string | any
}

export const useUserGames = ({user}: useUserDataProps) => {
    const userGames: any = useSelector((state: any) => state.toolkit.userGames)

    const games: IUserGames[] = [
        {
            title: "Аирдроп",
            slug: "airdrop",
            data: userGames.filter((item: any) => item.type === "airdrop")[0]?.data
        },
        {
            title: "Схватка",
            slug: "fight",
            data: userGames.filter((item: any) => item.type === "fight")[0]?.data
        },
        {
            title: "Крейты",
            slug: "crate",
            data: userGames.filter((item: any) => item.type === "crate")[0]?.data
        },
        {
            title: "Батлы",
            slug: "battle",
            data: userGames.filter((item: any) => item.type === "battle")[0]?.data
        }
    ]

    return {games};
}