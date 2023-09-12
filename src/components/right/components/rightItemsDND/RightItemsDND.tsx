import React, { useEffect, useState } from 'react'
import { Product } from '../../../product/Product'
import { products } from '../../../../data/poducts'

import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { RightItemsDNDStyle } from './rightItemsDND.styled'
import { ItemTypes } from '../../../../constants/ItemTypes'

import pererab_ico from './../../../../assets/images/pererab-ico.svg'
import { IProduct, IRarity } from '../../../../model'
import { useSelector } from 'react-redux'
import { useItemDrop } from '../../../../hooks/itemDrop'
import { RightZone } from '../rightZone/RightZone'
import { ButtonToRecycle } from './../buttonToRecycle/ButtonToRecycle'
import { useRarity } from '../../../../hooks/rarity'
import { useSortBy } from '../../../../hooks/sortBy'

interface IRightItemsDNDProps {
    searchValue: string
}

export const RightItemsDND: React.FC<IRightItemsDNDProps> = ({ searchValue }) => {

    const pererabZoneItems = useSelector((state: any) => state.toolkit.pererabZoneItems);
    const allProducts: IProduct[] = useSelector((state: any) => state.toolkit.userInventory)
    const {products}: any = useSortBy({allProducts, searchValue})
    const dropToZone = useItemDrop({ itemType: ItemTypes.ITEM })
    const dropToInventory = useItemDrop({ itemType: ItemTypes.ITEM_ZONE })

    return (

        <RightItemsDNDStyle className='pererab'>
            <ul ref={dropToInventory.drop} className="postamat__block">

                {products?.map((item: IProduct) => <Product key={item.id} product_data={item} />)}

            </ul>
            <div className="zone">

                <div className="zone__list">
                    {!pererabZoneItems.length ? <div className="zone__empty" ref={dropToZone.drop} style={{ background: dropToZone.isOver ? "#282a3b" : "transparent" }}>
                        <p>Зона переработки</p>
                        <img src={pererab_ico} alt="Ico" />
                    </div> : <RightZone zoneArray={pererabZoneItems} drop={dropToZone.drop} isOver={dropToZone.isOver} />}
                </div>

                <div className="pererab__button">
                    {!pererabZoneItems.length ? <div className="zone__empty">
                        <p>Разборщик пуст</p>
                    </div> : <ButtonToRecycle pererabZoneItems={pererabZoneItems} />}
                </div>

            </div>
        </RightItemsDNDStyle>


    )
}
