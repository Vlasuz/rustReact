import React from 'react'
import { IUser, IUserHistory, IUserHistoryAirdrop, IUserHistoryFight } from '../../../model'
import { useUserData } from '../../../hooks/userData'
import { Loading } from '../../../components/loading/Loading'
import { LoadingStyled } from '../../../components/loading/loading.styled'
import {useSelector} from "react-redux";

interface IStatsProps {
    game: any
    user: IUser
    isLoadingGames: boolean
}

export const Stats: React.FC<IStatsProps> = ({ game, isLoadingGames, user }) => {

    const isCrateGame = game.slug === "crate"

    const userGames: any = useSelector((state: any) => state.toolkit.userGames)

    const winnerGames = game.data?.filter((item: any) => (item.winner?.user && item.winner.user?.id === user?.id) || item.winners?.some((item: any) => item.user.id === user?.id))
    const linesStats = game.data?.map((item: any, index: number) => index < 5 && <div key={item.id} className={(item.winner?.user && item.winner.user?.id === user?.id)  || item.winners?.some((item: any) => item.user.id === user?.id) || isCrateGame ? "line__stats line_active" : "line__stats"} />)

    const loading = <LoadingStyled className="load">
        <div className="line" />
        <div className="line" />
        <div className="line" />
    </LoadingStyled>

    const statsData = <>
        <p>
            {game.data?.length}
            {!isCrateGame ? <sup>{winnerGames?.length} побед</sup> : <sup>крейтов</sup>}
        </p>
        <div className="lines">
            {linesStats}
        </div>
    </>

    const stats = game.data && Object.keys(game.data)?.length ? statsData : <p>Нет данных</p>

    return (
        <div className={"stats" + (!isLoadingGames && game.data && Object.keys(game.data)?.length ? "" : " stats_disabled")}>
            <h3>
                {game.title}
            </h3>
            {userGames.some((item: any) => item.type === game.slug) ? stats : loading}
        </div>
    )
}
