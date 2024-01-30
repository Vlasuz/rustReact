import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {LoadingStyled} from "../loading/loading.styled";
import {setPopup, setWithdrawInfo} from "../../redux/toolkitSlice";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {getBearer} from "../../functions/getBearer";

interface IWithdrawProps {

}

export const Withdraw: React.FC<IWithdrawProps> = () => {

    const dispatch = useDispatch()
    const inventoryWithdraw = useSelector((state: any) => state.toolkit.inventoryWithdraw).map((item: any) => item.id)

    useEffect(() => {
        getBearer({type: "post"})
        axios.post(getApiLink("api/trade/create/withdraw/"), inventoryWithdraw).then(({data}) => {
            console.log(data)
            dispatch(setWithdrawInfo(data))
            if(data.bots.length > 0) {
                dispatch(setPopup('popup-pull'))
            }
        }).catch(er => console.log('withdraw', er))

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
