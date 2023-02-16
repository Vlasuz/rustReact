import React from 'react';
import AsideMenuItem from "./AsideMenuItem";
import {Link, Router} from "react-router-dom";

const AsideMenu = (props) => {
    return (
        <ul className="aside__list">
            <AsideMenuItem
                id={'1'}
                className={"li_active"}
                title={"Переработчик"}
                linkTo={'pr'}
                states={props.states}
            />
            <AsideMenuItem
                id={'2'}
                title={"Хранилище"}
                linkTo={'st'}
                states={props.states}
            />
            <AsideMenuItem
                id={'3'}
                title={"Магазин"}
                linkTo={'sh'}
                states={props.states}
            />
        </ul>
    );
};

export default AsideMenu;