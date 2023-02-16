import React from 'react';

const HistoryCenter = (props) => {

    const switcherType = (e) => {
        e.target.closest('ul').querySelectorAll('li').forEach(li => li.classList.remove('li_active'))

        setTimeout(() => {
            props.setChangeHistoryList({...props.changeHistoryList, switcher_type: e.target.closest('button').getAttribute('data-type')})
            document.querySelectorAll('.section-history__item').forEach(item => {
                item.style.position = 'static'
                item.style.zIndex = '1'
                item.classList.remove('section-history__item_deleted')
            })
        }, 200)

        document.querySelectorAll('.section-history__item').forEach(item => {
            item.classList.remove('fadeShow')
        })

        e.target.closest('li').classList.add('li_active')
    }

    let changeSort = (e) => {

        e.target.closest('.select').querySelector('.select__head span').innerText = e.target.textContent
        e.target.closest('.select').classList.toggle('select_open')

        document.querySelectorAll('.section-history__item').forEach(item => {
            item.style.position = 'static'
            item.style.zIndex = '1'
            item.classList.remove('section-history__item_deleted')
        })
        props.setChangeHistoryList({...props.changeHistoryList, switcher_sort: e.target.getAttribute('data-value')})
    }

    let openSelect = (e) => {
        e.target.closest('.select').classList.toggle('select_open')
    }

    return (
        <div className="section-history__center">
            <ul className="section-history__switcher">
                <li className="switcher-type__all li_active">
                    <button onClick={e => switcherType(e)}>Все</button>
                </li>
                <li>
                    <button className="switcher-type__items" data-type={"items"} onClick={e => switcherType(e)}>Предметами</button>
                </li>
                <li>
                    <button className="switcher-type__pin-codes" data-type={"pins"} onClick={e => switcherType(e)}>Пин-коды</button>
                </li>
            </ul>
            <div className="section-history__sort">
                <span>Сортировка:</span>
                <div className="select">
                    <div
                        className="select__head"
                        onClick={e => openSelect(e)}>
                        <span>
                            По цене
                        </span>
                    </div>
                    <div className="select__body">
                        <button
                            className="select__item"
                            data-value={"price"}
                            onClick={e => changeSort(e)}>
                            По цене
                        </button>
                        <button
                            className="select__item"
                            data-value={"date"}
                            onClick={e => changeSort(e)}>
                            По дате
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryCenter;