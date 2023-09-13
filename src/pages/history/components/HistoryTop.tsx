import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IUserHistoryBalance } from '../../../model'
import parse from 'html-react-parser';

interface IHistoryTopProps {
    setHistoryFilter: any
}

export const HistoryTop: React.FC<IHistoryTopProps> = ({setHistoryFilter}) => {

    const [selectedType, setSelectedType] = useState('')
    const [payAmount, setPayAmount] = useState(0)
    const [withdrawAmount, setWithdrawAmount] = useState(0)
    const userHistory = useSelector((state: any) => state.toolkit.userHistory)

    useEffect(() => {
        setWithdrawAmount(0)
        setPayAmount(0)
        userHistory.map((item: IUserHistoryBalance) => item.type === "pay" && item.status === "success" && setWithdrawAmount(prev => prev + item.price))
        userHistory.map((item: IUserHistoryBalance) => item.type === "withdraw" && item.status === "success" && setPayAmount(prev => prev + item.price))
    }, [userHistory])

    const handleChange = (type: string) => {
        setSelectedType(type)
        document.querySelector('.section-history__block')?.classList.add('section-history__block_hide')

        setTimeout(() => {
            document.querySelector('.section-history__block')?.classList.remove('section-history__block_hide')

            setHistoryFilter((prev: any) => {
                return {
                    type: type,
                    sortBy: prev.sortBy,
                    filterBy: prev.filterBy
                }
            })
        }, 300)
    }

    const payAmountHtml = `$ ${Math.floor(payAmount)}<span>,${payAmount.toFixed(2).slice(payAmount.toFixed(2).indexOf('.') + 1)}</span>`;
    const withdrawAmountHtml = `$ ${Math.floor(withdrawAmount)}<span>,${withdrawAmount.toFixed(2).slice(withdrawAmount.toFixed(2).indexOf('.') + 1)}</span>`;

    return (
        <div className="section-history__top">
            <button onClick={_ => handleChange('')} className={"section-history__all" + (selectedType === "" ? " button_active" : "")}>
                <p>Все</p>
            </button>
            <button onClick={_ => handleChange('pay')} className={"section-history__push" + (selectedType === "pay" ? " button_active" : "")}>
                <p>Пополнено</p>
                <div className="cost">
                    {parse(payAmountHtml)}
                </div>
            </button>
            <button onClick={_ => handleChange('withdraw')} className={"section-history__pull" + (selectedType === "withdraw" ? " button_active" : "")}>
                <p>Выведено с сайта</p>
                <div className="cost">
                    {parse(withdrawAmountHtml)}
                </div>
            </button>
        </div>
    )
}
