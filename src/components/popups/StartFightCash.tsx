import React, {useContext, useEffect} from 'react'
import coins from './../../assets/images/header__coins.svg'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {IFightItem, IProduct} from "../../model";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {setPopup} from "../../redux/toolkitSlice";
import {PopupsContext} from "../../context/popupsContext";
import {useNavigate} from "react-router";
import {prettyCoinValues} from "../../functions/prettyCoinValues";

interface IStartFightCashProps {

}

export const StartFightCash: React.FC<IStartFightCashProps> = () => {

    const fightItemData: IFightItem = useSelector((state: any) => state.toolkit.fightItemData)
    const setIsOpen: any = useContext(PopupsContext)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleStartGame = () => {

        axios.post(getApiLink("api/fight/room/join?game_id="+fightItemData.id), {
            coins: fightItemData.first_player.coins,
        }).then(({data}) => {
            if(data?.status === false) return;

            setIsOpen(false)
            setTimeout(() => {
                dispatch(setPopup(''))
            }, 300)
            navigate('/fight/'+fightItemData.id)

        }).catch(er => console.log(er))

    }

    return (
        <>
            <h2>Комната</h2>
            <p className="subtitle">Тип ставки: <span>Валютой</span>
            </p>
            <PopupCross/>
            <div className="popup-entry-coins__info">
                <p>Ставка в этой комнате</p>
                <div className="info__coins">
                    <img src={coins} alt="Ico"/>
                    <span>
                        {prettyCoinValues(fightItemData.first_player.coins)}
                    </span>
                </div>
            </div>
            <button onClick={handleStartGame}>Внести ставку</button>
        </>
    )
}
