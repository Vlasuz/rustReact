import React, {useEffect, useState} from 'react';
import RightsItem from "./RightsItem";
import RightsFilterForm from "./RightsFilterForm";
import {useDispatch, useSelector} from "react-redux";
import {
    processorListRemove,
    switcherRights,
    userInventoryAdd,
} from "../../Redux/actions";
import axios from "axios";
import {userBalanceSetCoins} from "../../Redux/Reducers/reducerUserBalance";
import {getCookie} from "../../Hooks/GetCookies";
import {Trans, useTranslation} from "react-i18next";
import {setNotice} from "../../Redux/Reducers/reducerNotice";
import GlobalLink from "../../Hooks/GlobalLink";
import Translate from "../../Hooks/Translate";
import {setSound} from "../../Redux/Reducers/reducerSound";
import {logDOM} from "@testing-library/react";

const RightsProcessor = (props) => {

    const processorList = useSelector(state => state.reducerProcessorList)
    const storageList = useSelector(state => state.reducerUserInventory.list)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.reducerAuth.auth)
    const [arrayToRecycle, setArrayToRecycle] = useState([])
    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )


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


    let mouseActiveDrag = function (event, item) {

        let postItem = event.target.closest('.postamat__item');
        let currentDroppable = null;
        let postItemThis = postItem.cloneNode(true);

        let shiftX = postItemThis.getBoundingClientRect().left + 60;
        let shiftY = postItemThis.getBoundingClientRect().top + 20;

        function moveAt(pageX, pageY) {

            let coodX = pageX - shiftX;
            let coodY = pageY - shiftY;

            postItemThis.style.left = coodX + 'px';
            postItemThis.style.top = coodY + 'px';

        }

        document.addEventListener('mousemove', onMouseMove);


        // DRAG & DROP
        function onMouseMove(event) {

            postItem.style.display = 'none'

            document.querySelector('body').insertAdjacentElement('beforeend', postItemThis)

            postItemThis.classList.add('pererab__item_moved')
            postItemThis.style.position = 'absolute';
            postItemThis.style.zIndex = 9;

            moveAt(event.clientX, event.clientY)

            postItemThis.style.display = 'none';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            postItemThis.style.display = 'flex';

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.postamat__block')

            if (!currentDroppable) {
                document.onmouseup = function () {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.onmouseup = null;

                    postItemThis.classList.add('pererab__item_delete')
                    postItemThis.classList.remove('pererab__item_moved')
                    postItemThis.style.position = 'relative';
                    postItemThis.style.left = 'auto';
                    postItemThis.style.top = 'auto';

                    postItem.style.display = 'flex'
                    document.querySelector('.pererab__item_delete').remove()
                    dispatch(processorListRemove([item]))
                    dispatch(userInventoryAdd([item]))

                }
            }

            if (currentDroppable !== droppableBelow) {

                if (currentDroppable) {
                    document.querySelector('.pererab__zone').style.background = 'transparent';
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    document.onmouseup = function () {
                        document.removeEventListener('mousemove', onMouseMove);
                        document.onmouseup = null;

                        postItemThis.classList.add('pererab__item_delete')
                        postItemThis.classList.remove('pererab__item_moved')
                        postItemThis.style.position = 'relative';
                        postItemThis.style.left = 'auto';
                        postItemThis.style.top = 'auto';

                        postItem.style.display = 'flex'
                        document.querySelector('.pererab__item_delete').remove()
                        dispatch(processorListRemove([item]))
                        dispatch(userInventoryAdd([item]))

                    }
                }
            }

        }

        // DRAG & DROP


        // ONLY CLICK
        document.onmouseup = function (e) {

            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            dispatch(processorListRemove([item]))
            dispatch(userInventoryAdd([item]))

        }
        // ONLY CLICK

        postItemThis.ondragstart = function () {
            return false;
        };
        postItem.ondragstart = function () {
            return false;
        };

    }

    useEffect(() => {
        processorList.list.filter(item => setArrayToRecycle(prev => [...prev, item.id]))
    }, [processorList])

    const handleConvert = () => {

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+`/api/items/recycle/`, arrayToRecycle).then(res => {

            setArrayToRecycle([])
            dispatch(setSound('sound4'))
            // setTimeout(() => {
                processorList.list.filter(item => dispatch(processorListRemove([item])))
                dispatch(userBalanceSetCoins(res.data.balance))
                dispatch(setNotice("processor_done"))
            // }, 1000)

        })

    }

    return (
        <div className="postamat pererab">
            <RightsFilterForm
                sortArray={sortArray}
                setSortArray={setSortArray}/>

            <hr/>

            <ul className={"postamat__block" + ((!!processorList.list.length || !!storageList.length) ? "" : " postamat__block_empty")}>

                {
                    (!!storageList.length || !!processorList.list.length) ? storageList
                            ?.filter(item => item.title.toLowerCase().includes(sortArray.search.toLowerCase()))
                            ?.filter(item => sortArray.byGame ? 'rust' : 'cs')
                            ?.sort((a, b) => sortArray.byPrice ? b.price.value - a.price.value : a.price.value - b.price.value)
                            .map(item =>
                                <RightsItem
                                    key={item.id}
                                    item={item}
                                    states={props.states}
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
            <div
                className="pererab__zone"
                style={processorList.list.length > 0 ? {background: "transparent"} : {}}>

                {
                    !!processorList.list.length ? "" :
                        <div className="zone__empty">
                            <p>
                                <Translate>processor_zone_processor</Translate>
                            </p>
                            <img src="../images/pererab-ico.svg" alt="Ico"/>
                        </div>
                }


                <div className="zone__list">
                    <ul>

                        {
                            processorList.list?.map((item, itemNum) =>
                                <li
                                    className="postamat__item pererab__item"
                                    key={itemNum}
                                    onMouseDown={e => mouseActiveDrag(e, item)}
                                >
                                    <div className="item__count">
                                        {item.count}
                                    </div>
                                    <div className={item.cools}>

                                    </div>
                                    <div className="item__photo">
                                        <img src={item.image} alt="Skin"/>
                                    </div>
                                    <div className="item__price">
                                        <img src="../images/header__coins.svg" alt="Ico"/>
                                        <span>{item.price.value}</span>
                                    </div>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
            <div className="pererab__button" style={processorList.list.length > 0 ? {border: 'none'} : {}}>
                {
                    !!processorList.list.length ? "" :
                        <div className="zone__empty">
                            <p>
                                <Translate>processor_zone_processor_end</Translate>
                            </p>
                        </div>
                }

                <button
                    className="zone__done"
                    onClick={handleConvert}
                    style={processorList.list.length > 0 ? {display: 'flex'} : {}}>
                    <div className="lft">
                        <img src="../images/pererab-button.svg" alt="Ico"/>
                        <span>
                            <Translate>process</Translate>
                        </span>
                    </div>
                    <div className="rht">
                        <img src="../images/header__coins.svg" alt="Ico"/>
                        <span>
                            {processorList.summary}
                        </span>
                    </div>
                </button>
            </div>

        </div>
    );
};

export default RightsProcessor;