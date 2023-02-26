import React, {useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import Translate from "../../Hooks/Translate";

const FaqTop = () => {

    const socials = useSelector(state => state.reducerSettings.settings)

    return (
        <div className="section-faq__top">
            <div className="top__lft">
                <h1>
                    <Translate>hard_question</Translate>
                </h1>
                <p>
                    <Translate>if_not_found_your_problem</Translate>
                </p>
            </div>
            <div className="top__rht">
                <a className="vk" href={socials.vkontakte} target={'_blank'}>
                    <img src="../images/vk-wh.svg" alt="Vk"/>
                    <span>
                        <Translate>chat_title</Translate>
                    </span>
                </a>
                <a className="dis" href={socials.discord} target={'_blank'}>
                    <img src="../images/discord-wh.svg" alt="discord"/>
                    <span>
                        <Translate>telegram_channel</Translate>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default FaqTop;