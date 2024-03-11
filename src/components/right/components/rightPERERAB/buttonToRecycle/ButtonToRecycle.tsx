import React, { useEffect, useState } from 'react'
import pererab_button from './../../../../../assets/images/pererab-button.svg'
import coin from './../../../../../assets/images/header__coins.svg'
import {IProduct, ISiteSettings} from '../../../../../model'
import { ButtonToRecycleStyle } from './buttonToRecycle.styled'
import axios from 'axios'
import { getApiLink } from '../../../../../functions/getApiLink'
import { useDispatch, useSelector } from 'react-redux'
import { setNotice, setPererabZoneItems, setSound, setUserBalance } from '../../../../../redux/toolkitSlice'
import { LoadingStyled } from '../../../../loading/loading.styled'
import {getBearer} from "../../../../../functions/getBearer";
import {prettyCoinValues} from "../../../../../functions/prettyCoinValues";

interface IButtonToRecycleProps {
    pererabZoneItems: IProduct[]
}

export const ButtonToRecycle: React.FC<IButtonToRecycleProps> = ({ pererabZoneItems }) => {

    const [mainSum, setMainSum] = useState(0)
    const dispatch = useDispatch()
    const [isRecycling, setIsRecycling] = useState(false)
    const siteSettings:  ISiteSettings = useSelector((state: any) => state.toolkit.siteSettings)

    useEffect(() => {
        setMainSum(0)
        pererabZoneItems.map(item => setMainSum(prev => prev + item.price.value))
        setMainSum(prev => prev - (prev * siteSettings.sell_skin_commission / 100))
    }, [pererabZoneItems])

    const handleRecycle = () => {
        setIsRecycling(true)

        getBearer({type: "post"})
        axios.post(getApiLink(`api/items/recycle/`), pererabZoneItems.map(item => item.id)).then(({ data }) => {
            dispatch(setUserBalance(data.balance))
            dispatch(setNotice('recycled'))
            dispatch(setPererabZoneItems({ status: 'delete', item: 'all' })) // Удаление элемента из зоны переработки
            dispatch(setSound('sound4'))
        })
    }

    return (
        <ButtonToRecycleStyle onClick={handleRecycle}>
            <div className="lft">
                <img src={pererab_button} alt="Ico" />
                {isRecycling ?
                    <LoadingStyled className="load">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </LoadingStyled>
                    :
                    <span>Переработать</span>}
            </div>
            <div className="rht">
                <img src={coin} alt="Ico" />
                <span>
                    {prettyCoinValues(mainSum)}
                </span>
            </div>
        </ButtonToRecycleStyle>
    )
}
