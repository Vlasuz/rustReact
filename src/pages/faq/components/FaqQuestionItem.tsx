import React, { useEffect, useState } from 'react'
import { IFaqItem } from '../../../model'
import arrow from './../../../assets/images/faq-arr.svg'

interface IFaqQuestionItemProps {
    item: IFaqItem
    numberOfQuestion: number
}

export const FaqQuestionItem: React.FC<IFaqQuestionItemProps> = ({item, numberOfQuestion}) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [numberOfQuestion])

    return (
        <div onClick={_ => setIsOpen(prev => !prev)} className={"section-faq__item" + (isOpen ? " section-faq__item_active" : "")}>
            <div className="item__head">
                <h2>
                    {item.title}
                </h2>
                <div className="arr">
                    <img src={arrow} alt="Arr" />
                </div>
            </div>
            <div className="item__body">
                <p>
                    {item.text}
                </p>
            </div>
        </div>
    )
}
