import { useEffect, useState } from "react"
import { IProduct } from "../model"
import { useDispatch, useSelector } from "react-redux"
import { ItemTypes } from "../constants/ItemTypes"
import { useDrop } from "react-dnd"
import { setItemDrag, setPererabZoneItems, setPopupZoneItems, setUserInventory } from "../redux/toolkitSlice"

interface useItemDropProps {
    itemType: any,
    typeOfState?: string
}

export const useItemDrop = ({ itemType, typeOfState }: useItemDropProps) => {
    const [isDrop, setIsDrop] = useState<boolean>(false)
    const itemDrag: IProduct = useSelector((state: any) => state.toolkit.itemDrag)
    const dispatch = useDispatch()

    // TODO проверить это!!
    const [{ isOver }, drop] = useDrop(() => ({
        accept: itemType,
        drop: () => setIsDrop(prev => !prev),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const dropZone = () => {
        if(typeOfState === 'popup') {
            dispatch(setPopupZoneItems(itemDrag)) // Добавление элемента в зону
        } else if (typeOfState === 'pererab') {
            dispatch(setPererabZoneItems(itemDrag)) // Добавление элемента в зону переработки
        }
        dispatch(setUserInventory({status: 'delete', item: itemDrag })) // Удаление элемента из инвентаря
    }
    const dropInventory = () => {
        dispatch(setUserInventory([itemDrag])) // Добавление элемента в инвентарь пользователя
        dispatch(setPererabZoneItems({status: 'delete', item: itemDrag})) // Удаление элемента из зоны переработки
        dispatch(setPopupZoneItems({status: 'delete', item: itemDrag})) // Удаление элемента из зоны
    }

    useEffect(() => {
        if (!Object.keys(itemDrag).length) return

        if (itemType.includes('zone')) {
            dropInventory()
        } else {
            dropZone()
        }

        dispatch(setItemDrag({}))
    }, [isDrop])

    return { drop, isOver }
}
