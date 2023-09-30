import React from 'react'
import { IProduct } from '../../../../model'
import { useItemDrag } from '../../../../hooks/itemDrag'
import { useDispatch, useSelector } from 'react-redux'
import { setPererabZoneItems, setUserInventory } from '../../../../redux/toolkitSlice'
import { ItemTypes } from '../../../../constants/ItemTypes'

interface IRightZoneItemProps {
    product_data: IProduct
}

export const RightZoneItem: React.FC<IRightZoneItemProps> = ({ product_data }) => {

    const { drag, isDragging } = useItemDrag({ product_data, itemType: ItemTypes.ITEM_ZONE })
    const dispatch = useDispatch()
    const products: IProduct[] = useSelector((state: any) => state.toolkit.userInventory)

    const handleDelete = (item: IProduct) => {
        dispatch(setUserInventory([...products, item])) // Добавление элемента в инвентарь пользователя
        dispatch(setPererabZoneItems({status: 'delete', item})) // Удаление элемента из зоны переработки
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
                    {product_data?.price.value}
                </span>
            </div>
        </li>
    )
}
