import React, {useEffect} from 'react';
import {useState} from "react";
import RightsFilterForm from "./RightsFilterForm";
import RightsItemStorage from "./RightsItemStorage";
import OpenPopup from "../../Hooks/OpenPopup";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {reducerUserInventory} from "../../Redux/Reducers/reducerUserInventory";
import {switcherRights, userInventoryAdd} from "../../Redux/actions";
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../Hooks/Translate";
import {setOpenPopup} from "../../Redux/Reducers/reducerOpenPopup";
import {setSound} from "../../Redux/Reducers/reducerSound";

const RightsStorage = (props) => {

    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )

    const storageList = useSelector(state => state.reducerUserInventory.list)
    const storageListWithdraw = useSelector(state => state.reducerStorageWithdraw.list)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.reducerAuth.auth)

    const handleGoToShop = () => {

        dispatch(setSound(''))
        setTimeout(() => {
            dispatch(setSound('sound3'))
        }, 10)

        setTimeout(() => {
            dispatch(switcherRights('sh'))
        }, 300)

        document.querySelector('.aside__list .li_active')?.classList.remove('li_active')
        document.querySelector('.section-right__top .top__item:first-child').click()
    }

    return (

        <div className="postamat storage">
            <RightsFilterForm
                sortArray={sortArray}
                setSortArray={setSortArray}
            />

            <hr/>

            <ul className={"postamat__block" + (!!storageList.length ? "" : " postamat__block_empty")}>

                {
                    !!storageList.length ? storageList
                            ?.filter(item => item.title.toLowerCase().includes(sortArray.search.toLowerCase()))
                            ?.filter(item => sortArray.byGame ? 'rust' : 'cs')
                            ?.sort((a, b) => sortArray.byPrice ? b.price.value - a.price.value : a.price.value - b.price.value)
                            .map((item, itemNum) =>
                                <RightsItemStorage
                                    key={itemNum}
                                    item={item}
                                />
                            ) :
                        <div className={"inventory-empty"}>
                            {auth ?
                                <>
                                    <h3>
                                        <Translate>storage_empty_title</Translate>
                                    </h3>
                                    <p>
                                        <Translate>storage_empty_text</Translate>
                                    </p>
                                    <button onClick={handleGoToShop}>
                                        <Translate>storage_empty_button</Translate>
                                    </button>
                                </> :
                                <>
                                    <h3>
                                        <Translate>storage_empty_title_not_login</Translate>
                                    </h3>
                                    <p>
                                        <Translate>storage_empty_text_not_login</Translate>
                                    </p>
                                    <a href={"https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2Fwww.smallstash.gg&openid.realm=https%3A%2F%2Fwww.smallstash.gg&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"}>
                                        <Translate>storage_empty_button_not_login</Translate>
                                        <img src="../images/steam.svg" alt="Login" />
                                    </a>
                                </>}
                        </div>
                }

            </ul>

            <div className="storage__zone">
                {
                    !!storageListWithdraw.length ?
                        <button
                            className="zone__button"
                            onClick={() => dispatch(setOpenPopup('popup-pull-search', {type: "withdraw"}))}>
                            <img src="../images/arr-r-t.svg" alt="Ico"/>
                            <span>
                                <Translate>withdraw_items</Translate>
                            </span>
                            <div className="zone__count">
                                {storageListWithdraw.length}
                            </div>
                        </button> :

                        <div className="zone__empty">
                            <p>
                                <Translate>select_item_for_withdraw</Translate>
                            </p>
                        </div>
                }
            </div>
        </div>

    );
};

export default RightsStorage;