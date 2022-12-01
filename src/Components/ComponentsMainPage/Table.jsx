import React, {useEffect} from 'react';
import TableAirdropItem from "./TableAirdropItem";
import TableAirdrop from "./TableAirdrop";
import TableFight from "./TableFight";

const Table = () => {

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
                <TableAirdrop />
                <TableFight />
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