import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const TableTdUsers = ({infoItem}) => {

    const listPlayers = infoItem.players.map((item, itemNum) => {
        if (item[itemNum + 1]) {
            return (<li key={itemNum + 1}>
                <Link to={"/user"+infoItem.players[0][1]}>
                    <img src={item[itemNum + 1]} alt="User"/>
                </Link>
            </li>)
        }
    })

    const countsPhotos = 3
    useEffect(() => {
        if (document.querySelectorAll('.list-players')[0]) {
            document.querySelectorAll('.list-players').forEach(list => {
                for (let i = 0; i <= list.querySelectorAll('li').length; i++) {
                    let a = i - countsPhotos
                    if (i >= countsPhotos && list.querySelectorAll('li')[i]) {
                        list.querySelectorAll('li')[i].style.display = 'none';

                        list.querySelector('.count').classList.add('count_active')
                        list.querySelector('.count').innerHTML = "+" + a
                    }
                }
            })
        }
    })


    return (

    );
};

export default TableTdUsers;