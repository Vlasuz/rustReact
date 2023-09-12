import React, { useEffect } from 'react'
import userPhoto from './../../../assets/images/user.jpeg'
import steam from './../../../assets/images/steam.svg'
import tradeLinkActive from './../../../assets/images/active.svg'
import { useUserData } from '../../../hooks/userData'
import { useSelector } from 'react-redux'
import { IUser } from '../../../model'
import { useParams } from 'react-router'
import { getUser } from '../../../functions/getUser'
import { useUserProfile } from '../../../hooks/userProfile'

interface IUserProps {
    userData: IUser
}

export const User: React.FC<IUserProps> = ({userData}) => {

    const isUserProfile = Object.keys(userData).length

    return (
        <div className="top-gamer">
            <div className="top-gamer__vertical">
                <span>
                    {userData.status}
                </span>
            </div>
            <div className="top-gamer__info">
                <div className="info__photo">
                    <img src={userData.avatar} alt="Photo" />
                </div>
                <div className="info__block">
                    <h2 className="info__name">
                        {userData.name}
                    </h2>
                    <a className="info__profile" target='_blank' href={userData.profile}>
                        <img src={steam} alt="Steam" />
                        <span>ПРОФИЛЬ</span>
                    </a>
                </div>
            </div>
            {!isUserProfile && <div className="top-gamer__trade-link">
                <div className="trade-link__block">
                    <h3>Trade-ссылка</h3>
                    {/* onClick="openPopup('trade-link-change')" */}
                    <button className="trade-link__button">Изменить</button>
                </div>
                <div className="trade-link__check">
                    <img src={tradeLinkActive} alt="Photo" />
                    <span>АКТИВНО</span>
                </div>
            </div>}
        </div>
    )
}
