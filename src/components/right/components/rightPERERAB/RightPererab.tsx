import React, { ReactNode, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Filter } from '../filter/Filter'
import { RightItemsDND } from '../rightItemsDND/RightItemsDND'
import { Search } from '../search/Search'

interface IRightPererabProps {
    blockValue: any
    isHideBlock: any
}

export const RightPererab: React.FC<IRightPererabProps> = ({blockValue, isHideBlock}) => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + isHideBlock}>
            <div className="postamat">
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <Filter />

                <hr />

                <DndProvider backend={HTML5Backend}>
                    <RightItemsDND searchValue={searchValue} />
                </DndProvider>

            </div>
        </div>
    )
}
