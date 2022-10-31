import React from 'react';
import AsideMenuItem from "./AsideMenuItem";
import {Link, Router} from "react-router-dom";

const AsideMenu = ({onSwitcherRightsChange, switcherRights}) => {
    return (
        <ul className="aside__list">
            <AsideMenuItem
                className={"li_active"}
                onSwitcherRightsChange={onSwitcherRightsChange}
                switcherRights={switcherRights}
                title={"Переработчик"}
                linkTo={'pr'}
            />
            <AsideMenuItem
                onSwitcherRightsChange={onSwitcherRightsChange}
                switcherRights={switcherRights}
                title={"Хранилище"}
                linkTo={'st'}
            />
            <AsideMenuItem
                onSwitcherRightsChange={onSwitcherRightsChange}
                switcherRights={switcherRights}
                title={"Магазин"}
                linkTo={'sh'}
            />
        </ul>
    );
};

export default AsideMenu;