import React from 'react';
import {useTranslation} from "react-i18next";
import parse from "html-react-parser";

const FaqItem = ({item}) => {

    const {i18n} = useTranslation();

    return (
        <>
            {
                item.faqs.map(question => {
                        const title = {
                            'ru': question?.title && parse(question?.title),
                            'uk': question?.ua_title && parse(question?.ua_title),
                            'en': question?.en_title && parse(question?.en_title),
                        }

                        const text = {
                            'ru': question?.text && parse(question?.text),
                            'uk': question?.ua_text && parse(question?.ua_text),
                            'en': question?.en_text && parse(question?.en_text),
                        }

                        return (
                            <div key={question.id} className="section-faq__item">
                                <div
                                    className="item__head"
                                    onClick={e => e.target.closest('.section-faq__item').classList.toggle('section-faq__item_active')}>
                                    <h2>
                                        {title[i18n.language]}
                                    </h2>
                                    <div className="arr">
                                        <img src="../images/faq-arr.svg" alt="Arr"/>
                                    </div>
                                </div>
                                <div className="item__body">
                                    <p>
                                        {text[i18n.language]}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                )
            }

        </>
    );
};

export default FaqItem;