import React, { useEffect, useState } from 'react'
import itemIcon from "../../../../assets/images/weapon.png";
import coin from "../../../../assets/images/header__coins.svg";
import {CaseItemStyled} from "./CaseItem.styled";
import {ICrateItem} from "../../../../model";
import axios from "axios";
import {getApiLink} from "../../../../functions/getApiLink";

interface ICaseItemProps {
    data: ICrateItem
    itemRarities: any
}

export const CaseItem:React.FC<ICaseItemProps> = ({data, itemRarities}) => {

    const rarityColor = itemRarities?.filter((item: any) => data.price > item.price_from && data.price < item.price_to && item)[0]?.color

    return (
        <CaseItemStyled className={"case__item"}>
            <div className="item__name">
                {data.item.title}
            </div>
            <div className="item__top">
                <div className={"item__cool"} style={{background: rarityColor}} />
                <div className="item__chance">
                    {data.rarity}%
                </div>
            </div>
            <div className="item__photo">
                <img src={data.item.image} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>
                    {data.price}
                </span>
            </div>
        </CaseItemStyled>
    )
}
