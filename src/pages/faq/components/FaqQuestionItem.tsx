import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IFaqItem } from '../../../model'
import arrow from './../../../assets/images/faq-arr.svg'

interface IFaqQuestionItemProps {
    item: IFaqItem
    numberOfQuestion: number
}

export const FaqQuestionItem: React.FC<IFaqQuestionItemProps> = ({item, numberOfQuestion}) => {

    const [isOpen, setIsOpen] = useState(false)

    const language: string = useSelector((state: any) => state.toolkit.language)

    useEffect(() => {
        setIsOpen(false)
    }, [numberOfQuestion])

    const title: {[key: string]: any} = {
        'ru': item?.title,
        'ua': item?.ua_title ?? item?.title,
        'en': item?.en_title ?? item?.title,
    }
    const text: {[key: string]: any} = {
        'ru': item?.text,
        'ua': item?.ua_text ?? item?.text,
        'en': item?.en_text ?? item?.text,
    }

    return (
        <div onClick={_ => setIsOpen(prev => !prev)} className={"section-faq__item" + (isOpen ? " section-faq__item_active" : "")}>
            <div className="item__head">
                <h2>
                    {title[language]}
                </h2>
                <div className="arr">
                    <img src={arrow} alt="Arr" />
                </div>
            </div>
            <div className="item__body">
                <p>
                    {text[language]}
                </p>
            </div>
        </div>
    )
}
