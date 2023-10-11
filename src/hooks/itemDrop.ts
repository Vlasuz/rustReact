import { useEffect, useState } from "react"
import { IProduct } from "../model"
import { useDispatch, useSelector } from "react-redux"
import { ItemTypes } from "../constants/ItemTypes"
import { useDrop } from "react-dnd"
import { setItemDrag, setPererabZoneItems, setUserInventory } from "../redux/toolkitSlice"

interface useItemDropProps {
    itemType: any
}

export const useItemDrop = ({ itemType }: useItemDropProps) => {
    const [isDrop, setIsDrop] = useState<boolean>(false)
    const itemDrag: IProduct = useSelector((state: any) => state.toolkit.itemDrag)
    const dispatch = useDispatch()

    const [{ isOver }, drop] = useDrop(() => ({
        accept: itemType,
        drop: () => setIsDrop(prev => !prev),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))


    const dropZone = () => {
        dispatch(setPererabZoneItems(itemDrag)) // Добавление элемента в зону переработки
        dispatch(setUserInventory({status: 'delete', item: itemDrag })) // Удаление элемента из инвентаря
    }
    const dropInventory = () => {
        dispatch(setUserInventory([itemDrag])) // Добавление элемента в инвентарь пользователя
        dispatch(setPererabZoneItems({status: 'delete', item: itemDrag})) // Удаление элемента из зоны переработки
    }

    useEffect(() => {
        if (!Object.keys(itemDrag).length) return

        if(itemType === 'item') {
            dropZone()
        } else if (itemType === 'item_zone') {
            dropInventory()
        }

        dispatch(setItemDrag({}))

    }, [isDrop])

    return { drop, isOver }
}
