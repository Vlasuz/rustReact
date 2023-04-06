import React from 'react';
import Loader from "../Hooks/Loader";
import Translate from "../Hooks/Translate";
import {useSelector} from "react-redux";
import parse from "html-react-parser";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";

const PolicyPage = () => {
    const {id} = useParams()

    const page = useSelector(state => state.reducerPages.pages).filter(item => item.id === id)[0]

    const {i18n} = useTranslation();

    const title = {
        'ru': page?.title && parse(page?.title),
        'uk': page?.ua_title && parse(page?.ua_title),
        'en': page?.en_title && parse(page?.en_title),
    }

    const text = {
        'ru': page?.text && parse(page?.text),
        'uk': page?.ua_text && parse(page?.ua_text),
        'en': page?.en_text && parse(page?.en_text),
    }

    return (
        <section className="section-terms">
            <div className="section-terms__top">
                <h1>
                    {title[i18n.language]}
                </h1>
                <img src="../images/terms.png" alt="Photo" />
            </div>
            <div className="section-terms__content">
                {text[i18n.language]}
            </div>
        </section>
    );
};

export default PolicyPage;