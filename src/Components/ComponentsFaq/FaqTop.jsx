import React, {useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";

const FaqTop = () => {

    const socials = useSelector(state => state.reducerSettings.settings)

    return (
        <div className="section-faq__top">
            <div className="top__lft">
                <h1>Трудный вопрос</h1>
                <p>Если не нашли решения свой проблемы</p>
            </div>
            <div className="top__rht">
                <a className="vk" href={socials.vkontakte} target={'_blank'}>
                    <img src="../images/vk-wh.svg" alt="Vk"/>
                    <span>Чат</span>
                </a>
                <a className="dis" href={socials.discord} target={'_blank'}>
                    <img src="../images/discord-wh.svg" alt="discord"/>
                    <span>Канал</span>
                </a>
            </div>
        </div>
    );
};

export default FaqTop;