import React, { useEffect } from 'react'
import userIcon from "../../../assets/images/user2.png";
import {LoadingStyled} from "../../../components/loading/loading.styled";

interface IBattleTeam2v2Props {

}

export const BattleTeam2v2:React.FC<IBattleTeam2v2Props> = () => {

    return (
        <div className={`bottom__people bottom__team-2v2`}>
            <div className="person person_blue person_left">
                <div className="user__photo">
                    <img src={userIcon} alt="user"/>
                </div>
                <span>saitama</span>
            </div>
            <div className="person person_blue person_left person_loading">
                <div className="user__photo">
                    <LoadingStyled className="load">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </LoadingStyled>
                </div>
                <span>...</span>
            </div>
            <strong>
                VS
            </strong>
            <div className="person person_red person_right person_loading">
                <div className="user__photo">
                    <LoadingStyled className="load">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </LoadingStyled>
                </div>
                <span>...</span>
            </div>
            <div className="person person_red person_right person_loading">
                <div className="user__photo">
                    <LoadingStyled className="load">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </LoadingStyled>
                </div>
                <span>...</span>
            </div>
        </div>
    )
}
