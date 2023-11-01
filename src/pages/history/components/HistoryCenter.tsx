import React, { useState } from 'react'
import { FilterSort } from './FilterSort'

interface IHistoryCenterProps {
    setHistoryFilter: any
}

export const HistoryCenter: React.FC<IHistoryCenterProps> = ({ setHistoryFilter }) => {

    const [filterByHtml, setFilterByHtml] = useState('')

    const handleChangeFilter = (filterBy: string) => {
        setFilterByHtml(filterBy)
        document.querySelector('.section-history__block')?.classList.add('section-history__block_hide')

        setTimeout(() => {
            document.querySelector('.section-history__block')?.classList.remove('section-history__block_hide')

            setHistoryFilter((prev: any) => {
                return {
                    type: prev.type,
                    sortBy: prev.sortBy,
                    filterBy
                }
            })
        }, 300)
        
    }
    

    return (
        <div className="section-history__center">
            <ul className="section-history__switcher">
                <li className={filterByHtml === '' ? "li_active" : ""}>
                    <button onClick={_ => handleChangeFilter('')}>Все</button>
                </li>
                <li className={filterByHtml === 'items' ? "li_active" : ""}>
                    <button onClick={_ => handleChangeFilter('items')}>Предметами</button>
                </li>
                <li className={filterByHtml === 'pins' ? "li_active" : ""}>
                    <button onClick={_ => handleChangeFilter('pins')}>Деньгами</button>
                </li>
            </ul>
            <FilterSort setHistoryFilter={setHistoryFilter} />
        </div>
    )
}
