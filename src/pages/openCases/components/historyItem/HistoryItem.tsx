import React, { useEffect } from 'react'
import itemIcon from "../../../../assets/images/weapon.png";
import coins from "../../../../assets/images/header__coins.svg";
import userPhoto from "../../../../assets/images/user2.png";
import {HistoryItemStyled} from "./HitoryItem.styled";

interface IOpenCasesItemProps {
    type: string
}

export const HistoryItem:React.FC<IOpenCasesItemProps> = ({type}) => {

    return (
        <HistoryItemStyled className={type === "green" ? " item__green" : " item__brown"}>
            <div className="item__image">
                <img src={itemIcon} alt=""/>
            </div>
            <div className="item__details">
                <div className="item__price">
                    <img src={coins} alt=""/>
                    <span>1,30</span>
                </div>
                <div className="item__author">
                    <img src={userPhoto} alt=""/>
                    <span>Leon_king</span>
                </div>
            </div>
        </HistoryItemStyled>
    )
}
