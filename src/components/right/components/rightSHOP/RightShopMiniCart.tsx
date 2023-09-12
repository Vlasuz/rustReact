import React, { useEffect, useState } from 'react'
import coin from './../../../../assets/images/header__coins.svg'
import { useSelector } from 'react-redux'
import cartIcon from './../../../../assets/images/cart.svg'
import { IProduct } from '../../../../model'

interface IRightShopMiniCartProps {
    setIsCartOpen: any
}

export const RightShopMiniCart: React.FC<IRightShopMiniCartProps> = ({setIsCartOpen}) => {

    const cart = useSelector((state: any) => state.toolkit.shopCart)
    const [price, setPrice] = useState(0)
    
    useEffect(() => {
        setPrice(0)
        cart.map((item: IProduct) => setPrice(prev => prev + item.cost))
    }, [cart])

    useEffect(() => {
        if(cart.length) return;

        setIsCartOpen(false)
    }, [cart])

    return (
        <>
            {
                !!cart.length ?
                    <div onClick={_ => setIsCartOpen((prev: any) => !prev)} className="postamat__cart postamat__cart_show postamat__cart_full">
                        <span>{cart.length} предмета</span>
                        <div className="sum">
                            <img src={coin} alt="Coins" />
                            <span>
                                {price}
                            </span>
                        </div>
                    </div>
                    :
                    <div className="postamat__cart postamat__cart_show postamat__cart_empty">
                        <img src={cartIcon} alt="cart" />
                        <span>Корзина пуста</span>
                    </div>
            }
        </>
    )
}
