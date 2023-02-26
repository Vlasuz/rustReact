import React, {useState} from 'react';
import TopGamerTradeLink from "./TopGamerTradeLink";
import {Trans, useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {reducerAuth} from "../../Redux/Reducers/reducerAuth";
import {reducerUserData} from "../../Redux/Reducers/reducerUserData";
import Translate from "../../Hooks/Translate";
import OpenPopup from "../../Hooks/OpenPopup";
import PopupChangeStatus from "../Popups/PopupChangeStatus";

const TopGamer = () => {

    const session = useSelector(state => state.reducerSession.session)
    const [status, setStatus] = useState(session.status)

    const changeStatus = () => {
        OpenPopup("popup-change-status")
    }

    return (
        <>
            <div className="top-gamer">
                {
                    Object.keys(session).length && <>
                        <div onClick={changeStatus} className="top-gamer__vertical">
                            <span>
                                {status ? status : "?????"}
                            </span>
                        </div>
                        <div className="top-gamer__info">
                            <div className="info__photo">
                                <img src={session.avatar} alt="Photo"/>
                            </div>
                            <div className="info__block">
                                <h2 className="info__name">{session.name}</h2>
                                <a className="info__profile" target={"_blank"} href={session.profile}>
                                    <img src="../images/steam.svg" alt="Steam"/>
                                    <span>
                                        <Translate>text_profile</Translate>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <TopGamerTradeLink/>
                    </>
                }

            </div>
            <PopupChangeStatus status={status} setStatus={setStatus}/>
        </>
    );
};

export default TopGamer;