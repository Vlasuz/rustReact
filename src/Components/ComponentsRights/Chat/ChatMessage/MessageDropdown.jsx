import React from 'react';

const MessageDropdown = ({openDropdown, messages, setMessages, thisId}) => {

    let showNotice = function () {
        document.querySelector('.section-right__notice .notice__block-chat').classList.add('notice__item_active')

        setTimeout(function () {
            document.querySelector('.section-right__notice .notice__block-chat').classList.remove('notice__item_active')
        }, 2000)
    }

    const deleteMessage = (e) => {
        let findIndex = messages.map(e => e.id).indexOf(thisId)
        setMessages((products) => products.filter((_, index) => index !== findIndex))
    }

    return (
        <ul className={openDropdown ? "item__dropdown item__dropdown_active" : "item__dropdown"}>
            <li>
                <a href="#">Скрыть сообщение</a>
            </li>
            <li>
                <a
                    href="#"
                    onClick={showNotice}
                >
                    Заглушить
                </a>
            </li>
            <li>
                <a href="#">Блокировать 1ч</a>
            </li>
            <li>
                <a href="#">Бан чата</a>
            </li>
            <li
                className="li__delete"
                onClick={e => deleteMessage(e)}
            >
                <a href="#">Удалить</a>
            </li>
        </ul>
    );
};

export default MessageDropdown;