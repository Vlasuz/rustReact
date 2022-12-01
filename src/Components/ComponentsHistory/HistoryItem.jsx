import React, {useEffect} from 'react';
import HistoryItemLeft from "./HistoryItemLeft";
import HistoryItemDate from "./HistoryItemDate";
import HistoryItemListClothes from "./HistoryItemListClothes";
import HistoryItemCoins from "./HistoryItemCoins";
import HistoryItemDelete from "./HistoryItemDelete";
import HistoryItemStats from "./HistoryItemStats";

const HistoryItem = (props) => {

    useEffect(() => {
        document.querySelectorAll('.section-history__item').forEach(item => {
            setTimeout(() => {
                item.classList.add('fadeShow')
            }, 200)
        })
    })

    return (
        <div
            className="section-history__item"

        >
            <div
                className={props.states.whichTransaction === "section-history__pull" ? "item__type item__type_get" : "item__type item__type_send"}>
                <img
                    src={props.states.whichTransaction === "section-history__pull" ? "images/arr-get.svg" : "images/arr-send.svg"}
                    alt="Send"/>
            </div>
            <div className="item__date">
                {props.states.datePublic.time}
                <span>
                    {new Date(props.states.datePublic.date).getDate() < 10 ? '0'+new Date(props.states.datePublic.date).getDate() : new Date(props.states.datePublic.date).getDate()}.
                    {new Date(props.states.datePublic.date).getMonth() < 10 ? '0'+new Date(props.states.datePublic.date).getMonth() : new Date(props.states.datePublic.date).getMonth()}.
                    {new Date(props.states.datePublic.date).getFullYear() < 10 ? '0'+new Date(props.states.datePublic.date).getFullYear() : new Date(props.states.datePublic.date).getFullYear()}
                </span>
            </div>

            <div className="item__list">
            {props.states.images.length ?
                <HistoryItemListClothes images={props.states.images}/>
                :
                <p className="pin">
                    PIN-CODE<span> {props.states.pin_code}</span>
                </p>
            }
            </div>

            <div className="item__price">
                <img src="images/header__coins.svg" alt="Coins"/>
                <span>
                    {props.states.cost}
                </span>
            </div>

            <HistoryItemDelete states={props.states} setHistoryList={props.setHistoryList}
                               historyList={props.historyList}/>
            <HistoryItemStats status={props.states.status}/>
        </div>
    );
};

export default HistoryItem;