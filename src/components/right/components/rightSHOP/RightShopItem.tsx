import React from 'react'
import { IProduct } from '../../../../model'
import coin from './../../../../assets/images/header__coins.svg'
import check from './../../../../assets/images/green-check.svg'
import basket from './../../../../assets/images/basket.svg'
import { addItemToCart } from '../../../../redux/toolkitSlice'
import { useDispatch, useSelector } from 'react-redux'

interface IRightShopItemProps {
    data: IProduct
    searchValue: string
}

export const RightShopItem: React.FC<IRightShopItemProps> = ({data, searchValue}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.toolkit.shopCart)

    return (
        <div onClick={_ => dispatch(addItemToCart(data))} className={"postamat__item" + (cart.some((item: IProduct) => item.id === data.id) ? " postamat__item_checked" : "")}>
            <div className="item__check">
                <img src={check} alt="Check"/>

                </div>
            <div className="item__buy">
                <img src={basket} alt="Basket" />
            </div>
            {/* <div className="item__count">
                {data.count}
            </div> */}
            <div className={"item__cool clothes__cool_" + data.rarity} />
            <div className="item__photo">
                <img src={data.image} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>
                    {data.cost}
                </span>
            </div>
        </div>
    )
}
