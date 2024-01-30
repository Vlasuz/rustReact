import React from 'react'
import { FightUserStyled } from './fightUser.styled'
import {IProduct, IUser} from '../../../../model'
import {NavLink} from "react-router-dom";

interface IFightUserProps {
    fight_user: {
        id: string
        attack: string
        defense: string
        hit: boolean
        user: IUser
        coins: number
        items: IProduct[]
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

    const userLoading = <div className="user__load">
        <div className="load">
            <div className="load__line" />
            <div className="load__line" />
            <div className="load__line" />
        </div>
    </div>

    const isUserLoading = (fight_user === null ? " user_loading" : "")
    const isUserLooser = (user_winner !== null && fight_user?.id !== user_winner?.id ? " user_looser" : "")

    return (
        <FightUserStyled className={"item__user" + isUserLoading + isUserLooser}>

            {
                fight_user === null ? userLoading :
                    <NavLink to={"/user/"+fight_user.user.id}>
                        <div className="user__photo">
                            <img src={fight_user.user.avatar} alt="Photo" />
                        </div>
                        <div className="user__name">
                            {fight_user.user.name}
                        </div>
                    </NavLink>
            }

        </FightUserStyled>
    )
}
