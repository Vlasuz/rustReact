import React from 'react'
import botImage from './../../../../assets/images/bot.svg'
import { FightUserStyled } from './fightUser.styled'
import {IProduct, IUser} from '../../../../model'
import {useNavigate} from "react-router";

interface IFightUserProps {
    fight_user: {
        id: string
        attack: string
        defense: string
        hit: boolean
        user: IUser
        coins: number
        items: IProduct[]
        is_bot: boolean
    } | null
    user_winner: {
        id: string
        attack: string
        defense: string
        hit: boolean
        user: IUser
        coins: number
        items: IProduct[]
    } | null
}

export const FightUser: React.FC<IFightUserProps> = ({ fight_user, user_winner }) => {

    const navigate = useNavigate()

    const userLoading = <div className="user__load">
        <div className="load">
            <div className="load__line" />
            <div className="load__line" />
            <div className="load__line" />
        </div>
    </div>

    const isUserLoading = (fight_user === null ? " user_loading" : "")
    const isUserLooser = (user_winner !== null && fight_user?.id !== user_winner?.id ? " user_looser" : "")

    const handleGoToProfile = () => {
        if(fight_user?.is_bot) return;

        navigate(`/user/${fight_user?.user.id}`)
    }

    return (
        <FightUserStyled className={"item__user" + isUserLoading + isUserLooser}>

            {
                fight_user === null ? userLoading :
                    <a style={{cursor: fight_user?.is_bot ? "default" : "pointer"}} onClick={handleGoToProfile}>
                        <div className="user__photo">
                            <img src={fight_user.user.avatar ?? botImage} alt="Photo" />
                        </div>
                        <div className="user__name">
                            {fight_user.user.name}
                        </div>
                    </a>
            }

        </FightUserStyled>
    )
}
