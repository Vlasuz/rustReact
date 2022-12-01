import React from 'react';

const FaqTop = () => {
    return (
        <div className="section-faq__top">
            <div className="top__lft">
                <h1>Трудный вопрос</h1>
                <p>Если не нашли решения свой проблемы</p>
            </div>
            <div className="top__rht">
                <a className="vk" href="#">
                    <img src="images/vk-wh.svg" alt="Vk"/>
                    <span>Чат</span>
                </a>
                <a className="dis" href="#">
                    <img src="images/discord-wh.svg" alt="discord"/>
                    <span>Канал</span>
                </a>
            </div>
        </div>
    );
};

export default FaqTop;