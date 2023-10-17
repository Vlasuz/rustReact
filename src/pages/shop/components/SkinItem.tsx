import React, { useState } from 'react'
import coin from './../../../assets/images/header__coins.svg'
import checkIcon from './../../../assets/images/green-check.svg'
import { ISkin } from '../../../model'
import { getApiLink } from '../../../functions/getApiLink'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Loading } from '../../../components/loading/Loading'
import { LoadingStyled } from '../../../components/loading/loading.styled'
import { changeUserBalance } from '../../../redux/toolkitSlice'

interface ISkinItemProps {
    skin: ISkin
    chosenSkin: string
    setChosenSkin: any
}

export const SkinItem: React.FC<ISkinItemProps> = ({ skin, chosenSkin, setChosenSkin }) => {

    const skins = useSelector((state: any) => state.toolkit.skinShop)
    const dispatch = useDispatch()
    const [skinBought, setSkinBought] = useState<ISkin[]>([])
    const [isSettingSkin, setIsSettingSkin] = useState(false)

    const handleChoose = () => {

        setIsSettingSkin(true)

        axios.post(getApiLink(`api/fight/shop/choose?skin_id=${skin.id}`)).then(({ data }) => {
            if (data.status) {
                setChosenSkin(skin.id)
            }
            setIsSettingSkin(false)
        })
    }

    const handleBuy = () => {
        setIsSettingSkin(true)
        axios.post(getApiLink(`api/fight/shop/buy?skin_id=${skin.id}`)).then(({ data }) => {
            if (data.status) {
                setSkinBought((prev: any) => [...prev, skin])
                dispatch(changeUserBalance(-Number(skin.price)))
            }
            setIsSettingSkin(false)
        })
    }

    const Button = () => {

        if (isSettingSkin) {
            return <button className="buy__isset">
                <LoadingStyled className="load">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </LoadingStyled>
            </button>
        } else if (skin?.id === chosenSkin) {
            return <button className="buy__isset">
                <span>Одето</span>
            </button>
        } else if (skins.owned.some((item: ISkin) => item.id === skin.id) || skinBought.some((item: ISkin) => item.id === skin.id)) {
            return <button onClick={handleChoose} className="buy__set">
                <span>Одеть</span>
            </button>
        } else {
            return <button onClick={handleBuy} className="buy__buy">
                <span>Купить</span>
            </button>
        }
    }

    return (
        <div className={"skins__item" + (skin?.id === chosenSkin ? " skins__item_active" : "")}>
            <div className="item__check">
                <img src={checkIcon} alt="Check" />
            </div>
            <h2>
                {skin.title}
            </h2>
            <p>
                {skin.sub_title}
            </p>
            <div className="item__skin">
                <img src={getApiLink(skin.image)} loading="lazy" alt="Skin" />
            </div>
            <div className="item__buy">
                {isSettingSkin || skins.owned.some((item: ISkin) => item.id === skin.id) || !skinBought.some((item: ISkin) => item.id === skin.id) && <button className="buy__price">
                    <img src={coin} alt="Skin" />
                    <span>
                        {skin.price}
                    </span>
                    {skin.sale && <div className="sale">
                        {skin.sale}
                    </div>}
                </button>}

                <Button />
            </div>
        </div>
    )
}