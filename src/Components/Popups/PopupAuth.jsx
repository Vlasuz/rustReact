import React, {useEffect, useState} from 'react';
import PopupCloseCross from "./PopupCloseCross";
import PopupCloseBackground from "./PopupCloseBackground";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {reducerUserData} from "../../Redux/Reducers/reducerUserData";
import {authAction, userData} from "../../Redux/actions";
import {reducerAuth} from "../../Redux/Reducers/reducerAuth";
import Loader from "../../Hooks/Loader";
import {userBalanceSetCoins} from "../../Redux/Reducers/reducerUserBalance";
import GlobalLink from "../../Hooks/GlobalLink";
import Translate from "../../Hooks/Translate";

const PopupLogin = () => {

    const [steamId, setSteamId] = useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()

        setLoginStatus('loading')
        axios.post("https://"+GlobalLink()+`/api/auth/login/?steam_id=${steamId}`).then(res => {
            dispatch(userData(res.data))
            dispatch(authAction(true))
            dispatch(userBalanceSetCoins(res.data.user.balance))
            setLoginStatus('success')
            document.cookie = 'login='+steamId;

            setTimeout(() => {
                setSteamId('')
                setLoginStatus('')
                document.querySelector('.popup-login').classList.remove('popup_active')
            }, 1000)

        }).catch(error => {
            setLoginStatus('error')
        })
    }

    return (
        <div className="popup popup-login">
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2>Вход</h2>
                <PopupCloseCross/>
                <form onSubmit={handleLogin}>
                    {
                        loginStatus === 'loading' ? <Loader/> : ""
                    }
                    <label className="popup-add-coins-pin-code__input input-login">
                        <span>Steam ID:</span>
                        <input type="text" className={loginStatus === 'error' ? '_error' : loginStatus === 'success' ? '_success' : ""} value={steamId} onChange={e => setSteamId(e.target.value)} required/>
                    </label>
                    <button>
                        <Translate>entry</Translate>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default PopupLogin;