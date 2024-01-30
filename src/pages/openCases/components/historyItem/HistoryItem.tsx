import React, {useEffect, useRef, useState} from 'react'
import itemIcon from "../../../../assets/images/weapon.png";
import coins from "../../../../assets/images/header__coins.svg";
import userPhoto from "../../../../assets/images/user2.png";
import {HistoryItemStyled} from "./HitoryItem.styled";
import {CSSTransition} from "react-transition-group";
import {NavLink} from "react-router-dom";

interface IOpenCasesItemProps {
    type: string
    data: any
}

export const HistoryItem: React.FC<IOpenCasesItemProps> = ({type, data}) => {


    return (

        <HistoryItemStyled
            className={`${type === "green" && "item__green"} ${type === "brown" && "item__brown"}`}>
            <div className="item__image">
                <img src={data.item.item.image} alt=""/>
            </div>
            <div className="item__details">
                <div className="item__price">
                    <img src={coins} alt=""/>
                    <span>{data.item.price}</span>
                </div>
                <NavLink to={`/user/${data.user.id}`} className="item__author">
                    <img src={data.user.avatar} alt=""/>
                    <span>{data.user.name}</span>
                </NavLink>
            </div>
        </HistoryItemStyled>

    )
}
