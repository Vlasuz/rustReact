import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {LoadingStyled} from "../loading/loading.styled";
import {setNotice, setPopup, setWithdrawInfo} from "../../redux/toolkitSlice";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {getBearer} from "../../functions/getBearer";
import getCookie from '../../functions/getCookie';
import {RefreshToken} from "../../api/refreshToken";

interface IWithdrawProps {

}

export const Withdraw: React.FC<IWithdrawProps> = () => {

    const withdrawInfo = useSelector((state: any) => state.toolkit.withdrawInfo)

    const handleWithdraw = () => {

        if(withdrawInfo.type === "pay") return;

    }

    useEffect(() => {

        handleWithdraw()

    }, [])

    return (
        <>
            <h2>Статус ботов</h2>
            <PopupCross/>
            <div className="popup-pull-search__text">
                <p>Подбираем ботов</p>
                <LoadingStyled className="load">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </LoadingStyled>
            </div>
        </>
    )
}
