import React from 'react';
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../../Hooks/Translate";

const RightsChatResources = () => {

    let openChatRules = function (e) {
        document.querySelector('.section-right__rules').classList.toggle('section-right__rules_active')
        e.target.classList.toggle('resources__button_active')
    }

    return (
        <div className="section-right__resources">
            <button className="resources__button" onClick={openChatRules}>
                <Translate>chat_rules</Translate>
            </button>
        </div>
    );
};

export default RightsChatResources;