import React, { useEffect } from 'react'
import itemIcon from "../../../../assets/images/weapon.png";
import coin from "../../../../assets/images/header__coins.svg";
import {CaseItemStyled} from "./CaseItem.styled";
import {ICrateItem} from "../../../../model";

interface ICaseItemProps {
    data: ICrateItem
}

export const CaseItem:React.FC<ICaseItemProps> = ({data}) => {

    return (
        <CaseItemStyled className={"case__item"}>
            <div className="item__name">
                {data.item.title}
            </div>
            <div className="item__top">
                <div className={"item__cool item__cool_F5AD57"} />
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
