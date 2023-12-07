import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {IWithdrawBot} from "../../model";
import {LoadingStyled} from "../loading/loading.styled";
import robotIcon from './../../assets/images/robot.png'

interface IWithdrawBotsProps {

}

export const WithdrawBots: React.FC<IWithdrawBotsProps> = () => {

    const withdrawInfo = useSelector((state: any) => state.toolkit.withdrawInfo)

    return (
        <>
            <h2>Статус ботов</h2>
            <PopupCross/>
            <div className="popup-pull__block">

                {
                    withdrawInfo.bots.map((bot: IWithdrawBot) =>
                        <div key={bot.id} className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src={robotIcon} alt="Robot"/>
                                </div>
                                <h3 className="item__name">
                                    {bot.bot.username}
                                </h3>
                                <div className="item__status">
                                    <LoadingStyled className="load">
                                        <div className="line" />
                                        <div className="line" />
                                        <div className="line" />
                                    </LoadingStyled>
                                </div>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">

                                    {
                                        bot.items.map(item =>
                                            <li key={item.id} className="item__skin">
                                                <div className="clothes__cool" style={{background: item.rarity.color}} />
                                                <img src={item.image} alt="Skin"/>
                                            </li>
                                        )
                                    }


                                </ul>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}