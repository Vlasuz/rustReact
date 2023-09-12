import React, { useEffect, useState } from 'react'
import { RightShopStyle } from './rightShop.styled'
import { Search } from '../search/Search'
import { Filter } from '../filter/Filter'
import { Range } from '../range/Range'
import { shop } from '../../../../data/shop'

import coin from './../../../../assets/images/header__coins.svg'
import { RightShopItem } from './RightShopItem'
import { RightShopMiniCart } from './RightShopMiniCart'
import { RightShopCart } from './RightShopCart'
import { useSortBy } from '../../../../hooks/sortBy'
import { IProduct } from '../../../../model'

interface IRightShopProps {
    blockValue: any,
    isHideBlock: any
}

export const RightShop: React.FC<IRightShopProps> = ({ blockValue, isHideBlock }) => {

    const [searchValue, setSearchValue] = useState('')
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [rangeValue, setRangeValue] = useState<number[]>([])

    const { products }: any = useSortBy({ allProducts: shop, searchValue })

    const array = products.map((item: IProduct) => item.cost)
    const [minValue, setMinValue] = useState(array[0])
    const [maxValue, setMaxValue] = useState(array[0])

    useEffect(() => {
        for (let i = 1; i < array.length; ++i) {
            if (array[i] > maxValue) setMaxValue(+array[i]);
            if (array[i] < minValue) setMinValue(+array[i]);
        }
    }, [])

    useEffect(() => {
        setRangeValue([minValue, maxValue])
    }, [minValue, maxValue])

    const rangeFilterProducts = (products: IProduct[]) => {
        return products.filter((item: IProduct) => rangeValue[0] <= item.cost && rangeValue[1] >= item.cost)
    }

    return (
        <RightShopStyle className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + isHideBlock}>
            <div className="section-right__cart-bought">
                <div className="text">
                    <h3>
                        <span>Отлично</span>
                        <div className="img">
                            <img src="img/green-check.svg" alt="Ico" />
                        </div>
                    </h3>
                    <p>Предметы куплены</p>
                </div>
                <button className="cart-bought__close">Закрыть</button>
            </div>
            <RightShopCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <div className="postamat">
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <Range min={minValue} max={maxValue} rangeValue={setRangeValue} />
                <Filter />

                <hr />

                <div className="postamat__block">

                    {
                        rangeFilterProducts(products)?.map((item: IProduct) => <RightShopItem searchValue={searchValue} key={item.id} data={item} />)
                    }

                </div>
                <RightShopMiniCart setIsCartOpen={setIsCartOpen} />
            </div>
        </RightShopStyle>
    )
}
