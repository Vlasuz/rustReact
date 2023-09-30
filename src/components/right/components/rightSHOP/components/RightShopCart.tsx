import React, { useState } from 'react'
import coin from './../../../../../assets/images/header__coins.svg'
import cross from './../../../../../assets/images/cross.svg'
import back from './../../../../../assets/images/arr-td.svg'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../../../../model'
import { removeItemFromCart, setSound, setUserBalance, setUserInventory } from '../../../../../redux/toolkitSlice'
import axios from 'axios'
import { getApiLink } from '../../../../../functions/getApiLink'
import { getBearer } from '../../../../../functions/getBearer'
import { getShop } from '../../../../../api/getShopItems'
import { LoadingStyled } from '../../../../loading/loading.styled'

interface IRightShopCartProps {
    isCartOpen: any
    setIsCartOpen: any
    setIsBoughtSuccess: any
}

export const RightShopCart: React.FC<IRightShopCartProps> = ({ isCartOpen, setIsCartOpen, setIsBoughtSuccess }) => {

    const cart = useSelector((state: any) => state.toolkit.shopCart)
    const dispatch = useDispatch()
    const [isBuying, setIsBuying] = useState(false)

    const handleBuy = () => {
        setIsBuying(true)

        getBearer({ type: 'post' });
        axios.post(getApiLink('api/basket/buy')).then(({ data }) => {
            dispatch(setUserBalance(data.balance))
            dispatch(setUserInventory(cart))
            dispatch(removeItemFromCart('all'));
            dispatch(setSound('sound5'));
            getShop({ dispatch });
            setIsBoughtSuccess(true);
            setIsBuying(false)
        })
    }

    const handleDeleteItemFromCart = (data: IProduct) => {
        getBearer({ type: 'post' });
        axios.post(getApiLink(`api/basket/remove?item_id=${data.id}`));
        dispatch(removeItemFromCart(data));
    }

    return (
        <div className={"section-right__cart" + (isCartOpen ? " section-right__cart_active" : "")}>
            <h2>Корзина</h2>
            <div className="cart__list">

                {
                    cart.map((item: IProduct) =>
                        <div key={item.id} className="cart__item">
                            <div className={"clothes__cool clothes__cool_" + item.rarity} />
                            <div className="item__photo">
                                <img src={item.image} alt="Ico" />
                            </div>
                            <div className="item__info">
                                <div className="item__name">
                                    {item.title}
                                </div>
                                <div className="item__price">
                                    <img src={coin} alt="Coins" />
                                    <span>
                                        {item.price.value}
                                    </span>
                                </div>
                            </div>
                            <div onClick={_ => handleDeleteItemFromCart(item)} className="item__delete">
                                <img src={cross} alt="Delete" />
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="buttons">
                <button onClick={_ => setIsCartOpen(false)} className="buttons__back">
                    <img src={back} alt="Ico" />
                    <span>Назад</span>
                </button>

                <button onClick={handleBuy} className="buttons__buy">
                    {!isBuying ? <span>Купить</span> :
                    <LoadingStyled className="load">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </LoadingStyled>}
                </button>
            </div>
        </div>
    )
}
