import React, {useEffect} from 'react'
import {IProduct} from "../../../../model";
import {useItemDrag} from "../../../../hooks/itemDrag";
import {ItemTypes} from "../../../../constants/ItemTypes";
import {useDispatch} from "react-redux";
import cross from './../../../../assets/images/cross.svg'
import coins from './../../../../assets/images/header__coins.svg'
import {setPererabZoneItems, setPopupZoneItems, setUserInventory} from "../../../../redux/toolkitSlice";
import {prettyCoinValues} from "../../../../functions/prettyCoinValues";

interface IItemInZoneProps {
    product_data: IProduct
}

export const ItemInZone: React.FC<IItemInZoneProps> = ({product_data}) => {

    const { drag } = useItemDrag({ product_data, itemType: ItemTypes.CLOTHES_FIGHT_ZONE })
    const dispatch = useDispatch()

    const handleDelete = (item: IProduct) => {
        dispatch(setUserInventory([item])) // Добавление элемента в инвентарь пользователя
        dispatch(setPopupZoneItems({status: 'delete', item})) // Удаление элемента из зоны
        dispatch(setPererabZoneItems({status: 'delete', item})) // Удаление элемента из зоны переработки
    }

    return (
        <li ref={drag} onClick={_ => handleDelete(product_data)} className="popup-new-room__item popup-new-room__item_moved">
            <div className="li__delete">
                <img src={cross} alt="Close"/>
            </div>
            <div className="item__photo">
                <img src={product_data?.image} alt="Photo"/>
            </div>
            <div className="item__price">
                <img src={coins} alt="Coin"/>
                <span>
                    {prettyCoinValues(product_data.price?.value)}
                </span>
            </div>
        </li>
    )
}
