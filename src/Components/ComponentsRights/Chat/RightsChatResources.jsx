import React from 'react';
import {Link} from "react-router-dom";

const RightsChatResources = () => {

    let openChatRules = function (e) {
        document.querySelector('.section-right__rules').classList.toggle('section-right__rules_active')
        e.target.classList.toggle('resources__button_active')
    }

    return (
        <div className="section-right__resources">
            <button
                className="resources__button"
                onClick={openChatRules}
            >
                Правила чата
            </button>
            <Link to={"policy"} className="resources__button">Пользовательское соглашение</Link>
        </div>
    );
};

export default RightsChatResources;