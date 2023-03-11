import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authAction, userData, userInventoryDelete} from "../../Redux/actions";
import {setSession} from "../../Redux/Reducers/reducerSession";
import {userBalanceSetCoins} from "../../Redux/Reducers/reducerUserBalance";
import Translate from "../../Hooks/Translate";
import {setOpenPopup} from "../../Redux/Reducers/reducerOpenPopup";
import audio from "../../audio/audio-rust.mp3";

const HeaderBurgerMenu = () => {

    const dispatch = useDispatch()
    const userDataReducer = useSelector(state => state.reducerUserData.data)
    const balance = useSelector(state => state.reducerUserBalance.balance)
    const navigate = useNavigate()
    const socials = useSelector(state => state.reducerSettings.settings)
    const [isOpenPopup, setIsOpenPopup] = useState(false)


    document.addEventListener('click', function (e) {
        if (e.target.closest(".burger__menu") === null && e.target.closest(".header__burger") === null) {
            setIsOpenPopup(false)
        }
    })

    const handleLogout = () => {
        dispatch(authAction(false))
        dispatch(userData({}))
        dispatch(setSession({}))
        dispatch(userInventoryDelete([]))
        dispatch(userBalanceSetCoins(0))

        navigate('/')
        document.cookie = 'access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    }


    let changeVolume = (e) => {
        setVolme(e.target.value)
        document.querySelector('#musicOnSite').volume = e.target.value / 100
    }

    const [muted, isMuted] = useState(true)
    const [volume, setVolme] = useState(100)

    const handlePlay = () => {
        muted ? document.querySelector('#musicOnSite').play() : document.querySelector('#musicOnSite').pause()
        isMuted(prev => !prev)
    }

    return (
        <>
            <button
                className="header__burger"
                onClick={e => setIsOpenPopup(prev => !prev)}>
                <img src="../images/burger.svg"/>
            </button>
            <div className={"burger__menu" + (isOpenPopup ? " burger__menu_active" : "")}>
                <ul>
                    <li>
                        <NavLink to={"/history"}>
                            <Translate>text_history_balance</Translate>
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout}>
                            <Translate>exit_from_site</Translate>
                        </button>
                    </li>
                </ul>
                <div className="header__volume">
                    <audio id="musicOnSite" src={audio} controls loop></audio>
                    {/*<button >*/}
                    {/*    {*/}
                    {/*        muted ?*/}
                    {/*            <img src="../images/mute.svg" alt="Ico" />:*/}
                    {/*            <img src="../images/music.svg" alt="Ico" />*/}
                    {/*    }*/}
                    {/*</button>*/}
                    <div className="volume__block" onClick={() => handlePlay()}>
                        {
                            muted ?
                                <img src="../images/mute.svg" alt="Ico" />:
                                <img src="../images/music.svg" alt="Ico" />
                        }
                        <input
                            type="range"
                            value={volume}
                            onChange={e => changeVolume(e)}
                        />
                    </div>
                </div>
                <button className="header__support">
                    <img src="../images/support.svg" alt="Ico"/>
                    <span>
                        <Translate>header_support</Translate>
                    </span>
                </button>
                <ul className="header__socials">
                    <li>
                        <a href={socials.vkontakte} target={'_blank'}>
                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.6309 6.35846C15.1948 6.93074 15.79 7.46917 16.2958 8.09917C16.5192 8.37913 16.7307 8.66802 16.8925 8.99292C17.1218 9.45478 16.9142 9.96302 16.5157 9.9906L14.0391 9.98944C13.4004 10.0445 12.8908 9.77723 12.4624 9.32327C12.1195 8.96023 11.8019 8.57385 11.4722 8.19856C11.337 8.04517 11.1956 7.90084 11.0265 7.78675C10.6885 7.55864 10.395 7.62849 10.2018 7.99501C10.005 8.3678 9.96039 8.7806 9.94106 9.19607C9.91453 9.80226 9.73826 9.96163 9.15245 9.98938C7.90052 10.0507 6.71237 9.85387 5.60862 9.1974C4.63552 8.61867 3.88092 7.80167 3.22412 6.87674C1.94532 5.07571 0.966017 3.09667 0.0858558 1.06218C-0.112262 0.603809 0.032626 0.357757 0.519178 0.349048C1.32712 0.332734 2.13495 0.333895 2.94384 0.347887C3.27221 0.35288 3.4896 0.548653 3.61639 0.87111C4.05351 1.98833 4.58838 3.05127 5.25975 4.03652C5.43854 4.29883 5.62085 4.56114 5.88047 4.74576C6.16767 4.95019 6.38635 4.88243 6.52146 4.54987C6.6072 4.33901 6.64473 4.11188 6.66406 3.88603C6.72807 3.10904 6.7365 2.33337 6.62423 1.5591C6.55531 1.07588 6.29346 0.763063 5.82958 0.671621C5.59287 0.625 5.62812 0.533442 5.74273 0.392998C5.9418 0.150778 6.12902 0 6.50224 0H9.30119C9.74183 0.0903971 9.83969 0.296157 9.90001 0.757025L9.90241 3.98874C9.89761 4.16715 9.98815 4.69659 10.2973 4.81468C10.5447 4.89875 10.7078 4.69299 10.8563 4.5299C11.5265 3.79058 12.0047 2.91686 12.432 2.01214C12.6217 1.61432 12.7847 1.20117 12.9427 0.788377C13.0598 0.48206 13.2435 0.33134 13.5754 0.338017L16.2693 0.340513C16.3491 0.340513 16.43 0.341733 16.5073 0.355492C16.9612 0.435904 17.0856 0.638876 16.9454 1.09963C16.7245 1.82252 16.2947 2.42493 15.8745 3.03013C15.4252 3.67627 14.9448 4.30028 14.4993 4.95025C14.09 5.54378 14.1225 5.84295 14.6309 6.35846Z"
                                    fill="#A2ABC5" fillOpacity="0.3"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href={socials.telegram} target={'_blank'}>
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.09992 5.59647C5.39487 3.76188 8.25885 2.55241 9.69185 1.96805C13.7834 0.299594 14.6335 0.00976514 15.1877 9.27819e-05C15.3095 -0.00191006 15.582 0.0277027 15.7586 0.16813C15.9076 0.286703 15.9486 0.44688 15.9683 0.5593C15.9879 0.671721 16.0123 0.927819 15.9929 1.12793C15.7712 3.41192 14.8118 8.95457 14.3237 11.5127C14.1172 12.5951 13.7105 12.958 13.3168 12.9936C12.4613 13.0707 11.8116 12.4392 10.9829 11.9067C9.68624 11.0733 8.95369 10.5545 7.69503 9.74136C6.24042 8.80157 7.18338 8.28505 8.01236 7.44091C8.22931 7.21999 11.999 3.85836 12.0719 3.55341C12.0811 3.51527 12.0895 3.37311 12.0034 3.29804C11.9172 3.22297 11.7901 3.24864 11.6983 3.26906C11.5683 3.29799 9.4968 4.64035 5.48389 7.29611C4.89591 7.69195 4.36333 7.88482 3.88616 7.87472C3.36012 7.86357 2.34822 7.58311 1.59598 7.34338C0.673328 7.04933 -0.0599784 6.89387 0.00387615 6.3945C0.0371355 6.13439 0.402482 5.86838 1.09992 5.59647Z"
                                    fill="#A2ABC5" fillOpacity="0.3"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href={socials.discord} target={'_blank'}>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.5535 1.00498C12.5178 0.535494 11.4104 0.194272 10.2526 0C10.1104 0.249066 9.94427 0.584059 9.82977 0.850559C8.599 0.671234 7.37953 0.671234 6.17143 0.850559C6.05693 0.584059 5.887 0.249066 5.74358 0C4.58453 0.194272 3.47583 0.536739 2.44013 1.00747C0.351096 4.06601 -0.215208 7.0486 0.0679444 9.9888C1.4535 10.9913 2.79627 11.6002 4.11638 11.9987C4.44233 11.5641 4.73303 11.1021 4.98346 10.6152C4.50651 10.4396 4.04969 10.2229 3.61804 9.97135C3.73256 9.8892 3.84456 9.80325 3.95279 9.71485C6.58549 10.9078 9.44592 10.9078 12.0472 9.71485C12.1566 9.80325 12.2686 9.8892 12.3819 9.97135C11.949 10.2241 11.4909 10.4408 11.014 10.6164C11.2644 11.1021 11.5538 11.5654 11.881 12C13.2024 11.6015 14.5464 10.9925 15.932 9.9888C16.2642 6.58035 15.3644 3.62516 13.5535 1.00498ZM5.34212 8.1806C4.55181 8.1806 3.90371 7.46575 3.90371 6.59529C3.90371 5.72479 4.53797 5.00874 5.34212 5.00874C6.14628 5.00874 6.79436 5.72354 6.78052 6.59529C6.78181 7.46575 6.14628 8.1806 5.34212 8.1806ZM10.6578 8.1806C9.86752 8.1806 9.21939 7.46575 9.21939 6.59529C9.21939 5.72479 9.85368 5.00874 10.6578 5.00874C11.462 5.00874 12.1101 5.72354 12.0962 6.59529C12.0962 7.46575 11.462 8.1806 10.6578 8.1806Z"
                                    fill="#A2ABC5" fillOpacity="0.3"/>
                            </svg>
                        </a>
                    </li>
                </ul>

                <button className="header__coins" onClick={() => dispatch(setOpenPopup("popup-add-coins"))}>
                    <img src="../images/header__coins.svg" alt="Coins"/>
                    <span>
                        {balance}
                    </span>
                    <div className="ico">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V14.4C0 17.7603 0 19.4405 0.653961 20.7239C1.2292 21.8529 2.14708 22.7708 3.27606 23.346C4.55953 24 6.23969 24 9.6 24H14.4C17.7603 24 19.4405 24 20.7239 23.346C21.8529 22.7708 22.7708 21.8529 23.346 20.7239C24 19.4405 24 17.7603 24 14.4V9.6C24 6.23969 24 4.55953 23.346 3.27606C22.7708 2.14708 21.8529 1.2292 20.7239 0.653961C19.4405 0 17.7603 0 14.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606ZM12.9541 7.95372C12.9541 7.42699 12.5272 7 12.0004 7C11.4737 7 11.0467 7.42699 11.0467 7.95372V11.0463H7.95372C7.42699 11.0463 7 11.4733 7 12C7 12.5267 7.42699 12.9537 7.95372 12.9537H11.0467V16.0463C11.0467 16.573 11.4737 17 12.0004 17C12.5272 17 12.9541 16.573 12.9541 16.0463V12.9537H16.0463C16.573 12.9537 17 12.5267 17 12C17 11.4733 16.573 11.0463 16.0463 11.0463H12.9541V7.95372Z" fill="#F5AD57"/></svg>
                    </div>
                </button>
                <NavLink className="header__user" to={"/profile"}>
                    <img src={userDataReducer.avatar} alt="User"/>
                    <span>{userDataReducer.name}</span>
                </NavLink>
            </div>
        </>
    );
};

export default HeaderBurgerMenu;