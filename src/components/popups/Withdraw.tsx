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

    const dispatch = useDispatch()
    const inventoryWithdraw = useSelector((state: any) => state.toolkit.inventoryWithdraw).map((item: any) => item.id)

    const handleWithdraw = () => {
        getBearer({type: "post"})
        axios.post(getApiLink("api/trade/create/withdraw/"), inventoryWithdraw).then(({data}) => {
            console.log(data)
            dispatch(setWithdrawInfo(data))
            if(data.bots.length > 0) {
                dispatch(setPopup('popup-pull'))
            }




            if(data.message === 'not_enable_now') return dispatch(setNotice('not_enable_withdraw'));

            if(data.id) {
                const socket = new WebSocket(getApiLink(`ws/api/trade/withdraw/${data.id}/`, true))

                socket.onopen = () => {
                    socket.send(`{"type":"auth", "token":"${getCookie('access_token_rust')}"}`)
                }
                socket.onmessage = (e) => {
                    const data = JSON.parse(JSON.parse(e.data))

                    console.log(data)
                }
                socket.onclose = () => {

                }

                // dispatch(setPopup("popup-pull", {type: "withdraw", socket, items: inventory.filter(item => item.isCheck).map(item => item)}))
                dispatch(setPopup("popup-pull"))
            } else {
                // dispatch(setPopup("popup-trade-error-cancel", {type: "withdraw", data: data}))
                dispatch(setPopup("popup-trade-error-cancel"))
            }




        }).catch(er => {
            er.response.status === 401 && RefreshToken({dispatch, handleWithdraw})
        })
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
