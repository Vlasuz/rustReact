import React from 'react'
import { IProduct } from '../../../../model'
import { useItemDrag } from '../../../../hooks/itemDrag'
import { useDispatch, useSelector } from 'react-redux'
import {setPererabZoneItems, setPopupZoneItems, setUserInventory} from '../../../../redux/toolkitSlice'
import { ItemTypes } from '../../../../constants/ItemTypes'
import {prettyCoinValues} from "../../../../functions/prettyCoinValues";

interface IRightZoneItemProps {
    product_data: IProduct
}

export const RightZoneItem: React.FC<IRightZoneItemProps> = ({ product_data }) => {

    const { drag } = useItemDrag({ product_data, itemType: ItemTypes.ITEM_ZONE })
    const dispatch = useDispatch()

    const handleDelete = (item: IProduct) => {
        dispatch(setUserInventory([item])) // Добавление элемента в инвентарь пользователя
        dispatch(setPererabZoneItems({status: 'delete', item})) // Удаление элемента из зоны переработки
        dispatch(setPopupZoneItems({status: 'delete', item})) // Удаление элемента из зоны
    }

    return (
        <li ref={drag} onClick={_ => handleDelete(product_data)} className="zone__item">
            <div className="item__count" />
            <div className="item__photo">
                <img src={product_data?.image} alt="Skin" />
            </div>
            <div className="item__price">
                <img src="../images/header__coins.svg" alt="Ico" />
                <span>
                    {prettyCoinValues(product_data?.price.value)}
                </span>
            </div>
        </li>
    )
}
