import React, { useEffect } from 'react'
import {ItemInZone} from "../startFightClothes/components/ItemInZone";
import {useItemDrop} from "../../../hooks/itemDrop";
import {ItemTypes} from "../../../constants/ItemTypes";
import {useSelector} from "react-redux";

interface IZoneOfProductsProps {

}

export const ZoneOfProducts:React.FC<IZoneOfProductsProps> = () => {

    const dropToZone = useItemDrop({itemType: ItemTypes.ITEM, typeOfState: 'popup'})
    const popupZoneItems = useSelector((state: any) => state.toolkit.popupZoneItems);

    return (
        <div ref={dropToZone.drop} className="popup-new-room__zone" style={{background: dropToZone.isOver ? "#202232" : "transparent"}}>
            {!popupZoneItems.length && <p>Перетащите сюда скины для ставки</p>}
            <ul>
                {
                    popupZoneItems.map((item: any) => <ItemInZone key={item.id} product_data={item}/>)
                }
            </ul>
        </div>
    )
}
