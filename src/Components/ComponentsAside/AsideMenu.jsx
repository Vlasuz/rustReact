import React from 'react';
import AsideMenuItem from "./AsideMenuItem";
import {Link, Router} from "react-router-dom";

const AsideMenu = (props) => {
    return (
        <ul className="aside__list">
            <AsideMenuItem
                className={"li_active"}
                title={"Переработчик"}
                linkTo={'pr'}
                states={props.states}
            />
            <AsideMenuItem
                states={props.states}
                title={"Хранилище"}
                linkTo={'st'}
            />
            <AsideMenuItem
                states={props.states}
                title={"Магазин"}
                linkTo={'sh'}
            />
        </ul>
    );
};

export default AsideMenu;