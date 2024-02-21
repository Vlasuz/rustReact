import React, {useEffect} from 'react'
import { Translate } from '../translate/Translate'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {useSelector} from "react-redux";

interface IWithdrawBotsReadyProps {

}

export const WithdrawBotsReady: React.FC<IWithdrawBotsReadyProps> = () => {

    const withdrawInfo = useSelector((state: any) => state.toolkit.withdrawInfo)

    console.log(withdrawInfo)

    return (
        <div className="popup__content">
            <h2>
                <Translate>bots_status</Translate>
            </h2>
            <PopupCross/>
            <div className="popup-pull__block">

                {
                    withdrawInfo?.bots ? withdrawInfo?.bots?.map((bot: any) =>
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
                                            bot.items.map((item: any) =>
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
                        <div key={withdrawInfo?.bot?.id} className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="../images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">{withdrawInfo?.bot?.username}</h3>
                                <div className="item__status">
                                    {
                                        withdrawInfo?.status === "waiting" ?
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
                                        withdrawInfo?.items?.map((item: any) =>
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
            </div>
        </div>
    )
}
