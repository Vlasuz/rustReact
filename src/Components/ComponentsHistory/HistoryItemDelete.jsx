import React from 'react';

const HistoryItemDelete = () => {

    let deleteItem = function (e) {

        let th = e.target.closest('.section-history__item')

        e.target.closest('.section-history__item').classList.add('section-history__item_deleted')
        setTimeout(function () {
            th.remove()
        }, 300)

    }

    return (
        <button
            className="item__delete"
            onClick={e => deleteItem(e)}
        >
            <img src="images/cross.svg" alt="Coins"/>
        </button>
    );
};

export default HistoryItemDelete;