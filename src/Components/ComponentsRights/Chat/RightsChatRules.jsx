import React, {useEffect, useState} from 'react';
import Translate from "../../../Hooks/Translate";
import axios from "axios";
import parse from 'html-react-parser';
import {getCookie} from "../../../Hooks/GetCookies";
import {useSelector} from "react-redux";
import {setPages} from "../../../Redux/Reducers/reducerPages";
import {useTranslation} from "react-i18next";

const RightsChatRules = () => {

    const page = useSelector(state => state.reducerPages.pages)[0]
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
        <div className="section-right__rules">
            <div className="rules__block">
                <h2>
                    {title[i18n.language]}
                </h2>
                {text[i18n.language]}
            </div>
        </div>
    );
};

export default RightsChatRules;