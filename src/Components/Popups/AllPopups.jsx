import React, {useState} from 'react';
import PopupNewRoom from "./PopupNewRoom";
import PopupAddCoins from "./PopupsAddCoins/PopupAddCoins";
import PopupAddCoinsByCode from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCode";
import PopupAddCoinsByDollars from "./PopupsAddCoins/PopupAddCoinsByDollars";
import PopupFairGame from "./PopupFairGame";
import PopupAddCoinsLinking from "./PopupsAddCoins/PopupAddCoinsLinking";
import PopupAddCoinsByCodeChecking from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeChecking";
import PopupAddCoinsByCodeSuccess from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeSuccess";
import PopupAddCoinsByCodeFail from "./PopupsAddCoins/PopupsAddCoinsByCode/PopupAddCoinsByCodeFail";
import PopupAddCoinsBySkins from "./PopupsAddCoins/PopupAddCoinsBySkins";
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";

const AllPopups = ({dataInfo}) => {

    const closePopup = function () {
        document.querySelectorAll('.popup').forEach(function (pp) {
            pp.classList.remove('popup_active')
        })
    }

    const [pincode, setPincode] = useState('')
    const [checkingAcive, setCheckingAcive] = useState(false)

    const [isFailCode, setIsFailCode] = useState(false)

    return (
        <>
            {/*<PopupFairGame/>*/}

            <PopupAddCoins/>
            <PopupAddCoinsByCode
                pincode={pincode}
                setPincode={setPincode}
                setCheckingAcive={setCheckingAcive}
                setIsFailCode={setIsFailCode}
            />
            <PopupAddCoinsByDollars/>
            <PopupAddCoinsBySkins/>
            <PopupAddCoinsByCodeChecking
                pincode={pincode}
                checkingAcive={checkingAcive}
                setCheckingAcive={setCheckingAcive}
            />
            <PopupAddCoinsByCodeSuccess/>
            <PopupAddCoinsByCodeFail
                isFailCode={isFailCode}
            />
            {/*<PopupAddCoinsLinking/>*/}


            <div className="popup popup-trade popup-trade-waiting">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>Трейд</h2>
                    <p>Ожидайте предложения от нашего бота:</p>
                    <PopupCloseCross />
                    <div className="popup-trade__bot">
                        <div className="bot__photo">
                            <img src="images/robot.png" alt="Photo"/>
                        </div>
                        <div className="bot__info">
                            <p>Михоелъ</p>
                            <div className="code">E24fvfns....ukhd742</div>
                        </div>
                    </div>
                    <div className="trade__buttons">
                        <button className="grey">
                            <span>Через браузер</span>
                        </button>
                        <button className="steam">
                            <span>Через Steam</span>
                            <img src="images/steam.svg" alt="Steam"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-hidden">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>
                        <span>Ошибка</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>Ваш инвентарь в steam скрыт,
                        <br/>откройте его у себя в настройках</p>
                    <PopupCloseCross />
                    <div className="trade__buttons">
                        <button className="grey">
                            <span>Через браузер</span>
                        </button>
                        <button className="steam">
                            <span>Через Steam</span>
                            <img src="images/steam.svg" alt="Steam"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-link">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>
                        <span>Ошибка</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>Вы не добавили трейд-ссылку в профиле</p>
                    <PopupCloseCross />
                    <div className="trade__buttons">
                        <button className="grey mini">
                            <span>К профилю</span>
                            <img src="images/arr-td.svg" alt="Arr"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-cancel">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>
                        <span>Ошибка</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>Вы отменили трейд-предложение</p>
                    <PopupCloseCross />
                </div>
            </div>
            <div className="popup popup-trade popup-trade-good">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2 className="green">
                        <span>Отлично</span>
                        <div className="img">
                            <img src="images/green-check.svg" alt="Error"/>
                        </div>
                    </h2>
                    <p>Баланс сайта пополнен</p>
                    <PopupCloseCross />
                </div>
            </div>

            <div className="popup popup-pull">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>Статус ботов</h2>
                    <PopupCloseCross />
                    <div className="popup-pull__block">
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">
                                    <div className="img">
                                        <img src="images/green-check.svg" alt="Ico"/>
                                    </div>
                                </div>
                                <button className="item__repeat">
                                    <img src="images/reload.svg" alt="Reload"/>
                                    <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                        <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
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
                                    <img src="images/reload.svg" alt="Reload"/>
                                    <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                        <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">
                                    <img src="images/status-error.svg" alt="Fail"/>
                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload"/>
                                    <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload"/>
                                    <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                        <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload"/>
                                    <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                        <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload"/>
                                    <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                        <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload"/>
                                    <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                        <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="popup-pull__buttons">
                        <button className="grey" onClick="openPopup('pull-search')">
                            <span>Через браузер</span>
                        </button>
                        <button className="steam">
                            <span>Через Steam</span>
                            <img src="images/steam.svg" alt="Steam"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-pull-search">
                <PopupCloseBackground />
                <div className="popup__content">
                    <h2>Статус ботов</h2>
                    <PopupCloseCross />
                    <div className="popup-pull-search__text">
                        <p>Подбираем ботов</p>
                        <div className="load">
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default AllPopups;