import React from 'react'
import { FightUserStyled } from './fightUser.styled'
import { IUser } from '../../../../model'

interface IFightUserProps {
    fight_user: IUser | null
    user_winner: IUser | null
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
                    <>
                        <div className="user__photo">
                            <img src={fight_user?.photo} alt="Photo" />
                        </div>
                        <div className="user__name">
                            {fight_user?.username}
                        </div>
                    </>
            }

        </FightUserStyled>
    )
}
