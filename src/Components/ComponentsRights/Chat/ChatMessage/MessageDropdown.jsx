import React from 'react';

const MessageDropdown = () => {

    let showNotice = function(notice){
        document.querySelector('.section-right__notice .notice__'+notice).classList.add('notice__item_active')

        setTimeout(function () {
            document.querySelector('.section-right__notice .notice__'+notice).classList.remove('notice__item_active')
        }, 2000)
    }

    return (
        <ul className="item__dropdown">
            <li><a href="#">Скрыть сообщение</a>
            </li>
            <li>
                <a
                    href="#"
                >Заглушить</a>
            </li>
                    {/*onClick={showNotice('block-chat')}*/}
            <li><a href="#">Блокировать 1ч</a>
            </li>
            <li><a href="#">Бан чата</a>
            </li>
            <li className="li__delete"><a href="#">Удалить</a>
            </li>
        </ul>
    );
};

export default MessageDropdown;