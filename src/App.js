import Header from "./Components/ComponentsHeader/Header";
import Aside from "./Components/ComponentsAside/Aside";
import RightsContainer from "./Components/ComponentsRights/RightsContainer";
import AllPopups from "./Components/Popups/AllPopups";
import './styles.css';
import './styles/All.css';
import './fonts/GothamPro/stylesheet.css';
import MainRouters from "./Components/MainRouters";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {authAction, switcherRights, userData, userInventoryAdd} from "./Redux/actions";
import {userBalanceAddCoins, userBalanceSetCoins} from "./Redux/Reducers/reducerUserBalance";
import {useLocation, useNavigate} from "react-router-dom";
import {setSession} from "./Redux/Reducers/reducerSession";
import {getCookie} from "./Hooks/GetCookies";
import Notices from "./Components/Notices";
import GlobalLink from "./Hooks/GlobalLink";
import {setSettings} from "./Redux/Reducers/reducerSettings";
import CloseModal from "./Hooks/CloseModal";
import Technical from "./pages/Technical";
import AsyncImages from "./Hooks/AsyncImages";
import {skinsShop} from "./Redux/Reducers/reducerShopSkins";
import {userSkinSet} from "./Redux/Reducers/reducerUserSkins";
import {logger} from "./middleware/logger";
import Popup from "./Components/Popups/newPopup/Popup";
import {setPages} from "./Redux/Reducers/reducerPages";
import Translate from "./Hooks/Translate";

function App() {

    const [isLoad, setIsLoad] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [technical, setTechnical] = useState(false)
    const [technicalDate, setTechnicalDate] = useState("")
    const reducerUserData = useSelector(state => state.reducerUserData.data)
    const [loadImages, setLoadImages] = useState([])

    // function set_cookie(name, value, exp_y, exp_m, exp_d, path, domain, secure) {
    //     var cookie_string = name + "=" + escape(value);
    //     if (exp_y) {
    //         var expires = new Date(exp_y, exp_m, exp_d);
    //         cookie_string += "; expires=" + expires.toGMTString();
    //     }
    //
    //     if (path) cookie_string += "; path=" + escape(path);
    //     if (domain) cookie_string += "; domain=" + escape(domain);
    //     if (secure) cookie_string += "; secure";
    //
    //     document.cookie = cookie_string;
    // }

    useEffect(() => {

        if (!technical) {
            if (getCookie('access_token')) {
                axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
                axios.post("https://" + GlobalLink() + '/api/auth/session/').then(res => {

                    dispatch(userData(res.data))
                    dispatch(authAction(true))
                    dispatch(userBalanceSetCoins(res.data.balance))
                    dispatch(setSession(res.data))

                }).catch(error => {
                    // document.cookie = 'access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
                })

                setTimeout(() => {
                    setIsLoad(true)
                }, 600)

            } else if (!isLoad && window.location.href.includes('openid')) {
                let steamData = window.location.href.replace('https://smallstash.gg', '').replace(location.pathname, '')
                let urlAxios = "https://" + GlobalLink() + `/api/auth/login/${steamData}`;

                // DELETE !!!!!
                if (window.location.href.includes('localhost')) {
                    steamData = window.location.href.replace('http://localhost:3000', '').replace(location.pathname, '')
                    urlAxios = "https://" + GlobalLink() + `/api/auth/login/${steamData}`;
                }
                // DELETE !!!!!

                axios.post(urlAxios).then(res => {

                    if(window.location.href.includes('localhost')) {
                        document.cookie = `access_token=${res.data.access_token}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                    } else {
                        document.cookie = `access_token=${res.data.access_token}; path=/; domain=smallstash.gg; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                    }

                    dispatch(userData(res.data.user))
                    dispatch(authAction(true))
                    dispatch(userBalanceSetCoins(res.data.user.balance))

                    setTimeout(() => {
                        navigate(location.pathname)
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
        }

    }, [isLoad])
    useEffect(() => {

        if (!technical) {
            if (location.pathname.includes("airdrop")) {
                dispatch(switcherRights('ra'))
                document.querySelector('.section-right__top .top__item:first-child')?.click()
            }

            if (getCookie('login')) {
                axios.post("https://" + GlobalLink() + `/api/auth/login/?steam_id=${getCookie('login')}`).then(res => {
                    dispatch(userData(res.data))
                    dispatch(authAction(true))
                    dispatch(userBalanceAddCoins(res.data.user.balance))
                })
            }
        }

        axios.get('https://' + GlobalLink() + '/api/base/pages/').then(res => {
            dispatch(setPages(res.data))
        })
        axios.get("https://" + GlobalLink() + '/api/base/settings/').then(res => {
            dispatch(setSettings(res.data))
            setTechnical(res.data.technical_break)
            setTechnicalDate(res.data.technical_break_date)

            setLoadImages(Object.values(res.data?.default_fight_skin?.gallery))
        })

    }, [])
    useEffect(() => {

        if (!technical) {
            if (!Object.keys(reducerUserData).length) {

                axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
                axios.get("https://" + GlobalLink() + '/api/items/inventory/').then(res => {
                    dispatch(userInventoryAdd(res.data))
                })

                axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
                axios.get("https://" + GlobalLink() + '/api/fight/shop/').then(res => {
                    dispatch(skinsShop(res.data))
                    dispatch(userSkinSet(res.data.chosen))
                })
            }
        }

    }, [reducerUserData])
    const list = useSelector(state => state.reducerShopSkins.skins)

    if (!technical) {
        document.addEventListener('click', function (e) {
            CloseModal('header__lang', 'lang__button', e)
            CloseModal('section-right__smiles', 'smiles', e)
            CloseModal('section-right__rules', 'resources__button', e)
        })

        return (
            <>

                <div className="lazy-load-images-for-fights">
                    {loadImages.map((image, imageNum) => <AsyncImages key={imageNum}
                                                                      src={"https://" + GlobalLink() + "/" + image}/>)}
                    {list?.shop?.map((image, imageNum) => {
                        return Object.values(image?.gallery).map((item, itemNum) => <AsyncImages
                            key={imageNum + "-" + itemNum} src={"https://" + GlobalLink() + "/" + item}/>)
                    })}
                </div>


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
                            <span><Translate>loading</Translate>...</span>
                        </div>
                    </div>
                </div>

                <Header/>
                <main className="wrapper">
                    <Aside/>
                    <MainRouters/>
                    <RightsContainer/>
                </main>

                <AllPopups/>
                <Popup/>

                <Notices/>
            </>
        );
    } else {
        return <Technical technicalDate={technicalDate}/>
    }
}

export default App;
