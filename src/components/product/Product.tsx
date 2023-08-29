import React from 'react'
import { IProduct } from './../../model'
import { ProductStyled } from './product.styled'

import coin from './../../assets/images/header__coins.svg'
import green_check from './../../assets/images/green-check.svg'

interface IProductProps {
    product_data: IProduct
}

export const Product: React.FC<IProductProps> = ({product_data}) => {

    return (
        <ProductStyled>

            <div className="item__check">
                <img src={green_check} alt="Check" />
            </div>
            <div className="item__count">2</div>
            <div className={"item__cool clothes__cool_" + product_data.rarity}>

            </div>
            <div className="item__photo">
                <img src={product_data.image} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>
                    {product_data.cost}
                </span>
            </div>

        </ProductStyled>
    )
}
