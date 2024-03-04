import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IFaqList } from '../../../model'
import { getApiLink } from '../../../functions/getApiLink'

interface IFaqHeadProps {
    setNumberOfQuestion: any
    faqBlock: any
}

export const FaqHead: React.FC<IFaqHeadProps> = ({setNumberOfQuestion, faqBlock}) => {

    const faqCategory = useSelector((state: any) => state.toolkit.faqList)
    const language: string = useSelector((state: any) => state.toolkit.language)

    const [numberOfCatalog, setNumberOfCatalog] = useState(0)

    const handleChange = (index: number) => {
        faqBlock.current.classList.add('section-faq__block_hide')

        setTimeout(() => {
            setNumberOfQuestion(index)
            setNumberOfCatalog(index)
            faqBlock.current.classList.remove('section-faq__block_hide')
        }, 300)
    }

    return (
        <div className="section-faq__catalog">

            {
                faqCategory.map((item: IFaqList, index: number) => {
                    const title: {[key: string]: any} = {
                        'ru': item?.title,
                        'ua': item?.ua_title ?? item?.title,
                        'en': item?.en_title ?? item?.title,
                    }

                    return (<button onClick={_ => handleChange(index)} key={item.id}
                            className={"catalog__item" + (numberOfCatalog === index ? " catalog__item_active" : "")}>
                        <img src={getApiLink(item.image)} alt="Ico"/>
                        <h2>
                            {title[language]}
                        </h2>
                    </button>)
                })
            }

        </div>
    )
}
