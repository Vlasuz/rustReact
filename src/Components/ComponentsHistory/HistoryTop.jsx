import React, {useEffect, useState} from 'react';
import Translate from "../../Hooks/Translate";

const HistoryTop = (props) => {

    const [valueWithdraw, setValueWithdraw] = useState(0)
    const [valuePay, setValuePay] = useState(0)

    const changeHistory = (e) => {
        document.querySelectorAll('.section-history__top button').forEach(btn => btn.classList.remove('button_active'))


        setTimeout(() => {
            props.setChangeHistoryList({...props.changeHistoryList, switcher_which: e.target.closest('button').getAttribute('data-type')})
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
    useEffect(() => {
        props.transactions.map(item => item.type === "withdraw" && setValueWithdraw(prev => prev + item.value))
        props.transactions.map(item => item.type === "pay" && setValuePay(prev => prev + item.value))
    }, [props.transactions])

    return (
        <div className="section-history__top">
            <button
                className="section-history__all button_active"
                onClick={e => changeHistory(e)}>
                <p>
                    <Translate>all</Translate>
                </p>
            </button>
            <button
                className="section-history__push"
                data-type={'withdraw'}
                onClick={e => changeHistory(e)}>
                <p>
                    <Translate>history_type_pay</Translate>
                </p>
                <div className="cost">
                    $ {valuePay}<span>,00</span>
                </div>
            </button>
            <button
                className="section-history__pull"
                data-type={"pay"}
                onClick={e => changeHistory(e)}>
                <p>
                    <Translate>history_type_withdraw</Translate>
                </p>
                <div className="cost">
                    $ {valueWithdraw}<span>,00</span>
                </div>
            </button>
        </div>
    );
};

export default HistoryTop;