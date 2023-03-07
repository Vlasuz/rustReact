import React from 'react';
import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import {useDispatch, useSelector} from "react-redux";

const TradingBots = ({ data }) => {

    const userData = useSelector(state => state.reducerUserData.data)

    const deleteitem = function (e) {

        let th = e.target.closest('.popup-pull__item')

        e.target.closest('.popup-pull__item').classList.add('popup-pull__item_deleted')
        setTimeout(function () {
            th.remove()
        }, 300)

    }

    return (
        <div className="popup__content">
            <h2>
                <Translate>bots_status</Translate>
            </h2>
            <PopupCloseCross/>
            <div className="popup-pull__block">

                {
                    data?.bots ? data?.bots?.map(bot =>
                            <div key={bot.id} className="popup-pull__item">
                                <div className="item__top">
                                    <div className="item__photo">
                                        <img src="../images/robot.png" alt="Robot"/>
                                    </div>
                                    <h3 className="item__name">{bot.bot.username}</h3>
                                    <div className="item__status">
                                        {
                                            bot.status === "waiting" ?
                                                <div className="load">
                                                    <div className="load__line">

                                                    </div>
                                                    <div className="load__line">

                                                    </div>
                                                    <div className="load__line">

                                                    </div>
                                                </div>
                                                :
                                                ""
                                        }
                                    </div>
                                    {/*<button className="item__repeat">*/}
                                    {/*    <img src="../images/reload.svg" alt="Reload"/>*/}
                                    {/*    <span>Повторить</span>*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="item__delete"*/}
                                    {/*    onClick={e => deleteitem(e)}*/}
                                    {/*>*/}
                                    {/*    <img src="../images/cross.svg" alt="Delete"/>*/}
                                    {/*</button>*/}
                                </div>
                                <div className="item__bottom">
                                    <ul className="item__skins">
                                        {
                                            bot.items.map(item =>
                                                <li key={item.id} className="item__skin">
                                                    <div className="clothes__cool" style={{background: item.rarity.color}}/>
                                                    <img src={item.image} alt="Skin"/>
                                                    {/*<div className="item__count">2</div>*/}
                                                </li>
                                            )
                                        }

                                    </ul>
                                </div>
                            </div>
                        ) :
                        <div key={data?.bot?.id} className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="../images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">{data?.bot?.username}</h3>
                                <div className="item__status">
                                    {
                                        data?.status === "waiting" ?
                                            <div className="load">
                                                <div className="load__line">

                                                </div>
                                                <div className="load__line">

                                                </div>
                                                <div className="load__line">

                                                </div>
                                            </div>
                                            :
                                            ""
                                    }
                                </div>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    {
                                        data?.items?.map(item =>
                                            <li key={item.id} className="item__skin">
                                                <div className="clothes__cool" style={{background: item.rarity.color}}/>
                                                <img src={item.image} alt="Skin"/>
                                                {/*<div className="item__count">2</div>*/}
                                            </li>
                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                }


                {/*<div className="popup-pull__item">*/}
                {/*    <div className="item__top">*/}
                {/*        <div className="item__photo">*/}
                {/*            <img src="../images/robot.png" alt="Robot"/>*/}
                {/*        </div>*/}
                {/*        <h3 className="item__name">Бот #6</h3>*/}
                {/*        <div className="item__status">*/}
                {/*            <div className="img">*/}
                {/*                <img src="../images/green-check.svg" alt="Ico"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <button className="item__repeat">*/}
                {/*            <img src="../images/reload.svg" alt="Reload"/>*/}
                {/*            <span>Повторить</span>*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="item__delete"*/}
                {/*            onClick={e => deleteitem(e)}*/}
                {/*        >*/}
                {/*            <img src="../images/cross.svg" alt="Delete"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="item__bottom">*/}
                {/*        <ul className="item__skins">*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*                <div className="item__count">2</div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="popup-pull__item">*/}
                {/*    <div className="item__top">*/}
                {/*        <div className="item__photo">*/}
                {/*            <img src="../images/robot.png" alt="Robot"/>*/}
                {/*        </div>*/}
                {/*        <h3 className="item__name">Бот #6</h3>*/}
                {/*        <div className="item__status">*/}
                {/*            <div className="load">*/}
                {/*                <div className="load__line">*/}

                {/*                </div>*/}
                {/*                <div className="load__line">*/}

                {/*                </div>*/}
                {/*                <div className="load__line">*/}

                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <button className="item__repeat">*/}
                {/*            <img src="../images/reload.svg" alt="Reload"/>*/}
                {/*            <span>Повторить</span>*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="item__delete"*/}
                {/*            onClick={e => deleteitem(e)}*/}
                {/*        >*/}
                {/*            <img src="../images/cross.svg" alt="Delete"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="item__bottom">*/}
                {/*        <ul className="item__skins">*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*                <div className="item__count">2</div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="popup-pull__item">*/}
                {/*    <div className="item__top">*/}
                {/*        <div className="item__photo">*/}
                {/*            <img src="../images/robot.png" alt="Robot"/>*/}
                {/*        </div>*/}
                {/*        <h3 className="item__name">Бот #6</h3>*/}
                {/*        <div className="item__status">*/}
                {/*            <img src="../images/status-error.svg" alt="Fail"/>*/}
                {/*        </div>*/}
                {/*        <button className="item__repeat item__repeat_active">*/}
                {/*            <img src="../images/reload.svg" alt="Reload"/>*/}
                {/*            <span>Повторить</span>*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="item__delete"*/}
                {/*            onClick={e => deleteitem(e)}*/}
                {/*        >*/}
                {/*            <img src="../images/cross.svg" alt="Delete"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="item__bottom">*/}
                {/*        <ul className="item__skins">*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="popup-pull__item">*/}
                {/*    <div className="item__top">*/}
                {/*        <div className="item__photo">*/}
                {/*            <img src="../images/robot.png" alt="Robot"/>*/}
                {/*        </div>*/}
                {/*        <h3 className="item__name">Бот #6</h3>*/}
                {/*        <div className="item__status">*/}

                {/*        </div>*/}
                {/*        <button className="item__repeat item__repeat_active">*/}
                {/*            <img src="../images/reload.svg" alt="Reload"/>*/}
                {/*            <span>Повторить</span>*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="item__delete"*/}
                {/*            onClick={e => deleteitem(e)}*/}
                {/*        >*/}
                {/*            <img src="../images/cross.svg" alt="Delete"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="item__bottom">*/}
                {/*        <ul className="item__skins">*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*                <div className="item__count">2</div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="popup-pull__item">*/}
                {/*    <div className="item__top">*/}
                {/*        <div className="item__photo">*/}
                {/*            <img src="../images/robot.png" alt="Robot"/>*/}
                {/*        </div>*/}
                {/*        <h3 className="item__name">Бот #6</h3>*/}
                {/*        <div className="item__status">*/}

                {/*        </div>*/}
                {/*        <button className="item__repeat item__repeat_active">*/}
                {/*            <img src="../images/reload.svg" alt="Reload"/>*/}
                {/*            <span>Повторить</span>*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="item__delete"*/}
                {/*            onClick={e => deleteitem(e)}*/}
                {/*        >*/}
                {/*            <img src="../images/cross.svg" alt="Delete"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="item__bottom">*/}
                {/*        <ul className="item__skins">*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*                <div className="item__count">2</div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="popup-pull__item">*/}
                {/*    <div className="item__top">*/}
                {/*        <div className="item__photo">*/}
                {/*            <img src="../images/robot.png" alt="Robot"/>*/}
                {/*        </div>*/}
                {/*        <h3 className="item__name">Бот #6</h3>*/}
                {/*        <div className="item__status">*/}

                {/*        </div>*/}
                {/*        <button className="item__repeat item__repeat_active">*/}
                {/*            <img src="../images/reload.svg" alt="Reload"/>*/}
                {/*            <span>Повторить</span>*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="item__delete"*/}
                {/*            onClick={e => deleteitem(e)}*/}
                {/*        >*/}
                {/*            <img src="../images/cross.svg" alt="Delete"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="item__bottom">*/}
                {/*        <ul className="item__skins">*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*                <div className="item__count">2</div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="popup-pull__item">*/}
                {/*    <div className="item__top">*/}
                {/*        <div className="item__photo">*/}
                {/*            <img src="../images/robot.png" alt="Robot"/>*/}
                {/*        </div>*/}
                {/*        <h3 className="item__name">Бот #6</h3>*/}
                {/*        <div className="item__status">*/}

                {/*        </div>*/}
                {/*        <button className="item__repeat item__repeat_active">*/}
                {/*            <img src="../images/reload.svg" alt="Reload"/>*/}
                {/*            <span>Повторить</span>*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className="item__delete"*/}
                {/*            onClick={e => deleteitem(e)}*/}
                {/*        >*/}
                {/*            <img src="../images/cross.svg" alt="Delete"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="item__bottom">*/}
                {/*        <ul className="item__skins">*/}
                {/*            <li className="item__skin">*/}
                {/*                <div className="clothes__cool clothes__cool_green">*/}

                {/*                </div>*/}
                {/*                <img src="../images/skin.png" alt="Skin"/>*/}
                {/*                <div className="item__count">2</div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            {/*<hr/>*/}
            {/*<div className="popup-pull__buttons">*/}
            {/*    <a target={"_blank"} href={`${userData.profile}tradeoffers/`} className="grey">*/}
            {/*        <span><Translate>by_browser</Translate></span>*/}
            {/*    </a>*/}
            {/*    <a href={`steam://openurl/${userData.profile}tradeoffers/`} className="steam">*/}
            {/*        <span><Translate>by_steam_app</Translate></span>*/}
            {/*        <img src="../images/steam.svg" alt="Steam"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    );
};

export default TradingBots;