import React from 'react';
import Translate from "../../../Hooks/Translate";

const RightsChatRules = () => {
    return (
        <div className="section-right__rules">
            <div className="rules__block">
                <h2>
                    <Translate>chat_rules</Translate>
                </h2>
                <h3>Запрещается:</h3>
                <p>· Использовать в никнейме название или ссылки ведущие на сторонний сайт</p>
                <br/>
                <p>· Рекламировать каналы Youtube / Twitch</p>
                <br/>
                <p>· Оскорблять других участников чата / сайта.</p>
                <br/>
                <p>· Упоминание платежных реквизитов в целях попрошайничества.</p>
                <br/>
                <p>· Распространять URL ссылки и промо-коды (кроме Администрации и
                    Модераторов).</p>
                <br/>
                <p>· Спамить сообщения в чат по одному символу.</p>
                <br/>
                <p>Любой участник сайта/чата, должен с уважением относится ко
                    всем без исключения участникам.</p>
            </div>
        </div>
    );
};

export default RightsChatRules;