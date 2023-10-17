import React, { useEffect } from 'react'
import userIcon from "../../../assets/images/user2.png";
import {LoadingStyled} from "../../../components/loading/loading.styled";

interface IBattleGroup4pProps {

}

export const BattleGroup4p:React.FC<IBattleGroup4pProps> = () => {

    return (
        <div className={`bottom__people bottom__group-2p`}>
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
        </div>
    )
}
