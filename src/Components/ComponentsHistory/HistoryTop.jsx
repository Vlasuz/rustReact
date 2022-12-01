import React from 'react';

const HistoryTop = (props) => {

    const changeHistory = (e) => {
        document.querySelectorAll('.section-history__top button').forEach(btn => btn.classList.remove('button_active'))


        setTimeout(() => {
            props.setChangeHistoryList({...props.changeHistoryList, switcher_which: e.target.closest('button').className})
            document.querySelectorAll('.section-history__item').forEach(item => {
                item.style.position = 'static'
                item.style.zIndex = '1'
                item.classList.remove('section-history__item_deleted')
            })
        }, 200)

        document.querySelectorAll('.section-history__item').forEach(item => {
            item.classList.remove('fadeShow')
        })

        e.target.closest('button').classList.add('button_active')
    }

    return (
        <div className="section-history__top">
            <button
                className="section-history__all button_active"
                onClick={e => changeHistory(e)}
            >
                <p>Все</p>
            </button>
            <button
                className="section-history__push"
                onClick={e => changeHistory(e)}
            >
                <p>Пополнено</p>
                <div className="cost">$ 1479<span>,00</span>
                </div>
            </button>
            <button
                className="section-history__pull"
                onClick={e => changeHistory(e)}
            >
                <p>Выведено с сайта</p>
                <div className="cost">$ 2618<span>,50</span>
                </div>
            </button>
        </div>
    );
};

export default HistoryTop;