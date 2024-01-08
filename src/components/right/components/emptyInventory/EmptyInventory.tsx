import React from 'react'
import { useDispatch } from 'react-redux'
import { EmptyInventoryStyle } from './emptyInventory.styled'
import { setTrigger, setRightBlock } from '../../../../redux/toolkitSlice'
import {Translate} from "../../../translate/Translate";

interface IEmptyInventoryProps {

}

export const EmptyInventory: React.FC<IEmptyInventoryProps> = () => {

    const dispatch = useDispatch()

    const handleChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(setTrigger('CHANGE_RIGHT_BLOCK'))
        document.querySelector('.postamat')?.classList.remove('postamat_active')

        setTimeout(() => {
            dispatch(setRightBlock({icon: "", title: 'Магазин', slug: 'SHOP'}))
            setTimeout(() => {
                document.querySelector('.postamat')?.classList.add('postamat_active')
            }, 150)
        }, 150)
    }

    return (
        <EmptyInventoryStyle>
            <h3>
                <Translate>storage_empty_title</Translate>
            </h3>
            <p>
                <Translate>storage_empty_text</Translate>
            </p>
            <a href="#" onClick={e => {handleChange(e)}}>
                <Translate>storage_empty_button</Translate>
            </a>
        </EmptyInventoryStyle>
    )
}
