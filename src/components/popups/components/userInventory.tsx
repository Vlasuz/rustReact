import React, {useEffect, useState} from 'react'
import {PopupCross} from "../../../hooks/popup/components/PopupCross";
import {IProduct} from "../../../model";
import cross from "../../../assets/images/cross.svg";
import coins from "../../../assets/images/header__coins.svg";
import {useSelector} from "react-redux";
import {Product} from "../../product/Product";
import {useItemDrop} from "../../../hooks/itemDrop";
import {ItemTypes} from "../../../constants/ItemTypes";

interface IUserInventoryProps {

}

export const UserInventory: React.FC<IUserInventoryProps> = () => {

    const inventory = useSelector((state: any) => state.toolkit.userInventory)
    const dropToInventory = useItemDrop({itemType: ItemTypes.CLOTHES_FIGHT_ZONE})
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [sortBy, setSortBy] = useState("Все игры")

    return (
        <>
            <h2>Инвентарь сайта</h2>
            <PopupCross/>
            <div className="popup-new-room__sort">
                <span>Сортировка</span>
                <div className={"select" + (isSelectOpen ? " select_open" : "")}>
                    <div className="select__head" onClick={_ => setIsSelectOpen(prev => !prev)}>
                            <span>
                                {sortBy}
                            </span>
                    </div>
                    <div className="select__body">
                        <div onClick={_ => setSortBy("Все игры")} className="select__item">Все игры</div>
                        <div onClick={_ => setSortBy("CSGO")} className="select__item">CSGO</div>
                        <div onClick={_ => setSortBy("RUST")} className="select__item">RUST</div>
                    </div>
                </div>
            </div>
            <ul ref={dropToInventory.drop} className="popup-new-room__list">

                {
                    inventory?.filter((item: IProduct) => (sortBy.toLowerCase() === "CSGO".toLowerCase() && item.game === "730") || (sortBy.toLowerCase() === "RUST".toLowerCase() && item.game === "252490") || (sortBy.toLowerCase() === "Все игры".toLowerCase() && item.game)).map((item: IProduct) =>
                        <Product key={item.id} typeOfZone={"popup"}
                                 product_data={item}/>)
                }

            </ul>
        </>
    )
}
