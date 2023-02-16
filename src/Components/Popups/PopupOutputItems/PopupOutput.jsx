import React from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupOutput = () => {

    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.'+nextPopup).classList.add('popup_active')
    }


    const deleteitem = function (e) {

        let th = e.target.closest('.popup-pull__item')

        // console.log(closestItemClass)
        e.target.closest('.popup-pull__item').classList.add('popup-pull__item_deleted')
        setTimeout(function () {
            th.remove()
        }, 300)

    }

    return (
        <div className="popup popup-pull">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Статус ботов</h2>
                <PopupCloseCross />
                <div className="popup-pull__block">
                    <div className="popup-pull__item">
                        <div className="item__top">
                            <div className="item__photo">
                                <img src="../images/robot.png" alt="Robot"/>
                            </div>
                            <h3 className="item__name">Бот #6</h3>
                            <div className="item__status">
                                <div className="img">
                                    <img src="../images/green-check.svg" alt="Ico"/>
                                </div>
                            </div>
                            <button className="item__repeat">
                                <img src="../images/reload.svg" alt="Reload"/>
                                <span>Повторить</span>
                            </button>
                            <button
                                className="item__delete"
                                onClick={e => deleteitem(e)}
                            >
                                <img src="../images/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                        <div className="item__bottom">
                            <ul className="item__skins">
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                    <div className="item__count">2</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup-pull__item">
                        <div className="item__top">
                            <div className="item__photo">
                                <img src="../images/robot.png" alt="Robot"/>
                            </div>
                            <h3 className="item__name">Бот #6</h3>
                            <div className="item__status">
                                <div className="load">
                                    <div className="load__line">

                                    </div>
                                    <div className="load__line">

                                    </div>
                                    <div className="load__line">

                                    </div>
                                </div>
                            </div>
                            <button className="item__repeat">
                                <img src="../images/reload.svg" alt="Reload"/>
                                <span>Повторить</span>
                            </button>
                            <button
                                className="item__delete"
                                onClick={e => deleteitem(e)}
                            >
                                <img src="../images/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                        <div className="item__bottom">
                            <ul className="item__skins">
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                    <div className="item__count">2</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup-pull__item">
                        <div className="item__top">
                            <div className="item__photo">
                                <img src="../images/robot.png" alt="Robot"/>
                            </div>
                            <h3 className="item__name">Бот #6</h3>
                            <div className="item__status">
                                <img src="../images/status-error.svg" alt="Fail"/>
                            </div>
                            <button className="item__repeat item__repeat_active">
                                <img src="../images/reload.svg" alt="Reload"/>
                                <span>Повторить</span>
                            </button>
                            <button
                                className="item__delete"
                                onClick={e => deleteitem(e)}
                            >
                                <img src="../images/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                        <div className="item__bottom">
                            <ul className="item__skins">
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup-pull__item">
                        <div className="item__top">
                            <div className="item__photo">
                                <img src="../images/robot.png" alt="Robot"/>
                            </div>
                            <h3 className="item__name">Бот #6</h3>
                            <div className="item__status">

                            </div>
                            <button className="item__repeat item__repeat_active">
                                <img src="../images/reload.svg" alt="Reload"/>
                                <span>Повторить</span>
                            </button>
                            <button
                                className="item__delete"
                                onClick={e => deleteitem(e)}
                            >
                                <img src="../images/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                        <div className="item__bottom">
                            <ul className="item__skins">
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                    <div className="item__count">2</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup-pull__item">
                        <div className="item__top">
                            <div className="item__photo">
                                <img src="../images/robot.png" alt="Robot"/>
                            </div>
                            <h3 className="item__name">Бот #6</h3>
                            <div className="item__status">

                            </div>
                            <button className="item__repeat item__repeat_active">
                                <img src="../images/reload.svg" alt="Reload"/>
                                <span>Повторить</span>
                            </button>
                            <button
                                className="item__delete"
                                onClick={e => deleteitem(e)}
                            >
                                <img src="../images/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                        <div className="item__bottom">
                            <ul className="item__skins">
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                    <div className="item__count">2</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup-pull__item">
                        <div className="item__top">
                            <div className="item__photo">
                                <img src="../images/robot.png" alt="Robot"/>
                            </div>
                            <h3 className="item__name">Бот #6</h3>
                            <div className="item__status">

                            </div>
                            <button className="item__repeat item__repeat_active">
                                <img src="../images/reload.svg" alt="Reload"/>
                                <span>Повторить</span>
                            </button>
                            <button
                                className="item__delete"
                                onClick={e => deleteitem(e)}
                            >
                                <img src="../images/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                        <div className="item__bottom">
                            <ul className="item__skins">
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                    <div className="item__count">2</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="popup-pull__item">
                        <div className="item__top">
                            <div className="item__photo">
                                <img src="../images/robot.png" alt="Robot"/>
                            </div>
                            <h3 className="item__name">Бот #6</h3>
                            <div className="item__status">

                            </div>
                            <button className="item__repeat item__repeat_active">
                                <img src="../images/reload.svg" alt="Reload"/>
                                <span>Повторить</span>
                            </button>
                            <button
                                className="item__delete"
                                onClick={e => deleteitem(e)}
                            >
                                <img src="../images/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                        <div className="item__bottom">
                            <ul className="item__skins">
                                <li className="item__skin">
                                    <div className="clothes__cool clothes__cool_green">

                                    </div>
                                    <img src="../images/skin.png" alt="Skin"/>
                                    <div className="item__count">2</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="popup-pull__buttons">
                    <button className="grey" onClick={() => openPopup('popup-pull-search')}>
                        <span>Через браузер</span>
                    </button>
                    <button className="steam">
                        <span>Через Steam</span>
                        <img src="../images/steam.svg" alt="Steam"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupOutput;