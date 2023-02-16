import Header from "./Components/ComponentsHeader/Header";
import Aside from "./Components/ComponentsAside/Aside";
import RightsContainer from "./Components/ComponentsRights/RightsContainer";
import AllPopups from "./Components/Popups/AllPopups";
import './styles.css';
import './styles/All.css';
import States from "./States";
import MainRouters from "./Components/MainRouters";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {authAction, switcherRights, userData, userInventoryAdd} from "./Redux/actions";
import {userBalanceAddCoins, userBalanceSetCoins} from "./Redux/Reducers/reducerUserBalance";
import {fightRoomSet} from "./Redux/Reducers/reducerFightsRooms";
import {useNavigate} from "react-router-dom";
import {setSession} from "./Redux/Reducers/reducerSession";
import {logDOM} from "@testing-library/react";
import {getCookie} from "./Hooks/GetCookies";

function App() {

    const [isLoad, setIsLoad] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        if (!isLoad && getCookie('access_token')) {
            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post('https://rust.onefut.net/api/auth/session/').then(res => {
                dispatch(userData(res.data))
                dispatch(authAction(true))
                dispatch(userBalanceSetCoins(res.data.balance))
                dispatch(setSession(res.data))

            })

            setTimeout(() => {
                setIsLoad(true)
            }, 600)

        } else if (!isLoad && window.location.href.includes('openid')) {
            let steamData = window.location.href.replace('https://rust.webline.space/', '')
            let urlAxios = `https://rust.onefut.net/api/auth/login/${steamData}`;

            // let steamData = window.location.href.replace('http://localhost:3000/', '')
            // let urlAxios = `https://rust.onefut.net/api/auth/login/${steamData}`;

            axios.post(urlAxios).then(res => {

                document.cookie = 'access_token=' + res.data.access_token;

                dispatch(userData(res.data.user))
                dispatch(authAction(true))
                dispatch(userBalanceSetCoins(res.data.user.balance))

                setTimeout(() => {
                    navigate('/')
                    setTimeout(() => {
                        setIsLoad(true)
                    }, 300)
                }, 300)
            })

        } else {
            setTimeout(() => {
                setIsLoad(true)
            }, 600)
        }

    }, [isLoad])


    function closeModal(block, button, e) {
        if (e.target.closest("." + block) === null && e.target.closest("." + button) === null) {
            if (document.querySelector("." + button + "_active")) document.querySelector("." + button).classList.remove(button + "_active")
            document.querySelectorAll("." + block).forEach(item => {
                item.classList.remove(block + "_active")
            })
        }
    }

    document.addEventListener('click', function (e) {
        closeModal('header__lang', 'lang__button', e)
        closeModal('burger__menu', 'header__burger', e)
        closeModal('item__dropdown', 'item__menu', e)
        closeModal('section-right__smiles', 'smiles', e)
        closeModal('section-right__rules', 'resources__button', e)
    })

    const states = States()
    const dispatch = useDispatch()
    const [technicalBreak, setTechnicalBreak] = useState(false)

    useEffect(() => {
        if (getCookie('login')) {
            axios.post(`https://rust.onefut.net/api/auth/login/?steam_id=${getCookie('login')}`).then(res => {
                dispatch(userData(res.data))
                dispatch(authAction(true))
                dispatch(userBalanceAddCoins(res.data.user.balance))
            })
        }
    }, [])

    const reducerUserData = useSelector(state => state.reducerUserData.data)

    useEffect(() => {

        if (Object.keys(reducerUserData).length > 0) {
            axios.get('https://rust.onefut.net/api/base/settings/').then(res => {
                setTechnicalBreak(res.data.technical_break)
            })

            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.get('https://rust.onefut.net/api/items/inventory/').then(res => {
                dispatch(userInventoryAdd(res.data))
            })
        }

    }, [reducerUserData])

    return (
        <>
            <div className={"loader-page" + (isLoad ? " loader-page_hide" : "")}>
                <div className="section-fight__center">
                    <div className="center__loading">
                        <div className="load">
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                        </div>
                        <span>Загрузка...</span>
                    </div>
                </div>
            </div>
            {
                technicalBreak ?
                    <div>
                        Technical
                    </div>
                    :
                    <>
                        <Header/>
                        <main className="wrapper">
                            <Aside states={states}/>
                            <MainRouters states={states}/>
                            <RightsContainer states={states}/>
                        </main>

                        <AllPopups states={states}/>
                    </>
            }
        </>
    );
}

export default App;
