import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import OpenPopup from "../../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import axios from "axios";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";
import {logDOM} from "@testing-library/react";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";

const AddCoinsByRub = () => {

    const [input, setInput] = useState(0)
    const [scrap, setScrap] = useState(0)
    const [isOpenSelect, setIsOpenSelect] = useState(false)
    const dispatch = useDispatch()

    const commission = useSelector(state => state.reducerSettings.settings)
    // const fast_number_usd = [8, 10, 30, 60, 100, 200];
    const fast_number_uah = [250, 500, 1000, 1500, 3000, 5000];
    const fast_number_kzt = [1000, 2000, 5000, 10000, 15000, 30000];
    const fast_number_rub = [500, 1000, 2000, 5000, 10000, 20000];

    const fast_numbers_now = [
        // {'usd': fast_number_usd},
        {'uah': fast_number_uah},
        {'kzt': fast_number_kzt},
        {'rub': fast_number_rub},
    ]

    const handlePay = () => {

        axios.post(`https://${GlobalLink()}/api/payment/skycrypto/?amount=${input}&currency=${Object.keys(currency)}`).then(res => {
            if (res.data.status !== false) {
                OpenPopup('popup-add-coins-balance-linking')
                window.location.href = res.data.message
            } else {
                dispatch(setNotice(res.data.message))
            }
        }).catch(er => {
            dispatch(setNotice('its_to_low_for_pay'))
        })

    };

    const allCurrencies = [
        // {'usd': "$"},
        {'kzt': "₸"},
        {'rub': "₽"},
        {'uah': "₴"},
    ];
    const [currency, setCurrency] = useState(allCurrencies[0]);

    const changeCurrency = (item) => {
        setCurrency(item);
        setIsOpenSelect(false)
    }

    useEffect(() => {
        setScrap(+input * (commission[Object.keys(currency) + "_to_coins"] !== 0 ? commission[Object.keys(currency) + "_to_coins"] : 1))
    }, [input, commission, currency])


    return (
        <div className="popup__content">
            <h2><Translate>add_balance</Translate></h2>
            {/*<div className="top__coins">*/}
            {/*    <a*/}
            {/*        className="back"*/}
            {/*        href="#"*/}
            {/*        onClick={() => OpenPopup('popup-add-coins')}*/}
            {/*    >*/}
            {/*        <img src="../images/arr-td.svg" alt="Arr"/>*/}
            {/*        <span><Translate>methods_payment</Translate></span>*/}
            {/*    </a>*/}
            {/*    <div className={"select" + (isOpenSelect ? " select_open" : "")}*/}
            {/*         onClick={e => setIsOpenSelect(prev => !prev)}>*/}
            {/*        <div className="select__head">*/}
            {/*                    <span>*/}
            {/*                        {Object.keys(currency)}*/}
            {/*                    </span>*/}
            {/*        </div>*/}
            {/*        <div className="select__body">*/}

            {/*            {*/}
            {/*                allCurrencies.map((item, index) =>*/}
            {/*                    <div key={index} onClick={_ => changeCurrency(item)} className="select__item">*/}
            {/*                        {Object.keys(item)}*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*            }*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <a
                className="back"
                href="#"
                onClick={() => dispatch(setOpenPopup('popup-add-coins'))}
            >
                <img src="../images/arr-td.svg" alt="Arr"/>
                <span><Translate>methods_payment</Translate></span>
            </a>
            <PopupCloseCross/>
            <ul className="balance__cost">

                {
                    Object.values(fast_numbers_now.filter(item => item[Object.keys(currency)[0]])[0])[0]
                        .map((item, index) =>
                            <li key={index}>
                                <button onClick={_ => setInput(item)}>
                                    {Object.values(currency)}
                                    {item}
                                </button>
                            </li>
                        )
                }

            </ul>
            <div className="balance__sum">
                <p><Translate>added_for_balance</Translate></p>
                <input type="text" pattern="[0-9]*" placeholder={"0"} value={input}
                       onChange={e => e.target.validity.valid ? setInput(e.target.value) : e.target.validity.valid}/>
                <div className="sum">
                    <img src="../images/header__coins.svg" alt="Ico"/>
                    <span>{scrap.toFixed(2)}</span>
                </div>
            </div>
            <button onClick={handlePay}>
                <Translate>go_to_payment</Translate>
            </button>
        </div>
    );
};

export default AddCoinsByRub;