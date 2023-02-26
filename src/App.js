import Header from "./Components/ComponentsHeader/Header";
import Aside from "./Components/ComponentsAside/Aside";
import RightsContainer from "./Components/ComponentsRights/RightsContainer";
import AllPopups from "./Components/Popups/AllPopups";
import './styles.css';
import './styles/All.css';
import './fonts/GothamPro/stylesheet.css';
import States from "./States";
import MainRouters from "./Components/MainRouters";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {authAction, switcherRights, userData, userInventoryAdd} from "./Redux/actions";
import {userBalanceAddCoins, userBalanceSetCoins} from "./Redux/Reducers/reducerUserBalance";
import {fightRoomSet} from "./Redux/Reducers/reducerFightsRooms";
import {useLocation, useNavigate} from "react-router-dom";
import {setSession} from "./Redux/Reducers/reducerSession";
import {logDOM} from "@testing-library/react";
import {getCookie} from "./Hooks/GetCookies";
import Notices from "./Components/Notices";
import GlobalLink from "./Hooks/GlobalLink";
import {setSettings} from "./Redux/Reducers/reducerSettings";
import CloseModal from "./Hooks/CloseModal";
import Technical from "./pages/Technical";
import AsyncImages from "./Hooks/AsyncImages";
import {skinsShop} from "./Redux/Reducers/reducerShopSkins";
import {userSkinSet} from "./Redux/Reducers/reducerUserSkins";

function App() {

    const [isLoad, setIsLoad] = useState(false)
    const navigate = useNavigate()
    const states = States()
    const dispatch = useDispatch()
    const location = useLocation()
    const [technical, setTechnical] = useState(false)
    const [technicalDate, setTechnicalDate] = useState(false)
    const reducerUserData = useSelector(state => state.reducerUserData.data)
    const [loadImages, setLoadImages] = useState([])


    useEffect(() => {
        if (location.pathname.includes("airdrop")) {
            dispatch(switcherRights('ra'))
            document.querySelector('.section-right__top .top__item:first-child')?.click()
        }
    }, [])

    document.addEventListener('click', function (e) {
        CloseModal('header__lang', 'lang__button', e)
        CloseModal('section-right__smiles', 'smiles', e)
        CloseModal('section-right__rules', 'resources__button', e)
    })

    useEffect(() => {

        if (!isLoad && getCookie('access_token')) {
            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post("https://" + GlobalLink() + '/api/auth/session/').then(res => {
                dispatch(userData(res.data))
                dispatch(authAction(true))
                dispatch(userBalanceSetCoins(res.data.balance))
                dispatch(setSession(res.data))

            })

            setTimeout(() => {
                setIsLoad(true)
            }, 600)

        } else if (!isLoad && window.location.href.includes('openid')) {
            let steamData = window.location.href.replace('http://localhost:3000/', '')
            let urlAxios = "https://" + GlobalLink() + `/api/auth/login/${steamData}`;

            // let steamData = window.location.href.replace('https://www.smallstash.gg/', '')
            // let urlAxios = "https://" + GlobalLink() + `/api/auth/login/${steamData}`;

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

        document.querySelector('.section-right__item')?.classList.remove('section-right__item_hidden')
        document.querySelector('.section-right__item')?.classList.add('section-right__item_show')

    }, [isLoad])
    useEffect(() => {
        if (getCookie('login')) {
            axios.post("https://" + GlobalLink() + `/api/auth/login/?steam_id=${getCookie('login')}`).then(res => {
                dispatch(userData(res.data))
                dispatch(authAction(true))
                dispatch(userBalanceAddCoins(res.data.user.balance))
            })
        }
    }, [])

    useEffect(() => {
        if (!!Object.keys(reducerUserData).length) {
            axios.get("https://" + GlobalLink() + '/api/base/settings/').then(res => {
                dispatch(setSettings(res.data))
                setTechnical(res.data.technical_break)
                setTechnicalDate(res.data.technical_break_date)

                setLoadImages(Object.values(res.data?.default_fight_skin?.gallery))

            })

            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.get("https://" + GlobalLink() + '/api/items/inventory/').then(res => {
                dispatch(userInventoryAdd(res.data))
            })
        }

    }, [reducerUserData])


    useEffect(() => {
        if (Object.keys(reducerUserData).length) {
            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.get("https://"+GlobalLink()+'/api/fight/shop/').then(res => {
                dispatch(skinsShop(res.data))
                dispatch(userSkinSet(res.data.chosen))
            })
        }
    }, [reducerUserData])

    const list = useSelector(state => state.reducerShopSkins.skins)

    console.log(list?.shop)
    return (
        <>

            <div className="lazy-load-images-for-fights">
                {loadImages.map((image, imageNum) => <AsyncImages key={imageNum} src={"https://" + GlobalLink() + "/" + image}/>)}
                {list?.shop?.map((image, imageNum) => {
                    return Object.values(image?.gallery).map((item, itemNum) => <AsyncImages key={imageNum + "-" + itemNum} src={"https://" + GlobalLink() + "/" + item}/>)
                })}
            </div>

            {
                !technical ? <>
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

                    <Header/>
                    <main className="wrapper">
                        <Aside/>
                        <MainRouters states={states}/>
                        <RightsContainer/>
                    </main>

                    <AllPopups/>

                    <Notices/>
                </> : <Technical technicalDate={technicalDate}/>
            }
        </>
    );
}

export default App;
