import React from 'react';
import historyList from "./HistoryList";

const HistoryItemDelete = (props) => {

    let deleteItem = function (e) {

        let th = e.target.closest('.section-history__item')

        e.target.closest('.section-history__item').classList.add('section-history__item_deleted')
        props.setHistoryList(prev => {
            props.historyList.splice(prev.indexOf(props.states), 1)
            return props.historyList
        })
        setTimeout(function () {
            th.style.position = 'absolute'
            th.style.zIndex = '-1'
        }, 300)

    }

    return (
        <button
            className="item__delete"
            onClick={e => deleteItem(e)}
        >
            <img src="../images/cross.svg" alt="Coins"/>
        </button>
    );
};

export default HistoryItemDelete;