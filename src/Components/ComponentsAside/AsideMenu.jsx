import React from 'react';
import AsideMenuItem from "./AsideMenuItem";
import {Link, Router} from "react-router-dom";
import Translate from "../../Hooks/Translate";

const AsideMenu = (props) => {
    return (
        <ul className="aside__list">
            <AsideMenuItem
                id={'1'}
                className={"li_active"}
                title={<Translate>processor_title</Translate>}
                linkTo={'pr'}
                states={props.states}
            />
            <AsideMenuItem
                id={'2'}
                title={<Translate>storage_title</Translate>}
                linkTo={'st'}
                states={props.states}
            />
            <AsideMenuItem
                id={'3'}
                title={<Translate>shop_title</Translate>}
                linkTo={'sh'}
                states={props.states}
            />
        </ul>
    );
};

export default AsideMenu;