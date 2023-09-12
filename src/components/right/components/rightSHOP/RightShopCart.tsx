import React from 'react'
import coin from './../../../../assets/images/header__coins.svg'
import cross from './../../../../assets/images/cross.svg'
import back from './../../../../assets/images/arr-td.svg'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../../../model'
import { removeItemFromCart } from '../../../../redux/toolkitSlice'

interface IRightShopCartProps {
    isCartOpen: any
    setIsCartOpen: any
}

export const RightShopCart: React.FC<IRightShopCartProps> = ({ isCartOpen, setIsCartOpen }) => {

    const cart = useSelector((state: any) => state.toolkit.shopCart)
    const dispatch = useDispatch()

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
                                        {item.cost}
                                    </span>
                                </div>
                            </div>
                            <div onClick={_ => dispatch(removeItemFromCart(item))} className="item__delete">
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
                <button className="buttons__buy">
                    <span>Купить</span>
                </button>
            </div>
        </div>
    )
}
