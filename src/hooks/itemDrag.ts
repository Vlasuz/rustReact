import { useEffect } from "react";
import { setItemDrag } from "../redux/toolkitSlice";
import { ItemTypes } from "../constants/ItemTypes";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { IProduct } from "../model";

interface useItemDragProps {
    product_data: IProduct,
    itemType: any
}

export const useItemDrag = ({product_data, itemType}: useItemDragProps) => {
    const dispatch = useDispatch();

    // TODO проверить это!!
    const [{ isDragging }, drag] = useDrag(() => ({
        type: itemType,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    useEffect(() => {
        if(!isDragging) return;
        
        dispatch(setItemDrag(product_data))
    }, [isDragging])

    return {drag, isDragging};
}