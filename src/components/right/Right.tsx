import React from 'react'
import { RightStyled } from './right.styled'

import users from './../../assets/images/users.svg'
import search from './../../assets/images/search.svg'
import filter from './../../assets/images/filter.svg'
import reload from './../../assets/images/reload.svg'
import { Product } from '../product/Product'
import { products } from '../../data/poducts'

interface IRightProps {

}

export const Right: React.FC<IRightProps> = () => {

    return (
        <RightStyled>
            <div className="section-right__top">
                <button className="top__item top__item_active">
                    <span>Переработчик</span>
                </button>
                <button className="top__item">
                    <span>Чат</span>
                    <div className="people">
                        <img src={users} alt="Ico" />
                        <span>176</span>
                    </div>
                </button>
            </div>
            <div className="section-right__switcher">
                <div className="section-right__notice">
                    <div className="notice__item notice__block-chat">
                        <span>Доступ к чату заблокирован, ограничения снимутся через 00:15:32 </span>
                        <img src="img/status-error.svg" alt="Ico" />
                    </div>
                    <div className="notice__item notice__pererab">
                        <span>Переработано</span>
                        <img src="img/green-check.svg" alt="Ico" />
                    </div>
                    <div className="notice__item notice__sleepers-bought">
                        <span>Спальники куплены</span>
                        <img src="img/green-check.svg" alt="Ico" />
                    </div>
                    <div className="notice__item notice__no-cash">
                        <span>Недостаточно средств</span>
                        <img src="img/status-error.svg" alt="Ico" />
                    </div>
                    <div className="notice__item notice__add-cart">
                        <span>Добавлен в корзину</span>
                        <img src="img/green-check.svg" alt="Check" />
                    </div>
                </div>
                <div className="section-right__item section-right_active">
                    <div className="postamat storage">
                        <div className="postamat__search">
                            <input type="text" placeholder="Поиск" />
                            <button>
                                <img src={search} alt="Search" />
                            </button>
                        </div>
                        <form className="postamat__filter" action="#">
                            <input type="radio" checked name="filter" id="filterPrice" />
                            <label className="filter__item filter__price" htmlFor="filterPrice">
                                <span>По цене</span>
                                <input type="checkbox" name="upDown" />
                                <img src={filter} alt="filter" />
                            </label>
                            <input type="radio" name="filter" id="filterCool" />
                            <label className="filter__item filter__item_active filter__cool" htmlFor="filterCool">
                                <span>По раритетности</span>
                                <input type="checkbox" name="upDown" />
                                <img src={filter} alt="filter" />
                            </label>
                            {/* <button className="filter__reload">
                                <img src={reload} alt="filter" />
                                <span>Обновить</span>
                            </button> */}
                        </form>
                        <hr />
                        <ul className="postamat__block">
                            
                            {
                                products.map(item => <Product product_data={item} />)
                            }

                        </ul>
                        <div className="storage__zone">
                            <div className="zone__empty">
                                <p>Выберите предмет для вывода</p>
                            </div>
                            <button className="zone__button">
                                <img src="img/arr-r-t.svg" alt="Ico" />
                                <span>Вывести предметы</span>
                                <div className="zone__count">2</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="section-right__item">
                    <div className="section-right__chatting">
                        <div className="chatting__block">
                            <div className="chatting__item">
                                <div className="item__photo">
                                    <div className="photo">
                                        <img src="img/user.jpeg" alt="User" />
                                    </div>
                                    <div className="mark">
                                        <img src="img/twitch.svg" alt="Ico" />
                                    </div>
                                </div>
                                <div className="item__inner">
                                    <div className="item__top">
                                        <h4 className="item__name">Система</h4>
                                        <div className="item__muted">
                                            <img src="img/muted.svg" alt="Menu" />
                                        </div>
                                        <button className="item__menu">
                                            <img src="img/chat-menu.svg" alt="Menu" />
                                        </button>
                                        <time className="item__time">12:46</time>
                                    </div>
                                    <div className="item__text">
                                        <p>Из-за технический работ сайт может функционировать не корректно в ближайший час. Спасибо за понимание!</p>
                                    </div>
                                    <ul className="item__dropdown">
                                        <li>
                                            <a href="#">Скрыть сообщение</a>
                                        </li>
                                        {/* onclick="showNotice('block-chat')" */}
                                        <li>
                                            <a href="#">Заглушить</a>
                                        </li>
                                        <li>
                                            <a href="#">Блокировать 1ч</a>
                                        </li>
                                        <li>
                                            <a href="#">Бан чата</a>
                                        </li>
                                        <li className="li__delete">
                                            <a href="#">Удалить</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="chatting__item chatting__item_muted">
                                <div className="item__photo">
                                    <div className="photo">
                                        <img src="img/user.jpeg" alt="User" />
                                    </div>
                                    <div className="mark">
                                        <img src="img/twitch.svg" alt="Ico" />
                                    </div>
                                </div>
                                <div className="item__inner">
                                    <div className="item__top">
                                        <h4 className="item__name">Система</h4>
                                        <div className="item__muted">
                                            <img src="img/muted.svg" alt="Menu" />
                                        </div>
                                        <button className="item__menu">
                                            <img src="img/chat-menu.svg" alt="Menu" />
                                        </button>
                                        <time className="item__time">12:46</time>
                                    </div>
                                    <div className="item__text">
                                        <p>Из-за технический работ сайт может функционировать не корректно в ближайший час. Спасибо за понимание!</p>
                                    </div>
                                    <ul className="item__dropdown">
                                        <li>
                                            <a href="#">Скрыть сообщение</a>
                                        </li>
                                        {/* onclick="showNotice('block-chat')" */}
                                        <li>
                                            <a href="#">Заглушить</a>
                                        </li>
                                        <li>
                                            <a href="#">Блокировать 1ч</a>
                                        </li>
                                        <li>
                                            <a href="#">Бан чата</a>
                                        </li>
                                        <li className="li__delete">
                                            <a href="#">Удалить</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="chatting__item chatting__item_system">
                                <div className="item__photo">
                                    <div className="photo">
                                        <img src="img/user.jpeg" alt="User" />
                                    </div>
                                    <div className="mark">
                                        <img src="img/twitch.svg" alt="Ico" />
                                    </div>
                                </div>
                                <div className="item__inner">
                                    <div className="item__top">
                                        <h4 className="item__name">Система</h4>
                                        <div className="item__muted">
                                            <img src="img/muted.svg" alt="Menu" />
                                        </div>
                                        <button className="item__menu">
                                            <img src="img/chat-menu.svg" alt="Menu" />
                                        </button>
                                        <time className="item__time">12:46</time>
                                    </div>
                                    <div className="item__text">
                                        <p>Из-за технический работ сайт может функционировать не корректно в ближайший час. Спасибо за понимание!</p>
                                    </div>
                                    <ul className="item__dropdown">
                                        <li>
                                            <a href="#">Скрыть сообщение</a>
                                        </li>
                                        {/* onclick="showNotice('block-chat')" */}
                                        <li>
                                            <a href="#">Заглушить</a>
                                        </li>
                                        <li>
                                            <a href="#">Блокировать 1ч</a>
                                        </li>
                                        <li>
                                            <a href="#">Бан чата</a>
                                        </li>
                                        <li className="li__delete">
                                            <a href="#">Удалить</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="chatting__item">
                                <div className="item__photo">
                                    <div className="photo">
                                        <img src="img/user.jpeg" alt="User" />
                                    </div>
                                    <div className="mark">
                                        <img src="img/twitch.svg" alt="Ico" />
                                    </div>
                                </div>
                                <div className="item__inner">
                                    <div className="item__top">
                                        <h4 className="item__name">Система</h4>
                                        <div className="item__muted">
                                            <img src="img/muted.svg" alt="Menu" />
                                        </div>
                                        <button className="item__menu">
                                            <img src="img/chat-menu.svg" alt="Menu" />
                                        </button>
                                        <time className="item__time">12:46</time>
                                    </div>
                                    <div className="item__text">
                                        <p>Из-за технический работ сайт может функционировать не корректно в ближайший час. Спасибо за понимание!</p>
                                    </div>
                                    <ul className="item__dropdown">
                                        <li>
                                            <a href="#">Скрыть сообщение</a>
                                        </li>
                                        {/* onclick="showNotice('block-chat')" */}
                                        <li>
                                            <a href="#">Заглушить</a>
                                        </li>
                                        <li>
                                            <a href="#">Блокировать 1ч</a>
                                        </li>
                                        <li>
                                            <a href="#">Бан чата</a>
                                        </li>
                                        <li className="li__delete">
                                            <a href="#">Удалить</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="chatting__item">
                                <div className="item__photo">
                                    <div className="photo">
                                        <img src="img/user.jpeg" alt="User" />
                                    </div>
                                    <div className="mark">
                                        <img src="img/twitch.svg" alt="Ico" />
                                    </div>
                                </div>
                                <div className="item__inner">
                                    <div className="item__top">
                                        <h4 className="item__name">Система</h4>
                                        <div className="item__muted">
                                            <img src="img/muted.svg" alt="Menu" />
                                        </div>
                                        <button className="item__menu">
                                            <img src="img/chat-menu.svg" alt="Menu" />
                                        </button>
                                        <time className="item__time">12:46</time>
                                    </div>
                                    <div className="item__text">
                                        <p>Из-за технический работ сайт может функционировать не корректно в ближайший час. Спасибо за понимание!</p>
                                    </div>
                                    <ul className="item__dropdown">
                                        <li>
                                            <a href="#">Скрыть сообщение</a>
                                        </li>
                                        {/* onclick="showNotice('block-chat')" */}
                                        <li>
                                            <a href="#">Заглушить</a>
                                        </li>
                                        <li>
                                            <a href="#">Блокировать 1ч</a>
                                        </li>
                                        <li>
                                            <a href="#">Бан чата</a>
                                        </li>
                                        <li className="li__delete">
                                            <a href="#">Удалить</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="section-right__smiles">
                            <div className="smiles__inner">
                                <div className="smiles__block">
                                    <ul>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-0.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-1.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-2.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-3.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-4.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-5.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-0.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-1.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-2.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-3.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-4.png" alt="Smile" />
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src="img/Bitmap-5.png" alt="Smile" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="smiles__switches">
                                <ul>
                                    <li>
                                        <button>Смайлики</button>
                                    </li>
                                    <li className="li_active">
                                        <button>Стикеры «Фермер»</button>
                                    </li>
                                    <li>
                                        <button>«Стикеры Грибник»</button>
                                    </li>
                                    <li>
                                        <button>Смайлики</button>
                                    </li>
                                    <li>
                                        <button>Стикеры «Фермер»</button>
                                    </li>
                                    <li>
                                        <button>«Стикеры Грибник»</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="section-right__rules">
                            <div className="rules__block">
                                <h2>Правила чата</h2>
                                <h3>Запрещается:</h3>
                                <p>· Использовать в никнейме название или ссылки ведущие на сторонний сайт</p>
                                <br />
                                <p>· Рекламировать каналы Youtube / Twitch</p>
                                <br />
                                <p>· Оскорблять других участников чата / сайта.</p>
                                <br />
                                <p>· Упоминание платежных реквизитов в целях попрошайничества.</p>
                                <br />
                                <p>· Распространять URL ссылки и промо-коды (кроме Администрации и Модераторов).</p>
                                <br />
                                <p>· Спамить сообщения в чат по одному символу.</p>
                                <br />
                                <p>Любой участник сайта/чата, должен с уважением относится ко всем без исключения участникам.</p>
                            </div>
                        </div>
                        <div className="section-right__resources">
                            <button className="resources__button">Правила чата</button>
                            <a className="resources__button" href="terms.html">Пользовательское соглашение</a>
                        </div>
                        <form className="section-right__bottom" action="#">
                            <label className="textarea">
                                {/* maxLength="150" */}
                                <input placeholder="Сообщение" />
                                <span className="maxl">0/150</span>
                            </label>
                            {/* onclick="document.querySelector('.section-right__smiles').classNameList.toggle('section-right__smiles_active')" */}
                            <button className="smiles">
                                <img src="img/smile-1.png" alt="Smile" />
                            </button>
                            <button className="send">
                                <img src="img/send-message.svg" alt="Ico" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </RightStyled>
    )
}
