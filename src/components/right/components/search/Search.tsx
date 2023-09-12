import React from 'react'
import search from './../../../../assets/images/search.svg'

interface ISearchProps {
    searchValue: string
    setSearchValue: any
}

export const Search: React.FC<ISearchProps> = ({searchValue, setSearchValue}) => {

    return (
        <div className="postamat__search">
            <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Поиск" />
            <button>
                <img src={search} alt="Search" />
            </button>
        </div>
    )
}
