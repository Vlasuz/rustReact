import React, {useEffect, useState} from 'react';
import axios from "axios";
import GlobalLink from "../../Hooks/GlobalLink";
import parse from "html-react-parser";
import {useTranslation} from "react-i18next";

const FaqCatalog = ({faq, error}) => {

    const {i18n} = useTranslation();

    const switchCatalog = (e, itemNum) => {

        document.querySelector('.section-faq__block_show')?.classList.remove('section-faq__block_show')
        document.querySelector('.section-faq__block_active')?.classList.add('section-faq__block_hide')

        setTimeout(() => {
            document.querySelector('.section-faq__block_hide')?.classList.remove('section-faq__block_hide')
            document.querySelector('.section-faq__block_active')?.classList.remove('section-faq__block_active')
            document.querySelectorAll('.section-faq__block')[itemNum].classList.add('section-faq__block_active')
            setTimeout(() => {
                document.querySelectorAll('.section-faq__block')[itemNum].classList.add('section-faq__block_show')
            }, 100)
        }, 300)

        document.querySelector('.catalog__item_active')?.classList.remove('catalog__item_active')
        e.target.closest('button').classList.add('catalog__item_active')
    }

    return (
        <div className="section-faq__catalog">

            {
                !error ? faq.map((item, itemNum) => {

                    const title = {
                        'ru': item?.title && item?.title,
                        'uk': item?.ua_title && item?.ua_title,
                        'en': item?.en_title && item?.en_title,
                    }

                        return (
                            <button
                                key={itemNum}
                                className={itemNum === 0 ? "catalog__item catalog__item_active" : "catalog__item"}
                                onClick={e => switchCatalog(e, itemNum)}>
                                <img src={"https://" + GlobalLink() + "/" + item.image} alt="Ico"/>
                                <h2>
                                    {/*{item.title}*/}
                                    {title[i18n.language]}
                                </h2>
                            </button>
                        )
                    }
                ) : <div style={{color: 'red'}}>Ошибка в соединении: 500</div>
            }

        </div>
    );
};

export default FaqCatalog;