import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setNotice} from "../Redux/Reducers/reducerNotice";
import {Trans, useTranslation} from "react-i18next";
import Translate from "../Hooks/Translate";

const Notices = () => {

    const notices = [
        {
            "type": "auth_for_messages",
            "text": <Translate>for_message_auth</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "auth_for_action",
            "text": <Translate>auth_for_action</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "not_good_trade_link",
            "text": <Translate>write_true_trade_link</Translate>,
            "icons": "../images/error-red.svg",
        },
        {
            "type": "processor_done",
            "text": <Translate>processor_done</Translate>,
            "icons": "../images/green-check.svg",
        },
        {
            "type": "added_to_cart",
            "text": <Translate>added_to_cart</Translate>,
            "icons": "../images/green-check.svg",
        },
        {
            "type": "not_added_to_cart",
            "text": <Translate>for_buy_items_auth</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "already_added_item",
            "text": <Translate>item_already_in_cart</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "not_enough_money",
            "text": <Translate>you_dont_have_enough_money</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "not_set_all_sleepers",
            "text": <Translate>you_need_place_all_bags</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "success_to_buy_bags",
            "text": <Translate>success_to_buy_bags</Translate>,
            "icons": "../images/green-check.svg",
        },
        {
            "type": "already_have_a_game",
            "text": <Translate>already_have_a_game</Translate>,
            "icons": "../images/error-red.svg",
        },
        {
            "type": "you_are_banned",
            "text": <Translate>block_chat</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "amount_smaller",
            "text": <Translate>amount_smaller</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "amount_larger",
            "text": <Translate>amount_larger</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "not_enable_airdrop",
            "text": <Translate>not_enable_airdrop</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "not_enable_payment",
            "text": <Translate>not_enable_payment</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "not_enable_withdraw",
            "text": <Translate>not_enable_withdraw</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "not_enable_fight",
            "text": <Translate>not_enable_fight</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "nothing_to_buy",
            "text": <Translate>nothing_to_buy</Translate>,
            "icons": "../images/status-error.svg",
        },
        {
            "type": "item_not_available",
            "text": <Translate>item_not_available</Translate>,
            "icons": "../images/status-error.svg",
        }
    ];

    const noticeActivated = useSelector(state => state.reducerNotice.notice)
    const dispatch = useDispatch()
    const [oldNotice, setOldNotice] = useState("")

    document.querySelectorAll('.section-right__notice .notice__item').forEach(item => {
        item.onclick = () => {
            dispatch(setNotice(""))
        }
    })

    useEffect(() => {

        if (!!noticeActivated.length) {
            let timeout = setTimeout(() => {
                setOldNotice(noticeActivated)
                dispatch(setNotice(""))
            }, 3000)
            // clearTimeout(timeout)
        }

    }, [noticeActivated])

    return (
        <div className={"section-right__notice section-right__notice-body" + (!!noticeActivated.length ? " section-right__notice_active" : "")}>

            {
                notices.map((item, itemNum) =>
                    <div key={itemNum}
                         className={"notice__item" + (noticeActivated === item.type ? " notice__item_active" : "")}>
                        <span>
                            {item.text}
                        </span>
                        <img src={item.icons} alt=""/>
                    </div>
                )
            }

        </div>
    );
};

export default Notices;