import React, { ReactNode, useEffect } from 'react'
import { IProduct } from './../../model'
import { ProductStyled } from './product.styled'

import coin from './../../assets/images/header__coins.svg'
import green_check from './../../assets/images/green-check.svg'

import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../constants/ItemTypes'
import { useDispatch } from 'react-redux'
import { setItemDrag, setPererabZoneItems, setUserInventory } from '../../redux/toolkitSlice'
import { useItemDrag } from '../../hooks/itemDrag'

interface IProductProps {
    product_data: IProduct
}

export const Product: React.FC<IProductProps> = ({ product_data }) => {

    const { drag, isDragging } = useItemDrag({ product_data, itemType: ItemTypes.ITEM })
    const dispatch = useDispatch()

    const handleSelect = () => {
        dispatch(setPererabZoneItems(product_data)) // Добавление элемента в зону переработки
        dispatch(setUserInventory({ status: 'delete', item: product_data })) // Удаление элемента из инвентаря
    }

    return (
        <ProductStyled ref={drag} onClick={handleSelect} style={{ opacity: isDragging ? 0.3 : 1, }}>

            <div className="item__check">
                <img src={green_check} alt="Check" />
            </div>
            {/* <div className="item__count">2</div> */}
            <div className={"item__cool clothes__cool_" + product_data.rarity}>

            </div>
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
