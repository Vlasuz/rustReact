import React, { useEffect, useState } from 'react'
import { RightShopStyle } from './rightShop.styled'
import { Search } from '../search/Search'
import { Filter } from '../filter/Filter'
import { Range } from '../range/Range'

import coin from './../../../../assets/images/header__coins.svg'
import check from './../../../../assets/images/green-check.svg'
import { RightShopItem } from './components/RightShopItem'
import { RightShopMiniCart } from './components/RightShopMiniCart'
import { RightShopCart } from './components/RightShopCart'
import { useSortBy } from '../../../../hooks/sortBy'
import { IFightItem, IProduct } from '../../../../model'
import { getShop } from '../../../../api/getShopItems'
import { useDispatch, useSelector } from 'react-redux'

interface IRightShopProps {
    blockValue: any,
    isHideBlock: any
}

export const RightShop: React.FC<IRightShopProps> = ({ blockValue, isHideBlock }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isBoughtSuccess, setIsBoughtSuccess] = useState(false)

    const [searchValue, setSearchValue] = useState('')
    const [rangeValue, setRangeValue] = useState<number[]>([])
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const dispatch = useDispatch()
    const shopList = useSelector((state: any) => state.toolkit.shopList)

    useEffect(() => getShop({dispatch}), [])

    useEffect(() => {
        const itemsNumbers = shopList.map((item: IProduct) => +item.price.value)
        
        setMaxValue(Math.max(...itemsNumbers));
        setMinValue(Math.min(...itemsNumbers));
        setRangeValue([Math.min(...itemsNumbers), Math.max(...itemsNumbers)])
    
    }, [shopList])

    const { products }: any = useSortBy({ allProducts: shopList, searchValue, rangeValue })

    return (
        <RightShopStyle className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + isHideBlock}>
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
            <RightShopCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} setIsBoughtSuccess={setIsBoughtSuccess} />
            <div className="postamat">
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <Range min={minValue} max={maxValue} rangeValue={setRangeValue} />
                <Filter />

                <hr />

                <div className="postamat__block">

                    {
                        products?.map((item: IProduct) => <RightShopItem searchValue={searchValue} key={item.id} data={item} />)
                    }

                </div>
                <RightShopMiniCart setIsCartOpen={setIsCartOpen} />
            </div>
        </RightShopStyle>
    )
}
