import React, { useEffect, useState } from 'react'
import { ShopStyle } from './Shop.styled'
import { FightTop } from '../../components/fightTop/FightTop'
import backIcon from './../../assets/images/back.svg'
import coin from './../../assets/images/header__coins.svg'
import checkIcon from './../../assets/images/green-check.svg'
import skin from './../../assets/images/skin.png'
import { NavLink } from 'react-router-dom'
import { SkinItem } from './components/SkinItem'
import axios from 'axios'
import { getApiLink } from '../../functions/getApiLink'
import { getBearer } from '../../functions/getBearer'
import { useDispatch } from 'react-redux'
import { setSkinShop } from '../../redux/toolkitSlice'
import { ISkin } from '../../model'

interface IShopProps {

}

export const Shop: React.FC<IShopProps> = () => {

    const [shop, setShop] = useState([])
    const [chosenSkin, setChosenSkin] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        getBearer({type: 'get'})
        axios.get(getApiLink('api/fight/shop/')).then(({ data }) => {
            dispatch(setSkinShop(data))
            setChosenSkin(data.chosen?.id)
            setShop(data.shop)
        })
    }, [])

    return (
        <ShopStyle className="section-shop">

            <FightTop />

            <div className="section-shop__skins">
                <div className="skins__top">
                    <NavLink to={"/"} className="skins__back">
                        <img src={backIcon} alt="Ico" />
                        <span>Режим схватка</span>
                    </NavLink>
                    <h1>Уникальные скины для режима</h1>
                </div>
                <div className="skins__block">

                    {
                        shop.map((item: ISkin) => <SkinItem key={item.id} skin={item} chosenSkin={chosenSkin} setChosenSkin={setChosenSkin} />)
                    }

                </div>
            </div>
        </ShopStyle>
    )
}

