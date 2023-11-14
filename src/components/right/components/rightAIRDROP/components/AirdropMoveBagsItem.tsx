import React, { useEffect } from 'react'
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../../../../constants/ItemTypes";
import {addAirdropBags, removeAirdropBags} from "../../../../../redux/toolkitSlice";
import {useDispatch} from "react-redux";

interface IAirdropMoveBagsItemProps {
    isDraggingFunc: any
}

export const AirdropMoveBagsItem:React.FC<IAirdropMoveBagsItemProps> = ({isDraggingFunc}) => {

    const dispatch = useDispatch()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BAG,
        end: (item, monitor) => !monitor.didDrop() && dispatch(addAirdropBags()),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    useEffect(() => {
        console.log(isDragging)

        isDragging && isDraggingFunc()
    }, [isDragging])

    return (
        <li className="sleepers__item">
            <button className={'qqq'} ref={drag}/>
        </li>
    )
}
