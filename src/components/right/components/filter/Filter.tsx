import React, { useRef, useState } from 'react'
import filter from './../../../../assets/images/filter.svg'
import { FilterStyle } from './filter.styled'
import { useRightFilter } from '../../../../hooks/rightFilter'

interface IFilterProps {

}

export const Filter: React.FC<IFilterProps> = () => {

    const {radioBlock, handleSelect, handleChange, labelSelect} = useRightFilter()

    return (
        <FilterStyle>
            <label ref={radioBlock} onClick={_ => handleSelect('price')} className={"filter__item" + (labelSelect === 'price' ? " _active" : "")}>
                <span>По цене</span>
                <input type="checkbox" name="upDown" onChange={e => handleChange(e)} />
                <img src={filter} alt="filter" />
            </label>
            <label ref={radioBlock} onClick={_ => handleSelect('rarity')} className={"filter__item" + (labelSelect === 'rarity' ? " _active" : "")}>
                <span>По раритетности</span>
                <input type="checkbox" name="upDown" onChange={e => handleChange(e)} />
                <img src={filter} alt="filter" />
            </label>
        </FilterStyle>
    )
}
