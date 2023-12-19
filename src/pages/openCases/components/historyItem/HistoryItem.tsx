import React, {useEffect, useRef, useState} from 'react'
import itemIcon from "../../../../assets/images/weapon.png";
import coins from "../../../../assets/images/header__coins.svg";
import userPhoto from "../../../../assets/images/user2.png";
import {HistoryItemStyled} from "./HitoryItem.styled";

interface IOpenCasesItemProps {
    type: string
    data: any
    isLoad: boolean
}

export const HistoryItem:React.FC<IOpenCasesItemProps> = ({type, data, isLoad}) => {

    const liBlock: any = useRef(null)

    useEffect(() => {
        if(isLoad) {
            setTimeout(() => {
                liBlock.current.classList.remove("is-new")
            }, 100)
        } else {
            liBlock.current.classList.remove("is-new")
        }

    }, [])

    return (
        <HistoryItemStyled ref={liBlock} className={ `is-new ${type === "green" && "item__green"} ${type === "brown" && "item__brown"}`}>
            <div className="item__image">
                <img src={data.item.item.image} alt=""/>
            </div>
            <div className="item__details">
                <div className="item__price">
                    <img src={coins} alt=""/>
                    <span>{data.item.price}</span>
                </div>
                <div className="item__author">
                    <img src={data.user.avatar} alt=""/>
                    <span>{data.user.name}</span>
                </div>
            </div>
        </HistoryItemStyled>
    )
}
