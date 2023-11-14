import React, { useState } from 'react'
import { Search } from '../search/Search'
import { Filter } from '../filter/Filter'
import { RightStorageStyle } from './rightStorage.styled'
import arr from './../../../../assets/images/arr-r-t.svg'
import { StorageItem } from './components/StorageItem'
import { useSortBy } from '../../../../hooks/sortBy'
import { IProduct } from '../../../../model'
import {useDispatch, useSelector } from 'react-redux'
import { EmptyInventory } from '../emptyInventory/EmptyInventory'
import {setPopup} from "../../../../redux/toolkitSlice";

interface IRightStorageProps {
    blockValue: any,
    isHideBlock: any
}

export const RightStorage: React.FC<IRightStorageProps> = ({ blockValue, isHideBlock }) => {

    const allProducts: IProduct[] = useSelector((state: any) => state.toolkit.userInventory)
    const withdrawList: IProduct[] = useSelector((state: any) => state.toolkit.inventoryWithdraw)
    const [searchValue, setSearchValue] = useState('')
    const {products}: any = useSortBy({ allProducts, searchValue })
    const dispatch = useDispatch()

    const isHaveProducts = products.length ? products?.map((item: IProduct) => <StorageItem key={item.id} data={item} />) : <EmptyInventory/>

    return (
        <RightStorageStyle className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + isHideBlock}>
            <div className="postamat">
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <Filter />

                <hr />

                <div className={"postamat__block" + (products.length ? "" : " postamat__block_empty")}>

                    {isHaveProducts}

                </div>

                {
                    withdrawList.length ? <button onClick={_ => dispatch(setPopup("popup-pull-search"))} className="zone__button">
                        <img src={arr} alt="Ico" />
                        <span>Вывести предметы</span>
                        <div className="zone__count">
                            {withdrawList.length}
                        </div>
                    </button> :
                        <div className="zone__empty">
                            <p>Выберите предмет для вывода</p>
                        </div>
                }

            </div>
        </RightStorageStyle>
    )
}
