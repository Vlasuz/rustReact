import React from 'react'
import { useDispatch } from 'react-redux'
import { EmptyInventoryStyle } from './emptyInventory.styled'
import { setTrigger, setRightBlock } from '../../../../redux/toolkitSlice'

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
            <h3>Инвентарь пуст</h3>
            <p>Купите предметы в магазине или пополните через свой инвентарь в стиме</p>
            <a href="#" onClick={e => {handleChange(e)}}>В магазин</a>
        </EmptyInventoryStyle>
    )
}
