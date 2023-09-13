import React, { useState } from 'react'

interface IFilterSortProps {
    setHistoryFilter: any
}

export const FilterSort: React.FC<IFilterSortProps> = ({ setHistoryFilter }) => {

    const sortList = [
        {
            slug: 'date',
            title: 'По дате'
        },
        {
            slug: 'price',
            title: 'По цене'
        }
    ]

    const [sortHtml, setSortHtml] = useState(sortList[0])
    const [isOpen, setIsOpen] = useState(false)

    const handleChangeSort = (sortBy: any) => {
        setSortHtml(sortBy)
        document.querySelector('.section-history__block')?.classList.add('section-history__block_hide')

        setTimeout(() => {
            document.querySelector('.section-history__block')?.classList.remove('section-history__block_hide')

            setHistoryFilter((prev: any) => {
                return {
                    type: prev.type,
                    sortBy: sortBy.slug,
                    filterBy: prev.filterBy
                }
            })
        }, 300)
    }

    return (
        <div className="section-history__sort">
            <span>Сортировка:</span>
            <div className={"select" + (isOpen ? " select_active" : "")} onClick={_ => setIsOpen(prev => !prev)}>
                <div className="select__head">
                    {sortHtml.title}
                </div>
                <div className="select__body">
                    {
                        sortList.map(item =>
                            <button onClick={_ => handleChangeSort(item)} className="select__item">
                                {item.title}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
