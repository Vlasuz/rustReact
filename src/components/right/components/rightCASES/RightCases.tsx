import React, { useEffect, useState } from 'react'
import { RightShopStyle } from './RightCases.styled'
import { Search } from '../search/Search'
import { Filter } from '../filter/Filter'
import { Range } from '../range/Range'

import coin from './../../../../assets/images/header__coins.svg'
import check from './../../../../assets/images/green-check.svg'
import { RightCasesItem } from './components/RightCasesItem'
import { useSortBy } from '../../../../hooks/sortBy'
import {ICrate, IFightItem, IProduct } from '../../../../model'
import { getShop } from '../../../../api/getShopItems'
import { useDispatch, useSelector } from 'react-redux'
import {getCases} from "../../../../api/getCases";
import {Crate} from "../../../crate/Crate";
import {setChosenCrates} from "../../../../redux/toolkitSlice";
import { getCrateRarity } from '../../../../api/getCrateRarity'
import {useCrateRarity} from "../../../../hooks/crateRarity";

interface IRightShopProps {
    blockValue: any,
    isHideBlock: any
}

export const RightCases: React.FC<IRightShopProps> = ({ blockValue, isHideBlock }) => {

    const [isBoughtSuccess, setIsBoughtSuccess] = useState(false)

    const [searchValue, setSearchValue] = useState('')
    const [rangeValue, setRangeValue] = useState<number[]>([])
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const dispatch = useDispatch()
    const cratesList = useSelector((state: any) => state.toolkit.crates)

    useEffect(() => getCases({dispatch}), [])
    useEffect(() => getCrateRarity({dispatch}), [])


        useEffect(() => {
        const itemsNumbers = cratesList.map((item: IProduct) => +item.price)

        setMaxValue(Math.max(...itemsNumbers));
        setMinValue(Math.min(...itemsNumbers));
        setRangeValue([Math.min(...itemsNumbers), Math.max(...itemsNumbers)])

    }, [cratesList])

    const crates = useSelector((state: any) => state.toolkit.crates)
    useEffect(() => {
        dispatch(setChosenCrates(crates[0]))
    }, [crates])

    const { products }: any = useSortBy({ allProducts: cratesList, searchValue, rangeValue })

    return (
        <RightShopStyle className={"section-right__item crates" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + isHideBlock}>
            <div className={"section-right__cart-bought" + (isBoughtSuccess ? " section-right__cart_active" : "")}>
                <div className="text">
                    <h3>
                        <span>Отлично</span>
                        <div className="img">
                            <img src={check} alt="Ico" />
                        </div>
                    </h3>
                    <p>Предметы куплены</p>
                </div>
                <button className="cart-bought__close" onClick={_ => setIsBoughtSuccess(false)}>Закрыть</button>
            </div>
            <div className="postamat">
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <Range min={minValue} max={maxValue} rangeValue={setRangeValue} />
                <Filter />

                <hr />

                <div className="postamat__block">

                    {
                        products?.map((item: ICrate) => <Crate key={item.id} data={item} />)
                    }

                </div>
            </div>
        </RightShopStyle>
    )
}
