import React from 'react'
import { useSelector } from 'react-redux'
import { IFaqItem } from '../../../model'
import { FaqQuestionItem } from './FaqQuestionItem'

interface IFaqBodyProps {
    numberOfQuestion: number
    faqBlock: any
}

export const FaqBody: React.FC<IFaqBodyProps> = ({ numberOfQuestion, faqBlock }) => {

    const faqQuestions = useSelector((state: any) => state.toolkit.faqList)[numberOfQuestion ?? 0]?.faqs

    return (
        <div ref={faqBlock} className="section-faq__block">

            {
                faqQuestions?.map((item: IFaqItem) => <FaqQuestionItem key={item.id} item={item} numberOfQuestion={numberOfQuestion} />)
            }

        </div>
    )
}
