import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import OpenPopup from "../../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import axios from "axios";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";

const PopupAddCoinsByDollars = () => {

    const [input, setInput] = useState(0)
    const [scrap, setScrap] = useState(0)
    const dispatch = useDispatch()

    const commission = useSelector(state => state.reducerSettings.settings).pay_skin_commission
    const fast_number = [8, 10, 20, 30, 50, 60]

    const handlePay = () => {

        if (input >= 8) {
            OpenPopup('popup-add-coins-balance-linking')

            console.log('input', input)
            axios.post(`https://${GlobalLink()}/api/payment/skycrypto/?amount=${input}`).then(res => {
                window.location.href = res.data.message
            }).catch(er => {
                console.log(er)
            })
        } else {
            dispatch(setNotice('its_to_low_for_pay'))
        }

    };

    useEffect(() => {
        setScrap(+input * (commission !== 0 ? commission : 1))
    }, [input, commission])


    return (
        <div className="popup popup-add-coins-balance">
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2><Translate>add_balance</Translate></h2>
                <a
                    className="back"
                    href="#"
                    onClick={() => OpenPopup('popup-add-coins')}
                >
                    <img src="../images/arr-td.svg" alt="Arr"/>
                    <span><Translate>methods_payment</Translate></span>
                </a>
                <PopupCloseCross/>
                <ul className="balance__cost">

                    {
                        fast_number.map((item, index) =>
                            <li key={index}>
                                <button onClick={_ => setInput(item)}>
                                    ${item}
                                </button>
                            </li>
                        )
                    }

                </ul>
                <div className="balance__sum">
                    <p><Translate>added_for_balance</Translate></p>
                    <input type="text" pattern="[0-9]*" placeholder={"8"} value={input}
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
        </div>
    );
};

export default PopupAddCoinsByDollars;