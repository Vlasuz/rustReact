import React, {useEffect, useState} from 'react'

import coins from './../../assets/images/header__coins.svg'
import arrayIcon from './../../assets/images/arr-td.svg'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {useDispatch, useSelector} from "react-redux";
import {setPopup} from "../../redux/toolkitSlice";
import {prettyCoinValues} from "../../functions/prettyCoinValues";

interface IAddCashAmountProps {
    currency: string
}

export const AddCashAmount: React.FC<IAddCashAmountProps> = ({currency}) => {

    const [value, setValue] = useState(0)

    const settings = useSelector((state: any) => state.toolkit.siteSettings)

    const dispatch = useDispatch()
    const typeOfCash: any = {
        uah: {
            currency: "₴",
            amount: [250, 500, 1000, 1500, 3000, 5000],
            type: 'uah_to_coins'
        },
        rub: {
            currency: "₽",
            amount: [500, 1000, 2000, 5000, 10000, 20000],
            type: 'rub_to_coins'
        },
        kzt: {
            currency: "₸",
            amount: [1000, 2000, 5000, 10000, 15000, 30000],
            type: 'kzt_to_coins'
        },
    }

    return (
        <>
            <h2>Пополнение баланса</h2>
            <a className="back" style={{cursor: "pointer"}} onClick={_ => dispatch(setPopup('popup-add-coins'))}>
                <img src={arrayIcon} alt="Arr"/>
                <span>Способы оплаты</span>
            </a>
            <PopupCross/>
            <ul className="balance__cost">

                {
                    typeOfCash[currency].amount.map((item: number) =>
                        <li key={item}>
                            <button onClick={_ => setValue(item)}>{typeOfCash[currency]?.currency} {item}</button>
                        </li>
                    )
                }

            </ul>
            <div className="balance__sum">
                <p>Зачисление на баланс:</p>
                <input type="text" onChange={(e: any) => setValue(e.target.value)} pattern="[0-9]*" placeholder="0" value={value === 0 ? "" : value} />
                <div className="sum">
                    <img src={coins} alt="Ico"/>
                    <span>
                        {
                            // value / settings[typeOfCash[currency].type]
                            prettyCoinValues(+value * (settings[typeOfCash[currency].type] ?? 1))
                        }
                    </span>
                </div>
            </div>
            <button>Перейти к оплате</button>
        </>
    )
}
