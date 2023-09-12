import React from 'react'
import { IProduct } from '../../../../model'
import { useDispatch, useSelector } from 'react-redux'
import { setPererabZoneItems, setUserInventory } from '../../../../redux/toolkitSlice'
import { useItemDrag } from '../../../../hooks/itemDrag'
import { RightZoneItem } from './RightZoneItem'
import { useItemDrop } from '../../../../hooks/itemDrop'
import { ItemTypes } from '../../../../constants/ItemTypes'
import { RightZoneStyle } from './rightZone.styled'

interface IRightZoneProps {
    drop: any
    isOver: any
    zoneArray: IProduct[]
}

export const RightZone: React.FC<IRightZoneProps> = ({zoneArray, drop, isOver}) => {

    return (
        <RightZoneStyle ref={drop} style={{ background: isOver ? "#282a3b" : "transparent" }}>
            {
                zoneArray.map(item => <RightZoneItem key={item.id} product_data={item}/>)
            }
        </RightZoneStyle>
    )
}
