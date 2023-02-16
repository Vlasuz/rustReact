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

const RightsStorage = (props) => {
    const {t} = useTranslation();

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
                            ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                                ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                                ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
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
                                        <Trans t={t}>storage_empty_title</Trans>
                                    </h3>
                                    <p>
                                        <Trans t={t}>storage_empty_text</Trans>
                                    </p>
                                    <button onClick={handleGoToShop}>
                                        <Trans t={t}>storage_empty_button</Trans>
                                    </button>
                                </> :
                                <>
                                    <h3>
                                        <Trans t={t}>storage_empty_title_not_login</Trans>
                                    </h3>
                                    <p>
                                        <Trans t={t}>storage_empty_text_not_login</Trans>
                                    </p>
                                    <a href={"https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2Frust.webline.space%2F&openid.realm=ht\n" +
                                        "tps%3A%2F%2Frust.webline.space%2F&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_\n" +
                                        "select"}>

                                        <Trans t={t}>storage_empty_button_not_login</Trans>
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
                            onClick={() => OpenPopup('popup-pull')}>
                            <img src="../images/arr-r-t.svg" alt="Ico"/>
                            <span>
                                <Trans t={t}>withdraw_items</Trans>
                            </span>
                            <div className="zone__count">
                                {storageListWithdraw.length}
                            </div>
                        </button> :

                        <div className="zone__empty">
                            <p>
                                <Trans t={t}>select_item_for_withdraw</Trans>
                            </p>
                        </div>
                }
            </div>
        </div>

    );
};

export default RightsStorage;