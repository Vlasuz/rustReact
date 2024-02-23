import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import coins from './../../../../../assets/images/header__coins.svg'
import {store} from "../../../../../redux";
import {IUser} from "../../../../../model";
import {prettyCoinValues} from "../../../../../functions/prettyCoinValues";
import {setSound} from "../../../../../redux/toolkitSlice";

interface IAirdropBagsProps {
    setBags: any
    handleBuyBags: any
}

export const AirdropBags: React.FC<IAirdropBagsProps> = ({setBags, handleBuyBags}) => {

    const [countOfBags, setCountOfBags] = useState(0)
    const [costOfBags, setCostOfBags] = useState(0)

    const dispatch = useDispatch()

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    const bagsArray = Array.apply('', Array(9))
    const costOneBag = 50

    useEffect(() => {
        setBags(countOfBags)
        dispatch(setSound('sound12'))
    }, [countOfBags])

    const isCanBuy = userInfo.balance ? userInfo.balance >= (countOfBags * costOfBags) : false

    return (
        <div className="airdrop__sleepers">
            <h3>Кол-во спальников:</h3>
            <ul>


                {
                    bagsArray.map((item, index) =>
                        <li key={index} className={countOfBags === index + 1 ? "button_active" : ""}
                            onClick={_ => {
                                setCountOfBags(index + 1)
                                setCostOfBags((index + 1) * costOneBag)
                            }}>
                            <button>{index + 1}</button>
                        </li>
                    )
                }

            </ul>

            <button disabled={!(isCanBuy && countOfBags > 0)} onClick={handleBuyBags} className={"sleepers__buy" + (isCanBuy && countOfBags > 0 ? " move__submit" : "")}>

                {countOfBags > 0 ? <>
                    <span>Купить</span>
                    <img src={coins} alt="Coin"/>
                    <span>
                        {
                            prettyCoinValues(costOfBags)
                        }
                    </span>
                </> : <span>Выберите кол-во спальников</span>}
            </button>
        </div>
    )
}
