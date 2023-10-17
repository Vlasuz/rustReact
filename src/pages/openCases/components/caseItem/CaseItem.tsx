import React, { useEffect } from 'react'
import itemIcon from "../../../../assets/images/weapon.png";
import coin from "../../../../assets/images/header__coins.svg";
import {CaseItemStyled} from "./CaseItem.styled";

interface ICaseItemProps {

}

export const CaseItem:React.FC<ICaseItemProps> = () => {

    return (
        <CaseItemStyled className={"case__item"}>
            <div className="item__name">
                Pushka imba01
            </div>
            <div className="item__top">
                <div className={"item__cool item__cool_F5AD57"} />
                <div className="item__chance">0.05%</div>
            </div>
            <div className="item__photo">
                <img src={itemIcon} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>123</span>
            </div>
        </CaseItemStyled>
    )
}
