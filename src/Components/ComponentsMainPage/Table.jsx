import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import OpenPopup from "../../Hooks/OpenPopup";
import Translate from "../../Hooks/Translate";
import {logger} from "../../middleware/logger";
import {setOpenPopup} from "../../Redux/Reducers/reducerOpenPopup";

const Table = ({dataStats, person_id}) => {

    const session = useSelector(state => state.reducerSession.session)
    const settings = useSelector(state => state.reducerSettings.settings)
    const dispatch = useDispatch()

    useEffect(() => {
        for (let tab of document.querySelectorAll('.tabs li')) {

            tab.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelectorAll('.tabs li').forEach(item => {
                    item.classList.remove('li_active')
                })
                this.classList.add('li_active')

                let arrNum = Array.from(document.querySelectorAll('.tabs li')).indexOf(tab)


                document.querySelectorAll('.tabs__item').forEach(item => {
                    item.classList.remove('tabs__item_active')
                })
                document.querySelectorAll('.tabs__item')[arrNum].classList.add('tabs__item_active')

            })

        }
    })

    const handleOpenFairGame = (hash, data, jackpot) => {
        dispatch(setOpenPopup("popup-fair-game", {hash, data, jackpot}))
    }

    return (
        <div className="section-block">
            <ul className="tabs">
                <li className="li_active">
                    <a href="#">
                        <Translate>airdrop_title</Translate>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Translate>fight_title</Translate>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Translate>bobovka</Translate>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Translate>ippodrom</Translate>
                    </a>
                </li>
            </ul>
            <div className="tabs__block">
                {dataStats?.airdrop_games?.length ? <div className="tabs__item tabs__item-airdrop tabs__item_active">
                        <div className="table">
                            <div className="thead">
                                <div className="tr">
                                    <div className="td">
                                        <Translate>table_thead_date</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_bags</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_winner</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_bid</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_bank</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_pf</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_status</Translate>
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">

                                {
                                    dataStats?.airdrop_games?.map(item =>
                                        <div key={item.id} className="tr" data-id={item.id}>

                                            <div className="td">
                                                {item.created_at.slice(item.created_at.indexOf(' '))}
                                                <span>
                                                {item.created_at.slice(0, item.created_at.indexOf(' '))}
                                            </span>
                                            </div>

                                            <div className="td">
                                                {item?.win_bag?.map_pos}
                                            </div>

                                            <div className="td">
                                                <div className="list-players">
                                                    <ul>
                                                        <li>
                                                            {item?.winner?.user ? <NavLink
                                                                to={session?.id !== item?.winner?.user?.id ? "/user/" + item?.winner?.user?.id : "/profile"}>
                                                                <img src={item?.winner?.user?.avatar} alt=""/>
                                                            </NavLink> : <NavLink
                                                                to={'/user'}>
                                                                <img
                                                                    src={'images/non-photo.png'}
                                                                    alt=""/>
                                                            </NavLink>}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="td">
                                                <div className="td__coins">
                                                    <img src="../images/header__coins.svg" alt="Ico"/>
                                                    <span>
                                            {item?.winner?.bags.length * settings.airdrop_bag_price}
                                        </span>
                                                </div>
                                            </div>

                                            <div className="td">
                                                <div className="td__coins">
                                                    <img src="../images/header__coins.svg" alt="Ico"/>
                                                    <span className={'games-bank'}>
                                                    {item?.bank}
                                                </span>
                                                </div>
                                            </div>

                                            <div className="td">
                                                <div className="shield hash-info-table" data-hash={item?.random_hash}
                                                     data-signature={item?.random_data}>
                                                    <img src="../images/shield.svg" alt="Shield"/>
                                                    <button
                                                        onClick={e => handleOpenFairGame(item?.random_hash, item?.random_data, item?.bank)}>
                                                    <span>
                                                        {item?.random_hash.substr(0, 5) + "..." + item?.random_hash.substr(-4, 4)}
                                                    </span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="td">
                                                {
                                                    item?.winner?.user?.id === person_id?.id ?
                                                        <img src="../images/victory.svg" alt="Shield"/> :
                                                        <img src="../images/fail.svg" alt="Shield"/>
                                                }
                                            </div>

                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    :

                    <div className="tabs__item tabs__item_active">
                        <big>
                            <Translate>no_data</Translate>
                        </big>
                    </div>}

                {dataStats?.fight_games?.length ? <div className="tabs__item tabs__item-fight">
                        <div className="table">
                            <div className="thead">
                                <div className="tr">
                                    <div className="td">
                                        <Translate>table_thead_date</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_opponent</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_bid</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_bank</Translate>
                                    </div>
                                    <div className="td">
                                        <Translate>table_thead_status</Translate>
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">


                                {
                                    dataStats?.fight_games?.map(item =>
                                        <div key={item.id} className="tr">

                                            <div className="td">
                                                {item.created_at.slice(item.created_at.indexOf(' '))}
                                                <span>
                                                {item.created_at.slice(0, item.created_at.indexOf(' '))}
                                            </span>
                                            </div>

                                            <div className="td">
                                                <div className="list-players">
                                                    <ul>
                                                        <li>
                                                            {item?.first_player?.user && item?.second_player?.user ? <NavLink
                                                                to={person_id?.id !== item?.first_player?.user?.id ? "/user/" + item?.first_player?.user?.id : "/user/" + item?.second_player?.user?.id}>
                                                                <img
                                                                    src={person_id?.id !== item?.first_player?.user?.id ? item?.first_player?.user?.avatar : item?.second_player?.user?.avatar}
                                                                    alt=""/>
                                                            </NavLink> : <NavLink
                                                                to={'/user'}>
                                                                <img
                                                                    src={'images/non-photo.png'}
                                                                    alt=""/>
                                                            </NavLink>}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="td">
                                                <div className="td__coins">
                                                    <img src="../images/header__coins.svg" alt="Ico"/>
                                                    <span>
                                                        {item?.winner?.coins}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="td">
                                                <div className="td__coins">
                                                    <img src="../images/header__coins.svg" alt="Ico"/>
                                                    <span>
                                                    {item?.winner?.coins * 2}
                                                </span>
                                                </div>
                                            </div>

                                            <div className="td">
                                                {
                                                    item?.winner?.user?.id === person_id?.id ?
                                                        <img src="../images/victory.svg" alt="Shield"/> :
                                                        <img src="../images/fail.svg" alt="Shield"/>
                                                }
                                            </div>

                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div> :

                    <div className="tabs__item">
                        <big>
                            <Translate>no_data</Translate>
                        </big>
                    </div>
                }
                <div className="tabs__item">
                    <big>
                        <Translate>no_data</Translate>
                    </big>
                </div>
                <div className="tabs__item">
                    <big>
                        <Translate>no_data</Translate>
                    </big>
                </div>
            </div>
        </div>
    );
};

export default Table;