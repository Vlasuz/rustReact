import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Table = ({ dataStats, person_id }) => {

    const session = useSelector(state => state.reducerSession.session)

    useEffect(() => {
        for( let tab of document.querySelectorAll('.tabs li') ){

            tab.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelectorAll('.tabs li').forEach(item => { item.classList.remove('li_active') })
                this.classList.add('li_active')

                let arrNum = Array.from(document.querySelectorAll('.tabs li')).indexOf(tab)


                document.querySelectorAll('.tabs__item').forEach(item => { item.classList.remove('tabs__item_active') })
                document.querySelectorAll('.tabs__item')[arrNum].classList.add('tabs__item_active')

            })

        }
    })



    return (
        <div className="section-block">
            <ul className="tabs">
                <li className="li_active">
                    <a href="#">Аирдроп</a>
                </li>
                <li>
                    <a href="#">Схватка</a>
                </li>
                <li>
                    <a href="#">Бобовка</a>
                </li>
                <li>
                    <a href="#">Ипподром</a>
                </li>
            </ul>
            <div className="tabs__block">
                {/*<TableAirdrop />*/}

                <div className="tabs__item tabs__item_active">
                    <big>Нет данных</big>
                </div>

                <div className="tabs__item tabs__item-fight">
                    <div className="table">
                        <div className="thead">
                            <div className="tr">
                                <div className="td">Дата</div>
                                <div className="td">Соперник</div>
                                <div className="td">Ставка</div>
                                <div className="td">Банк</div>
                                <div className="td">Исход</div>
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
                                                        <NavLink to={session?.id !== item.fight_players?.filter(item => item?.user?.id !== person_id?.id)[0].user.id ? "/user/"+item.fight_players?.filter(item => item?.user?.id !== person_id?.id)[0].user.id : "/profile"}>
                                                            <img src={item.fight_players?.filter(item => item?.user?.id !== person_id?.id)[0].user.avatar} alt=""/>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="td">
                                            <div className="td__coins">
                                                <img src="../images/header__coins.svg" alt="Ico"/>
                                                <span>
                                            {item.fight_players?.filter(item => item?.user?.id !== person_id?.id)[0].coins}
                                        </span>
                                            </div>
                                        </div>

                                        <div className="td">
                                            <div className="td__coins">
                                                <img src="../images/header__coins.svg" alt="Ico"/>
                                                <span>
                                                    {item.fight_players?.filter(item => item?.user?.id !== person_id?.id)[0].coins * 2}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="td">
                                            {
                                                item.winner.user.id === person_id?.id ? <img src="../images/victory.svg" alt="Shield" /> : <img src="../images/fail.svg" alt="Shield" />
                                            }
                                        </div>

                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className="tabs__item">
                    <big>Нет данных</big>
                </div>
                <div className="tabs__item">
                    <big>Нет данных</big>
                </div>
            </div>
        </div>
    );
};

export default Table;