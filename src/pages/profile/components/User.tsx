import React, {useEffect} from 'react'
import steam from './../../../assets/images/steam.svg'
import tradeLinkActive from './../../../assets/images/active.svg'
import tradeLinkNonActive from './../../../assets/images/nonactive.svg'
import {useDispatch, useSelector} from 'react-redux'
import {IUser} from '../../../model'
import {useParams} from 'react-router'
import {setPopup} from '../../../redux/toolkitSlice'

interface IUserProps {
    userData: IUser
}

export const User: React.FC<IUserProps> = ({userData}) => {

    const {userId} = useParams()
    const dispatch = useDispatch()

    return (
        <div className="top-gamer">
            <button className="top-gamer__vertical" onClick={_ => !userId && dispatch(setPopup('popup-change-status'))}>
                <span>
                    {userData.status ? userData.status : "..."}
                </span>
            </button>
            <div className="top-gamer__info">
                <div className="info__photo">
                    <img src={userData.avatar} alt="Photo"/>
                </div>
                <div className="info__block">
                    <h2 className="info__name">
                        {userData.name}
                    </h2>
                    <a className="info__profile" target='_blank' href={userData.profile}>
                        <img src={steam} alt="Steam"/>
                        <span>ПРОФИЛЬ</span>
                    </a>
                </div>
            </div>
            {!userId &&
                <div className={"top-gamer__trade-link" + (!userData.trade_link ? " top-gamer__trade-link_nonactive" : "")}>
                    <div className="trade-link__block">
                        <h3>Trade-ссылка</h3>
                        <button onClick={_ => dispatch(setPopup(userData.trade_link ? 'popup-trade popup-trade-link-change' : 'popup-trade popup-trade-link'))} className="trade-link__button">
                            {
                                userData.trade_link ? "Изменить" : "Добавить"
                            }
                        </button>
                    </div>
                    <div className="trade-link__check">
                        <img src={userData.trade_link ? tradeLinkActive : tradeLinkNonActive} alt="Photo"/>
                        <span>АКТИВНО</span>
                    </div>
                </div>
            }
        </div>
    )
}
