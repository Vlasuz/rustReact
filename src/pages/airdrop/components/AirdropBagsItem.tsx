import React, { useEffect, useState } from 'react'
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../../constants/ItemTypes";
import {addAirdropBags, addAirdropBagsMap, removeAirdropBagMap} from "../../../redux/toolkitSlice";
import {useDispatch, useSelector} from "react-redux";

interface IAirdropBagsItemProps {
    data: any
    setOldItemCoods: any
}

export const AirdropBagsItem:React.FC<IAirdropBagsItemProps> = ({data, setOldItemCoods}) => {

    const dispatch = useDispatch()
    const airdropUserStatus = useSelector((state: any) => state.toolkit.airdropUserStatus)

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BAG,
        end: (item, monitor) => !monitor.didDrop() && handleAddBag,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleAddBag = () => {
        console.log('111')
        dispatch(addAirdropBags())
    }

    useEffect(() => {
        console.log('asd', isDragging, data)

        if(isDragging) {
            dispatch(removeAirdropBagMap(data));
            setOldItemCoods({})
            return;
        } else {

        }
            setOldItemCoods({})
            return;

        // setOldItemCoods({})
        // if(!isDragging) return;
        //
        // setOldItemCoods(data)
    }, [isDragging])

    return (
        <li ref={airdropUserStatus === "member" ? null : drag} data-draged={`${data.x}|${data.y}`} style={{top: `${data.y - 8}px`, left: `${data.x - 8}px`}}/>
    )
}
