import React, { ReactNode, useEffect } from 'react'
import { IProduct } from './../../model'
import { ProductStyled } from './Product.styled'

import coin from './../../assets/images/header__coins.svg'
import green_check from './../../assets/images/green-check.svg'

import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../constants/ItemTypes'
import { useDispatch } from 'react-redux'
import {setItemDrag, setPererabZoneItems, setPopupZoneItems, setUserInventory} from '../../redux/toolkitSlice'
import { useItemDrag } from '../../hooks/itemDrag'
import {RightItemTradeBan} from "../right/components/rightSHOP/components/RightItemTradeBan";

interface IProductProps {
    product_data: IProduct
    typeOfZone: string
}

export const Product: React.FC<IProductProps> = ({ product_data, typeOfZone }) => {

    const { drag, isDragging } = useItemDrag({ product_data, itemType: ItemTypes.ITEM })
    const dispatch = useDispatch()

    const handleSelect = () => {
        if(typeOfZone === "popup") {
            dispatch(setPopupZoneItems(product_data)) // Добавление элемента в зону
        } else if (typeOfZone === "pererab") {
            dispatch(setPererabZoneItems(product_data)) // Добавление элемента в зону переработки
        }
        dispatch(setUserInventory({ status: 'delete', item: product_data })) // Удаление элемента из инвентаря
    }

    return (
        <ProductStyled ref={drag} onClick={handleSelect} style={{ opacity: isDragging ? 0.3 : 1, }}>

            <div className="item__check">
                <img src={green_check} alt="Check" />
            </div>
            <div className={"item__cool " + product_data.rarity.title} style={{ background: product_data.rarity.color }} />
            <div className="item__title">
                Title of product
            </div>
            <RightItemTradeBan data={product_data} />
            <div className="item__photo">
                <img src={product_data.image} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>
                    {product_data.price.value}
                </span>
            </div>

        </ProductStyled>
    )
}