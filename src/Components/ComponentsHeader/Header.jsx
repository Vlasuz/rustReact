import React, {useEffect, useState} from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderLanguages from "./HeaderLanguages";
import HeaderVolume from "./HeaderVolume";
import HeaderSupport from "./HeaderSupport";
import HeaderSocials from "./HeaderSocials";
import HeaderRight from "./HeaderRight";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setSettings} from "../../Redux/Reducers/reducerSettings";
import GlobalLink from "../../Hooks/GlobalLink";
import {NavLink} from "react-router-dom";
import {setPages} from "../../Redux/Reducers/reducerPages";
import parse from "html-react-parser";
import {useTranslation} from "react-i18next";

const Header = () => {

    const [isDocsOpen, setIsDocsOpen] = useState(false)
    const [pages, setPagesState] = useState([])
    const dispatch = useDispatch()
    const {i18n} = useTranslation();

    document.addEventListener('click', function (e) {
        if (e.target.closest(".header__docs") === null && e.target.closest(".select__head") === null) {
            setIsDocsOpen(false)
        }
    })

    useEffect(() => {
        axios.get("https://" + GlobalLink() + '/api/base/pages/').then(res => {
            dispatch(setPages(res.data))
            setPagesState(res.data)
        })
    }, [])

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <HeaderLogo/>
                    <HeaderLanguages/>
                    <HeaderVolume/>

                    <div className="header__lowright">
                        <div className={"header__docs" + (isDocsOpen ? " header__docs_active" : "")}
                             onClick={() => setIsDocsOpen(prev => !prev)}>
                            <div className="select__head">
                                <span>
                                    <img src="../images/copy-icon.svg" alt="Ico" width={18} style={{display: "block"}}/>
                                </span>
                            </div>
                            <div className="select__body">
                                {
                                    pages.filter(item => item.is_main).map(item => {
                                        const title = {
                                            'ru': item?.title && parse(item?.title),
                                            'uk': item?.ua_title && parse(item?.ua_title),
                                            'en': item?.en_title && parse(item?.en_title),
                                        }

                                        return(
                                            <div key={item.id} className="select__item">
                                                <NavLink to={"/docs/" + item.id}>
                                                    {title[i18n.language]}
                                                </NavLink>
                                            </div>
                                        )
                                    })
                                }
                                {/*<div className="select__item">*/}
                                {/*    <NavLink to={'/policy'}>Политика конфиденциальности</NavLink>*/}
                                {/*</div>*/}
                                {/*<div className="select__item">*/}
                                {/*    <NavLink to={'/contacts'}>Контакты</NavLink>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <HeaderSupport/>
                        <HeaderSocials/>
                    </div>

                    <HeaderRight/>
                </div>
            </div>
        </header>
    );
};

export default Header;